<template>
    <a :href="iteminfo.href" class="item">
        <img :src="iteminfo.img" alt="">
    </a>
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
    display block
    flex 1
    img
        display block
        width 100%
        height 100%
</style>
