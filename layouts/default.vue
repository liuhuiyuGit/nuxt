<template>
  <div>
    <!-- header头部 -->
    <header class="header-box">
      <div class="main-content navbar">
        <img src="@/static/img/logo.png" class="logo" />
        <div class="navbar-text-box">
          <div class="navbar-text-box-left">
            <nuxt-link class="navbar-text navbar-text-active" to="/"
              >首页</nuxt-link
            >
            <nuxt-link class="navbar-text" to="/">在线存管</nuxt-link>
            <nuxt-link class="navbar-text" to="/">产品服务</nuxt-link>
            <nuxt-link class="navbar-text" to="/">解决方案</nuxt-link>
            <nuxt-link class="navbar-text" to="/">帮助中心</nuxt-link>
          </div>
          <div class="navbar-text-box-right">
            <nuxt-link class="navbar-text" to="/">查验证书</nuxt-link>
          </div>
        </div>
        <button @click="toLogin" class="login-button btn-active">登录</button>
      </div>
    </header>
    <Nuxt />
    <!-- footer页脚 -->
    <footer class="footer-box">
      <div class="main-content">
        <div class="footer-top">
          版权所有 © 江苏易存证科技有限公司 2021-2031
        </div>
        <div class="footer-bottom">
          <span
            >苏ICP备2022002506号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span
            ><img src="@/static/img/publicSecurity-icon.png" alt="" />
            苏公网安备32059002003884号</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default',
  methods: {
    toLogin() {
      this.$router.push({
        path: `/login`,
      })
    },
  },
}
</script>

<style lang="less" scoped>
.header-box {
  width: 100%;
  height: 100px;
  background-color: #fff;
  .navbar {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo {
    width: 52px;
    height: 52px;
  }
  .navbar-text-box {
    flex: 1;
    display: flex;
    justify-content: space-between;
    width: 996px;
    .navbar-text {
      font-size: 20px;
      color: #333333;
      padding: 0 30px;
    }
    .navbar-text-active {
      color: @theme-color;
    }
  }
  .login-button {
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    border-radius: 5px;
    background-color: @theme-color;
  }
}
.footer-box {
  background-color: #3c4353;
  .footer-top {
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccccc;
    border-bottom: 1px solid #495164;
    font-size: 16px;
  }
  .footer-bottom {
    height: 40px;
    color: #838a9d;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 14px;
      height: 16px;
    }
  }
}
</style>
