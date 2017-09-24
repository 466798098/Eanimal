<template>
  <div class="goods-list-wrapper">
    <ul class="list_libox">
      <li class="li_rela" v-for="goodsY in goodsListY">
        <div class="clearfix">
          <div class="fl_goods_li">
            <a :href="goodsY.alink">
              <img :src="`/static/img/${goodsY.imgUrl}`" alt="">
              <div></div>
            </a>
          </div>
          <div class="index-listpro">
            <a href="">
              <h1>
                <img src="" alt="">
                <span class="ft12">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</span>
              </h1>
            </a>
            <div class="Partition">

            </div>
            <div>
              <span class="cprice">
                <b class="ft12">¥</b>
                138.00
              </span>
              <s class="old_price ft12">38.12元/斤</s>
            </div>
            <div class="c999 ft12">
              <span>
                互动:23(100%好评)
              </span>
              <span class="ml5">
                售出:26
              </span>
            </div>
          </div>
        </div>
        <div class="addcart">
          <img src="/static/img/goodsListY/addcart.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
//    data(){
//      return {
//        goodsListY: [
//          {
//            alink:'',
//            imgUrl:'goodsListY/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg'
//          },
//          {
//            alink:'',
//            imgUrl:'goodsListY/37bdea23600c0baa56688a42a512f611.jpg'
//          }
//          ,
//          {
//            alink:'',
//            imgUrl:'goodsListY/e26a27030c9e729255a1e69972f86ce0.jpg'
//          }
//          ,
//          {
//            alink:'',
//            imgUrl:'goodsListY/872d9d65001d44a7cb7e86a04ccecdfb.jpg'
//          }
//          ,
//          {
//            alink:'',
//            imgUrl:'goodsListY/e43e994606cc02d6f5a6d99681d57d80.jpg'
//          },
//          {
//            alink:'',
//            imgUrl:'goodsListY/c3a4e8a1236e7e88c41570eac6a1aed1.jpg'
//          },
//          {
//            alink:'',
//            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
//          },
//          {
//            alink:'',
//            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
//          }
//        ]
//      }
//    },
    computed:{
      //切换路由时，发送ajax请求更新data,先模拟一下
      goodsListY:{
        get(){
      const goodstype=this.$route.params.goodstype
      console.log(goodstype);
      if (goodstype =='all'){
        this.a =[
          {
            alink:'',
            imgUrl:'goodsListY/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/37bdea23600c0baa56688a42a512f611.jpg'
          }
          ,
          {
            alink:'',
            imgUrl:'goodsListY/e26a27030c9e729255a1e69972f86ce0.jpg'
          }
          ,
          {
            alink:'',
            imgUrl:'goodsListY/872d9d65001d44a7cb7e86a04ccecdfb.jpg'
          }
          ,
          {
            alink:'',
            imgUrl:'goodsListY/e43e994606cc02d6f5a6d99681d57d80.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/c3a4e8a1236e7e88c41570eac6a1aed1.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          }
        ]
      }
      if(goodstype =='jk'){
        this.a =[
          {
            alink:'',
            imgUrl:'goodsListY/e43e994606cc02d6f5a6d99681d57d80.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/c3a4e8a1236e7e88c41570eac6a1aed1.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          }
        ]
      }
      if(goodstype =='gc'){
        this.a=[
          {
            alink:'',
            imgUrl:'goodsListY/e26a27030c9e729255a1e69972f86ce0.jpg'
          }
          ,
          {
            alink:'',
            imgUrl:'goodsListY/872d9d65001d44a7cb7e86a04ccecdfb.jpg'
          }
        ]
      }
      if(goodstype =='sz'){
        this.a=[
          {
            alink:'',
            imgUrl:'goodsListY/e43e994606cc02d6f5a6d99681d57d80.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/c3a4e8a1236e7e88c41570eac6a1aed1.jpg'
          }
        ]
      }
      if(goodstype =='cf'){
        this.a=[
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          }
        ]
      }
      if(goodstype =='dg'){
        this.a=[
          {
            alink:'',
            imgUrl:'goodsListY/e43e994606cc02d6f5a6d99681d57d80.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/c3a4e8a1236e7e88c41570eac6a1aed1.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          },
          {
            alink:'',
            imgUrl:'goodsListY/338ea313b92c7f50d32645aa46ca72e7.jpg'
          }
        ]
      }
      return this.a
    }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods-list-wrapper
    .list_libox
      .li_rela
        position relative
        border-bottom: 1px solid #e7e7e7
        padding: 10px
        .clearfix
          overflow hidden
          .fl_goods_li
            float left
            width 100px
            height 100px
            a
              display block
              img
                width 100%
                height 100%
          .index-listpro
            padding-left 110px
            & .ft12
              font-size 12px
              .ml5
                margin-left 5px
            & .cprice
              font-size 15px
              font-weight 700
              color #e35356
            & .old_price
              color #666
              margin-left 5px
            & .c999
              color #999
            .Partition
              height 25px
              margin-top 5px
        .addcart
          position: absolute;
          bottom: 12px;
          right: 10px;
          width: 25px;
          z-index: 0;
          img
            width 100%

</style>
