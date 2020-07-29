<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media screen and (max-width: 413px) {
  body .el-select-dropdown {
    max-width: 310px;
  }
  .el-select-dropdown__item,
  .el-select-dropdown__item selected hover {
    display: inline-block;
    min-width: 310px;
  }
}

@media screen and (max-width: 309px) {
  body .el-select-dropdown {
    max-width: 250px;
  }
  .el-select-dropdown__item,
  .el-select-dropdown__item selected hover {
    display: inline-block;
    min-width: 250px;
  }
}
</style>
