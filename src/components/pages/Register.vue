<template>
  <div class="app-register">
    <div class="tab-title">
        <router-link to="/register/home" class="link">注册</router-link>
    </div>
    <div class="input-box">
        <span class="cycodePhone">
            <input class="cycode" value="+86">
            <i class="fa fa-angle-down"></i>
        </span>
        <input name="phone" class="phone_num" maxlength="20" placeholder="手机号码" autocomplete="off" tabindex="2">
    </div>
    <div class="rememberField">
        <label class="pointer" for="acceptFlyme" tabindex="0">点击立即注册，即表示您同意并愿意遵守</label>
        <a href="https://i.flyme.cn/serviceAgreement" target="_blank" class="linkABlue">Flyme服务协议</a>
        <label class="pointer">和</label>
        <a href="http://www.meizu.com/legal.html" target="_blank" class="linkABlue">法律声明</a>
    </div>
    <a id="nextStep" class="register-btn">立即注册</a>
    <router-link to="/login/home" class="login-btn">登录</router-link>
  </div>
</template>

<script>

export default {
}
</script>
<style lang="stylus">
.app-register
    font-family "Microsoft Yahei",Arial,Helvetica,sans-serif
    .tab-title
        font-size 18px
        margin-top 60px
        text-align center
        margin-bottom 1.03rem
        .link
            color #00a7ea
            &:hover
                color #008ec7
    .input-box
        position relative
        height 36px
        line-height 22px
        font-size 14px
        border 1px solid #dadada
        outline none
        color #474747
        padding 0.1rem 0.05rem 0
        margin 0.05rem auto 0.2rem
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
    .rememberField
        width 3.3rem
        height 0.384rem
        line-height 0.224rem
        margin 0 auto 0.15rem
        font-size 0.12rem
        a.linkABlue:link, a.linkABlue:visited
            color #00a7ea
    .register-btn
        display block
        font-size 14px
        width 3.3rem
        margin 0 auto 0.2rem
        line-height 50px
        text-align center
        height 50px
        outline none
        cursor pointer
        background-color #32a5e7
        color #fff
        border-radius 2px
    .login-btn
        color #474747
        cursor pointer
        display block
        text-align center
</style>
