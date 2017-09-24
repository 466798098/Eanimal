<template>
  <scroller>
    <div id="indexbox" class="main" :class="{pt141:!flagheader,pt87:flagheader}">
    <div class="allmodule">
      <div>
        <SwipeComponent :imageList="imageList"></SwipeComponent>
      </div>
      <div>
        <div class="banner_item">
          <a href="https://sale.epet.com/m/1706/newWelfare.html?fw=0">
            <img src="../../img/container/747562c921cd37cf0dafbe24ccfe62bd.gif" alt="">
          </a>
        </div>
      </div>
      <div>
        <div class="columnnavdiv">
          <div>
            <ul>
              <li v-for="icon in iconList">
                <a :href="icon.alink">
                  <img :src="`/static/img/${icon.imgUrl}`" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <div class="surprise_day">
          <div class="surprise_top">
            <div class="surprise_img">
              <img src="../../img/container/suprice.png" alt="">
            </div>
            <div>距本场结束</div>
            <div>
              <div class="time">
                <span>1</span>
                <span>:</span>
                <span>22</span>
                <span>:</span>
                <span>20</span>
              </div>
            </div>
            <div class="more">
              <a href="">
                <img src="../../img/container/54d9f002646c397b6b19abefbe6c155b.png" alt="">
              </a>
            </div>
          </div>
          <SwipeSurprise :slideList="slideList"></SwipeSurprise>
        </div>
      </div>
      <div>
        <CurrencyAd :webpage="webpage" :currencyAds="currencyAds"></CurrencyAd>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <TitleBlock :titleImage="fashionVideo"></TitleBlock>
      </div>
      <div>
        <VideoList></VideoList>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <TitleBlock :titleImage="testHome"></TitleBlock>
      </div>
      <div>
        <div class="test_home_Image">
          <a href="">
            <img src="/static/img/container/3862fcd9c0004d91a81ad63a494b82a0.jpg" alt="">
          </a>
        </div>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <TitleBlock :titleImage="specialsell"></TitleBlock>
      </div>
      <div>
        <SpecialsellList :sellList="sellList"></SpecialsellList>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <div class="ta_welfare">
          <div>
            <div class="welfare_rela">
              <div>
                <a href="" class="ta_welfare_link">
                  <img src="/static/img/container/617e8ae8c72da60d562a30170c26c118.jpg" alt="">
                </a>
              </div>
              <div class="more_welfare">
                <a href="" class="more_welfare_link">
                  <img src="/static/img/container/0d2acd3b4d742a510dfa0142d493e145.png" alt="">
                </a>
              </div>
            </div>
            <div class="ta_bg">
              <img src="/static/img/container/20c6bcc947e062dae210b391e2fa6a98.jpg" alt="">
              <div class="bg_text">
                <p>
                  截止今日，TA公益已联合E宠商城和
                  <b class="bgfff cred round5 pl5 pr5 mr5 ml5">15</b>
                  家品牌
                </p>
                <p>
                  累积捐赠
                  <b class="cred">857,272.44</b>
                  元
                </p>
                <p>
                  已合作
                  <b class="ml5 mr5">7</b>
                  家公益组织，举办参与
                  <b class="bgfff cred round5 pl5 pr5 mr5 ml5">2</b>
                  场公益活动,助养
                  <b class="bgfff cred round5 pl5 pr5 mr5 ml5">34</b>
                  位领养人
                </p>
              </div>
            </div>
            <BrandsScroll :brandsList="barndsList"></BrandsScroll>
          </div>
        </div>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <JudgeList :judges="judges"></JudgeList>
      </div>
      <div>
        <Xline></Xline>
      </div>
      <div>
        <AppFooter></AppFooter>
      </div>
    </div>
  </div>
  </scroller>
</template>

<script>
import Xline from '../X-line/X-line.vue'
import SwipeComponent from '../Swipe-component/swipe.vue'
import SwipeSurprise from '../Swipe-component/Swipe-surprise.vue'
import Switchable from '../switchable/switchable.vue'
import VideoList from '../Video-list/Video-list.vue'
import TitleBlock from '../Title-block/Title-block.vue'
import SpecialsellList from '../Special-sell-List/Special-sell-List.vue'
import BrandsScroll from '../Brands-scroll/Brands-scroll.vue'
import JudgeList from '../Judge-List/Judge-List.vue'
import AppFooter from '../Footer/footer.vue'
import CurrencyAd from '../Currency-Ad/Currency-Ad.vue'

export default {
    data(){
      return {
        imageList:[
          {
           alink:'',
           imgUrl:'container/4288b3a722d59db33b34181caa7ef1e4.jpg'
          },
          {
            alink:'',
            imgUrl:'container/c3d406e9e2219ab08e083548161061d4.jpg'},
          {
            alink:'',
            imgUrl:'container/ed80ee64f24384450e757c1188e553dc.png'},
          {
            alink:'',
            imgUrl:'container/04e9257ea937c263aacf7d6241a84298.png'},
          {
            alink:'',
            imgUrl:'container/c6ddc480d009e7ec42f4933070377dc6.jpg'},
          {
            alink:'',
            imgUrl:'container/ab6890236a6be0089d042873e7dc1797.jpg'},
          {
            alink:'',
            imgUrl:'container/409553239265ca47621c007fb11c3241.jpg'}
        ],
        iconList:[
          {
            alink:'',
            imgUrl:'container/e77641bc5e038c17069fc3b0953ed82a.png'
          },
          {
            alink:'',
            imgUrl:'container/93e48869e3da723f9248c27718f39956.png'},
          {
            alink:'',
            imgUrl:'container/c8eb54f31278c068ec5d731ec650a886.png'},
          {
            alink:'',
            imgUrl:'container/0b7132cfff063d7f17f614c25ce9da1c.png'},
          {
            alink:'',
            imgUrl:'container/b3fa851021c844ae8a7493567c26e8ce.png'},
          {
            alink:'',
            imgUrl:'container/4335b268a53422a205c1f322370d31c1.png'},
          {
            alink:'',
            imgUrl:'container/cca7810f68fe70fa82aff20f53c2eaa0.jpg'},
          {
            alink:'',
            imgUrl:'container/34570dec4ee213b0b998563f687c0ebf.jpg'}
        ],
        slideList:[
          {
          alink:'',
          imgUrl:'container/1c7066fead510c7df3c2f9ce352378a3.png',
          price:52.00,
          save:23.00
        },
          {
            alink:'',
            imgUrl:'container/eeddb8236094a0d3e624270ed282bf50.jpg',
            price:49.00,
            save:20.00
          },
          {
            alink:'',
            imgUrl:'container/2dd271edfa69b7bf89f8e88aba893de2.jpg',
            price:19.00,
            save:7.00
          },
          {
            alink:'',
            imgUrl:'container/1e1cba9934d43ed8bfd5143213a2b918.jpg',
            price:36.00,
            save:36.00
          },
          {
            alink:'',
            imgUrl:'container/71cab14b20687460c909ce05c836939e.jpg',
            price:12.00,
            save:6.00
          },
          {
            alink:'',
            imgUrl:'container/597fcc94f7775b10b473ef9e483e019e.jpg',
            price:23.40,
            save:15.60
          },
          {
            alink:'',
            imgUrl:'container/c7d394e3656fef999ee64fb1574574db.jpg',
            price:7.50,
            save:7.50
          },
          {
            alink:'',
            imgUrl:'container/9366b2742a864528ff1a69a07ff24840.jpg',
            price:15.90,
            save:9.10
          },
          {
            alink:'',
            imgUrl:'container/f70dc5b824e66a577dcd3a6cc86a4359.jpg',
            price:19.90,
            save:19.10
          },
          {
            alink:'',
            imgUrl:'container/41b6dec087ecdb698f10324c22d7175f.jpg',
            price:11.60,
            save:7.70
          }
//          {
//            alink:'',
//            imgUrl:,
//            price:8.00,
//            save:8.00
//          },
        ],
        testHome:{
          alink:'',
          imgUrl:'container/9cfe1253127a6fa47de6e711e216d1ee.png'},
        fashionVideo:{
          alink:'',
          imgUrl:'container/7b40d88fc2263cf593bf07559e71cec0.png'},
        specialsell:{
          alink:'',
          imgUrl:'container/7f62736d64ad9222875ff3f36d094997.png'},
        sellList:[
          {
            name:'伯纳天纯',
            discount:'',
            alink:'',
            imgUrl:'sellList/88edca1b9538b28257f4c14fa546d55e.jpg'
          },
          {
            name:'海洋之星FISH4DOGS',
            discount:'',
            alink:'',
            imgUrl:'sellList/85ee6b88797f7f5662dd298980a079d3.jpg'},
          {
            name:'冠能',
            discount:'送178元宠物碗',
            alink:'',
            imgUrl:'sellList/f5a8e5759be0295bc0f49f88efecd4bb.jpg'},
          {
            name:'丝倍亮',
            discount:'8折加送丝巾',
            alink:'',
            imgUrl:'sellList/c910e01072da0cf4a83eafda5a492f3f.jpg'},
          {
            name:'荣耀玛氏',
            discount:'全场6折起',
            alink:'',
            imgUrl:'sellList/2f0b98bc57350354a0cbfe1090c97ae2.jpg'},
          {
            name:'优卡',
            discount:'只为爱宠卓越表现',
            alink:'',
            imgUrl:'sellList/1b18c703af536f15160beb1d0de06275.jpg'},
          {
            name:'禾仕嘉&SMartbones',
            discount:'',
            alink:'',
            imgUrl:'sellList/4c58a988b2d91593f0bbadbd20d90a2a.jpg'},
          {
            name:'爱普士妙鲜包',
            discount:'8折尝鲜',
            alink:'',
            imgUrl:'sellList/6452054f25e2d89ce1413ecdc7d43a43.jpg'},
          {
            name:'NexGard尼可信',
            discount:'',
            alink:'',
            imgUrl:'sellList/02601e1592dd7cff65711e59a0c997dd.jpg'}
        ],
        barndsList: [
            {
              alink:'',
              imgUrl:'brands/epet_brand_logo.png',
              brandTotal:186675.85
            },
            {
              alink:'',
              imgUrl:'brands/637879a33f1ea84ccdbfa2dc1b3de16e.jpg',
              brandTotal:167470.93
            },
            {
              alink:'',
              imgUrl:'brands/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg',
              brandTotal:68115.64
            },
            {
              alink:'',
              imgUrl:'brands/92371ab34de0ea12b67028d6625c5180.jpg',
              brandTotal:60853.06
            },
            {
              alink:'',
              imgUrl:'brands/c997f3ae79a7568cf7b6dde5c7b7f8b1.jpg',
              brandTotal:52502.36
            },
            {
              alink:'',
              imgUrl:'brands/276527f25e9151ef48b0b8d2dba79d29.jpg',
              brandTotal:51683.36
            }
          ],
        judges:[
          {
            alink:'',
            imgUrl:'judges/d1cf520f66912ee6adcb29ffebe2efc8.jpg',
            jionTime:'加入E宠2年2月',
            nickName:'红*****ω',
            animalType:'中华田园猫',
            comment:'包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心'
          },
          {
            alink:'',
            imgUrl:'judges/2bfa814e0924d3c870a2b758c335b18d.jpg',
            jionTime:'加入E宠2年7月',
            nickName:'自***人',
            animalType:'萨摩耶',
            comment:'物流挺给力，到货很快。包装也十分的棒，外面还有塑料薄膜包裹，非常好，一看就让人觉得质量绝对一级棒。客服真心不错，很耐心的给你讲解！就冲这个大大的好评，以后狗狗的东西直接来这里！ 再次祝e宠生意兴隆。'

          },
          {
            alink:'',
            imgUrl:'judges/8043d31b146060df1a3aa6b96abf138f.jpg',
            jionTime:'加入E宠3月',
            nickName:'没**白',
            animalType:'哈士奇',
            comment:'不知不觉中这已经是第16次在E宠购物了，其实我家二妹才来了三个多月。二妹吃的，用的，玩的，包括生病的药全部是在E宠买的，看中的就是正品保障和一流的物流。印象最深的是618活动的时候因为订单量太大，有一个单子没有按时送到，我联系了客服，客服保证第二天送到，结果第二天晚上十一点多的时候E宠的工作人员开着自家的小轿车把货送到了我家楼下，兑现了承诺。希望E宠以后越来越好，继续做广大铲屎官的坚实后盾。，买得放心吃的安心'},
          {
            alink: '',
            imgUrl: 'judges/e7030985852d17997447c540f5da41f2.jpg',
            jionTime: '加入E宠2月',
            nickName: '奥****家',
            animalType: '中华田园猫',
            comment: '客服和物流都是特别的满意，以前曾经在天猫国际买，但是物流速度太慢了。e宠的速度快不说，东西绝对是真货，最重要的是，每次的减震避震都做的特别完美。开了水族站之后，以后家里宠物的东西全都e宠买了。'
          }
        ],
        webpage:'homepage',
        currencyAds:[
          'container/03f51eb78add57a87f2619517758cbf4.jpg',
          'container/042df360a733282ab3544ce261e0a75d.jpg',
          'container/fcb76da8467e018d480207720f0bd74a.jpg'

        ]
      }
    },
    props:['flagheader'],
    components:{
      Xline,
      SwipeComponent,
      Switchable,
      CurrencyAd,
      SwipeSurprise,
      VideoList,
      TitleBlock,
      SpecialsellList,
      BrandsScroll,
      JudgeList,
      AppFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pt141
    padding-top 141px
  .pt87
    padding-top 87px
  .main
    padding-bottom 50px
  .banner_item
    a
      display block
      img
        display block
        width 100%

  .columnnavdiv
    div
      padding 10px 0
      ul
        overflow hidden
        li
          float left
          width 25%
          a
            display block
            img
              width 100%
  .surprise_day
    .surprise_top
      position relative
      box-sizing border-box
      width 100%
      height 60px
      padding 10px
      div
        float left
        font-size 13px
        margin-top 4px
      .surprise_img
        margin-top 0
        margin-right 10px
        img
          width 105.11px
          height 24px
          margin-left -20px
      .time
        margin-left 5px
        margin-top 1px
        span:nth-of-type(odd)
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
      .more
        position absolute
        margin-top 0
        right 0
        top 0
        a
          display block
          img
            width 67.5px
            height 40px


  .test_home_Image
    a
      display block
      img
        width 100%
  .ta_welfare
    & .welfare_rela
      position relative
      .more_welfare
        position absolute
        top 7px
        right 0
        .more_welfare_link
          display block
          img
            width 75px
            margin 10px 5px 0 0
      .ta_welfare_link
        display block
        img
          display block
          height 45px
          margin 0 auto
    & .ta_bg
      position relative
      img
        width 100%
      .bg_text
        font-weight 700
        text-align center
        font-size 14px
        color white
        position absolute
        top 20%
        left 0
        width 100%
        p
          margin-top 5px
          .cred
            color red
          .round5
            border-radius 5px
          .pl5
            padding-left 5px
          .pr5
            padding-right 5px
          .mr5
            margin-left 5px
          .ml5
            margin-left 5px
          .bgfff
            background: #fff;

</style>
