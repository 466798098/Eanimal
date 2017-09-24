<template>
  <div id="app">
    <!--<HeaderApp></HeaderApp>-->
    <!--<Container></Container>-->
    <!--<FooterNav></FooterNav>-->
    <router-view></router-view>
    <FooterNav v-if="footerShow"></FooterNav>
    <Dog v-if="dogShow"></Dog>
  </div>
</template>

<script>
import HeaderApp from './components/Header/Header.vue'
import Container from './components/Container/Container.vue'
import FooterNav from './components/Footer-Nav/Footer-Nav.vue'
import Dog from './components/Dog/Dog.vue'
export default {
  computed:{
    dogShow(){
      if(this.$route.path=='/homepage') {
        return true
      }
      else{
        return false
      }
    },
    footerShow(){
      if(this.$route.path=='/homepage'||this.$route.path.indexOf('/category')>=0) {
        return true
      }
      else{
        return false
      }
    }
  },
  components:{
    HeaderApp,
    Container,
    FooterNav,
    Dog
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing border-box
  body
    font-size 14px
    line-height 1.6
    font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
  img
    vertical-align middle
  .tal
    text-align left
  .tar
    text-align right
  a
    color #333
</style>
