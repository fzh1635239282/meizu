<template>
  <section class="main">
    <header class="header">
      <div class="title">购物车</div>
      <div class="goback" @click="goback">
        <i class="fa fa-angle-left"></i>
      </div> 
    </header>
    <div class="content">
      <div class="cart-empty">
        <p class="msg">登录后可显示您账号中已加入的商品</p>
        <router-link to="/login/home" class="btn">去登录</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~styles/_base.styl"
.main
  font 12px/1 Tahoma, Helvetica, Arial, "\5B8B\4F53", sans-serif
  display flex
  flex-direction column
  height 100vh
  .header
    width 100%
    background-color #fff
    position relative
    .title
      max-width 60%
      margin auto
      line-height 44px
      color #666
      font-size 18px
      text-align center
      $line_ellipsis()
      font-family sans-serif
    .goback
      position absolute
      left 0
      top 0
      .fa
        padding 0.12rem 0 0 0.1rem
        font-size 0.36rem
        line-height 0.2rem
        width 0.44rem
        height 0.44rem
        box-sizing border-box
        color #666
  .content
    flex 1
    box-sizing border-box
    background-color #eee
    .cart-empty
      text-align center
      .msg
        margin 1.77rem 0 0.31rem
        color #666
        font-size 0.12rem
        text-align center
      .btn
        width 1.136rem
        line-height 0.36rem
        font-size 16px
        border-radius 2px
        display inline-block
        color #fff
        text-align center
        box-sizing border-box
        border none
        outline none
        background-color: #00c3f5
</style>
