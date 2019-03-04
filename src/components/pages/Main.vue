<template>
  <div class="content">
    <Header :all_nav="all_nav"></Header>

    <NavBar></NavBar>

    <section id="content-main">
      <router-view></router-view>
    </section>

    <Footer :footer_data="footer_data"></Footer>

  </div>
</template>

<script>
import Header from 'components/layout/Header'
import NavBar from 'components/layout/NavBar'
import Footer from 'components/layout/Footer'
import http from 'utils/http'
import {scroll} from "utils/scroll"

export default {
  data () {
    return {
      data: null,
      renderHeader: null,
      renderFooter: null,
      callbackStr: {
        lang: "renderMLangList",
        header: "renderHeader",
      }
    }
  },
  components: {
    Header, NavBar, Footer
  },
  computed: {
    lists(){
        return this.data && JSON.parse(this.data.slice(this.callbackStr.index.length+1,-1)) || {}
    },
    all_nav () {
      return this.renderHeader && JSON.parse(this.renderHeader.slice(this.callbackStr.header.length+1,-1)) || {}
    },
    footer_data () {
      return this.renderFooter && JSON.parse(this.renderFooter.slice(this.callbackStr.lang.length+1,-1)) || {}
    }
  },
  beforeCreate() {

    // scroll({el: '#main'})

    //头部数据
    http({
      method: "get",
      url: "/data/jsdata.jsonp",                  //数据1,2,3
      params: {
        "callback": "renderHeader",            //数据3
        "blockIds": "205,206,207,208"
      }
    })
    .then( res => {
      this.renderHeader = res.data
    } )
    .catch( err => console.log(err) )

    //底部数据
    http({
      method: "get",
      url: "/data/jsdata.jsonp",                  //数据1,2,3
      params: {
        "callback": "renderMLangList",         //数据2
        "blockIds": "328,349"
      }
    })
    .then( res => {
      this.renderFooter = res.data
    } )
    .catch( err => console.log(err) )

    
  }
}
</script>
<style lang="stylus">
@import "~styles/_banner.styl"
.content
  font-family Helvetica,Tahoma,Arial,"PingFang SC","Hiragino Sans GB","Heiti SC",STXihei,"Microsoft YaHei",SimHei,"WenQuanYi Micro Hei"
  font-size 0.14rem
  #content-main
    background-color #f4f4f4
</style>
