<template>
  <div class="loading-wrap">
    <div class="loading">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="text">
        <span>加载中...</span>
      </div>
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
  margin 20px
  width 100%
  height 200px
  .loading {
    width 100%
    height 100%
    position relative
    font-size 64px
    .circle, .text {
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%) rotate(0deg)
    }
    .text {
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      color transparent
      font-family Helvetica
      font-size 0.25em
      background linear-gradient(to right, rgba(0, 0, 0, 0.2) 33.33%, rgba(0, 0, 0, 1) 66.66%, rgba(0, 0, 0, 0.2) 100%)
      background-size 300% 50%
      background-clip text
      -webkit-background-clip text
      animation text-animate 5s linear infinite
    }
    .circle1 {
      width 2em
      height 2em
      border solid 0.1em #f7797d
      border-radius 50%
      border-bottom-color transparent
      animation rotate-ring 1s linear infinite
    }
    .circle2 {
      width 2.3em
      height 2.3em
      border solid 0.1em #fbd786
      border-radius 50%
      border-left-color transparent
      animation rotate-ring 2s linear infinite
    }
    .circle3 {
      width 2.6em
      height 2.6em
      border solid 0.1em #c6ffdd
      border-radius 50%
      border-top-color transparent
      animation rotate-ring 3s linear infinite
    }
    @keyframes text-animate {
      from {
        background-position 300% 50%
      }
      to {
        background-position 0% 50%
      }
    }
    @keyframes rotate-ring {
      from {
        transform translate(-50%, -50%) rotate(0deg)
      }
      to {
        transform translate(-50%, -50%) rotate(360deg)
      }
    }
  }
}
</style>
