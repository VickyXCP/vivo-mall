<template>
  <div class='reg'>
    <header><i></i><span>vivo账号注册</span></header>
    <form>
      <div class='reg-text'>
        <label for='phone'>账号</label>
        <input id='phone' placeholder='手机号' v-model='phone'/>
      </div>
      <div class='reg-text'>
        <label for='cache'>验证码</label>
        <input id='cache' placeholder='请输入验证码' v-model='cache'/>
        <span>获取验证码</span>
      </div>
    </form>
    <div class='btn'>
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      phone: null,
      cache: null
    }
  }
}
</script>

<style lang='less' scoped>
  .reg {
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
    header {
      height: 3rem;
      line-height: 3rem;
      border-bottom: 2px solid #f1f1f1;
      box-sizing: border-box;
      background-color: #f6f6f6;
      font-weight: bolder;
      font-size: 1.2rem;
      color: #2d2d2d;
      text-align: center;
    }
    form {
      margin-top: 1rem;
      background-color: #fff;
      .reg-text {
        padding: .7rem 1.5rem;
        position: relative;
        label {
          color: #1a1a1a;
          font-weight: 500;
        }
        input {
          position: absolute;
          right: 0;
          width: calc(100% - 5.5rem);
          padding: .5rem;
          /*border: .1rem solid red;*/
          font-size: 1rem;
        }
        &:first-of-type>input:first-of-type {
          border-bottom: 1px solid #444;
        }
        span {
          position: absolute;
          right: 1rem;
          color: #369ff7;
        }
      }
    }
  }
</style>
