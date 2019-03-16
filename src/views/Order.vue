<template>
    <div class="order">
        <div class="order_content">			
		 	<div class="info">
	       		<div class="info_top">
	       			<img src="../assets/images/timer.png" />	       		       		      			
	       			<div class="info_right">
	       				<h2>118号桌待门店接单</h2>
	       				<p>请及时联系服务员确认所点菜品信息!</p>
	       			</div>	 
	       		</div>	
       			<h3>已点菜品6份,合计 : <span class="price">60元</span> </h3>     		       	
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
        }
    }
</style>
