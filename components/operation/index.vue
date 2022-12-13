<template>
  <div class="bgc">
    <div class="main-content">
      <!-- tab切换 -->
      <div class="tabs">
        <div
          @click="tabsClick(1)"
          :class="tabsId == 1 ? 'tabs-text tabs-text-active' : 'tabs-text'"
        >
          取证
        </div>
        <div
          @click="tabsClick(2)"
          :class="tabsId == 2 ? 'tabs-text tabs-text-active' : 'tabs-text'"
        >
          存证
        </div>
      </div>
      <!-- 操作模块 -->
      <ul class="operation-box">
        <li
          v-for="item in list"
          @click="clickCard(item.id)"
          :key="item.id"
          :class="
            cardId == item.id
              ? 'operation-card operation-card-active'
              : 'operation-card'
          "
        >
          <img
            class="operation-icon"
            :src="cardId == item.id ? item.iconActive : item.icon"
            alt=""
          />
          <div class="operation-text-box">
            <div class="operation-text-title">拍照取证</div>
            <div class="operation-text-content">
              拍照存证，随时随地拍照立存，方便快捷，无惧设备
            </div>
          </div>
          <img
            class="operation-active-icon"
            src="@/static/img/operation/right-icon.png"
            alt=""
          />
        </li>
      </ul>
      <!-- 底部按钮 -->
      <div class="operation-btn-box">
        <button class="operation-btn btn-active">在线存管</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operation-index',
  data() {
    return {
      list: [
        {
          icon: require('@/static/img/operation/pic.png'),
          iconActive: require('@/static/img/operation/pic-active.png'),
          title: '拍照取证',
          content: '拍照存证，随时随地拍照立存，方便快捷，无惧设备',
          id: 1,
        },
        {
          icon: require('@/static/img/operation/video.png'),
          iconActive: require('@/static/img/operation/video-active.png'),
          title: '录像取证',
          content: '调用摄像头或上传视频，保存动态影像',
          id: 2,
        },
        {
          icon: require('@/static/img/operation/audio.png'),
          iconActive: require('@/static/img/operation/audio-active.png'),
          title: '录音取证',
          content: '调用话筒或上传音频资料，保存音频资料',
          id: 3,
        },
        {
          icon: require('@/static/img/operation/wechat.png'),
          iconActive: require('@/static/img/operation/wechat-active.png'),
          title: '微信取证',
          content: '直接保存聊天记录随时随地，方便快捷调动',
          id: 4,
        },
        {
          icon: require('@/static/img/operation/multiparty.png'),
          iconActive: require('@/static/img/operation/multiparty-active.png'),
          title: '多方会议',
          content: '会议实时记录，保存会议人员资料及结果视频',
          id: 5,
        },
        {
          icon: require('@/static/img/operation/spqy.png'),
          iconActive: require('@/static/img/operation/spqy-active.png'),
          title: '视频签约',
          content: '实时记录视频沟通过程并进行签字， 方便快捷，无惧距离',
          id: 6,
        },
      ],
      cardId: 1,
      tabsId: 1,
    }
  },
  methods: {
    clickCard(id) {
      if (this.cardId == id) {
        return
      }
      this.cardId = id
    },
    tabsClick(id) {
      if (this.tabsId == id) {
        return
      }
      this.tabsId = id
    },
  },
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: @theme-bgcolor;
  padding-bottom: 55px;
}
.tabs {
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  .tabs-text {
    color: #3c4353;
    font-size: 24px;
    font-weight: Regular;
    text-align: center;
    padding: 0 26px;
  }
  .tabs-text-active {
    color: @theme-color;
  }
}
.operation-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .operation-card-active {
    background: url('@/static/img/operation/operation-active-bg.png') no-repeat
      left top;
    background-size: cover;
    .operation-text-box {
      color: #ffffff !important;
    }
  }
  .operation-card {
    width: 590px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 30px;
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .operation-icon {
      width: 51px;
      height: 44px;
    }
    .operation-text-box {
      flex: 1;
      height: 100%;
      padding-left: 20px;
      color: #333333;
      .operation-text-title {
        font-family: PingFang SC-Bold;
        font-size: 22px;
        font-weight: Bold;
        margin-top: 34px;
        margin-bottom: 10px;
      }
      .operation-text-content {
        font-size: 12px;
        font-family: PingFang SC-Medium;
      }
    }
    .operation-active-icon {
      width: 22px;
      height: 18px;
    }
  }
}
.operation-btn-box {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .operation-btn {
    width: 450px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: @theme-color;
    border-radius: 35px;
    color: #ffffff;
    font-size: 20px;
  }
}
</style>
