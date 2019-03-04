<template>
    <li class="item">
        <a @click="toLink">
            <img :src="iteminfo.img" alt="">
            <span class="lang-title">{{ iteminfo.lang }}<i class="icon-more"></i></span>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        iteminfo: Object,
        isLink: Boolean
    },
    methods: {
        toLink (e) {
            if(this.isLink) location.href = this.iteminfo.href
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.item
    text-align: left;
    padding-left: 6%;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    a
        display block
        img
            display inline-block
            vertical-align middle
            width 0.18rem
            height 0.18rem
            margin-right 0.05rem
            margin-top -0.04rem
        .lang-title
            position relative
            z-index 1
            font-size 3.7037vw
            color #3b3b3b
</style>
