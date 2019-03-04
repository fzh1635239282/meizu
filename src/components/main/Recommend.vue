<template>
  <div class="app-recommend">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" :speed="250" class="banner-box">
      <mt-swipe-item class="banner-item"
        v-for="(item, index) in banner"
        :key="index"
      >
        <ImgLink :iteminfo="item"></ImgLink>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 热点 -->
    <div class="hot-tip-bar">
      <TipItem
        v-for="(item, index) in hot_tip"
        :key="index"
        :iteminfo="item"
      ></TipItem>
    </div>
    <ul class="hot-site">
      <MenuBtn class="hot-site-item"
        v-for="(item, index) in hot_site"
        :key="index"
        :iteminfo="item"
        :imgWidth="'8.33333vw'"
        :spanStyl="{'color': '#000',
                    'line-height': '2.6',
                    'font-size': '3.33333vw'}"
      ></MenuBtn>
    </ul>
    <!-- 广告banner -->
    <div class="adver-banner">
      <div class="row">
        <ImgLink v-if="adver_banner[0]" :iteminfo="adver_banner[0]"></ImgLink>
      </div>
      <div class="row">
        <ImgLink v-if="adver_banner[1]" :iteminfo="adver_banner[1]"></ImgLink>
        <ImgLink v-if="adver_banner[2]" :iteminfo="adver_banner[2]"></ImgLink>
      </div>
    </div>
    <!-- 智能手机 -->
    <div class="index-phone-list">
      <h3 class="list-title">智能手机</h3>
      <div class="adver">
        <ImgLink
          v-for="(item, index) in phone_adver"
          :key="index"
          :iteminfo="item"
        ></ImgLink>
      </div>
      <div class="phone-list goods-list">
        <GoodsInfo 
          v-for="(item, index) in phone_goods"
          :key="index"
          :iteminfo="item"
          :skuinfo="getSkuInfo(item.skuid)"
        ></GoodsInfo>
      </div>
    </div>
    <!-- 魅族声学 -->
    <div class="index-music-list">
      <h3 class="list-title">魅族声学</h3>
      <div class="adver">
        <ImgTextLink
          v-for="(item, index) in music_adver"
          :key="index"
          :iteminfo="item"
          :class="index % 2 ? 'img-right' : 'img-left'"
          :skuinfo="getSkuInfo(item.skuid)"
        ></ImgTextLink>
      </div>
      <div class="music-list goods-list">
        <GoodsInfo 
          v-for="(item, index) in music_goods"
          :key="index"
          :iteminfo="item"
          :skuinfo="getSkuInfo(item.skuid)"
        ></GoodsInfo>
      </div>
    </div>
    <!-- 智能配件 -->
    <div class="index-parts-list">
      <h3 class="list-title">智能配件</h3>
      <div class="adver">
        <ImgTextLink
          v-for="(item, index) in parts_adver"
          :key="index"
          :iteminfo="item"
          :class="index % 2 ? 'img-right' : 'img-left'"
          :skuinfo="getSkuInfo(item.skuid)"
        ></ImgTextLink>
      </div>
      <div class="parts-list goods-list">
        <GoodsInfo 
          v-for="(item, index) in parts_goods"
          :key="index"
          :iteminfo="item"
          :skuinfo="getSkuInfo(item.skuid)"
        ></GoodsInfo>
      </div>
    </div>
    <!-- 生活周边 -->
    <div class="index-life-list">
      <h3 class="list-title">生活周边</h3>
      <div class="adver">
        <ImgTextLink
          v-for="(item, index) in life_adver"
          :key="index"
          :iteminfo="item"
          :class="index % 2 ? 'img-right' : 'img-left'"
          :skuinfo="getSkuInfo(item.skuid)"
        ></ImgTextLink>
      </div>
      <div class="life-list goods-list">
        <GoodsInfo 
          v-for="(item, index) in life_goods"
          :key="index"
          :iteminfo="item"
          :skuinfo="getSkuInfo(item.skuid)"
        ></GoodsInfo>
      </div>
    </div>
    <!-- 社区热帖 -->
    <div class="index-comm-list">
      <h3 class="list-title">社区热帖</h3>
      <div class="comm-list goods-list">
        <Talk 
          v-for="(item, index) in comm_talks"
          :key="index"
          :iteminfo="item"
          :comm_lists="getCommInfo(item.commentId)"
        ></Talk>
      </div>
    </div>
    <!-- Flyme -->
    <div class="index-flyme-list">
      <h3 class="list-title">Flyme</h3>
      <div class="flyme-list goods-list">
          <FlymePart
            v-for="(item, index) in flyme_part"
            :key="index"
            :iteminfo="item"
          ></FlymePart>
      </div>
    </div>
    <!-- 精彩视频 -->
    <div class="index-video-list">
      <h3 class="list-title">精彩视频</h3>
      <div class="video-list goods-list">
          <VideoPart
            v-for="(item, index) in video_part"
            :key="index"
            :iteminfo="item"
          ></VideoPart>
      </div>
    </div>
    <div class="back-to-top" @click="goTop"><span>返回顶部</span></div>
  </div>
</template>

<script>
import Banner from "components/lists/Banner"
import TipItem from "components/lists/TipItem"
import MenuBtn from "components/lists/MenuBtn"
import ImgLink from "components/lists/ImgLink"
import GoodsInfo from "components/lists/GoodsInfo"
import ImgTextLink from "components/lists/ImgTextLink"
import Talk from "components/lists/Talk"
import FlymePart from "components/lists/FlymePart"
import VideoPart from "components/lists/VideoPart"
import http from "utils/http"

export default {
  data () {
    return {
      commIds: null,
      indexDmsCB: null,
      callbackStr: {
        index: "indexDmsCB",
        comm: "callback"
      }
    }
  },
  methods: {
    getSkuInfo (skuid) {
      let skuInfo = null
      this.sku_info.forEach(function(val, i) {
        if(val.skuId == skuid) {
          skuInfo = val
        }
      })
      return skuInfo
    },
    getCommInfo (commid) {
      let commInfo = null
      this.comm_lists.forEach(function(val, i) {
        if(val.tid == commid) {
          commInfo = val
        }
      })
      return commInfo
    },
    goTop(e) {
      e.view.scrollTo(0, 0, 1000)
    }
  },
  computed: {
    banner () {
      return this.indexDmsCB && this.indexDmsCB.block_311 || []
    },
    hot_tip () {
      return this.indexDmsCB && this.indexDmsCB.block_313 || []
    },
    hot_site () {
      return this.indexDmsCB && this.indexDmsCB.block_314 || []
    },
    adver_banner () {
      return this.indexDmsCB && this.indexDmsCB.block_315 || []
    },
    phone_adver () {
      return this.indexDmsCB && this.indexDmsCB.block_316 || []
    },
    phone_goods () {
      return this.indexDmsCB && this.indexDmsCB.block_317 || []
    },
    sku_info () {
      return this.indexDmsCB && this.indexDmsCB.skuInfo || []
    },
    music_adver () {
      return this.indexDmsCB && this.indexDmsCB.block_355 || []
    },
    music_goods () {
      return this.indexDmsCB && this.indexDmsCB.block_319 || []
    },
    parts_adver () {
      return this.indexDmsCB && this.indexDmsCB.block_356 || []
    },
    parts_goods () {
      return this.indexDmsCB && this.indexDmsCB.block_321 || []
    },
    life_adver () {
      return this.indexDmsCB && this.indexDmsCB.block_357 || []
    },
    life_goods () {
      return this.indexDmsCB && this.indexDmsCB.block_323 || []
    },
    comm_talks () {
      return this.indexDmsCB && this.indexDmsCB.block_326 || []
    },
    comm_lists(){
      return this.commIds && JSON.parse(this.commIds.slice(this.callbackStr.comm.length+1,-1)).data.list || []
    },
    flyme_part () {
      return this.indexDmsCB && this.indexDmsCB.block_353 || []
    },
    video_part () {
      return this.indexDmsCB && this.indexDmsCB.block_327 || []
    }
  },
  components: {
    Banner, TipItem, MenuBtn, ImgLink, GoodsInfo, ImgTextLink, Talk, FlymePart, VideoPart
  },
  beforeCreate () {
    //recommend页面数据
    http({
      method: "get",
      url: "/data/jsdata.jsonp",                  //数据1,2,3
      params: {
        "callback": "indexDmsCB",                 //数据1
        "blockIds": "311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357"
      }
    })
    .then( res => {
      this.indexDmsCB = JSON.parse(res.data.slice(this.callbackStr.index.length+1,-1))

      let commids = []
      this.indexDmsCB.block_326.forEach(function(val) {
        commids.push(val.commentId)
      })
      
      http({
        method: "get",
        url: "/index.php",                       //数据4
        params: {
          "mod": "thread",                       //数据4
          "action": "info",
          "tids": commids.join(','),
          "_": Date.now(),
          "callback": "callback"
        }
      })
      .then( res => {
        this.commIds = res.data
      } )
      .catch( err => console.log(err) )
    } )
    .catch( err => console.log(err) )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.app-recommend
  .banner-box
    width 100%
    height 51.85185vw
    font-size 0
    .banner-item
      display flex
  .hot-tip-bar
    display flex
    justify-content space-between
    align-items center
    padding 2.4vw 7.40741vw
    text-align center
    background-color #f7f7f7
  .hot-site
    padding-top 4vw
    padding-bottom 1vw
    text-align center
    background-color #FFF
    margin-bottom 2.77778vw
    .hot-site-item
      display inline-block
      width 20vw
      height 17vw
      margin 0 1vw
      span
        color #000
        line-height 2.6
        font-size 3.33333vw
  .adver-banner
    display flex
    flex-wrap wrap
    height 69vw
    overflow hidden
    .row
      display flex
      flex-direction column
      width 50%
      height 100%
  .list-title
    font-size 4.81481vw
    font-weight 700
    padding 6vw 0 7vw
    text-align center
    position relative
    &:after
      position absolute
      content ""
      width 6vw
      height .7vw
      left 50%
      transform translate(-50%)
      bottom 4vw
  .goods-list
    display flex
    flex-wrap wrap
    background #f4f4f4
    padding 1.5vw 0
    align-items center
    justify-content space-between
  .index-phone-list
    .list-title
      &:after
        background #0bbbef
  .index-music-list
    .list-title
      &:after
        background #ff6363
  .index-parts-list
    .list-title
      &:after
        background #7143ff
  .index-life-list
    .list-title
      &:after
        background #0bbbef
  .index-comm-list
    .list-title
      &:after
        background #6fdc39
  .index-flyme-list
    .list-title
      &:after
        background #147df0
  .back-to-top
    display flex
    justify-content center
    align-items center
    height 17.22222vw
    font-size 0.15rem
    margin-top -3vw
    span
      display inline-block
      color #999
      font-size 4.16667vw
</style>
