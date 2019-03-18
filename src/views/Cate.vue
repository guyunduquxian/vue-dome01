<template>
    <div class="cate">
        <div class="back">
            <router-link to="/home">返回</router-link>
        </div>

		<div class="cate_content">		
			<div class="info">				
				<img :src="api+cate.img_url"/>				
				<h2>{{ cate.title }}</h2>				
				<p class="price"> {{ cate.price }} 元/份</p>
			</div>
			<div class="detial">
				<h3>商品详情</h3>
				<div class="content"> 
                    {{ cate.content }}
				</div>
			</div>
		</div>
		
		<div class="cate_cart">
			<div class="cart">				
				<strong>数量:</strong>
				<div class="cart_num">
		          <div class="input_left" @click="decNum">-</div>
		          <div class="input_center">
		              <input type="text" :value="num" readonly="readonly"/>
		          </div>
		          <div class="input_right" @click="addNum">+</div>				      
		        </div>	

                <span class="addcart" @click="addCart">加入购物车</span>									
			</div>	
		</div>	

        <div class="toast" v-show="addSuccess">
            <div class="icon"><i class="iconfont icon-gou"></i></div>
            <p> 添加成功，在购物车等待 </p>
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                api: this.$config.api,
                cate: {},
                num: 1,
                addSuccess: false
            }
        },
        created() {
            let id = this.$route.query.id;
            // console.log(id);
            this.$axios.get("api/productcontent?id="+ id)
            .then( res => {
                // console.log(res.data);
                this.cate = res.data.result[0];
            })
            .catch( error => {
                console.log(error);
            });
        },
        methods: {
            addCart() {
                let deskId = this.$storage.get("deskId");
                this.$axios.post("api/addcart", {
                    uid: deskId,
                    title: this.cate.title,
                    price: this.cate.price,
                    num: this.num,
                    product_id: this.cate._id,
                    img_url: this.cate.img_url
                })
                .then( res => {
                    // console.log(res.data);
                    if(res.data.success === 'true') {
                        this.addSuccess = true;
                        let that = this;
                        setTimeout( function() {
                            that.addSuccess = false;
                        },2000);
                    }
                })
                .catch( error => {
                    console.log(error);
                });
            },
            addNum() {
                this.num++
            },
            decNum() {
                if(this.num > 1) {
                    this.num--
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.cate {
    .back { 
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-radius: 50%;
        background: #000;
        position: fixed;
        top: 0.2rem;
        left: 0.2rem;

        a {
            display: block;
            font-size: 0.28rem;
            color: #fff;

            &::before {
                content: "";
                display: block;
                width: 0.2rem;
                height: 0.2rem;
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                float: left;
                position: relative;
                top: 0.5rem;
                left: 0.2rem;
                transform: rotate(45deg);
                margin-right: 0.2rem;
            }
        }
    }

    .cate_content {
        padding-bottom: 1.5rem;

        .info {
            background: #fff;    

            img {
                width: 100%;   
            } 
            
            h2 {
                padding: 0.2rem 0.4rem;
            } 
            
            .price {        
                padding: 0.1rem 0.4rem;
                color: red;
            }
        }
        
        .detial {
            background: #fff;
            margin-top: 0.2rem;
            
            h3 {
                padding: 0.2rem;
            }
            
            .content {
                padding: 0 0.1rem;
                
                img {
                    display: block;
                    max-width: 100%;
                    margin: 0 auto 0.1rem;
                }
            }
        }  
    }

    .cate_cart { 
        position: fixed;  
        bottom: 0px;  
        height: 1.5rem;
        line-height: 1.5rem;  
        background: #fff;
        left: 0px;
        width: 100%;
        border-top: 1px solid #eee;

        .cart {   
            display: flex;
            align-items: center;

            strong { 
                font-size: 0.42rem; 
                padding: 0 0.2rem;
            }

            .cart_num {
                flex: 1;
                display: flex;
                
                .input_left, .input_right {
                    width: 0.7rem;
                    height: 0.7rem;
                    line-height: 0.7rem;
                    border: 1px solid #ccc;
                    text-align: center;
                    font-size: 0.6rem;
                    color: red;
                }    
                .input_center {
                    height: 0.7rem;
                    line-height: 0.7rem;

                    input {
                        outline: none;
                        border: none;
                        width: 0.7rem;
                        height: 0.7rem;
                        line-height: 0.7rem;
                        border: 1px solid #ccc;
                        text-align: center;
                        font-size: 0.32rem;
                    }
                }

            }
        
            .addcart { 
                background-color: red;
                color: #fff;
                height: 0.8rem;
                line-height: 0.8rem;
                border-radius: 0.1rem;
                border: 1px solid #ccc;
                margin-right: 0.5rem;
                padding: 0.02rem 0.2rem;
            } 
        }
    }
    
    .toast {
        width: 4rem;
        height: 1.6rem;
        background-color: rgba(92, 88, 88, 0.8);
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
        }
    }
}
</style>