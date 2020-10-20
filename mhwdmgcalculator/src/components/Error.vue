<template>
  <div class="error-wrap">
    <span>Σ( ° △ °|||)︴</span>
    <span>找不到文档啦！请检查网络情况~</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorView'
}
</script>

<style lang="stylus" scoped>
.error-wrap {
  width 100%
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  color #f7797d
}
</style>
