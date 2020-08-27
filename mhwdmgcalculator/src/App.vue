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
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 12px;
  background-color: rgba(85, 85, 85, 0.6);
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
}

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
