<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/common/foot'

export default {
  name: 'App',
  components: {
    Foot
  },
  created () {
    this.func(document, window)
  },
  methods: {
    func: (doc, win) => {
      var docEl = win.document.documentElement
      var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      /**
       * ================================================
       *   设置根元素font-size
       * 当设备宽度为375(iPhone6)时，根元素font-size=16px;
       × ================================================
       */
      let refreshRem = function () {
        const clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth
        // console.log(clientWidth)
        if (!clientWidth) return
        let fz
        const width = clientWidth
        fz = 16 * width / 375
        docEl.style.fontSize = fz + 'px'
      }
      if (!doc.addEventListener) return
      win.addEventListener(resizeEvt, refreshRem, false)
      doc.addEventListener('DOMContentLoaded', refreshRem, false)
      refreshRem()
    }
  }
}
</script>

<style lang="less">
  @import "assets/styles/common";
</style>
