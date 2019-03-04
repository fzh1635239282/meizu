<template>
    <div class="item">
        <a class="item-link" target="_blank" :href="iteminfo.Texturl">
            <img class="item-img" :src="iteminfo.img">
            <p class="item-title">{{ iteminfo.text }}</p>
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
    margin-bottom 1.11111vw
    .item-link
        color #333
        font-size 3.33333vw
        display block
        .item-img
            display: inline-block;
            width: 100%;
            min-height: 100px;
        .item-title
            padding 2.22222vw 0
            margin 0 auto
            max-width 100%
            $line_ellipsis()
</style>