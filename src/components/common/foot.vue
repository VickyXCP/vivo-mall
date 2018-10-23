<template>
  <div class="foot">
    <!--<mt-tabbar v-model="selected">
      <mt-tab-item id="推荐">
        <router-link to="/"><i></i><span>推荐</span></router-link>
      </mt-tab-item>
      <mt-tab-item id="应用">
        <router-link to="/application"><i></i><span>应用</span></router-link>
      </mt-tab-item>
      <mt-tab-item id="游戏">
        <router-link to="/games"><i></i><span>游戏</span></router-link>
      </mt-tab-item>
      <mt-tab-item id="排行">
        <router-link to="/ranking"><i></i><span>排行</span></router-link>
      </mt-tab-item>
      <mt-tab-item id="管理">
        <router-link to="/manage"><i></i><span>管理</span></router-link>
      </mt-tab-item>
    </mt-tabbar>-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/" @click.native="()=>$router.push({path: '/'})">
        <i></i><span>推荐</span>
      </mt-tab-item>
      <mt-tab-item id="/application" @click.native="()=>$router.push({path: '/application'})">
        <i></i><span>应用</span>
      </mt-tab-item>
      <mt-tab-item id="/games" @click.native="()=>$router.push({path: '/games'})">
        <i></i><span>游戏</span>
      </mt-tab-item>
      <mt-tab-item id="/ranking" @click.native="()=>$router.push({path: '/ranking'})">
        <i></i><span>排行</span>
      </mt-tab-item>
      <mt-tab-item id="/manage" @click.native="()=>$router.push({path: '/manage'})">
        <i></i><span>管理</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      selected: '/'
    }
  },
  created () {
    // console.log(this.$route)
    // console.log(this.$router)
    this.$router.push({path: `${this.selected}`})
  },
  watch: {
    selected: (val, oldVal) => {
      // console.log(val)
      this.selected = val
    }
  }
}
</script>

<style lang="less">

</style>
