<template>
  <div>
    <div class="login-box">
      <!-- <img class="login-bg" src="@/static/img/login/login-bg.png" alt="" /> -->
      <div class="login-box-card"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index2',
  layout: 'blog',
}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  background:url('@/static/img/login/login-bg.png') no-repeat;
  background-size: 60% 100%;
  .login-bg {
    // width: auto;
    width: 50%;
    height: 100vh;
    // flex: 1;
  }
  .login-box-card {
    width: 100%;
    height: 100vh;
    // background-color: pink;
  }
}
</style>
