<template>
    <div class="cart">
        <div class="cart_content">
			<div class="cart_info">
				<h2>购物车</h2>				
				<div class="p_number">
					<div class="p_number_left">
	       				<p>用餐人数:2人</p>
	       				<p>备注:无</p>
	       			</div>	       			
	       			<div class="p_number_right">
	       				<img src="../assets/images/edit.png"/>
	       				<p>修改</p>
	       			</div>					
				</div>
				<div class="cart_p_num">	
					<p>购物车中总共有6个菜</p>
	       			<p>合计：<span class="price">¥58</span></p>
				</div>
			</div>

            <div class="cart_list">
				<ul>
					<li class="item">
                        <div class="left_food">
                            <img src="../assets/images/1.jpg"/>       						
                            <div class="food_info">
                                <p>老干妈炒肥肠</p>
                                <p class="price">¥48</p>
                            </div>                         
                        </div>
	       						
                        <div class="right_cart">
                            <div class="cart_num">
                                <div class="input_left">-</div>
                                <div class="input_center">
                                    <input type="text"  readonly="readonly" value="1" name="num" id="num" />
                                </div>
                                <div class="input_right">+</div>				      
                            </div>	
                        </div>	
					</li>
                    <li class="item">
                        <div class="left_food">
                            <img src="../assets/images/1.jpg"/>       						
                            <div class="food_info">
                                <p>老干妈炒肥肠</p>
                                <p class="price">¥48</p>
                            </div>                         
                        </div>
	       						
                        <div class="right_cart">
                            <div class="cart_num">
                                <div class="input_left">-</div>
                                <div class="input_center">
                                    <input type="text"  readonly="readonly" value="1" name="num" id="num" />
                                </div>
                                <div class="input_right">+</div>				      
                            </div>	
                        </div>	
					</li>
                    <li class="item">
                        <div class="left_food">
                            <img src="../assets/images/1.jpg"/>       						
                            <div class="food_info">
                                <p>老干妈炒肥肠老干妈炒肥肠</p>
                                <p class="price">¥48</p>
                            </div>                         
                        </div>
	       						
                        <div class="right_cart">
                            <div class="cart_num">
                                <div class="input_left">-</div>
                                <div class="input_center">
                                    <input type="text" readonly="readonly" value="1" />
                                </div>
                                <div class="input_right">+</div>				      
                            </div>	
                        </div>	
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
    .cart {
        .cart_content {
            padding: 0.2rem;

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
        }
    }
</style>
