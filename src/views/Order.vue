<template>
    <div class="order">
        <div class="order_content">			
		 	<div class="info">
	       		<div class="info_top">
	       			<img src="../assets/images/timer.png" />	       		       		      			
	       			<div class="info_right">
	       				<h2>{{ deskId }}号桌待门店接单</h2>
	       				<p>请及时联系服务员确认所点菜品信息!</p>
	       			</div>	 
	       		</div>	
       			<h3>已点菜品{{ order.total_num || 0 }}份,合计 : <span class="price">{{ order.total_price || 0 }}元</span> </h3>     		       	
	        </div>

            <!--订单列表-->
            <div class="order_list" v-if="showOrder">
	       		<h3>菜品详情:</h3>
	       		<ul class="list">
	       			<li v-for="(item, index) in order.items" :key="index">
	       				<div class="title">{{ item.title }}</div>		
       					<div class="num">{{ item.num }}份</div>
       					<div class="price">{{ item.price }}元</div>
	       			</li>
	       		</ul>
	        </div>

            <div class="doPay" @click="doPay" v-if="showOrder">
                <img src="../assets/images/doorder.png"/>
                <p>立即支付</p>
            </div>
        </div>
        <div class="order_empty" v-if="!showOrder">您还没有下过订单</div>

        <v-navFooter></v-navFooter>
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
            order: {},
            showOrder: false,
            deskId: this.$storage.get("deskId"),
        }
    },
    created() {
        this.$axios.get("api/getOrder?uid="+ this.deskId)
        .then( res => {
            // console.log(res.data.result);
            this.order = res.data.result[0];
            if(order) {
                this.showOrder = true;
            }
        })
        .catch( error => {
            console.log(error);
            this.showOrder = false;
        });
    },
    methods: {
        doPay() {        
            this.$axios.post("api/doPay", {
                uid: this.deskId,
                total_price: this.order.total_price,
                total_num: this.order.total_num,
                return_url: this.$config.return_url   //支付成功后跳转的页面
            })
            .then( res => {
                // console.log(res.data);
                location.href = res.data.result.data;
            })
            .catch( error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .order {
        .order_content {
            padding: 0.2rem;

            .info {
                background-color: #fff;
                border-radius: 0.2rem;

                .info_top {
                    display: flex;
                    align-items: center;
                    padding-top: 0.2rem;

                    img {
                        width: 2rem;
                        height: 2rem;
                    }

                    .info_right {
                        flex: 1;
                    }
                } 

                h3 {
                    line-height: 2;
                    padding: 0.2rem;
                    
                    .price{
                        font-size: 0.6rem;                     
                        color: red;
                    }
                }
            }

            .order_list {
                background: #FFFFFF;
                border-radius: 0.2rem;
                margin-top: 0.2rem;
                padding: 0.2rem;

                h3 {       
                    line-height: 2;
                }

                .list {
  
                    > li {
                        display: flex;
                        line-height: 2;
                        padding: 0.2rem 0;
                        
                        .title {
                            flex: 2;
                        }
                        
                        .num {
                            flex: 1;
                            text-align: center;
                        }
                        
                        .price {
                            flex: 1;
                            text-align: center;
                        }
                    }
                }
            }

            .doPay {
                position: fixed;
                left: 50%;
                bottom: 0.2rem;
                transform: translate(-50%);
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                background-color: red;
                text-align: center; 

                img {
                    width: 0.7rem;
                    vertical-align: top;
                    margin-top: 0.1rem;
                }

                p {
                    color: #fff;
                    font-size: 0.36rem;
                    margin-top: -0.1rem;
                }
            }
        }

        .order_empty {
            text-align: center;
            font-size: 0.48rem;
            margin-top: 0.5rem;
        }
    }
</style>
