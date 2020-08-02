<template>
  <div class="header-wrap">
    <div class="title-text-row">
      <span>MHWIB简易伤害计算器</span>
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
  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);

  .title-text-row {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    background-color: #0f0f0f;

    span {
      margin: 0px 20px;
      color: white;
      font-weight: lighter;
    }
  }

  .divider-row {
    height: 8px;
    background: linear-gradient(to left, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
  }
}
</style>
