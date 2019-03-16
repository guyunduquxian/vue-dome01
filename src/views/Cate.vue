<template>
    <div class="cate">
        <div class="back">
            <router-link to="/home">返回</router-link>
        </div>

		<div class="cate_content">		
			<div class="info">				
				<img src="../assets/images/product.jpg"/>				
				<h2>小炒肉</h2>				
				<p class="price">22.00/份</p>
			</div>
			<div class="detial">
				<h3>商品详情</h3>
				<div class="content"> 
					<img src="../assets/images/product.jpg"/>
					<p>韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排</p>
				</div>
			</div>
		</div>
		
		<footer class="cate_footer">
			<div class="cart">				
				<strong>数量:</strong>
				<div class="cart_num">
		          <div class="input_left">-</div>
		          <div class="input_center">
		              <input type="text" value="1" readonly="readonly"/>
		          </div>
		          <div class="input_right">+</div>				      
		        </div>	

                <span class="addcart">加入购物车</span>									
			</div>	
		</footer>	
    </div>
</template>


<script>
    export default {
        data () {
            return {
                  
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
            font-size: 0.24rem;
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

    .cate_footer { 
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
    
}
</style>