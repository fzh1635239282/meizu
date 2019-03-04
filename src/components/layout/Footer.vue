<template>
  <div class="app-footer">
    <div class="footer-service">
      <FootImgLink
        v-for="(item, index) in img_link"
        :key="index"
        :iteminfo="item"
      ></FootImgLink>
    </div>
    <div class="footer-contact-wp">
      <a class="footer-btn tel" href="tel:400-788-3333">400-788-3333</a>
      <a class="footer-btn kefu" href="http://url.meizu.com/ols_M?click=mall_index_buttom_online">在线客服</a>
    </div>
    <div class="footer-nav">
      <p class="footer-copy">
        <a href="http://www.miitbeian.gov.cn/">粤ICP备13003602号-2</a>
        <a href="https://www3.res.meizu.com/static/cn/_partial/footer/images/icp2_fb8db74.jpg">合字B2-20170010</a><br>
        <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg">营业执照</a>
        ©2018&nbsp;Meizu&nbsp;
        <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg" target="_blank">All rights reserved</a>
      </p>
      <div class="lang-choose-container" :style="{'overflow': isOnchange ? 'visible' : 'hidden'}">
        <ul @click="lang_click" :style="{'border-color': isOnchange ? '#e8e8e8' : 'rgba(255,255,255,0)'}">
          <Language
            v-for="(item, index) in lang_data"
            :key="index"
            :iteminfo="item"
            :class="'lang'+index"
            :isLink="true"
          ></Language>
          <Language 
            v-if="lang_data[0]"
            class="active lang0"
            :class="isOnchange ? 'onchange' : 'unchange'"
            :iteminfo="lang_data[0]"
            :isLink="false"
          ></Language>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FootImgLink from "components/lists/FootImgLink"
import Language from "components/lists/Language"

export default {
  data () {
    return {
      isOnchange : false
    }
  },
  props: {
    footer_data: Object
  },
  methods: {
    lang_click (e) {
      this.isOnchange = !this.isOnchange
    }
  },
  computed: {
    img_link () {
      return this.footer_data && this.footer_data.block_328 || []
    },
    lang_data () {
      return this.footer_data && this.footer_data.block_349 || []
    }
  },
  components: {
    FootImgLink, Language
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.app-footer
  .footer-service
    display flex
    padding 4vw 4vw 0
    overflow hidden
  .footer-contact-wp
    display flex
    padding 0 3vw
    padding-top 6.01852vw
    .footer-btn
      color #fff
      text-indent 10.5vw
      display block
      height 9.72222vw
      line-height 9.72222vw
      font-size 4.25926vw
      text-align left
      border-radius 5vw
      margin 0 2vw
      flex 1
      overflow hidden
    .tel
      background: #00B4FF url(//m2.res.meizu.com/static/cn/_partial/footer/images/icon-tel_f3f4a41.png) no-repeat;
      background-size: 4.25926vw;
      background-position: 3.5vw center;
      color: #fff;
      text-indent: 10.5vw;
    .kefu
      background #00B4FF url(//m2.res.meizu.com/static/cn/_partial/footer/images/icon-chat-white_b7d5704.png) no-repeat
      background-size 5vw
      background-position 8.5vw center
      border .5vw solid #00B4FF
      color #fff
      text-indent 16vw
  .footer-nav
    font-size 0.1rem
    text-align left
    width 100%
    padding 5vw 4vw 5vw 5vw
    box-sizing border-box
    .footer-copy
      font-size 2.26852vw
      line-height 1.6
      color #999
      text-align left
      padding 0
      display inline-block
      width 72%
      a
        color #999
    .lang-choose-container
      width 27%
      margin-right 0
      position relative
      top -2.5vw
      display inline-block
      vertical-align middle
      color #3b3b3b
      font-size 3.2vw
      position relative
      overflow hidden
      height 0.3rem
      line-height 0.3rem
      padding-right 5%
      box-sizing border-box
      ul
        position absolute
        bottom 0
        left 0
        width 100%
        border 1px solid rgba(255,255,255,0)
        .onchange
          background-color #f6f6f6
</style>
