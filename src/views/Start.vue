<template>
  <div class="start">
      <div class="start_content">
          <header class="start_header">
              <img src="../assets/images/canju.png" alt="">用餐人数
          </header>

          <p class="notice">请选择真确的用餐人数，小二马上给您送餐具</p>
          <ul class="user_list">
              <li> 1人 </li>
              <li> 2人 </li>
              <li> 3人 </li>
              <li> 4人 </li>
              <li> 5人 </li>
              <li> 6人 </li>
              <li> 7人 </li>
              <li> 8人 </li>
              <li> 9人 </li>
              <li> 10人 </li>
              <li> 11人 </li>
              <li> 12人 </li>
          </ul>

          <router-link to="/home">
              <div class="start_order">开始点餐</div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    .start {
        .start_content {
            .start_header {
                height: 1rem;
                line-height: 1rem;
                background-color: #000;
                width: 3rem;
                margin: 1rem auto 0rem auto; 
                border-radius: 0.1rem;
                color: #fff;

                img { 
                    width: 0.5rem;
                    position: relative;
                    top: 0.15rem;
                    margin-left: 0.5rem;
                    margin-right: 0.2rem;
                }
            }

            .notice{
                color: red;
                text-align: center;
                margin: 0.2rem 0;
            }

            .user_list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 0.2rem 0.4rem;

                > li {
                    width: 1.4rem;
                    height: 1rem;
                    line-height: 1rem;
                    border-radius: 0.2rem;
                    background-color: #fff;
                    margin: 0.1rem 0;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                }
            }

            .start_order {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                border-radius: 50%;
                background-color: red;
                margin: 1.5rem auto;
                text-align: center;
                color: #fff;
            }
        }
    }
</style>
