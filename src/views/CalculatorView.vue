<template>
  <div class="calculator-wrap">
    <el-backtop>
      <img :src="topImgSrc" />
    </el-backtop>
    <Header></Header>
    <data-src-declare></data-src-declare>
    <div class="calculator-pane">
      <div class="input-area">
        <el-form :model="formData" ref="formData" :rules="formRules">
          <el-form-item>
            <el-select style="width: 100%;" placeholder="请选择一把武器" clearable v-model="formData.weaponId" @change="handleWeaponChange">
              <el-option v-for="item in weaponSelectOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="formData.weaponId === '11'">
            <div class="item-row">
              <div class="row">
                <el-radio-group v-model="formData.bottleType">
                  <el-radio :label="0">无</el-radio>
                  <el-radio :label="1">接击瓶</el-radio>
                  <el-radio :label="2">强击瓶</el-radio>
                </el-radio-group>
              </div>
            </div>
          </el-form-item>
          <el-form-item v-if="formData.weaponId === '12' || formData.weaponId === '13'">
            <div class="item-row">
              <div class="row">
                <span>近身射击强化零件个数</span>
                <el-input-number v-model="formData.closeItemNumber" :step="1" :min="0" :precision="0" :max="4" size="small" placeholder="0"></el-input-number>
              </div>
              <div class="row">
                <span>远程射击强化零件个数</span>
                <el-input-number v-model="formData.farItemNumber" :step="1" :min="0" :precision="0" :max="4" size="small" placeholder="0"></el-input-number>
              </div>
              <div class="row" v-if="formData.weaponId === '12'">
                <el-select style="width: 100%;" placeholder="是否启用会心镜" v-model="formData.isScope">
                  <el-option v-for="item in isScopeOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.weaponShowAtt" placeholder="请输入武器栏显示的攻击力面板(原始面板)" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="formData.weaponId !== '12' && formData.weaponId !== '13'">
            <el-input v-model="formData.weaponShowEl" placeholder="请输入武器栏显示的属性值面板(原始面板)" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="formData.weaponId === '12' || formData.weaponId === '13'">
            <el-select style="width: 100%;" v-model="formData.weaponShowEl" placeholder="请选择属性弹种" @change="handleSetElement">
              <el-option v-for="item in elBulletTypes" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select style="width: 100%;" placeholder="请选择客制攻击的等级" v-model="formData.customAttLv">
              <el-option v-for="item in customAttLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select style="width: 100%;" placeholder="请选择客制属性·状态异常的等级" v-model="formData.customElLv">
              <el-option v-for="item in customElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="awake-area">
              <span class="title">冥赤龙武器觉醒槽位(攻击力词条)</span>
              <div class="row">
                <span class="text">觉醒槽Ⅰ</span>
                <el-select size="small" placeholder="请选择攻击词条等级" v-model="formData.awakeAttackLv[0]">
                  <el-option v-for="item in awakeLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅱ</span>
                <el-select size="small" placeholder="请选择攻击词条等级" v-model="formData.awakeAttackLv[1]">
                  <el-option v-for="item in awakeLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅲ</span>
                <el-select size="small" placeholder="请选择攻击词条等级" v-model="formData.awakeAttackLv[2]">
                  <el-option v-for="item in awakeLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅳ</span>
                <el-select size="small" placeholder="请选择攻击词条等级" v-model="formData.awakeAttackLv[3]">
                  <el-option v-for="item in awakeLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅴ</span>
                <el-select size="small" placeholder="请选择攻击词条等级" v-model="formData.awakeAttackLv[4]">
                  <el-option v-for="item in awakeLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="awake-area">
              <span class="title">冥赤龙武器觉醒槽位(属性词条)</span>
              <div class="row">
                <span class="text">觉醒槽Ⅰ</span>
                <el-select size="small" placeholder="请选择属性词条等级" v-model="formData.awakeElementLv[0]">
                  <el-option v-for="item in awakeElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅱ</span>
                <el-select size="small" placeholder="请选择属性词条等级" v-model="formData.awakeElementLv[1]">
                  <el-option v-for="item in awakeElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅲ</span>
                <el-select size="small" placeholder="请选择属性词条等级" v-model="formData.awakeElementLv[2]">
                  <el-option v-for="item in awakeElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅳ</span>
                <el-select size="small" placeholder="请选择属性词条等级" v-model="formData.awakeElementLv[3]">
                  <el-option v-for="item in awakeElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅴ</span>
                <el-select size="small" placeholder="请选择属性词条等级" v-model="formData.awakeElementLv[4]">
                  <el-option v-for="item in awakeElLvOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="base-skills-row">
              <span class="title">基础攻击力倍率加成类技能</span>
              <el-checkbox-group v-model="formData.baseAttSkillList">
                <el-checkbox v-for="item in baseSkillOpts" :label="item.id" :key="item.id">{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="base-skills-row">
              <span class="title">基础攻击力数值加成类技能</span>
              <el-checkbox-group v-model="formData.otherAttSkillList">
                <el-checkbox v-for="item in otherSkillOpts" :label="item.id" :key="item.id">{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="base-skills-row">
              <span class="title">属性倍率加成类技能</span>
              <el-checkbox-group v-model="formData.elSkillList">
                <el-checkbox v-for="item in elSkillOpts" :label="item.id" :key="item.id">{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="base-skills-row">
              <span class="title">武器伤害上限后补正类技能</span>
              <el-checkbox-group v-model="formData.attLimitAfterRate">
                <el-checkbox v-for="item in attLmtAfterRateOpts" :label="item.id" :key="item.id">{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <el-select style="width: 100%;" v-model="formData.criticalSituation" placeholder="请选择会心情况">
              <el-option v-for="item in criticalOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="formData.weaponId !== ''">
            <el-select style="width: 100%;" v-model="formData.skillNumber" placeholder="请选择武器动作(不做选择可自定义)" @change="handleAction" no-data-text="获取数据失败">
              <el-option v-for="(item, index) in actionList" :key="index" :label="item.name" :value="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.action" placeholder="请输入武器动作值"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.elementChanger" placeholder="请输入动作的属性补正"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.meatRate" placeholder="请输入怪物物理肉质(非百分比形式)"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.elMeatRate" placeholder="请输入怪物属性肉质(非百分比形式)"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.angryRate" placeholder="请输入怪物怒后补正倍率(可选)"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select style="width: 100%;" v-model="formData.bladeNumber" placeholder="请选择斩味">
              <el-option v-for="item in bladeOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select style="width: 100%;" v-model="formData.isBladeCheck" placeholder="请选择是否启用刃中补正">
              <el-option v-for="item in isBladeCheckOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <calculate-res :form="formData"></calculate-res>
    </div>
    <stars-row></stars-row>
    <Footer></Footer>
  </div>
</template>

<script>
import baseLogic from '../script/Logic'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DataSrcDeclare from '../components/DataSrcDeclare'
import CalculateRes from '../components/CalculateRes'
import StarsRow from '../components/StarsRow.vue'
export default {
  name: 'CalculatorView',
  components: {
    Header,
    Footer,
    DataSrcDeclare,
    CalculateRes,
    StarsRow
  },
  data() {
    return {
      topImgSrc: '#',
      formData: {
        weaponId: '',
        weaponShowAtt: '',
        weaponShowEl: '',
        customAttLv: '0',
        customElLv: -1,
        awakeAttackLv: [-1, -1, -1, -1, -1],
        awakeElementLv: [-1, -1, -1, -1, -1],
        limitRate: '0', // 未启用数据
        baseAttSkillList: [],
        otherAttSkillList: [],
        elSkillList: [],
        attLimitAfterRate: [],
        closeItemNumber: 0, // 近身零件个数
        farItemNumber: 0, // 远程零件个数
        bottleType: 0, // 弓箭瓶子种类
        criticalSituation: 1,
        skillNumber: '',
        action: '',
        elementChanger: '',
        meatRate: '',
        elMeatRate: '',
        bladeNumber: 0,
        isBladeCheck: false,
        isScope: false,
        angryRate: ''
      },
      formRules: {},
      weaponSelectOpts: [
        {
          value: '0',
          label: '大剑'
        },
        {
          value: '1',
          label: '片手剑'
        },
        {
          value: '2',
          label: '双剑'
        },
        {
          value: '3',
          label: '太刀'
        },
        {
          value: '4',
          label: '大锤'
        },
        {
          value: '5',
          label: '狩猎笛'
        },
        {
          value: '6',
          label: '长枪'
        },
        {
          value: '7',
          label: '铳枪'
        },
        {
          value: '8',
          label: '斩斧'
        },
        {
          value: '9',
          label: '盾斧'
        },
        {
          value: '10',
          label: '操虫棍'
        },
        {
          value: '11',
          label: '弓'
        },
        {
          value: '12',
          label: '重弩炮'
        },
        {
          value: '13',
          label: '轻弩炮'
        }
      ],
      customAttLvOpts: [
        {
          value: '0',
          label: '无攻击力客制强化'
        },
        {
          value: '1',
          label: '攻击力强化Ⅰ'
        },
        {
          value: '2',
          label: '攻击力强化Ⅱ'
        },
        {
          value: '3',
          label: '攻击力强化Ⅲ'
        }
      ],
      customElLvOpts: [
        {
          value: -1,
          label: '无客制属性·状态异常强化'
        },
        {
          value: 0,
          label: '属性·状态异常强化Ⅰ'
        },
        {
          value: 1,
          label: '属性·状态异常强化Ⅱ'
        },
        {
          value: 2,
          label: '属性·状态异常强化Ⅲ'
        },
        {
          value: 3,
          label: '属性·状态异常强化Ⅳ'
        }
      ],
      awakeLvOpts: [
        {
          value: -1,
          label: '空槽位'
        },
        {
          value: 0,
          label: '攻击力强化Ⅰ'
        },
        {
          value: 1,
          label: '攻击力强化Ⅱ'
        },
        {
          value: 2,
          label: '攻击力强化Ⅲ'
        },
        {
          value: 3,
          label: '攻击力强化Ⅳ'
        },
        {
          value: 4,
          label: '攻击力强化Ⅴ'
        },
        {
          value: 5,
          label: '攻击力强化Ⅵ'
        }
      ],
      awakeElLvOpts: [
        {
          value: -1,
          label: '空槽位'
        },
        {
          value: 0,
          label: '属性·状态异常强化Ⅰ'
        },
        {
          value: 1,
          label: '属性·状态异常强化Ⅱ'
        },
        {
          value: 2,
          label: '属性·状态异常强化Ⅲ'
        },
        {
          value: 3,
          label: '属性·状态异常强化Ⅳ'
        },
        {
          value: 4,
          label: '属性·状态异常强化Ⅴ'
        },
        {
          value: 5,
          label: '属性·状态异常强化Ⅵ'
        }
      ],
      bluntLvOpts: [
        {
          value: 4,
          label: '无钝器能手或紫斩或白斩或蓝斩'
        },
        {
          value: 0,
          label: '绿斩'
        },
        {
          value: 1,
          label: '黄斩'
        },
        {
          value: 2,
          label: '橙斩'
        },
        {
          value: 3,
          label: '红斩'
        }
      ],
      baseSkillOpts: [],
      otherSkillOpts: [],
      elSkillOpts: [],
      attLmtAfterRateOpts: [],
      actionList: [],
      criticalOpts: [
        {
          value: 0,
          label: '负会心'
        },
        {
          value: 1,
          label: '未触发会心'
        },
        {
          value: 2,
          label: '普通会心'
        },
        {
          value: 3,
          label: '超会心 Lv1'
        },
        {
          value: 4,
          label: '超会心 Lv2'
        },
        {
          value: 5,
          label: '超会心 Lv3'
        }
      ],
      bladeOpts: [
        {
          value: 0,
          label: '不考虑斩味'
        },
        {
          value: 1,
          label: '红斩'
        },
        {
          value: 2,
          label: '橙斩'
        },
        {
          value: 3,
          label: '黄斩'
        },
        {
          value: 4,
          label: '绿斩'
        },
        {
          value: 5,
          label: '蓝斩'
        },
        {
          value: 6,
          label: '白斩'
        },
        {
          value: 7,
          label: '紫斩'
        }
      ],
      elBulletTypes: [
        {
          value: '0',
          label: '非属性弹'
        },
        {
          value: '22',
          label: '火炎弹/水冷弹/电击弹/冰结弹'
        },
        {
          value: '18',
          label: '灭龙弹'
        }
      ],
      isBladeCheckOpts: [
        {
          value: false,
          label: '不启用刃中补正'
        },
        {
          value: true,
          label: '启用刃中补正'
        }
      ],
      isScopeOpts: [
        {
          value: false,
          label: '无超级会心镜'
        },
        {
          value: true,
          label: '启用超级会心镜'
        }
      ]
    }
  },
  mounted() {
    this.imgInit()
    this.baseSkillOptsInit()
  },
  methods: {
    imgInit() {
      this.topImgSrc = require('../assets/upload.svg')
    },
    baseSkillOptsInit() {
      this.baseSkillOpts = JSON.parse(JSON.stringify(baseLogic.getBaseDmgRate()))
      this.otherSkillOpts = JSON.parse(JSON.stringify(baseLogic.getOtherAttack()))
      this.attLmtAfterRateOpts = JSON.parse(JSON.stringify(baseLogic.getAttLimitAfterRate()))
      this.elSkillOpts = JSON.parse(JSON.stringify(baseLogic.getElSkill()))
    },
    getActions(weaponId) {
      this.actionList.length = 0
      const WAD = () => import('../script/WeaponActionData')
      WAD()
        .then(module => {
          return module.default
        })
        .catch(err => {
          this.$message.error('武器动作值信息获取失败,请刷新页面重试,errCode=' + err)
        })
        .then(m => {
          this.actionList = m.getActionListById(weaponId)
        })
    },
    handleWeaponChange() {
      this.formData.closeItemNumber = 0
      this.formData.farItemNumber = 0
      this.formData.bottleType = 0
      this.formData.skillNumber = ''
      this.formData.action = ''
      this.formData.elementChanger = ''
      this.formData.isScope = false
      this.formData.isBladeCheck = false
      if (this.formData.weaponId !== '') this.getActions(this.formData.weaponId)
    },
    handleAction() {
      this.formData.action = this.actionList[this.formData.skillNumber].actionNum
      this.formData.elementChanger = this.actionList[this.formData.skillNumber].elementChanger
      if ((this.formData.weaponId === '12' || this.formData.weaponId === '13') && this.formData.skillNumber === 0) {
        this.formData.weaponShowEl = '22'
      }
      if ((this.formData.weaponId === '12' || this.formData.weaponId === '13') && this.formData.skillNumber === 1) {
        this.formData.weaponShowEl = '18'
      }
      if ((this.formData.weaponId === '12' || this.formData.weaponId === '13') && this.formData.skillNumber !== 0 && this.formData.skillNumber !== 1) {
        this.formData.weaponShowEl = '0'
      }
    },
    handleSetElement() {
      if ((this.formData.weaponId === '12' || this.formData.weaponId === '13') && this.formData.weaponShowEl === '22') {
        this.formData.skillNumber = 0
        this.formData.action = 8
        this.formData.elementChanger = 1
      } else if ((this.formData.weaponId === '12' || this.formData.weaponId === '13') && this.formData.weaponShowEl === '18') {
        this.formData.skillNumber = 1
        this.formData.action = 2
        this.formData.elementChanger = 1
      } else {
        this.formData.skillNumber = ''
        this.formData.action = ''
        this.formData.elementChanger = ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .el-input__inner {
  border-radius 0px
  border solid 1px #DCDFE6
  border-width 0 0 1px 0
}
/deep/ .el-input-number__decrease {
  border-radius 0px
}
/deep/ .el-input-number__increase {
  border-radius 0px
}
/deep/ .el-button--small {
  border-radius 0px
  background-color black
  border none
  box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
}
/deep/ .el-button--small:hover {
  background-color rgba(0, 0, 0, 0.8)
}
.calculator-wrap {
  width 100%
  height 100%
  display flex
  flex-flow column nowrap
  position relative
  box-sizing border-box
  .el-backtop {
    background-color black
    border 1px solid white
    border-radius 0
    box-shadow 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)
  }
  .calculator-pane {
    flex 1
    display flex
    flex-flow row wrap
    justify-content space-around
    align-items flex-start
    .input-area {
      flex 1 1 auto
      margin 20px
      .el-form {
        .el-form-item {
          .item-row {
            box-sizing border-box
            padding 5px 20px
            display flex
            flex-flow column nowrap
            justify-content center
            align-items flex-start
            box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
            transition all 0.3s linear
            .row {
              display flex
              flex-flow row wrap
              justify-content flex-start
              .el-radio-group {
                margin 20px 5px
              }
            }
          }
          .awake-area {
            box-sizing border-box
            padding 5px 20px
            display flex
            flex-flow column nowrap
            justify-content flex-start
            align-items flex-start
            box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
            .row {
              display flex
              flex-flow row wrap
              justify-content flex-start
            }
          }
          .base-skills-row {
            box-sizing border-box
            padding 5px 20px
            display flex
            flex-flow column wrap
            justify-content flex-start
            align-items flex-start
            box-shadow 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)
            .el-checkbox-group {
              overflow-x auto
              display flex
              flex-flow column wrap
              justify-content flex-start
              align-items flex-start
              width 40vh
            }
          }
        }
      }
    }
  }
}
</style>
