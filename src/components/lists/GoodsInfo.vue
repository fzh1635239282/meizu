<template>
    <div class="item">
        <a :href="iteminfo.href" class="link">
            <img :src="iteminfo.img" :alt="iteminfo.name">
            <div class="info" :class="'theme'+iteminfo.theme">
                <p class="goods-name">{{ iteminfo.name }}</p>
                <p class="slogan">
                    <span>
                        <em class="label">{{ iteminfo.skuLable }}</em>
                        <strong class="title">{{ iteminfo.title }}</strong>
                    </span>
                </p>
                <p class="price" :class="skuinfo.skuMinPrice ? 'twoPrice' : 'onePrice'">
                    <i>￥</i>{{ getPrice(skuinfo.skuMinPrice ? skuinfo.skuMinPrice : skuinfo.skuPrice) }}
                    <s class="skuPrice">￥{{ getPrice(skuinfo.skuPrice) }}</s>
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        iteminfo: Object,
        skuinfo: Object
    },
    methods: {
        getPrice(price) {
            return Number.parseInt(price)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~styles/_base.styl"

.item
    position relative
    width 49.2%
    text-align center
    background #fff
    padding-top 6.2963vw
    padding-bottom 4.90741vw
    margin-bottom 1.11111vw
    box-sizing border-box
    .link
        display block
        img
            display inline-block
            width 85%
            min-height 1rem
        .info
            .goods-name
                font-size 3.88889vw
                color #333
                font-weight 700
                $line_ellipsis()
            .slogan
                display flex
                justify-content center
                align-items center
                font-size 3.33333vw
                color #999
                margin 0 1.5vw
                margin-top 1.75926vw
                margin-bottom 2.5vw
                $line_ellipsis()
                span
                    line-height 4.62963vw
                    font-style normal
                    $line_ellipsis()
                    border 0.01rem solid transparent
                    .title
                        font-weight normal
                        padding 0 1.25vw
            .price
                font-size 3.88889vw
                color #c00
                i
                    font-style normal
                    font-size 2.8vw
            .onePrice
                .skuPrice
                    display none
            .twoPrice
                .skuPrice
                    display inline
                    color #999
                    font-size 3vw
                    padding-left 1vw
        .theme0
            .label
                display none
        .theme1
            .slogan
                span
                    color #c00
                    border 0.01rem solid #c00
                    .label
                        display inline
                        float left
                        padding 0 1.25vw
                        color #fff
                        background-color #c00
            .price
                font-size 3.88889vw
                color #c00
</style>
