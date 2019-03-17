<template>
    <div class="cart">
        <div class="cart_content">
			<div class="cart_info">
				<h2>购物车</h2>				
				<div class="p_number">
					<div class="p_number_left">
	       				<p>用餐人数: {{ peopleList.p_num }} </p>
	       				<p>备注: {{ peopleList.p_mark }}</p>
	       			</div>	       			
	       			<div class="p_number_right" @click="modify">
	       				<img src="../assets/images/edit.png"/>
	       				<p>修改</p>
	       			</div>					
				</div>
				<div class="cart_p_num">	
					<p>购物车中总共有 {{ totalNum }} 个菜</p>
	       			<p>合计：<span class="price">¥ {{ totalPrice }}</span></p>
				</div>
			</div>

            <div class="cart_list" v-show="showCartList">
				<ul>
					<li class="item" v-for="(item, index) in cartFoods" :key="index">
                        <div class="left_food">
                            <img :src="api+item.img_url"/>       						
                            <div class="food_info">
                                <p>{{ item.title }}</p>
                                <p class="price">¥ {{ item.price }}</p>
                            </div>                         
                        </div>
	       						
                        <div class="right_cart">
                            <div class="cart_num">
                                <div class="input_left" @click="decNum(item, index)">-</div>
                                <div class="input_center">
                                    <input type="text" readonly="readonly" :value="item.num" />
                                </div>
                                <div class="input_right" @click="addNum(item)">+</div>				      
                            </div>	
                        </div>	
					</li>
                  
				</ul>
			</div>

            <div v-show="!totalNum" class="cart_empty">您的购物车空空的，点击菜单开始点菜</div>
        </div>
		
		<div class="cart_order" @click="addOrder" v-show="showCartList">
			<img src="../assets/images/doorder.png"/>
			<p>下单</p>
		</div>

        <v-navFooter :totalNum="totalNum"></v-navFooter>
    </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue';

export default {
    components: {
        'v-navFooter': NavFooter
    },
    data() {
        return {
            api: this.$config.api,
            cartFoods: [],
            peopleList: {},
            totalNum: 0,
            totalPrice: 0
        }
    },
    computed: {
        showCartList() {
            if (this.cartFoods.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    created() {
        /*获取商品信息*/
        let uid = this.$storage.get("roomid");
        this.$axios.get("api/cartlist?uid="+ uid)
            .then( res => {
                // console.log(res.data);
                this.cartFoods = res.data.result;
                this.getTotalResult();
            })
            .catch( error => {
                console.log(error);
            });

        // 获取用餐人信息 
        this.$axios.get("api/peopleInfoList?uid="+ uid)
            .then( res => {
                // console.log(res.data);
                this.peopleList = res.data.result[0];
            })
            .catch( error => {
                console.log(error);
            });
    },
    methods: {
        getTotalResult() {
            /*计算总数量、总价格*/
            this.totalNum = 0;
            this.totalPrice = 0;
            this.cartFoods.forEach( element => {
                this.totalNum += element.num;
                this.totalPrice += element.price * element.num;
            })
        },
        addNum(item) {
            //请求远程服务器执行更新操作
            let uid = this.$storage.get("roomid");
            let product_id = item.product_id;
            let num = item.num;
            let api = 'api/incCart?uid='+ uid +'&product_id='+ product_id +'&num='+ num;
            this.$axios.get(api)
            .then( res => {
                // console.log(res.data);
                this.getTotalResult();
            })
            .catch( error => {
                console.log(error);
            });

            item.num++;
        },
        decNum(item, i) {
            //请求远程服务器执行更新操作
            let uid = this.$storage.get("roomid");
            let product_id = item.product_id;
            let num = item.num;
            let api = 'api/decCart?uid='+ uid +'&product_id='+ product_id +'&num='+ num;
            this.$axios.get(api)
            .then( res => {
                // console.log(res.data);
                this.getTotalResult();
            })
            .catch( error => {
                console.log(error);
            });

            if(item.num === 1) {
                //删除当前购物车的这个商品
                this.cartFoods.splice(i, 1);
            } else {
                item.num--;
            }
        },
        modify() {
            this.$router.push({
                path: '/editPeopleInfo'
            })
        },
        addOrder() {
            let uid = this.$storage.get("roomid");
            let order = JSON.stringify(this.cartFoods);  /*数组   把json对象转化成json字符串*/
            this.$axios.post("api/addOrder", {
                uid,
                p_num: this.peopleList.p_num,
                p_mark: this.peopleList.p_mark,
                total_price: this.totalPrice,
                total_num: this.totalNum,
                order 
            })
            .then( res => {
                // console.log(res.data);
                if(res.data.success === 'true' ) {
                    console.log(res.data.msg);
                    this.$router.push({
                        path: '/order'
                    });
                }
            })
            .catch( error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart {
        .cart_content {
            padding: 0.2rem;
            margin-bottom: 1.5rem;

            .cart_info {
                background-color: #fff;
                border-radius: 0.2rem;
                padding: 0.2rem;

                h2 {
                    text-align: center;
                    font-size: 0.64rem;
                    padding: 0.2rem 0;
                    border-bottom: 1px solid #eee;
                }

                .p_number {
                    display: flex; 
                    padding: 0.2rem 0;
                    border-bottom: 1px solid #eee;
            
                    .p_number_left {                        
                        flex: 1;

                        p{
                            line-height: 2;
                            
                            &:first-child {
                                color: red;
                            }
                        }
                    }

                    .p_number_right {
                        width: 1rem;
                        height: 1.5rem;
                        text-align: center;
                        
                        img{  
                            width: 0.7rem;
                            height: 0.7rem;
                            margin: 0 auto;
                        }
                    }
                }

                .cart_p_num {
                    border-bottom: 1px solid #eee;
                    padding-top: 0.2rem;

                    p {
                        line-height: 2;
                        
                        .price {     
                            font-size: 0.8rem;
                            color:red;
                        }
                    }
                }
            }

            .cart_list {
                margin-top: 0.2rem;  
                padding: 0.2rem;                
                background: #fff;               
                border-radius: 0.2rem;                
                
                ul {
                    width: 100%;
                    
                    .item {
                        display: flex;
                        align-items: center;
                        width: 100%;                           
                        border-bottom: 1px solid #eee;                            
                        padding: 0.2rem 0;
                        
                        .left_food {
                            flex: 1;                                
                            display: flex;                       
                            
                            img {
                                width: 1rem;
                                height: 1rem;
                                border-radius: 0.2rem;
                                margin-right: 0.4rem;                                                           
                            }
                            
                            .food_info {                                   
                                flex: 1;
                            }                              
                        }
                        
                        .right_cart {                               

                            .cart_num {
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
                        }
                    }
                }   
            }

            .cart_empty {
                text-align: center;
                line-height: 3;
                font-size: 0.40rem;
            }
        }

        .cart_order {
            position: fixed;
            left: 50%;
            bottom: 0.2rem;
            transform: translate(-50%);
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: red;
            text-align: center; 

            img {
                width: 0.6rem;
                vertical-align: top;
                margin-top: 0.1rem;
            }

            p {
                color: #fff;
                font-size: 0.36rem;
            }
        }
    }
</style>
