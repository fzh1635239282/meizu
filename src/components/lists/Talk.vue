<template>
    <div class="item">
        <a :href="iteminfo.href" class="link">
            <div class="comment-img-wp">
                <img :src="iteminfo.img" alt="">
            </div>
            <div class="comment-user-info" v-if="comm_lists">
              <img class="user-header" :src="comm_lists.avatar" alt="">
              <span class="comment-username">{{ comm_lists.author }}</span>
            </div>
            <p>{{ iteminfo.description }}</p>
            <p class="comment-tip">{{ iteminfo.tips }}</p>
        </a>
    </div>
</template>

<script>

export default {
    props: {
        iteminfo: Object,
        comm_lists: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~styles/_base.styl"

.item
    position relative
    width 49.2%
    margin-bottom 1.11111vw
    box-sizing border-box
    height 55.55556vw
    background-color #fff
    .link
        color #333
        .comment-img-wp
            height 25vw
            overflow hidden
            img
                width 100%
        .comment-user-info
            display flex
            justify-content flex-start
            align-items center
            height 5.92593vw
            line-height 5.92593vw
            margin-top 0.1rem
            padding 0 2.77778vw
            overflow hidden
            .user-header
                width 5.55556vw
                border 1px solid #fff
                margin-right .5em
                border-radius 50%
            .comment-username
                text-align left
                font-size 3.33333vw
                float left
        p
            margin 2.22222vw 0
            padding 0 2.77778vw
            font-size 3.33333vw
            text-align left
            line-height 3.98148vw
            min-height 0.42rem
            max-height 0.5rem
            overflow hidden
        .comment-tip
            color #999
            font-size 2.22222vw
            margin-top 1.38889vw
            padding 0 2.77778vw
            text-align left
</style>