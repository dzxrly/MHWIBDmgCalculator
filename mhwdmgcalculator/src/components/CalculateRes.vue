<template>
  <div class="result-wrap">
    <div class="res">
      <div class="btn-row">
        <el-button type="primary"
                   size="small"
                   @click="handleCalculator()"><i class="el-icon-check"></i>&nbsp;&nbsp;计算</el-button>
        <div class="note"
             @click="handleGoToNote">
          <span>使用须知</span>
        </div>
      </div>
      <span>计算结果</span>
      <div class="row">
        <span class="pre">最终伤害</span><span class="data">{{ res.totalDmg }}</span>
      </div>
      <div class="row">
        <span class="pre">物理伤害</span><span class="data">{{ res.toMonsterPHYDmg }}</span>
      </div>
      <div class="row">
        <span class="pre">属性伤害</span><span class="data">{{ res.toMonsterElDmg }}</span>
      </div>
      <div class="row">
        <span class="pre">软化后伤害</span><span class="data">{{ res.monsterPhyDmgClaw }}</span>
      </div>
      <div class="col">
        <span class="pre">软化后伤害(麒麟、熔岩龙、爆锤龙、惶怒恐暴龙、溟波龙、金火龙、银火龙)</span>
        <span class="data">{{ res.monsterPhyDmgClawSp1 }}</span>
      </div>
      <div class="col">
        <span class="pre">软化后伤害(冥赤龙)</span>
        <span class="data">{{ res.monsterPhyDmgClawSp2 }}</span>
      </div>
    </div>
    <div class="show-more-btn"
         v-on:click="handleShowMore">
      <span>{{ tip }}</span>
    </div>
    <div class="res moreinfo"
         v-if="showMore">
      <div class="row"
           v-for="(item, index) in texts"
           :key="index">
        <span class="pre">{{item.text}}</span>
        <span class="data">{{ res[item.key] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import baseLogic from '../script/Logic'
export default {
  name: 'CalculateRes',
  props: {
    form: Object
  },
  data() {
    return {
      tip: '点击查看详细数据',
      showMore: false,
      res: {
        totalDmg: 0,
        toMonsterPHYDmg: 0,
        toMonsterElDmg: 0,
        monsterPhyDmgClaw: 0,
        monsterPhyDmgClawSp1: 0,
        monsterPhyDmgClawSp2: 0,
        basePHYDmg: 0, // 基础攻击力
        beforeDmgLimit: 0, // 攻击上限前伤害
        dmgLimit: 0, // 攻击上限
        afterDmgLimit: 0, // 攻击上限后伤害
        attRate: 0, // 攻击力百分比
        physicDmg: 0, // 武器物理伤害
        basePHYMeatRate: 0, // 物理肉质百分比
        baseElDmg: 0, // 基础属性伤害
        beforeElLimit: 0, // 属性上限前伤害
        elDmgLimit: 0, // 属性伤害上限
        afterElDmgLimit: 0, // 属性上限后伤害
        elementDamage: 0, // 武器属性伤害
        baseElMeatRate: 0 // 属性肉质百分比
      },
      texts: [
        { text: '基础攻击力', key: 'basePHYDmg' },
        { text: '攻击上限前伤害', key: 'beforeDmgLimit' },
        { text: '攻击上限', key: 'dmgLimit' },
        { text: '攻击上限后伤害', key: 'afterDmgLimit' },
        { text: '攻击力百分比', key: 'attRate' },
        { text: '武器物理伤害', key: 'physicDmg' },
        { text: '物理肉质百分比', key: 'basePHYMeatRate' },
        { text: '基础属性伤害', key: 'baseElDmg' },
        { text: '属性上限前伤害', key: 'beforeElLimit' },
        { text: '属性伤害上限', key: 'elDmgLimit' },
        { text: '属性上限后伤害', key: 'afterElDmgLimit' },
        { text: '武器属性伤害', key: 'elementDamage' },
        { text: '属性肉质百分比', key: 'baseElMeatRate' }
      ],
      scrollLocate: 0
    }
  },
  methods: {
    handleGoToNote() {
      window.open('https://github.com/dzxrly/MHWIBDmgCalculator/blob/master/README.md')
    },
    handleCalculator() {
      this.res = baseLogic.calDamage(this.form)
    },
    handleShowMore() {
      this.showMore = !this.showMore
      if (this.showMore) {
        this.$nextTick(() => {
          this.tip = '收起'
          this.scrollLocate = window.scrollY
          window.scrollTo(0, document.body.scrollHeight)
        })
      } else {
        this.$nextTick(() => {
          this.tip = '点击查看详细数据'
          window.scrollTo(0, this.scrollLocate)
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.result-wrap {
  box-sizing inherit
  position sticky
  position -webkit-sticky
  top 20px
  max-width 900px
  margin 20px
  flex 1 1 auto
  display flex
  flex-flow column nowrap
  justify-content center
  align-items flex-start
  box-shadow 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)
  .show-more-btn {
    width 100%
    display flex
    flex-flow column nowrap
    justify-content center
    align-items center
    background-color #EDF2F4
    cursor pointer
    transition all 0.5s linear
    span {
      box-sizing inherit
      margin 5px 0px
      font-size 12px
      user-select none
    }
  }
  .res {
    box-sizing inherit
    margin 5px 20px
    display flex
    flex-flow column nowrap
    justify-content center
    align-items flex-start
    .btn-row {
      box-sizing inherit
      margin 5px 0px
      display flex
      justify-content flex-start
      align-items center
      .note {
        box-sizing inherit
        margin 0px 10px
        line-height 35px
        cursor pointer
        span {
          color #909399
          font-size 12px
          font-weight bolder
        }
      }
      .note:hover {
        text-decoration underline #909399
      }
    }
    .row {
      box-sizing inherit
      margin 5px 0px
      display flex
      flex-flow row wrap
      justify-content flex-start
      align-items center
      span {
        font-size 14px
      }
      .pre {
        color #666666
      }
      .data {
        margin 0 10px
      }
    }
    .col {
      box-sizing inherit
      margin 5px 0px
      display flex
      flex-flow column wrap
      justify-content flex-start
      align-items flex-start
      span {
        font-size 14px
      }
      .pre {
        color #666666
      }
      .data {
        margin-top 5px
      }
    }
  }
  .moreinfo {
    box-sizing inherit
    padding 10px 0px
    transition all 0.5s linear
  }
}
@media screen and (max-width 1920px) {
  .result-wrap {
    max-width 660px
  }
}
@media screen and (max-width 1200px) {
  .result-wrap {
    max-width 456px
  }
}
@media screen and (max-width 992px) {
  .result-wrap {
    max-width 344px
  }
}
@media screen and (max-width 768px) {
  .result-wrap {
    max-width 320px
  }
}
</style>
