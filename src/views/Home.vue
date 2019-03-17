<template>
  <div class="home">
    <header class="home_header">
        <div class="item">
          <img src="../assets/images/rexiao.png"/>
          <p>热销榜</p>				
        </div>
        <div class="item">
          <img src="../assets/images/caidan.png" />
          <p>点过的菜</p>				
        </div>
        <div class="item">
          <img src="../assets/images/sousuo.png"/>
          <p>搜你喜欢</p>				
        </div>
    </header>
    
    <aside class="left_cate" ref="leftCate">
        <ul class="cate_list">
          <li v-for="(item, index) in menus" :key="index" @click="changeScroll(index)">{{ item.title }}</li>
        </ul>

        <div class="nav_cate" @click="asideDomInit">
          <img src="../assets/images/nav.png"/>
          <p>菜单</p>
        </div>
    </aside>
    <div class="bg" @click="hideLeftCate()" v-show="leftCateShow"></div>
    
    <ul class="foods">
      <li class="foods_classify" ref="foodsClassify" v-for="(group, groupIndex) in menus" :key="groupIndex">
        <h3 class="classify_name">{{ group.title }}</h3>
        <ul class="classify_list">
          <li class="item" v-for="(item, index) in group.list" :key="index">	
            <div class="inner">
              <router-link :to="'/cate?id=' + item._id">
                <img :src="api+item.img_url" />
                <p class="title">{{ item.title }}</p>						
                <p class="price">¥ {{ item.price }}</p>
              </router-link>	
            </div>							
          </li>
          
        </ul>
      </li> 
     
    </ul>

    <v-navFooter></v-navFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue';

export default {
  name: "home",
  components: {
    'v-navFooter': NavFooter
  },
  data() {
      return {
          leftCateShow: false,
          menus: [],
          api: this.$config.api
      }
  },
  created() {
      this.$axios.get("api/productlist")
        .then( res => {
            // console.log(res.data.result);
            this.menus = res.data.result;
        })
        .catch( error => {
            console.log(error);
        });
  },
  methods: {
    asideDomInit() {
        if(this.leftCateShow) {
            this.$refs.leftCate.style.transform = "translate(-100%,0)";
        } else {
            this.$refs.leftCate.style.transform = "translate(0,0)";
        }
        this.leftCateShow = !this.leftCateShow;
    },
    changeScroll(i) {
        // console.log(i);
        // console.log(this.$refs.foodsClassify[i].offsetTop);

        //获取要每一组食物距离屏幕顶部的距离
        let height = this.$refs.foodsClassify[i].offsetTop;
        console.log(height);
        //屏幕已经滚动的距离
        let distance = document.documentElement.scrollTop;;  
        console.log(distance);
        //屏幕最大能往上滚动的距离，即所有内容的高度减去屏幕的高度
        let maxheight = document.documentElement.offsetHeight - window.screen.height;
        // console.log(maxheight);
        //每一次滚动的距离
        let step;
        if(distance < height) {
            //计算每一次滚动的距离  //滚动的时间500ms，每5ms滚动一次，需100次
            if (height > maxheight) {
                height = maxheight;
            }
            let newHeight = height - distance;
            step = newHeight / 50;
            smoothUp();
        } 
        else if(distance > height) {
            //计算每一次滚动的距离
            let newHeight = distance - height;
            step = newHeight / 50;
            smoothDown();
        }
        //向上滚动
        function smoothUp() {
          if (distance < height) {
              distance += step;
              document.documentElement.scrollTop = distance;
              setTimeout(smoothUp, 5);
          }
          else {
              document.documentElement.scrollTop = height;
          }
        }
        //向下滚动
        function smoothDown() {
          if (distance > height) {
              distance -= step;
              document.documentElement.scrollTop = distance;
              setTimeout(smoothDown, 5);
          }
          else {
              document.documentElement.scrollTop = height;
          }
        }

        this.asideDomInit();
    },
    hideLeftCate(e) {
        this.asideDomInit();
    }
  }
}
</script>

<style lang="scss" scoped>
    .home {
        .home_header {
            height: 1.6rem;
            margin: 0.1rem;
            border-radius: 0.2rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;

            .item {
                flex: 1;
                text-align: center;
                border-right: 1px solid #ccc; 

                img{
                    width: 1rem;
                    height: 1rem;
                }

                &:last-child {
                  border-right: none;
                }
            }
        }

        .foods {
            .foods_classify {
                
                .classify_name {
                    text-align: center;
                    padding: 0.1rem 0;
                }

                .classify_list {
                    display: flex;
                    flex-wrap: wrap;

                    .item {
                        width: 33.33%;
                        box-sizing: border-box;
                        padding: 0.2rem 0.1rem;

                        .inner {
                            height: 3.8rem;
                            background-color: #fff;
                            border-radius: 0.2rem;
                            overflow: hidden; 

                            > a {
                                display: block;
                                color: #000;

                                img {
                                    width: 100%;
                                    height: 2.3rem;
                                }
                                p {                                   
                                    padding: 0.1rem 0.2rem;                                  
                                }                               
                                .title{
                                    font-weight: bold;
                                    font-size: 0.28rem;
                                }
                            }
                        }
                    }
                }
            }
        }

        /*侧边栏*/
        .left_cate {
            width: 2rem;
            height: 100%;
            position: fixed;
            background: #eee;
            top: 0px;
            left: 0px;
            transition: all 1s;
            transform: translate(-100%,0);
            z-index: 2;

            .cate_list {
                position: absolute;                
                height: 100%;
                padding: 0.2rem;
                z-index: 3;
                background: #eee;

                li{    
                    line-height: 1.5rem;
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                }
            }

            .nav_cate{
                position: absolute;
                right: -1.4rem;
                background: rgba(132, 128, 128, 0.7);
                top: 42%;
                width: 1.4rem;
                height: 1.5rem;
                border-radius: 0rem 50% 50% 0rem;
                z-index: 2;

                img {
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-top: 0.1rem;
                    margin-left: 0.2rem;
                }

                p {
                    color: #fff;
                    margin-top: -0.1rem;
                    margin-left: 0.3rem;
                }
            }
        }

        /*透明层*/
        .bg {
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(132, 128, 128, 0.4);
            left: 0px;
            top:0px;
            z-index: 1;
        }
    }
</style>

