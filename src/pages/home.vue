<template>
  <div class="home">
    <top></top>
    <div class='content'>
      home page
      <button @click='$router.push({path: "/register"})'>click</button>
    </div>
  </div>
</template>

<script>
import top from '../components/common/top'

export default {
  name: 'home',
  components: {
    top
  }
}
</script>

<style scoped>

</style>
