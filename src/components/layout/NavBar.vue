<template>
  <div class="app-navbar">
      <router-link to="/index/home" class="router-link home-btn">推荐</router-link>
      <router-link to="/index/phone" class="router-link phone-btn">手机</router-link>
      <router-link to="/index/music" class="router-link music-btn">声乐</router-link>
      <router-link to="/index/parts" class="router-link parts-btn">配件</router-link>
      <router-link to="/index/life" class="router-link life-btn">生活</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.app-navbar
  background #fff
  box-sizing border-box
  width 100%
  padding 0 3.33333vw 2vw
  display flex
  justify-content space-between
  .router-link
    border-bottom .35vw solid transparent
    color #333
    font-size 3.7037vw
    padding 1vw 0
    white-space nowrap
    line-height 1.4
  .router-link-active
    border-bottom-color #0bbbef
    color #0bbbef
</style>
