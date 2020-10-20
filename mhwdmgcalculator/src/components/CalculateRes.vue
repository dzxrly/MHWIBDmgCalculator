<template>
  <div class="result-wrap">
    <transition name="change" mode="out-in">
      <div class="tips-wrap" v-if="showTips" key="tips">
        <div class="btn">
          <div class="icon" @click="handleGoBack()"><i class="el-icon-back"></i></div>
          <div class="title"><span>使用须知</span></div>
        </div>
        <div class="tips markdown-body">
          <readme></readme>
        </div>
      </div>
      <div class="dmg-wrap" v-else key="dmg">
        <div class="res">
          <div class="btn-row">
            <el-button type="primary" size="small" @click="handleCalculator()"><i class="el-icon-check"></i>&nbsp;&nbsp;计算</el-button>
            <div class="note" @click="handleGoToNote">
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
            <span class="pre">软化后伤害(冥赤龙、黑龙)</span>
            <span class="data">{{ res.monsterPhyDmgClawSp2 }}</span>
          </div>
        </div>
        <div class="show-more-btn" v-on:click="handleShowMore">
          <span class="triangle" :class="{ 'triangle-rotate': showMore }"></span><span>{{ tip }}</span>
        </div>
        <div class="moreinfo" :class="{ 'show-more-visable': showMore }">
          <div class="infos">
            <div class="row" v-for="(item, index) in texts" :key="index">
              <span class="pre">{{ item.text }}</span>
              <span class="data">{{ res[item.key] }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import loading from './Loading'
import error from './Error'
import baseLogic from '../script/Logic'
const readme = () => ({
  component: import('../assets/README.md'),
  loading: loading,
  error: error,
  timeouot: 3000
})
export default {
  name: 'CalculateRes',
  props: {
    form: Object
  },
  components: {
    readme,
    error
  },
  data() {
    return {
      showTips: false,
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
      this.showTips = true
    },
    handleGoBack() {
      this.showTips = false
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
  box-sizing border-box
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
  overflow hidden
  .change-enter {
    transform translateX(-100%)
  }
  .change-leave-to {
    transform translateX(100%)
  }
  .change-enter-active, .change-leave-active {
    transition all .3s ease-in-out
  }
  .tips-wrap {
    width 100%
    display flex
    flex-flow column nowrap
    justify-content flex-start
    .btn {
      position sticky
      position -webkit-sticky
      top 0
      width 100%
      display flex
      flex-flow row nowrap
      justify-content flex-start
      align-items center
      background white
      box-sizing border-box
      padding 10px 20px
      box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
      z-index 1
      .icon {
        width 32px
        height 32px
        color #909399
        cursor pointer
        font-size 30px
        border solid 2px #909399
        border-radius 50%
      }
      .title {
        flex auto
        color #909399
        font-size 20px
        display flex
        flex-flow row nowrap
        justify-content flex-end
      }
    }
    .tips {
      width 100%
      max-height 80vh
      text-align left
      box-sizing border-box
      padding 5px 20px
      overflow auto
    }
  }
  .dmg-wrap {
    width 100%
    .show-more-btn {
      width 100%
      display flex
      flex-flow row nowrap
      justify-content center
      align-items center
      background-color #EDF2F4
      cursor pointer
      transition all 0.5s linear
      .triangle {
        margin 0 3px
        width 0
        height 0
        border-left 10px solid rgba(0, 0, 0, 0.5)
        border-top 5px solid transparent
        border-bottom 5px solid transparent
        transition all 0.25s linear
      }
      .triangle-rotate {
        transform rotate(90deg)
      }
      span {
        margin 5px 0px
        font-size 12px
        width 120px
        user-select none
      }
    }
    .res {
      margin 5px 20px
      display flex
      flex-flow column nowrap
      justify-content center
      align-items flex-start
      .btn-row {
        margin 5px 0px
        display flex
        justify-content flex-start
        align-items center
        .note {
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
      transition all 0.25s linear
      max-height 0
      overflow auto
      width 100%
      .infos {
        box-sizing border-box
        padding 5px 20px
        .row {
          margin 5px 0px
          display flex
          flex-flow row wrap
          justify-content flex-start
          align-items center
          font-size 14px
          .pre {
            width 150px
            color #666666
          }
          .data {
            margin 0 10px
          }
        }
      }
    }
    .show-more-visable {
      max-height 300px
    }
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
