<template>
  <div>
    <!-- banner -->
    <div class="bg-box">
      <div class="main-content por">
        <div class="title">苏州存<br />在线数据存证平台</div>
        <div class="content-text">基于“区块链+公证”的在线数据存证平台</div>
        <img class="banner-img" src="@/static/img/banner-img.png" alt="" />
      </div>
    </div>
    <!-- 存证操作模块 -->
    <OperationIndex />
    <!-- 解决方案模块 -->
    <SolutionIndex />
    <!-- 地图模块 -->
    <MapIndex />
  </div>
</template>

<script>
import OperationIndex from '@/components/operation/index.vue'
import SolutionIndex from '@/components/solution/index.vue'
import MapIndex from '@/components/map/index.vue'
export default {
  name: 'IndexPage',
  components: {
    OperationIndex,
    SolutionIndex,
    MapIndex,
  },
}
</script>

<style lang="less" scoped>
.bg-box {
  background: linear-gradient(212deg, #4d8ffc 0%, #183eb4 100%);
  height: 500px;
  .title {
    position: absolute;
    padding-top: 151px;
    color: #ffffff;
    font-weight: Regular;
    font-size: 52px;
    line-height: 80px;
  }
  .content-text {
    position: absolute;
    color: #ffffff;
    font-size: 24px;
    font-family: PingFang SC-Medium;
    top: 316px;
  }
  .banner-img {
    width: 448px;
    height: 334px;
    position: absolute;
    right: 0;
    top: 84px;
  }
}
</style>
