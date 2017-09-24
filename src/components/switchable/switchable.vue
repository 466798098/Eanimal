<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" >
        <img v-show="selected==1" src="../../img/f500a1d8b9c334b0be55a349f04b0bec.jpg" alt="">
        <img v-show="selected!=1" src="../../img/562c15b9f8f53988959d97d47d63b1a7.jpg" alt="">
      </mt-tab-item>
      <mt-tab-item id="2" >
        <img v-show="selected==2" src="../../img/80262ba5cfea6d22408daa472bd763d8.jpg" alt="">
        <img v-show="selected!=2" src="../../img/443c7633200dacd9b0403985b45f42ac.jpg" alt="">
      </mt-tab-item>
      <mt-tab-item id="3" >
        <img v-show="selected==3" src="../../img/9cd38109100b17000abea371addcb1b0.jpg" alt="">
        <img v-show="selected!=3" src="../../img/5bb670292c914709995b7f59d83b1617.jpg" alt="">
      </mt-tab-item>
      <mt-tab-item id="4" >
        <img v-show="selected==4" src="../../img/9063225106d67e2cd05167f71ff6e7cc.jpg" alt="">
        <img v-show="selected!=4" src="../../img/9227a22394215f9572d3bea2fe1699d4.jpg" alt="">
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!--<mt-cell v-for="n in 10" :title="'content ' + n" />-->
        <ul class="food-list">
          <li><a href=""><img src="../../img/b21b49c58dea4eb0a9a057795d71620d.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/7c9d752bdbe538ed870974848f25e17d.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/d9441034ad9b61ada9853a51388bb340.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/1137016f8c968e4855461fa4f280c728.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/06ce76f3b037510aa52e31ac7fbeca19.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/ab2d57fe1334119316c39345c65af3d4.jpg" alt=""></a></li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="food-list">
          <li><a href=""><img src="../../img/470a7338afe79f6775f32dbb38f26a9c.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/3bdad8463d8b13fd83230d4777eb5eb8.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/56d2cd336393223f4624c35ae65165b2.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/0f0860a31161c14503f7f943acb944c7.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/9ead012bdb55ad1144ad86dd7b522f85.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/ad617b8387e497562c455f5fa9ecd4b3.jpg" alt=""></a></li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul class="food-list">
          <li><a href=""><img src="../../img/ed38fad33fc6832ffe313498b03442f0.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/3b22cce883a5abd4adafa377c72048fe.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/01e9a859acc8d1b83a95c026a8d3434f.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/1ae21059eb105ae40e831aaabb84b924.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/1e168ed6b8efa23da154822faa63d21d.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/c203dc3fac020eb27a5adf420a3937dc.jpg" alt=""></a></li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <ul class="food-list">
          <li><a href=""><img src="../../img/3ffb6d9a013c82adfd2fd283213ed003.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/f2d733365195efa1db68d410fdb37cec.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/2fd411ba0fdfcb190c37566b2f0d23b0.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/3fb09f83eccead0684956d82c73ef385.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/a1c024b1ad2030756b25907fa5cd5513.jpg" alt=""></a></li>
          <li><a href=""><img src="../../img/1636231472b2d290f52685936ef2c53c.jpg" alt=""></a></li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        selected:'1'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-tab-item,.isSelected
    padding 0 !important
    border-bottom-width: 0 !important
    img
      width 100%
  .food-list
    width 100%
    li
      float left
      width:33%
      a
        dispaly block
        img
          width 100%
</style>
