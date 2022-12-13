<template>
  <div>
    <div class="banner-title">苏州存，为您服务！</div>
    <!-- 地图 -->
    <div class="map-box">地图</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.banner-title {
  width: 100%;
  height: 170px;
  background: url('@/static/img/banner-map.png') no-repeat left top;
  background-size: 100% 100%;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.map-box {
  height: 800px;
  width: 100%;
  background-color: #f0f3fa;
}
</style>
