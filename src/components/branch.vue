<template>
  <div>
    <HeaderBranch :headerFlag="headerFlag" :flagheader="flagheader"></HeaderBranch>
    <scroller>
      <div id="indexbox" class="main" :class="{pt55:!flagheader}">
        <TopScalableNav></TopScalableNav>
        <div class="allmodule">
          <div>
            <SwipeComponent :imageList="imageList"></SwipeComponent>
          </div>
          <div>
            <Switchable></Switchable>
          </div>
          <div>
            <Xline></Xline>
          </div>
          <div>
            <CurrencyAd :webpage="webpage" :currencyAds="currencyAds"></CurrencyAd>
          </div>
          <div>
            <Xline></Xline>
          </div>
          <div>
            <div class="custom_tite">
              <div>
                <img src="/static/img/brands/ebf85555c851f683bf33cd4c14f7f68b.jpg" alt="">
              </div>
            </div>
          </div>
          <div>
            <AdGoodsList v-for="(slideListItem,index) in slideListArr"  :slideListItem="slideListItem" :index="index"></AdGoodsList>
          </div>
          <div>
            <GoodsListNav :goodsNavName="goodsNavName"></GoodsListNav>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import Xline from './X-line/X-line.vue'
import SwipeComponent from './Swipe-component/swipe.vue'
import Switchable from './switchable/switchable.vue'
import HeaderBranch from './Header-branch/Header-branch.vue'
import TopScalableNav from './Top-Scalable-Nav/Top-Scalable-Nav.vue'
import CurrencyAd from './Currency-Ad/Currency-Ad.vue'
import AdGoodsList from './Ad-Goods-List/Ad-Goods-List.vue'
import GoodsListNav from './Goods-list-nav/Goods-list-nav.vue'

  export default {
    data(){
      return {
        selected : '1',
        imageList: [{
              alink:'',
              imgUrl:'mainfood/a4a9af65943791fd74db9a5ae3cb38b7.png'
          },
            {
              alink:'',
              imgUrl:'mainfood/f14111185e59a9baf30a3f725cc36126.png'
            },
            {
              alink:'',
              imgUrl:'mainfood/bb07b4aaa3673a761221e2fa841bc85c.png'}
        ],
        webpage:'branch',
        currencyAds:[
          'currencyads/5df340d068e4bc97759d801edcd5ac19.jpg',
          'currencyads/5914108edeadbfba0118b6c2ec9a26c1.jpg',
          'currencyads/e8fa7e93ded2be02792cbade66353832.jpg'
        ],
        slideListArr:[
          {
            titleImgUrl:'goodslist/aed0932f1f5d77f2d0002d404f52067d.png',
            slideList:[
              {
                alink:'',
                imgUrl:'goodslist/d73869dd454a3d2e754d0830f8edaabb.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
            },
              {
                alink:'',
                imgUrl:'goodslist/d73869dd454a3d2e754d0830f8edaabb.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/d73869dd454a3d2e754d0830f8edaabb.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/d73869dd454a3d2e754d0830f8edaabb.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/d73869dd454a3d2e754d0830f8edaabb.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              }]
          },
          {
            titleImgUrl:'goodslist/2e53bef967f57864abbe39e10d131bf8.jpg',
            slideList:[{
              alink:'',
              imgUrl:'goodslist/1e1cba9934d43ed8bfd5143213a2b918.jpg',
              price:52.00,
              description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
            },
              {
                alink:'',
                imgUrl:'goodslist/1e1cba9934d43ed8bfd5143213a2b918.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/1e1cba9934d43ed8bfd5143213a2b918.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/1e1cba9934d43ed8bfd5143213a2b918.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              },
              {
                alink:'',
                imgUrl:'goodslist/1e1cba9934d43ed8bfd5143213a2b918.jpg',
                price:52.00,
                description:'美国原装进口卡比 鸡肉红米配方全犬粮 5磅(2.27kg)'
              }]
          },
          {
            titleImgUrl:'goodslist/d7baa12de1a7915eeaba2ab8c010782b.jpg',
            slideList:[{
              alink:'',
              imgUrl:'goodslist/84a72431d0cea2db5af6354c8c039304.jpg',
              price:52.00,
              description:'优卡EuKanuba 小型犬幼犬粮 1kg'
            },
              {
                alink:'',
                imgUrl:'goodslist/84a72431d0cea2db5af6354c8c039304.jpg',
                price:52.00,
                description:'优卡EuKanuba 小型犬幼犬粮 1kg'
              },
              {
                alink:'',
                imgUrl:'goodslist/84a72431d0cea2db5af6354c8c039304.jpg',
                price:52.00,
                description:'优卡EuKanuba 小型犬幼犬粮 1kg'
              },
              {
                alink:'',
                imgUrl:'goodslist/84a72431d0cea2db5af6354c8c039304.jpg',
                price:52.00,
                description:'优卡EuKanuba 小型犬幼犬粮 1kg'
              },
              {
                alink:'',
                imgUrl:'goodslist/84a72431d0cea2db5af6354c8c039304.jpg',
                price:52.00,
                description:'优卡EuKanuba 小型犬幼犬粮 1kg'
              }]
          },
        ],
        goodsNavName:[
          {
            goodstype:'all',
            name:'全部'
          },
          {
            goodstype:'jk',
            name:'进口狗粮'
          },
          {
            goodstype:'gc',
            name:'国产狗粮'
          },
          {
            goodstype:'sz',
            name:'散装狗粮'
          },
          {
            goodstype:'cf',
            name:'处方狗粮'
          },
          {
            goodstype:'dg',
            name:'冻干狗粮'
          },
        ],
        flagheader:false
      }
    },
    methods:{
      headerFlag(){
        sessionStorage.setItem('headerhidden',true)
        this.flagheader=true
      }
    },
    mounted(){
      this.flagheader=sessionStorage.getItem('headerhidden')
    },
    components:{
      Xline,
      SwipeComponent,
      HeaderBranch,
      Switchable,
      TopScalableNav,
      CurrencyAd,
      AdGoodsList,
      GoodsListNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pt55
    padding-top 55px
  .main
    & .custom_tite
      padding-top 10px
      img
        display block
        max-width: 50%;
        max-height: 73px;
        margin: 0 auto;

</style>
