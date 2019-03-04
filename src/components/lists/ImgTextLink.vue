<template>
    <a :href="iteminfo.href" class="item">
        <img :src="iteminfo.imgHolder" alt="">
        <div class="info">
            <h4>{{ iteminfo.name }}</h4>
            <p>{{ iteminfo.title }}</p>
            <span class="price"><i>￥</i>{{ getPrice(skuinfo.skuMinPrice ? skuinfo.skuMinPrice : skuinfo.skuPrice) }}<s v-if="skuinfo.skuMinPrice">￥{{ getPrice(skuinfo.skuPrice) }}</s></span>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        iteminfo: Object,
        isleft: Boolean,
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
.item
    display flex
    height 43.88889vw
    overflow hidden
    img
        width 50%
    .info
        width 50%
        color #fff
        line-height 6vw
        padding 3.88889vw
        position relative
        h4
            font-size 4.62963vw
            width 33.33333vw
            overflow hidden
            font-weight 400
        p
            font-size 3.33333vw
            color rgba(255,255,255,.7)
            position relative
            line-height 1.2
            padding 1.2vw 0
            &:after
                position absolute
                content ""
                width 5vw
                height .5vw
                background #fff
                left 0
                bottom -1.5vw
        .price
            position absolute
            left 3.88889vw
            bottom 6vw
            font-size 4.62963vw
            i
                font-style normal
            s
                margin-left 2vw
                font-size 2.77778vw
                color rgba(255,255,255,.7)
.img-left
    flex-direction row
    background #F55C5C
.img-right
    flex-direction row-reverse
    background #7063c9
</style>
