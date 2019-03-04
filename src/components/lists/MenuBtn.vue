<template>
    <li>
        <a class="nav-link" :href="iteminfo.href">
            <img  alt=""
                :src="iteminfo.img"
                :style="{width:imgWidth}">
            <span
                :style="spanStyl"
            >{{ iteminfo.name }}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        iteminfo: Object,
        imgWidth: String,
        spanStyl: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.nav-link
    img
        display block
        margin 0 auto
    span
        font-size 2.96296vw
        line-height 1.5
        color #000
</style>
