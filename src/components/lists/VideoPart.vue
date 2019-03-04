<template>
    <div class="item">
        <a class="item-link" target="_blank" :href="iteminfo.video">
            <img class="item-img" :src="iteminfo.img">
            <p class="item-title">{{ iteminfo.title }}</p>
        </a>
    </div>
</template>

<script>

export default {
    props: {
        iteminfo: Object
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
    margin-bottom .92593vw
    .item-link
        color #333
        font-size 3.33333vw
        display block
        .item-img
            display: inline-block;
            width: 100%;
            min-height: 1rem;
        .item-title
            position relative
            display inline-block
            line-height 1
            padding 2.5vw 0
            padding-right 0.16rem
            font-size 3.33333vw
            margin 0 auto
            max-width 100%
            $line_ellipsis()
            &:after
                content ""
                position absolute
                top 30%
                right 0
                width 3.33333vw
                height 3.33333vw
                background url(//m2.res.meizu.com/static/cn/global/images/icon-play-gray_5ba3655.png) no-repeat
                background-size cover
</style>