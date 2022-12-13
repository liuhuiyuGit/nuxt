<template>
  <div class="solution-box">
    <div class="main-content">
      <!-- 标题 -->
      <div class="title">支持多种业务场景的完善解决方案</div>
      <!-- tabs -->
      <div class="tabs-box">
        <div class="tabs-box-text tabs-box-active">政务</div>
        <div class="tabs-box-text">银行/金融机构</div>
        <div class="tabs-box-text">知识产权保护</div>
        <div class="tabs-box-text">小区居民自治</div>
        <div class="tabs-box-text">区块链存证摇号</div>
      </div>
      <!-- 卡片文案 -->
      <div class="card-box">
        <div class="card">
          <span>企业/个人：</span><br />
          <span>业务文案</span>
        </div>
        <div class="card">
          <span>企业/个人：</span><br />
          <span>业务文案业务文案业务文案业务文案业务文案业务文案</span>
        </div>
        <div class="card">
          <span>企业/个人：</span><br />
          <span>业务文案业务文案业务文案业务文案业务文案</span>
        </div>
        <div class="card">
          <span>企业/个人：</span><br />
          <span>业务文案业务文案业务文案业务文案业务文案</span>
        </div>
        <div class="card">
          <span>企业/个人：</span><br />
          <span>业务文案业务文案业务文案业务文案</span>
        </div>
      </div>
      <!-- 底部文案 -->
      <div class="solution-text-box">
        <div class="solution-label">行业痛点：</div>
        <div class="solution-content">
          文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案
          业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务
          文案文案案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务
          文案文案
        </div>
      </div>
      <div class="solution-text-box">
        <div class="solution-label">行业痛点：</div>
        <div class="solution-content">
          文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案业务文案业务文案文案业务文案
          业务文案业务文案文
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.solution-box {
  padding-top: 70px;
  background: url('@/static/img/solution-bg.png') no-repeat left top;
  background-size:100% 100%;
}
.title {
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  padding-bottom: 50px;
}
.tabs-box {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  .tabs-box-text {
    text-align: center;
    color: #ffffff;
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
  .tabs-box-active {
    background-color: @theme-color;
  }
}
.card-box {
  display: flex;
  justify-content: space-between;
  padding-bottom: 65px;
  .card {
    width: 210px;
    height: 160px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #ffffff;
    line-height: 30px;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
}

.solution-text-box {
  display: flex;
  font-size: 14px;
  color: #ffffff;
  line-height: 30px;
  padding-bottom: 70px;
  &:last-child{
      padding-bottom: 80px;
  }
  .solution-content {
    flex: 1;
    padding-left: 3px;
  }
}
</style>
