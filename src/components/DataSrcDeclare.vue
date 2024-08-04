<template>
  <div class="data-src-wrap">
    <div class="data-src-row">
      <span class="data-src-pre">计算公式及除武器动作值招式译名以外的其他数据来自&nbsp;</span>
      <span class="data-src-link"><a href="http://wiki.mhwmod.com/"
           target="_blank">狩技MOD组中文Wiki</a>&nbsp;</span>
      <span class="data-src-pre">特别感谢狩技MOD组与Monster Hunter Modding Discord对游戏数据的挖掘与整理</span>
    </div>
    <div class="data-src-row">
      <span class="data-src-pre">武器招式名称与动作值来自&nbsp;</span>
      <span class="data-src-link"><a href="https://tieba.baidu.com/p/6591591373"
           target="_blank">[搬运]冰原所有武器动作值各种补正表</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataSrcDeClare'
}
</script>

<style lang="stylus" scoped>
.data-src-wrap {
  box-sizing border-box
  background-color #FFFFFF
  font-size 14px
  margin 20px
  box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
  flex auto
  display flex
  flex-flow column nowrap
  justify-content center
  align-items flex-start
  border-left 5px solid #F7797D
  .data-src-row {
    box-sizing inherit
    margin 5px 10px
    flex auto
    display flex
    flex-flow row wrap
    justify-content flex-start
    align-items center
    text-align left
    .data-src-pre {
      color #46494C
    }
    .data-src-link {
      a {
        underline #4C5C68
      }
      a:link, a:hover, a:visited {
        color #4C5C68
      }
      a:active {
        color #4C5C68
      }
    }
  }
}
</style>
