<template>
  <div class="app-login">
    <div class="check-code">
      <div class="tab-title">
        <a class="linkAGray" :class="isAccountLogin ? 'black' : 'gray'" @click="isAccountLogin=true">账号登录</a>
        <span class="register-line"></span>
        <a class="linkABlack" :class="isAccountLogin ? 'gray' : 'black'" @click="isAccountLogin=false">验证码登录</a>
      </div>
      <div class="input-box" v-if="!isAccountLogin">
        <span class="cycodePhone">
          <input class="cycode" value="+86">
          <i class="fa fa-angle-down"></i>
        </span>
        <input name="phone" class="phone_num" maxlength="20" placeholder="手机号码" autocomplete="off" tabindex="2">
      </div>
      <div class="account-box" v-if="isAccountLogin">
        <input class="account userinput" type="text" placeholder="手机号/ Flyme 账号" name="account" maxlength="50" autocomplete="off">
        <input class="password userinput" type="password" placeholder="密码" name="password" maxlength="16" autocomplete="off">
      </div>
    </div>
    <a class="login-btn">登录</a>
    <router-link to="/register/home" class="register-btn">注册</router-link>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isAccountLogin: false 
    }
  }
}
</script>
<style lang="stylus">
.app-login
  font-family "Microsoft Yahei", Arial, Helvetica, sans-serif
  .check-code
    width 3.3rem
    margin 0.8rem auto 0
    overflow visible
    height auto
    .tab-title
      position relative
      font-size 0.18rem
      margin-top 0.35rem
      margin-bottom 0.43rem
      width 100%
      text-align center
      .linkAGray
        position absolute
        right 50%
        margin-right 0.25rem
      .gray
        color #7f7f7f
      .black
        color #000000
      .register-line
        color #d9d9d9
        display inline-block
        border 1px solid #dadada
        border-left 1px
        height 0.16rem
        line-height 0.2rem
        margin-right 0.25rem
        margin-left 0.25rem
      .linkABlack
        position absolute
        left 50%
        margin-left 0.25rem
    .input-box
      position relative
      height 36px
      line-height 22px
      font-size 14px
      border 1px solid #dadada
      outline none
      color #474747
      padding 0.1rem 0.05rem 0
      margin-top 5px
      margin-bottom 20px
      width 3.2rem
      border-radius 2px
      .cycodePhone
        display inline-block
        width 0.6rem
        border-right 1px solid #DDD
        cursor pointer
        height 20px
        line-height 0
        .cycode
          width 60%
          color grey
          text-align center
          cursor pointer
          background-color white
          outline none
          border 0
      .phone_num
        width 74%
        text-indent 8px
        background-color white
        outline none
        border 0
        font 400 13.3333px Arial
    .account-box
      .userinput
        display block
        width 3.2rem
        padding 0 0.1rem
        margin-top 5px
        margin-bottom 20px
        border-radius 2px
        height 46px
        line-height 22px
        font-size 14px
        border 1px solid #dadada
        outline none
        color #474747
        box-sizing border-box
        &:focus
          border-color #198ded
  .login-btn
    width 3.3rem
    background-color #198DED
    display block
    height 46px
    font-size 14px
    line-height 46px
    text-align center
    margin 0.5rem auto 0.1rem
    outline none
    cursor pointer
    color #fff
    border-radius 4px
  .register-btn
    margin 0 auto
    width 3.3rem
    color #515151
    text-decoration none
    display block
    text-align center
    font-family "Microsoft Yahei", Arial, Helvetica, sans-serif
    font-size 14px
    cursor pointer
</style>
