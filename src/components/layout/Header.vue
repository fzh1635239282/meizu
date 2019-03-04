<template>
  <div class="app-header">
    <a href="https://m.meizu.com/?click=mgw_index_yt_logo" class="top-logo">
      <svg fill="#00b4ff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18.51852vw" height="8.33333vw" viewBox="17.318 5.824 402.048 73.556" enable-background="new 17.318 5.824 402.048 73.556" xml:space="preserve">
        <path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472
          h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path>
        <rect x="226.517" y="5.824" width="14.426" height="73.556"></rect>
        <path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743
          c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416
          C119.888,12.841,112.872,5.824,104.296,5.824"></path>
        <path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592
          v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43
          V23.614z"></path>
        <path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86
          v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
      </svg>
    </a>
    <a href="https://m.meizu.com/?click=mall_index_dh_tuijian2#search&click=mgw_index_yt_search" class="top-search"></a>
    <router-link to="/login/willlogin" class="top-cart"></router-link>
    <a class="top-nav-open"
      @click="all_nav_flag = true"
    ></a>
    <div id="all-nav"
      :class="all_nav_flag ? 'open' : 'close'"
    >
      <div class="all-nav-top">
        <a href="/" class="go-home">魅族官网</a>
        <a class="top-nav-close"
          @click="all_nav_flag = false"
        ></a>
      </div>
      <ul class="menuListOne">
        <MenuBtn
          v-for="(item, index) in menuListOne"
          :key="index"
          :iteminfo="item"
          :imgWidth="'11vw'"
        ></MenuBtn>
      </ul>
      <ul class="menuListTwo">
        <MenuBtn
          v-for="(item, index) in menuListTwo"
          :key="index"
          :iteminfo="item"
          :imgWidth="'7vw'"
        ></MenuBtn>
      </ul>
      <ul class="menuListThree">
        <MenuBtn
          v-for="(item, index) in menuListThree"
          :key="index"
          :iteminfo="item"
          :imgWidth="'7vw'"
        ></MenuBtn>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuBtn from "components/lists/MenuBtn"

export default {
  data () {
    return {
      all_nav_flag: false
    }
  },
  props: {
    all_nav: Object
  },
  computed: {
    menuListOne () {
      return this.all_nav && this.all_nav.block_206 || []
    },
    menuListTwo () {
      return this.all_nav && this.all_nav.block_207 || []
    },
    menuListThree () {
      return this.all_nav && this.all_nav.block_208 || []
    }
  },
  components: {
    MenuBtn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.app-header
  padding 3vw 2vw 3vw 3.329vw
  .top-logo
    display block
    width 18.51852vw
    height 8.33333vw
    margin 0 auto
    #logo
      display block
  .top-search
    background url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-search_0f3d0ce.svg) no-repeat center
    width 3.88889vw
    height 3.88889vw
    background-size 100%
    top 5.5vw
    left 3vw
    position absolute
    z-index 5
  .top-cart
    background url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-shop-cart_297ceef.svg) no-repeat center center
    width 4.81481vw
    height 4.81481vw
    background-size 100%
    right 12.68519vw
    top 5vw
    position absolute
    z-index 5
  .top-nav-open
    background url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-menu_e428c6e.svg) no-repeat center center
    background-size 100% 100%
    width 3.7037vw
    height 3.7037vw
    right 2.96296vw
    top 5.7vw
    position absolute
    z-index 5
  #all-nav
    position fixed
    left 0
    width 100vw
    height 100vh
    background-color #fafafa
    transition top 0.6s
    z-index 999
    &.open
      overflow visible
    &.close
      overflow hidden
    .all-nav-top
      position relative
      width 100%
      height 15vw
      background #fff
      .go-home
        position absolute
        width 18.51852vw
        height 8.33333vw
        z-index 1001
        left 0
        top 0
        right 0
        bottom 0
        margin auto
        font-size 4.16667vw
        text-align center
        line-height 8.33333vw
        color #000
      .top-nav-close
        position absolute
        width 5vw
        height 5vw
        right 3vw
        top 5vw
        background-image url(//bbs.res.meizu.com/static_new/h5/img/close.58557e4.png)
        background-size cover
        background-repeat no-repeat
        background-position 50%
        z-index 9
    .menuListOne, .menuListTwo, .menuListThree
      border-bottom 0
      display flex
      flex-wrap wrap
      padding 1vw 1vw 0vw
      margin-bottom 7vw
      li
        margin-bottom 4.5vw
        text-align center
        width 25%
    .menuListOne
      background #fff
      box-shadow 0 0.04rem 0.12rem 0.01rem #ebebeb
    .menuListTwo
      margin-bottom 5vw
      border-bottom 0.01rem solid #efefef
      li
        margin-bottom 3.5vw
  .close
    top -100vh
  .open
    top 0
</style>
