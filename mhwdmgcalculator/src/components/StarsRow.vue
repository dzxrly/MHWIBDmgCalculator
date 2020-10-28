<template>
  <div class="stars-wrap">
    <span>喜欢的话不妨到该项目的<a href="https://github.com/dzxrly/MHWIBDmgCalculator" target="_blank">Github页面</a>点个<code>Star</code>吧&nbsp;</span>
    <span>ヾ(●´∇｀●)ﾉ</span>
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/dzxrly/MHWIBDmgCalculator?style=for-the-badge" />
  </div>
</template>

<script>
export default {
  name: 'StarsRow'
}
</script>

<style lang="stylus" scoped>
.stars-wrap {
  box-sizing border-box
  padding 5px 10px
  font-size 16px
  margin 20px
  box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
  display flex
  flex-flow row wrap
  justify-content center
  align-items center
  background white
  border-left 5px solid #fbd786
  span {
    code {
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
      padding: .2em .4em;
      margin: 0;
      font-size: 85%;
      background-color: rgba(27,31,35,.05);
      border-radius: 3px;
    }
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
  img {
    margin 5px 10px
  }
}
</style>
