<template>
    <div class="app-detail">
        <header class="header">
            <a class="header-back">
                <i class="fa fa-angle-left"></i>
            </a>
            <router-link to="/index/home" class="header-home">
                <i class="fa fa-home"></i>
            </router-link>
        </header>
        <section class="main">
            <!-- 轮播图 -->
            <mt-swipe :auto="0" class="banner-box">
                <mt-swipe-item class="banner-item">
                    <img src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgkGAGR7oAAlO1raU1PA201.png480x480.jpg">
                </mt-swipe-item>
                <mt-swipe-item class="banner-item">
                    <img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgjiAKsrfAANgXYqK538272.png480x480.jpg">                </mt-swipe-item>
                <mt-swipe-item class="banner-item">
                    <img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkGAAJefAASvxzwhjFc615.png480x480.jpg">
                </mt-swipe-item>
                <mt-swipe-item class="banner-item">
                    <img src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0Vtqgj-AQW52AAJZZteaDhA041.png480x480.jpg">
                </mt-swipe-item>
            </mt-swipe>
            <div class="prod">
                <section class="prod-info">
                    <div class="prod-info-header">
                        <h1 class="vm-title">魅族 16th Plus</h1>
                    </div>
                    <div class="prod-info-price">
                        <div class="mod-price">
                            <small>¥ </small><span id="J_price" class="vm-money">3198.00</span>
                        </div>
                        <div class="mod-original" id="J_originalPrice" style="display: none;"></div>
                        <div class="mod-countdown" id="J_discountCountDown" style="display: none;">
                        </div>
                    </div>
                    <div class="prod-info-installment" id="J_prodInstallment" style="display: block;">
                        分期价 ￥<span class="vm-price">286.48</span>x<span class="vm-period">12</span>期<span class="vm-rate"></span>
                    </div>
                    <div class="prod-info-message">
                        <p class="active">限量领券更优惠 | 骁龙845 屏下指纹</p>
                    </div>
                </section>
                <section class="prod-service">
                    <ul>
                        <li><i class="fa fa-check-circle-o"></i>花呗分期</li>
                        <li><i class="fa fa-check-circle-o"></i>顺丰发货</li>
                        <li><i class="fa fa-check-circle-o"></i>7天无理由退货</li>
                    </ul>
                    <i class="fa fa-angle-right"></i>
                </section>
            </div>
        </section>
        <footer class="footer-summary">
            <div class="mod-action">
                <a class="vm-service" data-mtype="mall_de_buy1_ocs" data-bh="click_mall_de_buy1_ocs" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);" id="J_kefu"><i class="fa fa-user-circle"></i><span>客服</span></a>
                <a class="vm-favorite" id="J_favorite" data-mtype="mall_de_favorite" data-bh="click_mall_de_favorite"><i class="fa fa-star-o"></i><span>收藏</span></a>
                <a class="vm-cart" href="//cart.mall.meizu.com/" data-mtype="mall_de_cart" data-bh="click_mall_de_cart"><i class="fa fa-cart-plus"></i><span>购物车</span></a>
            </div>
            <button class="btn hide" type="button">加入购物车</button>
            <button class="btn btn-danger" type="button">立即购买</button>
        </footer>
    </div>
</template>

<script>

export default {
}
</script>
<style lang="stylus">
.app-detail
    font-family arial
    .header
        position fixed
        top 0
        left 0
        right 0
        z-index 2
        height 0.39rem
        background transparent
        .header-back, .header-home
            position absolute
            top 0.05rem
            z-index 3
            padding 0 0.1rem
            color #666
            .fa
                font-size 0.3rem
                line-height 1em
        .header-back
            left 0.024rem
        .header-home
            right 0.024rem
    .main
        padding-top 0.195rem
        overflow hidden
        .banner-box
            height 2.24rem
            background #fff
            .banner-item
                text-align center
                img
                    height 2rem
        .mint-swipe-indicators
            text-align center
            padding 0
            .mint-swipe-indicator
                background-color #e5e5e5
            .is-active
                background-color #00c3f5
        .prod
            margin-top 2px
            box-shadow 0 0 1px #eee
            border-top 1px solid #e5e5e5
            background #eee
            overflow hidden
            font-size 13px
            .prod-info
                position relative
                padding 0.11rem 0 0.06rem 0.1rem
                background #fff
                overflow hidden
                .prod-info-header
                    position relative
                    padding-bottom 0.03rem
                    .vm-title
                        display inline-block
                        color #333
                        font-size 16px
                        line-height .185rem
                        width 2.31rem
                        font-weight 400
                        overflow-wrap break-word
                        word-break break-all
                .prod-info-price
                    position relative
                    height 0.222rem
                    line-height 0.222rem
                    .mod-price
                        margin-right 0.053rem
                        color #f0415f
                        display inline-flex
                        font-size 0.18rem
                .prod-info-installment
                    height 0.204rem
                    line-height 0.204rem
                    font-size 14px
                    color #f0415f
                .prod-info-message
                    font-size 13px
                    line-height 0.222rem
                    color #f0415f
            .prod-service
                height 0.4rem
                line-height 0.4rem
                background #fff
                overflow hidden
                position relative
                ul
                    margin-left 0.106rem
                    padding-right 0.133rem
                    border-top 1px solid #e5e5e5
                    display flex
                    flex-wrap wrap
                    li
                        display inline-block
                        margin-right 0.1111rem
                        font-size 12px
                        color #999
                        .fa
                            display inline-block
                            width 12px
                            height 12px
                            font-size 0.14rem
                            line-height 0.14rem
                            vertical-align -3%
                            margin-right 0.0444rem
                            color #00c3f5
                .fa-angle-right
                    position absolute
                    right 0.07rem
                    top 0.12rem
                    width 0.16rem
                    height 0.16rem
                    font-size 0.14rem
                    line-height 0.16rem
                    color #bbb
    .footer-summary
        display flex
        background #fff
        z-index 99
        position fixed
        left 0
        bottom 0
        width 100%
        .mod-action
            width 1.2rem
            border-top 1px solid #e5e5e5
            display flex
            justify-content space-around
            margin-left -1px
            a
                width 50%
                height 0.39rem
                border-left 1px solid #e5e5e5
                text-align center
                display flex
                flex-direction column
                justify-content center
                color #999
                .fa
                    font-size 0.2rem
                .fa-user-circle
                    color #00c3f5
                span
                    line-height 1
                    padding-top 2px
        .btn
            display inline-block
            transform-origin 0px 0px
            opacity 1
            transform scale(1, 1)
            flex 1 1 auto
            line-height 0.4rem
            width: 1rem;
            color: #fff;
            font-size: 14px;
            text-align: center;
            box-sizing: border-box;
            border: none;
            outline: none;
            background-color: #00c3f5;
        .btn-danger
            background-color #f0415f
</style>
