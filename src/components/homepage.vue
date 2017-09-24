<template>
  <div>
    <HeaderApp :headerFlag="headerFlag" :flagheader="flagheader"></HeaderApp>
    <Container :flagheader="flagheader"></Container>
  </div>
</template>

<script>
  import HeaderApp from './Header/Header.vue'
  import Container from './Container/Container.vue'

  export default {
    data(){
      return {
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
      HeaderApp,
      Container,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
