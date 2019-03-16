<template>
    <div class="hot">
        <header class="hot_header">
			<div class="title">
				本店热销榜
			</div>			
		</header>
		
		<div class="hot_content">			
			<ul class="item_list clearfix">
				<li>
					<img class="item_img" src="../assets/images/1.jpg" />
					<div class="inner">
						<h3 class="title">大蒜腊肉</h3>							
						<p class="price">¥26</p>							
						<span>已售:351份</span>
					</div>
				</li>
				<li>
					<img class="item_img" src="../assets/images/2.jpg" />
					<div class="inner">
						<h3 class="title">大蒜腊肉</h3>							
						<p class="price">¥26</p>							
						<span>已售:351份</span>
					</div>
				</li>
				<li>
					<img class="item_img" src="../assets/images/3.jpg" />
					<div class="inner">
						<h3 class="title">大蒜腊肉</h3>							
						<p class="price">¥26</p>							
						<span>已售:351份</span>
					</div>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .hot {
        .hot_header {
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            
            .title {
                font-size: 0.52rem;
            }
        }

        .hot_content {
            background:#fff;
            
            .item_list {
                padding: 0 0.2rem;
                
                li {
                    display: flex;
                    border-bottom: 1px solid #EEE;
                    padding: 0.2rem 0;

                    img {
                        width: 2rem;
                        height: 2rem;
                    }
                    
                    .inner {
                        flex: 1;
                        padding-left: 0.4rem;

                        .price {
                            color: red;
                        }
                    }
                }
            } 
        }
    }
</style>
