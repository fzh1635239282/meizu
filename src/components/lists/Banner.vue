<template>
    <a :href="iteminfo.href" class="banner-item">
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
.banner-item
    display block
    width 3.75rem
    img
        width 100%
</style>
