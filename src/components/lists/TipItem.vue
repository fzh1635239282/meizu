<template>
    <span class="item">
        <img :src="iteminfo.img" alt="">
        {{ iteminfo.name }}
    </span>
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
.item
    display inline-block
    padding-left 5vw
    font-size 2.6vw
    color #999
    position relative
    box-sizing border-box
    line-height 1.5
    img
        position absolute
        width 3.51852vw
        height 3.51852vw
        background #999
        left 0
        border-radius 50%
        top 50%
        transform translateY(-50%)
</style>
