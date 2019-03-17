<template>
    <div class="navFooter">
        <div class="navFooter_content">
		    <div class="footer_nav" @click="flag=!flag">
			    <img src="../assets/images/navigation.png"/>
                <p>导航</p>
            </div>

            <ul class="footer_nav_list" v-show="flag" @click="hideList">                   
                <li @click.stop="toHome">
                    <img src="../assets/images/menu.png"/>
                    <p>菜单</p>
                </li>
                <li @click="toCart">
                    <img src="../assets/images/cart.png"/>
                    <p>购物车</p>  
                </li>                
                <li @click.stop="toOrder">	  
                    <img src="../assets/images/order.png"/>
                    <p>我的订单</p>
                </li>				
                <li @click.stop="toOrder_pay">	
                    <img src="../assets/images/wallet.png"/>
                    <p>结账</p>
                </li>
                <li @click.stop="flag=!flag">
                    <img src="../assets/images/close.png"/>
                    <p>返回</p>
                </li>
            </ul>

            <div class="footer_cart" @click="toCart">
                <img src="../assets/images/cart.png"/>
                <p>购物车</p>
                <span class="num" v-show="cartNum">{{ cartNum }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalNum: Number
    },
    data() {
        return {
            flag: false,
            cartNum: 0
        }
    },
    watch: {
        totalNum(newVal) {
            this.cartNum = newVal;
            // this.getTatalNum();
        }
    },
    created() {
        this.getTatalNum();
    },
    methods: {
        getTatalNum() {
            let uid = this.$storage.get("roomid");
            this.$axios.get("api/cartCount?uid="+ uid)
            .then( res => {
                // console.log(res.data);
                this.cartNum = res.data.result;
            })
            .catch( error => {
                console.log(error);
            });
        },
        hideList() {
            this.flag = !this.flag; 
        },
        toCart() {
            this.$router.push({
                path: "/cart",
            });
        },
        toHome() {
            this.$router.push({
                path: "/home"
            })
        },
        toCart() {
            this.$router.push({
                path: "/cart"
            })
        },
        toOrder() {
            this.$router.push({
                path: "/order"
            })
        },
        toOrder_pay() {
            this.$router.push({
                path: "/orderPay"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .navFooter {
        .navFooter_content {
            .footer_nav {
                height: 1.2rem;
                width: 1.2rem;
                background-color: #000;   
                color: #fff;
                position: fixed;
                bottom: 0.2rem;
                left: 0.2rem;
                text-align: center;
                border-radius: 50%;
    
                img {
                    width: 0.5rem;
                    height: 0.5rem;
                    margin-top: 0.1rem;
                }
    
                p {
                    position: relative;
                    top: -0.1rem;
                    font-size: 0.28rem;
                }
            }

            /*导航弹出层*/
            .footer_nav_list {
                width: 100%;
                height: 100%;    
                position: fixed;    
                top: 0px;
                left: 0px;    
                background: rgba(0, 0, 0, 0.6);    
                z-index: 2;
                    
                li {            
                    height: 1.2rem;
                    width: 1.2rem;
                    background-color: #000;   
                    color: #fff;
                    position: absolute;
                    left: 0.2rem;       
                    text-align: center;
                    border-radius: 50%;
                    
                    img {
                        width: 0.5rem;
                        height: 0.5rem;
                        margin-top: 0.15rem;
                    }
                    
                    p {
                        position: relative;
                        top: -0.1rem;
                        font-size: 0.24rem;
                    }
            
                    &:nth-child(1){
                        bottom: 4rem;
                        left: 0.2rem;
                    }
                    
                    &:nth-child(2){
                        bottom: 3rem;
                        left: 32%;
                        margin-left: -1rem;                
                    }
                    &:nth-child(3){
                        bottom: 1.7rem;
                        left: 32%;
                        margin-left: -0.1rem;
                    }
                    
                    &:nth-child(4){                      
                        left: 50%;
                        margin-left: -1rem;
                        bottom: 0.2rem;
                    }
                    
                    &:nth-child(5){                                     
                        bottom: 0.2rem;
                    }
                }
            }

            .footer_cart{
                height: 1.2rem;    
                width: 1.2rem;    
                background-color: red; 
                color: #fff;      
                position: fixed;                     
                bottom: 0.2rem;    
                right: 0.2rem;
                text-align: center;    
                border-radius: 50%;

                img {        
                    width: 0.5rem;
                    height: 0.5rem;
                    margin-top: 0.1rem;
                }    
                p {
                    position: relative;        
                    top: -0.1rem;
                    font-size: 0.28rem;
                }
                .num {
                    width: 0.4rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    border-radius: 50%;
                    background-color: #1381ff;
                    color: #fff;
                    font-size: 0.24rem;
                    position: absolute;
                    top: -0.05rem;
                    right: -0.05rem;
                }
            }
        }
    }
</style>
