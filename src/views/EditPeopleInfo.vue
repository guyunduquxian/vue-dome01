<template>
  <div class="start">
      <div class="start_content">
          <header class="start_header">
              <img src="../assets/images/canju.png" alt="">修改用餐设置
          </header>

          <p class="notice">请选择正确的用餐人数</p>
          <ul class="user_list">
              <li v-for="(item, index) in pNumArr" :key="index" 
                :class="{ active: currentIndex === index }"
                @click="selectNum(index)"
                > 
                  {{ item }}人 
              </li>
          </ul>

          <div class="mark_input">
                <input type="text" v-model='p_mark' placeholder="请输入您的口味要求，忌口等（可不填）"/>
                <i class="iconfont icon-shanchu" v-show="iconShow" @click="clear"></i>
          </div>

          <ul class="mark_list">
            <li v-for="(item, index) in mark_list" :key="index" @click="selectMark($event, index)">{{ item }}</li>
          </ul>
          
          <div class="start_btns">
               <div class="start_cancel" @click="back">取消</div>
               <div class="start_ok" @click="addPeopleInfo()">确定修改</div>
          </div>
         
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pNumArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            currentIndex: 0,
            p_mark: "",
            p_num: '1人',
            mark_list: ['打包带走', '不要放辣椒', '微辣', '中辣'],
            peopleList: {},
            deskId: this.$storage.get("deskId")
        }
    },
    computed: {
        iconShow() {
            return this.p_mark ? true : false;
        }
    },
    created() {
        //获取用餐人的信息
        this.$axios.get("api/peopleInfoList?uid="+ this.deskId)
            .then( res => {
                // console.log(res.data);
                this.peopleList = res.data.result[0];
                this.p_num = this.peopleList.p_num;
                this.currentIndex = parseInt(this.peopleList.p_num) - 1;
                this.p_mark = this.peopleList.p_mark;
            })
            .catch( error => {
                console.log(error);
            });
    },
    methods: {
        addPeopleInfo() {
            //添加数据到服务器
            this.p_mark = this.p_mark.trim();
            this.$axios.post("api/addPeopleInfo", {
                uid: this.deskId,
                p_num: this.p_num,
                p_mark: this.p_mark
            })
            .then( res => {
                // console.log(res.data);
                if(res.data.success === 'true' ) {
                    console.log(res.data.msg);
                    this.$router.push({
                        path: '/cart'
                    });
                }
            })
            .catch( error => {
                console.log(error);
            });
        },
        selectNum(i) {
            // console.log(i);
            this.p_num = i + 1 + "人";
            // console.log(this.p_num);
            this.currentIndex = i;
        },
        selectMark(e, i) {
            if (this.p_mark) {
                this.p_mark = this.p_mark.trim() + "， " + this.mark_list[i];
            } else {
                this.p_mark = this.mark_list[i];
            }
        },
        clear() {
            this.p_mark = "";
        },
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    .start {
        .start_content {
            .start_header {
                height: 1rem;
                line-height: 1rem;
                background-color: #000;
                width: 3.2rem;
                margin: 0.5rem auto 0; 
                border-radius: 0.1rem;
                color: #fff;

                img { 
                    width: 0.5rem;
                    position: relative;
                    top: 0.15rem;
                    margin-left: 0.3rem;
                    margin-right: 0.2rem;
                }
            }

            .notice{
                color: red;
                text-align: center;
                margin: 0.2rem 0;
            }

            .user_list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 0.2rem 0.4rem;

                > li {
                    width: 1.4rem;
                    height: 1rem;
                    line-height: 1rem;
                    border-radius: 0.2rem;
                    background-color: #fff;
                    margin: 0.1rem 0;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #ccc;

                    &.active {
                        background-color: red;                 
                        border: 1px solid red;
                        color:#fff;
                    }
                }
            }

            .mark_input {
                margin: 0.3rem 0.2rem;
                position: relative;

                input {
                    width: 100%;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    border: 1px solid #eee;
                    padding-left: 0.1rem;
                    padding-right: 0.8rem;
                    font-size: 0.32rem;
                    border: 1px solid #eee;
                    box-sizing: border-box;
                }

                i {
                    position: absolute;
                    top: 50%;
                    right: 0.1rem;
                    transform: translate(0, -50%);
                    font-size: 0.44rem;
                }
            }

            .mark_list {
                display: flex;
                flex-wrap: wrap;
                padding: 0 0.2rem;

                > li {
                    border-radius: 0.2rem;
                    background-color: #fff;
                    margin: 0.1rem;
                    padding: 0.2rem 0.3rem;
                    box-sizing: border-box;
                    border: 1px solid #ccc;

                    &.active {
                        background-color: red;                 
                        border: 1px solid red;
                        color:#fff;
                    }
                    &:active {
                        background-color: #dddddd;
                    }
                }
            }
            
            .start_btns {
                display: flex;
                justify-content: center;
                margin-top: 1rem;

                .start_cancel {
                    width: 1.6rem;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    border-radius: 50%;
                    background-color: red;
                    color: #fff;
                    text-align: center;
                    margin-right: 1rem;
                }

                .start_ok {
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 50%;
                    background-color: red;
                    color: #fff;
                    line-height: 1.6rem;
                    text-align: center;
                }
            }
        }
    }
</style>
