<template>
    <div class="order_pay">
        <div class="order_pay_content">			
            <h3>已下单的菜</h3>
            
            <div class="order_pay_detail">
                <div class="d_num">
                    桌号:001
                </div>
                <div class="p_num">
                    人数:2
                </div>
                <div class="order_time">
                    下单时间:6:25
                </div>
            </div>

            <div class="order_pay_info">
                <div class="price_list">
                    应付金额：<span class="price">¥60</span>
                </div>
                
                <div class="pay_button">
                    立即付款
                </div>
            </div>

            <!--订单列表-->
            <div class="order_list">
	       		<h3>菜品详情:</h3>
	       		<ul class="list">
	       			<li>
	       				<div class="title">烧茄子</div>		
       					<div class="num">1份</div>
       					<div class="price">12元</div>
	       			</li>
	       			
	       			<li>
	       				<div class="title">烧茄子</div>
       					<div class="num">1份</div>
       					<div class="price">12元</div>
	       			</li>
	       			<li>
	       				<div class="title">手撕包菜</div>	
       					<div class="num">1份</div>
       					<div class="price">12元</div>
	       			</li>	
	       		</ul>
	        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .order_pay { 
        .order_pay_content {
            background: #fff;
            border-radius: 0.2rem;
            
            > h3 {
                padding: 0.2rem 0 0.2rem 0;
                font-size: 0.6rem;
                text-align: center; 
            }
            
            .order_pay_detail {
                display: flex;
                line-height: 2;
                border-bottom: 1px solid #eee;
                padding: 0.2rem;
                
                .d_num, .p_num, .order_time {
                    flex:1;
                }
            }
            
            .order_pay_info {
                line-height: 2;
                display: flex;
                margin: 0.4rem 0;
                padding: 0.2rem 0.2rem 0.4rem 0.2rem;
                
                .price_list {
                    flex: 1;
                    
                    .price {
                        font-size: 0.6rem;
                        color: red;
                    }
                }
                
                .pay_button {
                    width: 3rem;
                    border-radius: 0.15rem;
                    background-color: red;
                    color: #fff;
                    text-align: center;
                    height: 1rem;
                    line-height: 1rem;
                    position: relative;
                    top: 0.2rem
                }
            }
        
            .order_list {
                background-color: #FFFFFF;
                border-radius: 0.2rem;
                margin-top: 0.2rem;
                padding: 0.2rem;

                > h3 {       
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
        }
    }
</style>
