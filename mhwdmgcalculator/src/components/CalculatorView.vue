<template>
  <div class="calculator-wrap">
    <el-backtop>
      <div style="
           {
            height: 100%;
            width: 100%;
            background-color: black;
            box-shadow: 0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18);
            text-align: center;
            line-height: 40px;
            color: white;
            border: solid 1px white;
          }
        ">
        Top
      </div>
    </el-backtop>
    <div class="headerRow">
      <div class="titleTextRow">
        <span>MHWIB简易伤害计算器</span>
      </div>
      <div class="dividerRow"></div>
    </div>
    <div class="calculatorPane">
      <div class="inputArea">
        <el-form
          :model="formData"
          ref="formData"
          :rules="formRules"
        >
          <el-form-item>
            <el-select
              style="width: 100%;"
              placeholder="请选择一把武器"
              clearable
              v-model="formData.weaponId"
              @change="handleWeaponChange"
            >
              <el-option
                v-for="item in weaponSelectOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="formData.weaponId === '11'">
            <div class="itemRow">
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
            <div class="itemRow">
              <div class="row">
                <span>近身射击强化零件个数</span>
                <el-input-number
                  v-model="formData.closeItemNumber"
                  :step="1"
                  :min="0"
                  :precision="0"
                  :max="4"
                  size="mini"
                  placeholder="0"
                ></el-input-number>
              </div>
              <div class="row">
                <span>远程射击强化零件个数</span>
                <el-input-number
                  v-model="formData.farItemNumber"
                  :step="1"
                  :min="0"
                  :precision="0"
                  :max="4"
                  size="mini"
                  placeholder="0"
                ></el-input-number>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.weaponShowAtt"
              placeholder="请输入武器栏显示的攻击力面板"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item v-if="formData.weaponId !== '12' && formData.weaponId !== '13'">
            <el-input
              v-model="formData.weaponShowEl"
              placeholder="请输入武器栏显示的属性值面板"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item v-if="formData.weaponId === '12' || formData.weaponId === '13'">
            <el-select
              style="width: 100%;"
              v-model="formData.weaponShowEl"
              placeholder="请选择属性弹种"
            >
              <el-option
                v-for="item in elBulletTypes"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              style="width: 100%;"
              placeholder="请选择客制攻击的等级"
              v-model="formData.customAttLv"
            >
              <el-option
                v-for="item in customAttLvOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              style="width: 100%;"
              placeholder="请选择客制属性·状态异常的等级"
              v-model="formData.customElLv"
            >
              <el-option
                v-for="item in customElLvOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="awakeArea">
              <span class="title">冥赤龙武器觉醒槽位(攻击力词条)</span>
              <div class="row">
                <span class="text">觉醒槽Ⅰ</span>
                <el-select
                  size="small"
                  placeholder="请选择攻击词条等级"
                  v-model="formData.awakeAttackLv[0]"
                >
                  <el-option
                    v-for="item in awakeLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅱ</span>
                <el-select
                  size="small"
                  placeholder="请选择攻击词条等级"
                  v-model="formData.awakeAttackLv[1]"
                >
                  <el-option
                    v-for="item in awakeLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅲ</span>
                <el-select
                  size="small"
                  placeholder="请选择攻击词条等级"
                  v-model="formData.awakeAttackLv[2]"
                >
                  <el-option
                    v-for="item in awakeLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅳ</span>
                <el-select
                  size="small"
                  placeholder="请选择攻击词条等级"
                  v-model="formData.awakeAttackLv[3]"
                >
                  <el-option
                    v-for="item in awakeLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅴ</span>
                <el-select
                  size="small"
                  placeholder="请选择攻击词条等级"
                  v-model="formData.awakeAttackLv[4]"
                >
                  <el-option
                    v-for="item in awakeLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="awakeArea">
              <span class="title">冥赤龙武器觉醒槽位(属性词条)</span>
              <div class="row">
                <span class="text">觉醒槽Ⅰ</span>
                <el-select
                  size="small"
                  placeholder="请选择属性词条等级"
                  v-model="formData.awakeElementLv[0]"
                >
                  <el-option
                    v-for="item in awakeElLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅱ</span>
                <el-select
                  size="small"
                  placeholder="请选择属性词条等级"
                  v-model="formData.awakeElementLv[1]"
                >
                  <el-option
                    v-for="item in awakeElLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅲ</span>
                <el-select
                  size="small"
                  placeholder="请选择属性词条等级"
                  v-model="formData.awakeElementLv[2]"
                >
                  <el-option
                    v-for="item in awakeElLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅳ</span>
                <el-select
                  size="small"
                  placeholder="请选择属性词条等级"
                  v-model="formData.awakeElementLv[3]"
                >
                  <el-option
                    v-for="item in awakeElLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="row">
                <span class="text">觉醒槽Ⅴ</span>
                <el-select
                  size="small"
                  placeholder="请选择属性词条等级"
                  v-model="formData.awakeElementLv[4]"
                >
                  <el-option
                    v-for="item in awakeElLvOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="baseSkillsRow">
              <span class="title">基础攻击力倍率加成类技能</span>
              <el-checkbox-group v-model="formData.baseAttSkillList">
                <el-checkbox
                  v-for="item in baseSkillOpts"
                  :label="item.id"
                  :key="item.id"
                >{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="baseSkillsRow">
              <span class="title">基础攻击力数值加成类技能</span>
              <el-checkbox-group v-model="formData.otherAttSkillList">
                <el-checkbox
                  v-for="item in otherSkillOpts"
                  :label="item.id"
                  :key="item.id"
                >{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="baseSkillsRow">
              <span class="title">属性倍率加成类技能</span>
              <el-checkbox-group v-model="formData.elSkillList">
                <el-checkbox
                  v-for="item in elSkillOpts"
                  :label="item.id"
                  :key="item.id"
                >{{ item.name }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item>
            <el-select
              style="width: 100%;"
              v-model="formData.criticalSituation"
              placeholder="请选择会心情况"
            >
              <el-option
                v-for="item in criticalOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.skillNumber"
              placeholder="请输入武器动作值"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.meatRate"
              placeholder="请输入怪物物理肉质(非百分比形式)"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.elMeatRate"
              placeholder="请输入怪物属性肉质(非百分比形式)"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-select
              style="width: 100%;"
              v-model="formData.bladeNumber"
              placeholder="请选择斩味"
            >
              <el-option
                v-for="item in bladeOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              style="width: 100%;"
              v-model="formData.isBladeCheck"
              placeholder="请选择是否启用刃中补正"
            >
              <el-option
                v-for="item in isBladeCheckOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="resultArea">
        <div class="btnRow">
          <el-button
            type="primary"
            size="small"
            @click="handleCalculator('formData')"
          ><i class="el-icon-check"></i>&nbsp;&nbsp;计算</el-button>
        </div>
        <span>计算结果</span>
        <div class="row">
          <span class="pre">最终伤害</span><span class="data">{{res.totalDmg}}</span>
        </div>
        <div class="row">
          <span class="pre">物理伤害</span><span class="data">{{res.toMonsterPHYDmg}}</span>
        </div>
        <div class="row">
          <span class="pre">属性伤害</span><span class="data">{{res.toMonsterElDmg}}</span>
        </div>
        <div class="row">
          <span class="pre">软化后伤害</span><span class="data">{{res.monsterPhyDmgClaw}}</span>
        </div>
        <div class="col">
          <span class="pre">软化后伤害(麒麟、熔岩龙、爆锤龙、惶怒恐暴龙、溟波龙、金火龙、银火龙)</span>
          <span class="data">{{res.monsterPhyDmgClawSp1}}</span>
        </div>
        <div class="col">
          <span class="pre">软化后伤害(冥赤龙)</span>
          <span class="data">{{res.monsterPhyDmgClawSp2}}</span>
        </div>
      </div>
    </div>
    <div class="footerRow">
      <div class="footerDivider"></div>
      <div class="textRow">
        <span class="dataSrc">数据及计算公式来自<a href="http://wiki.mhwmod.com/">狩技MOD组中文Wiki</a></span>
        <span class="authorName">一个基于Vue的前端项目 By 鎧羅突擊弩賊</span>
        <span class="authorId">小黑盒ID: 1310911&nbsp;&nbsp;&nbsp;Ver.1.0Beta</span>
      </div>
    </div>
  </div>
</template>

<script>
import baseLogic from '../script/Logic'
export default {
  name: 'CalculatorView',
  data () {
    return {
      formData: {
        weaponId: '',
        weaponShowAtt: '',
        weaponShowEl: '',
        customAttLv: '0',
        customElLv: -1,
        awakeAttackLv: [-1, -1, -1, -1, -1],
        awakeElementLv: [-1, -1, -1, -1, -1],
        limitRate: '0',
        baseAttSkillList: [],
        otherAttSkillList: [],
        elSkillList: [],
        closeItemNumber: 0,
        farItemNumber: 0,
        bottleType: 0,
        criticalSituation: 1,
        skillNumber: '',
        meatRate: '',
        elMeatRate: '',
        bladeNumber: 0,
        isBladeCheck: false
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
          label: '火、水、雷、冰属性弹'
        },
        {
          value: '18',
          label: '龙属性弹'
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
      res: {
        totalDmg: 0,
        toMonsterPHYDmg: 0,
        toMonsterElDmg: 0,
        sumAttack: 0,
        physicDmg: 0,
        elDmg: 0,
        monsterPhyDmgClaw: 0,
        monsterPhyDmgClawSp1: 0,
        monsterPhyDmgClawSp2: 0
      }
    }
  },
  mounted () {
    this.baseSkillOptsInit()
  },
  methods: {
    baseSkillOptsInit () {
      this.baseSkillOpts = JSON.parse(
        JSON.stringify(baseLogic.getBaseDmgRate())
      )
      this.otherSkillOpts = JSON.parse(
        JSON.stringify(baseLogic.getOtherAttack())
      )
      this.elSkillOpts = JSON.parse(JSON.stringify(baseLogic.getElSkill()))
    },
    handleWeaponChange () {
      this.formData.closeItemNumber = 0
      this.formData.farItemNumber = 0
      this.formData.bottleType = 0
    },
    isAwakeCheck () {
      let flag = 0
      this.formData.elSkillList.forEach(item => {
        if (String(item) === '9') flag = 1
        if (String(item) === '10') flag = 2
      })
      return flag
    },
    isElCriticalCheck () {
      let flag = 0
      this.formData.elSkillList.forEach(item => {
        if (String(item) === '11') flag = 1
        if (String(item) === '12') flag = 2
      })
      return flag
    },
    isBluntCheck (bladeNumber) {
      this.formData.otherAttSkillList.forEach(num => {
        if (String(num) === '37') return bladeNumber
      })
      return 0
    },
    dmgCalculator () {
      let baseDmg = baseLogic.getBaseDmg(
        this.formData.weaponId,
        this.formData.weaponShowAtt,
        this.formData.customAttLv,
        0,
        this.formData.awakeAttackLv
      )
      let baseElDmg = baseLogic.getBaseElDmg(this.formData.weaponId, this.formData.weaponShowEl, this.formData.customElLv, 0, this.formData.awakeElementLv)
      let beforeDmgLimit = baseLogic.getBeforeDmgLimit(
        baseDmg,
        this.isBluntCheck(this.formData.bladeNumber),
        this.formData.baseAttSkillList,
        this.formData.otherAttSkillList
      )
      let beforeElLimit = baseLogic.getBeforeElLimit(baseElDmg, this.formData.elSkillList)
      let elDmgLimit = baseLogic.getElLimitation(this.formData.weaponId, baseElDmg, this.isAwakeCheck())
      let dmgLimit = baseLogic.getDmgLimitation(baseDmg)
      let afterDmgLimit = baseLogic.getAfterDmgLimit(beforeDmgLimit, dmgLimit)
      let afterElDmgLimit = baseLogic.getAfterElLimit(beforeElLimit, elDmgLimit)
      let sumAttack = baseLogic.getSumAttack(afterDmgLimit)
      let sumElement = baseLogic.getSumElDmg(this.formData.weaponId, afterElDmgLimit, 1, this.isElCriticalCheck())
      let attRate = baseLogic.getAttRate(sumAttack)
      let physicDmgRate = baseLogic.getPhysicalDmgRate(
        this.formData.weaponId,
        this.formData.closeItemNumber,
        this.formData.farItemNumber,
        this.formData.bottleType,
        this.formData.isBladeCheck
      )
      let physicDmg = baseLogic.getPhysicalDmg(
        this.formData.skillNumber,
        attRate,
        this.formData.criticalSituation,
        physicDmgRate
      )
      let elementDamege = baseLogic.getElementDmg(this.formData.weaponId, sumElement, attRate)
      this.res.elDmg = elementDamege
      let basePHYMeatRate = baseLogic.getBasePHYMeatRate(
        this.formData.meatRate,
        this.formData.bladeNumber
      )
      let baseElMeatRate = baseLogic.getBaseElMeatRate(this.formData.elMeatRate, this.formData.bladeNumber)
      let afterClawMeat = baseLogic.getBaseMeatAfterClaw(this.formData.meatRate, 0, this.formData.bladeNumber)
      let afterClawMeatSp1 = baseLogic.getBaseMeatAfterClaw(this.formData.meatRate, 5, this.formData.bladeNumber)
      let afterClawMeatSp2 = baseLogic.getBaseMeatAfterClaw(this.formData.meatRate, -5, this.formData.bladeNumber)
      let toMonsterPHYDmg = baseLogic.getToMonsterPHYDmg(
        physicDmg,
        basePHYMeatRate,
        0
      )
      let toMonsterElDmg = baseLogic.getToMonsterElDmg(elementDamege, baseElMeatRate)
      let monsterPhyDmgClaw = baseLogic.getToMonsterPHYDmg(physicDmg, afterClawMeat, 0)
      let monsterPhyDmgClawSp1 = baseLogic.getToMonsterPHYDmg(physicDmg, afterClawMeatSp1, 0)
      let monsterPhyDmgClawSp2 = baseLogic.getToMonsterPHYDmg(physicDmg, afterClawMeatSp2, 0)
      let totalDamge = baseLogic.getTotalDmg(toMonsterPHYDmg, toMonsterElDmg)
      this.res.toMonsterPHYDmg = toMonsterPHYDmg
      this.res.toMonsterElDmg = toMonsterElDmg
      this.res.totalDmg = totalDamge
      this.res.monsterPhyDmgClaw = monsterPhyDmgClaw + toMonsterElDmg
      this.res.monsterPhyDmgClawSp1 = monsterPhyDmgClawSp1 + toMonsterElDmg
      this.res.monsterPhyDmgClawSp2 = monsterPhyDmgClawSp2 + toMonsterElDmg
    },
    handleCalculator (formName) {
      this.dmgCalculator()
      // TODO
      // this.$refs[formName].validate(valid => {

      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .el-input__inner {
  border-radius: 0px;
  border: solid 1px #DCDFE6;
  border-width: 0 0 1px 0;
}

/deep/ .el-input-number__decrease {
  border-radius: 0px;
}

/deep/ .el-input-number__increase {
  border-radius: 0px;
}

/deep/ .el-button--small {
  border-radius: 0px;
  background-color: black;
  border: none;
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
}

.calculator-wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  .headerRow {
    .titleTextRow {
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

    .dividerRow {
      height: 8px;
      background-image: linear-gradient(90deg, #99CC33, #FF9900, #FFCC00);
    }
  }

  .calculatorPane {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;

    .inputArea {
      flex: 1 1 auto;
      margin: 20px;

      .el-form {
        .el-form-item {
          .itemRow {
            padding: 5px 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
            transition: all 0.3s linear;

            .row {
              display: flex;
              flex-flow: row wrap;
              justify-content: flex-start;

              .el-radio-group {
                margin: 20px 5px;
              }
            }
          }

          .awakeArea {
            padding: 5px 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);

            .row {
              display: flex;
              flex-flow: row wrap;
              justify-content: flex-start;
            }
          }

          .baseSkillsRow {
            padding: 5px 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);

            .el-checkbox-group {
              display: flex;
              flex-flow: column wrap;
              justify-content: flex-start;
              align-items: flex-start;
            }
          }
        }
      }
    }

    .resultArea {
      position: sticky;
      position: -webkit-sticky;
      top: 50px;
      margin: 20px;
      flex: 1 1 auto;
      padding: 5px 20px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);

      .btnRow {
        margin: 10px 0px;
        display: flex;
        justify-content: flex-end;
      }

      .row {
        margin: 10px 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;

        span {
          font-size: 14px;
        }

        .pre {
          color: #666666;
        }

        .data {
          margin: 0 10px;
        }
      }

      .col {
        margin: 10px 0px;
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: flex-start;

        span {
          font-size: 14px;
        }

        .pre {
          color: #666666;
        }

        .data {
          margin-top: 5px;
        }
      }
    }
  }

  .footerRow {
    background-color: black;

    .footerDivider {
      height: 8px;
      background-image: linear-gradient(90deg, #66CCFF, #CCFFCC, #66CCCC);
    }

    .textRow {
      display: flex;
      flex-flow: column;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      color: white;

      .dataSrc {
        margin: 5px 0px;
        font-size: 16px;
        font-weight: bolder;

        a {
          text-decoration: none;
        }

        a:link, a:hover, a:visited {
          background-image: linear-gradient(90deg, #FFCCCC, #CCCCFF, #FFFF99);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        a:active {
          color: #333333;
        }
      }

      .authorName {
        font-size: 14px;
        font-weight: lighter;
      }

      .authorId {
        font-size: 14px;
        font-weight: lighter;
        color: #666666;
      }
    }
  }
}
</style>
