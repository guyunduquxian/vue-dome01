<template>
    <div class="start">
      <div class="start_content">
          <header class="start_header">
              <img src="../assets/images/canju.png" alt="">欢迎用餐
          </header>

          <div class="desk_num">
              <div class="desk_inpput">
                <input type="text" ref="markInput" @change="changeInput" v-model='deskId' placeholder="请输入您的餐桌号，如 A10"/>
                <i class="iconfont icon-shanchu" v-show="deskDelShow" @click="deskClear"></i>
              </div>
                <div class="hint">
                    <span v-show="showHint">* 您还未输入餐桌号</span>
                </div>
          </div>

          <p class="notice">请选择真确的用餐人数，小二马上给您送餐具</p>
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
                <i class="iconfont icon-shanchu" v-show="delShow" @click="clear"></i>
          </div>

          <ul class="mark_list">
            <li v-for="(item, index) in mark_list" :key="index" @click="selectMark($event, index)">{{ item }}</li>
          </ul>

          <div class="start_order" @click="addPeopleInfo()">开始点餐</div>
      </div>

        <div class="toast" v-show="showToast">
            <div class="icon"><i class="iconfont icon-gou"></i></div>
            <p> 本桌已有人在点餐，直接进入点餐页面 </p>
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
            deskId: "",
            showToast: false,
            showHint: false
        }
    },
    computed: {
        delShow() {
            return this.p_mark ? true : false;
        },
        deskDelShow() {
            return this.deskId ? true : false;
        }
    },
    created() {
        
    },
    methods: {
        addPeopleInfo() {
            if (this.deskId) {
                this.p_mark = this.p_mark.trim();
                this.$axios.post("api/addPeopleInfo", {
                    uid: this.deskId,
                    p_num: this.p_num,
                    p_mark: this.p_mark
                })
                .then( res => {
                    console.log(res.data.msg);
                    this.$storage.set('deskId', this.deskId);
                    this.$router.push({
                        path: '/home'
                    });
                })
                .catch( error => {
                    console.log(error);
                });
            } else {
                this.showHint = true;
                this.$refs.markInput.focus();
            }
            
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
        changeInput() {
            // console.log(this.deskId);
            if (this.deskId) {
                this.$axios.get("api/peopleInfoList?uid="+ this.deskId)
                .then( res => {
                    // console.log(res.data);
                    //如果有用餐人数信息直接跳转到 点餐页面
                    if(res.data.result.length > 0) {
                        this.showToast = true;
                        setTimeout( () => {
                            this.showToast = false;
                            this.$router.push({
                                path: '/home'
                            });
                        }, 2000)
                    }
                })
                .catch( error => {
                    console.log(error);
                });
            }
        },
        deskClear() {
            this.deskId = "";
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
                width: 3rem;
                margin: 0.3rem auto 0; 
                border-radius: 0.1rem;
                color: #fff;

                img { 
                    width: 0.5rem;
                    position: relative;
                    top: 0.15rem;
                    margin-left: 0.5rem;
                    margin-right: 0.2rem;
                }
            }

            .desk_num {
                width: 6rem;
                margin: 0.3rem auto 0;
                
                .desk_inpput {
                    position: relative;
                    height: 0.8rem;

                    input {
                        display: block;
                        width: 6rem;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        border: 1px solid #eee;
                        padding-left: 0.2rem;
                        padding-right: 0.8rem;
                        font-size: 0.32rem;
                        border: 1px solid #eee;
                        box-sizing: border-box;
                        margin: 0 auto;
                    }

                    i {
                        position: absolute;
                        top: 50%;
                        right: 0.1rem;
                        transform: translate(0, -50%);
                        font-size: 0.44rem;
                    }
                }

                .hint {
                    height: 0.5rem;
                    margin-left: 0.2rem;

                    span {
                        color: red;
                    }
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
                margin: 0.2rem 0.2rem;
                position: relative;

                input {
                    width: 100%;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    border: 1px solid #eee;
                    padding-left: 0.2rem;
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

            .start_order {
                width: 1.6rem;
                height: 1.6rem;
                line-height: 1.6rem;
                border-radius: 50%;
                background-color: red;
                margin: 0.2rem auto 0;
                text-align: center;
                color: #fff;
            }
        }

        .toast {
            width: 4rem;
            height: 1.8rem;
            background-color: rgba(92, 88, 88, 0.9);
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            border-radius: 0.2rem;

            .icon-gou {
                color: red;
                font-size: 0.64rem;
            }

            p {
                color: #fff;
                font-size: 0.28rem;
                margin-top: -0.1rem;
                padding: 0 0.1rem;
            }
        }
    }
</style>
