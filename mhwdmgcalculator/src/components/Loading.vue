<template>
  <div class="loading-wrap">
    <div class="loading-logo">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
      <div class="rec rec4"></div>
      <div class="rec rec5"></div>
      <div class="rec rec6"></div>
    </div>
    <div class="text">
      <span>加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="stylus" scoped>
.loading-wrap {
  width 100%
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  .text {
    color #0f0f0f
  }
  .loading-logo {
    width 50px
    height 50px
    display flex
    flex-flow row nowrap
    justify-content center
    align-items center
    .rec {
      width 5px
      height 20px
      background #0f0f0f
      margin-right 1px
      transform scaleY(1)
      animation change-height 2s linear infinite
    }
    .rec1 {
      animation-delay 0s
    }
    .rec2 {
      animation-delay .2s
    }
    .rec3 {
      animation-delay .4s
    }
    .rec4 {
      animation-delay .6s
    }
    .rec5 {
      animation-delay .8s
    }
    .rec6 {
      animation-delay 1s
    }
    @keyframes change-height {
      0% {
        transform scaleY(1)
      }
      50% {
        transform scaleY(2)
      }
      100% {
        transform scaleY(1)
      }
    }
  }
}
</style>
