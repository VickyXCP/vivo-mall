<template>
  <div class="top">
    <div class='t-wrapper'>
      <div><i></i><input placeholder='360借条'/><i></i></div>
      <span><i></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang='less' scoped>
.top{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 2.5rem;
  border: 1px solid black;
  box-sizing: border-box;

}
</style>
