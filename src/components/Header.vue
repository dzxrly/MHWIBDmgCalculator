<template>
  <div class="header-wrap">
    <div class="title-text-row">
      <span class="page-name">MHWIB简易伤害计算器</span>
    </div>
    <div class="divider-row"></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.header-wrap {
  box-shadow 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)
  .title-text-row {
    display flex
    flex 1
    flex-flow row wrap
    justify-content flex-start
    align-items center
    height 50px
    background-color #0f0f0f
    padding 10px 0
    .page-name {
      margin 0 20px
      color white
      font-size 20px
    }
    .page-count {
      cursor default
      box-sizing border-box
      padding 2px 5px
      margin 0 20px
      color white
      font-weight lighter
      font-size 12px
      background-image linear-gradient(to bottom, transparent 50%, white 50%)
      background-size 100% 200%
      background-position 0% 200%
      border solid white
      border-width 0 0 1px 0
      transition all .3s ease-in-out
    }
    .page-count:hover {
      color #0f0f0f
      background-position 0% 100%
    }
  }
  .divider-row {
    height 8px
    background linear-gradient(to left, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))
  }
}
</style>
