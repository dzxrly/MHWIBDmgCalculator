/* eslint-disable no-unused-vars */
const weaponList = [
  {
    id: '0',
    name: '大剑',
    rate: 4.8, // 武器倍率
    bladeRate: 1.03, // 刃中补正，无该补正武器默认为1
    hyperCriticalLv1: 1.3, // 超会心等级1会心倍率
    hyperCriticalLv2: 1.35, // 超会心等级2会心倍率
    hyperCriticalLv3: 1.4, // 超会心等级3会心倍率
    elementCritical: 1.5, // 属性会心技能倍率
    trueElementCritical: 1.7, // 真·属性会心技能倍率
    specialCritical: 1.4, // 特殊会心技能倍率
    trueSpecialCritical: 1.6, // 真·特殊会心技能倍率
    customElement: [3.6, 7.2, 10.8, 14.4], // 客制强化-属性零件（属性）加成
    customSpecial: [3.6, 7.2, 10.8, 14.4], // 客制强化-属性零件（异常）加成
    awakeAtt: [2, 4, 6, 8, 9, 14], // 冥赤武器觉醒攻击Lv1~Lv6
    awakeCritical: [2, 4, 6, 8, 10, 15], // 冥赤武器觉醒会心Lv1~Lv6
    awakeElement: [2, 4, 6, 9, 12, 15], // 冥赤武器觉醒属性Lv1~Lv6
    awakeSpecial: [1, 2, 3, 4, 5, 7] // 冥赤武器觉醒异常Lv1~Lv6
  },
  {
    id: '1',
    name: '片手剑',
    rate: 1.4,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 2, 3, 5, 7, 10],
    awakeSpecial: [0, 0, 0, 2, 3, 5]
  },
  {
    id: '2',
    name: '双剑',
    rate: 1.4,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [2, 3, 4, 5, 6, 9],
    awakeSpecial: [0, 0, 0, 1, 2, 4]
  },
  {
    id: '3',
    name: '太刀',
    rate: 3.3,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 3, 5, 7, 9, 12],
    awakeSpecial: [0, 0, 0, 2, 3, 5]
  },
  {
    id: '4',
    name: '大锤',
    rate: 5.2,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.5,
    trueElementCritical: 1.7,
    specialCritical: 1.4,
    trueSpecialCritical: 1.6,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [2, 4, 6, 9, 12, 15],
    awakeSpecial: [1, 2, 3, 4, 5, 7]
  },
  {
    id: '5',
    name: '狩猎笛',
    rate: 4.2,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.5,
    trueElementCritical: 1.7,
    specialCritical: 1.4,
    trueSpecialCritical: 1.6,
    customElement: [3.3, 6.6, 9.9, 13.2],
    customSpecial: [3.3, 6.6, 9.9, 13.2],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [2, 4, 6, 8, 10, 15],
    awakeSpecial: [2, 3, 4, 5, 6, 9]
  },
  {
    id: '6',
    name: '长枪',
    rate: 2.3,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 3, 5, 7, 9, 12],
    awakeSpecial: [2, 3, 4, 5, 6, 9]
  },
  {
    id: '7',
    name: '铳枪',
    rate: 2.3,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3.3, 6.6, 9.9, 13.2],
    customSpecial: [3.3, 6.6, 9.9, 13.2],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [2, 4, 6, 8, 10, 15],
    awakeSpecial: [2, 3, 4, 5, 6, 9]
  },
  {
    id: '8',
    name: '斩斧',
    rate: 3.5,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 3, 5, 7, 9, 12],
    awakeSpecial: [1, 2, 3, 4, 5, 7]
  },
  {
    id: '9',
    name: '盾斧',
    rate: 3.6,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [2, 3, 4, 5, 6, 9],
    awakeSpecial: [1, 2, 3, 4, 5, 7]
  },
  {
    id: '10',
    name: '操虫棍',
    rate: 3.1,
    bladeRate: 1.03,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 2, 3, 5, 7, 10],
    awakeSpecial: [0, 0, 0, 2, 3, 5]
  },
  {
    id: '11',
    name: '弓',
    rate: 1.2,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.35,
    trueElementCritical: 1.55,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [3, 6, 9, 12],
    customSpecial: [3, 6, 9, 12],
    bottleSpecial: [0.1, 0.2, 0.3, 0.4], // 客制强化-属性零件（瓶子）属性or异常加成
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [1, 2, 3, 5, 7, 10],
    awakeSpecial: [0, 0, 0, 2, 3, 5]
  },
  {
    id: '12',
    name: '重弩炮',
    rate: 1.5,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.5,
    trueElementCritical: 1.7,
    specialCritical: 1.4,
    trueSpecialCritical: 1.6,
    customElement: [2, 3, 4, 6],
    customSpecial: [5, 10, 15, 25],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [0, 0, 0, 0, 0, 0],
    awakeSpecial: [0, 0, 0, 0, 0, 0]
  },
  {
    id: '13',
    name: '轻弩炮',
    rate: 1.3,
    bladeRate: 1.0,
    hyperCriticalLv1: 1.3,
    hyperCriticalLv2: 1.35,
    hyperCriticalLv3: 1.4,
    elementCritical: 1.25,
    trueElementCritical: 1.4,
    specialCritical: 1.2,
    trueSpecialCritical: 1.4,
    customElement: [2, 3, 4, 6],
    customSpecial: [5, 10, 15, 25],
    awakeAtt: [2, 4, 6, 8, 10, 15],
    awakeCritical: [2, 4, 6, 8, 10, 15],
    awakeElement: [0, 0, 0, 0, 0, 0],
    awakeSpecial: [0, 0, 0, 0, 0, 0]
  }
]
const customAtt = [0, 5, 10, 15, 25] // 客制攻击Lv0~Lv4
const customCritical = [0, 0.1, 0.15, 0.2, 0.25] // 客制会心Lv0~Lv4
const baseDmgRate = [ // 基础攻击力倍率
  {
    id: '0',
    name: '猫的炮击术 (盾斧榴弹瓶)',
    rate: 1.15
  },
  {
    id: '1',
    name: '猫的炮击术 (彻甲榴弹)',
    rate: 1.15
  },
  {
    id: '2',
    name: '猫的炮击术 (龙击炮)',
    rate: 1.15
  },
  {
    id: '3',
    name: '猫的火事力场',
    rate: 1.35
  },
  {
    id: '4',
    name: '猫的射击术',
    rate: 1.1
  },
  {
    id: '5',
    name: '猫的粗暴射击',
    rate: 1.05
  },
  {
    id: '6',
    name: '回避衣装发动',
    rate: 1.3
  },
  {
    id: '7',
    name: '攻击力UP【小】',
    rate: 1.1
  },
  {
    id: '8',
    name: '攻击力UP【大】',
    rate: 1.15
  },
  {
    id: '9',
    name: '攻击力UP【特大】',
    rate: 1.2
  },
  {
    id: '10',
    name: '飞燕',
    rate: 1.3
  },
  {
    id: '11',
    name: '炮术 Lv5 (盾斧榴弹瓶)',
    rate: 1.5
  },
  {
    id: '12',
    name: '炮术 Lv5 (彻甲榴弹)',
    rate: 1.5
  },
  {
    id: '13',
    name: '炮术 Lv5 (龙击炮)',
    rate: 1.5
  },
  {
    id: '14',
    name: '不屈 (x1)',
    rate: 1.1
  },
  {
    id: '15',
    name: '不屈 (x2)',
    rate: 1.2
  },
  {
    id: '16',
    name: '火事力场 Lv7',
    rate: 1.4
  },
  {
    id: '17',
    name: '无属性强化',
    rate: 1.05
  },
  {
    id: '18',
    name: '通常弹 · 通常箭强化 Lv1',
    rate: 1.1
  },
  {
    id: '19',
    name: '通常弹 · 通常箭强化 Lv2',
    rate: 1.2
  },
  {
    id: '20',
    name: '攻击守势 Lv3',
    rate: 1.15
  },
  {
    id: '21',
    name: '贯通弹 · 龙之箭强化 Lv1',
    rate: 1.1
  },
  {
    id: '22',
    name: '贯通弹 · 龙之箭强化 Lv2',
    rate: 1.2
  },
  {
    id: '23',
    name: '特殊射击强化 Lv1',
    rate: 1.1
  },
  {
    id: '24',
    name: '特殊射击强化 Lv2',
    rate: 1.2
  },
  {
    id: '25',
    name: '散弹 · 刚射强化 Lv1',
    rate: 1.1
  },
  {
    id: '26',
    name: '散弹 · 刚射强化 Lv2',
    rate: 1.15
  }
]
const otherAttack = [ // 额外攻击
  {
    id: '0',
    name: '攻击力UP (小)',
    attack: 5
  },
  {
    id: '1',
    name: '攻击力UP (中)',
    attack: 10
  },
  {
    id: '2',
    name: '攻击力UP (大)',
    attack: 15
  },
  {
    id: '3',
    name: '猫的短期催眠术',
    attack: 9
  },
  {
    id: '4',
    name: '力量护符',
    attack: 6
  },
  {
    id: '5',
    name: '力量之爪',
    attack: 9
  },
  {
    id: '6',
    name: '鬼人药',
    attack: 5
  },
  {
    id: '7',
    name: '鬼人药 · 大',
    attack: 7
  },
  {
    id: '8',
    name: '怪力种子',
    attack: 10
  },
  {
    id: '9',
    name: '怪力药丸',
    attack: 25
  },
  {
    id: '10',
    name: '鬼人粉尘',
    attack: 10
  },
  {
    id: '11',
    name: '挑战者 Lv7',
    attack: 28
  },
  {
    id: '12',
    name: '攻击 Lv7',
    attack: 21
  },
  {
    id: '13',
    name: '转祸为福 Lv3',
    attack: 18
  },
  {
    id: '14',
    name: '无伤 Lv3',
    attack: 20
  },
  {
    id: '15',
    name: '拔刀术【力】',
    attack: 5
  },
  {
    id: '16',
    name: '怨恨 Lv5',
    attack: 25
  }
]
const bluntSkill = [15, 25, 30, 30, 0] // 钝器能手，对应：0绿斩、1黄斩、2橙斩、3红斩、4其他
const weaponLimitRate = [ // 武器攻击力上限后倍率
  {
    id: '0',
    name: '无',
    rate: 1
  },
  {
    id: '1',
    name: '[太刀] 气刃等级 (白)',
    rate: 1.05
  },
  {
    id: '2',
    name: '[太刀] 气刃等级 (黄)',
    rate: 1.1
  },
  {
    id: '3',
    name: '[太刀] 气刃等级 (红)',
    rate: 1.2
  },
  {
    id: '4',
    name: '[大锤] 强蓄',
    rate: 1.07
  },
  {
    id: '5',
    name: '[狩猎笛] 自我强化',
    rate: 1.15
  },
  {
    id: '6',
    name: '[斩斧] 强击瓶',
    rate: 1.17
  },
  {
    id: '7',
    name: '[盾斧] 红盾',
    rate: 1.1
  },
  {
    id: '8',
    name: '[虫棍] 红灯 + 白灯',
    rate: 1.1
  },
  {
    id: '9',
    name: '[虫棍] 三灯',
    rate: 1.15
  }
]
const closeItemRate = [1, 1.2, 1.3, 1.35, 1.4] // 近战零件
const farItemRate = [1, 1.2, 1.35, 1.4, 1.45] // 远程零件
const bottleList = [1, 1.18, 1.35] // 弓箭瓶子种类 0非弓箭或无瓶子 1接击瓶 2强击瓶
const criticalRate = [0.75, 1, 1.25, 1.3, 1.35, 1.4] // 会心倍率分别为负会心、无会心、基础会心、超心1、超心2、超心3
const bladeRate = [1, 0.5, 0.75, 1, 1.05, 1.2, 1.32, 1.39] // 斩味补正，分别为远程专用、红、橙、黄、绿、蓝、白、紫
const elBladeRate = [1, 0.25, 0.5, 0.75, 1, 1.0625, 1.15, 1.25] // 斩味属性补正，分别为远程专用、红、橙、黄、绿、蓝、白、紫
const elementSkillList = [
  {
    id: '0',
    name: '属性强化技能 Lv1',
    baseElDmgRate: 1,
    extractElDmg: 3
  },
  {
    id: '1',
    name: '属性强化技能 Lv2',
    baseElDmgRate: 1,
    extractElDmg: 6
  },
  {
    id: '2',
    name: '属性强化技能 Lv3',
    baseElDmgRate: 1,
    extractElDmg: 10
  },
  {
    id: '3',
    name: '属性强化技能 Lv4',
    baseElDmgRate: 1.05,
    extractElDmg: 10
  },
  {
    id: '4',
    name: '属性强化技能 Lv5',
    baseElDmgRate: 1.1,
    extractElDmg: 10
  },
  {
    id: '5',
    name: '属性强化技能 Lv6',
    baseElDmgRate: 1.2,
    extractElDmg: 10
  },
  {
    id: '6',
    name: '转祸为福 (Lv3)',
    baseElDmgRate: 1,
    extractElDmg: 9
  },
  {
    id: '7',
    name: '属性加速',
    baseElDmgRate: 1,
    extractElDmg: 6
  },
  {
    id: '8',
    name: '真 · 属性加速',
    baseElDmgRate: 1,
    extractElDmg: 15
  },
  {
    id: '9',
    name: '龙脉觉醒',
    baseElDmgRate: 1,
    extractElDmg: 8
  },
  {
    id: '10',
    name: '真 · 龙脉觉醒',
    baseElDmgRate: 1,
    extractElDmg: 15
  },
  {
    id: '11',
    name: '属性会心',
    baseElDmgRate: 1,
    extractElDmg: 0
  },
  {
    id: '12',
    name: '真 · 属性会心',
    baseElDmgRate: 1,
    extractElDmg: 0
  }
]

export default {
  /*
  * 获取基础攻击力倍率
  */
  getBaseDmgRate () {
    return baseDmgRate
  },
  /*
  * 获取额外攻击力加成
  */
  getOtherAttack () {
    return otherAttack
  },
  /*
  * 获取属性倍率加成
  */
  getElSkill () {
    return elementSkillList
  },
  /*
  * 计算基础攻击力
  * @param weaponId 武器id (0~13)
  * @param weaponShowAtt 游戏内武器栏显示的攻击力
  * @param customAttLv 客制攻击等级 (0~3)
  * @param attSkin 攻击零件贴皮等级，暂时弃用，默认值0
  * @param awakeAttackLv 5个冥赤觉醒槽的攻击觉醒等级 (共5项，每项-1~5，-1代表空槽)
  */
  getBaseDmg (weaponId, weaponShowAtt, customAttLv, attSkin = 0, awakeAttackLv = [-1, -1, -1, -1, -1]) {
    let weaponItem = {}
    weaponList.forEach(weapon => {
      if (weapon.id === weaponId) weaponItem = JSON.parse(JSON.stringify(weapon))
    })
    let awakeAttSum = 0
    awakeAttackLv.forEach(num => {
      if (num >= 0) awakeAttSum += weaponItem.awakeAtt[parseInt(num)]
    })
    if (weaponShowAtt === '') weaponShowAtt = 0
    let baseDmg = parseInt(weaponShowAtt) / weaponItem.rate + attSkin + customAtt[parseInt(customAttLv)] + awakeAttSum
    return baseDmg
  },
  /*
  * 计算基础属性值
  * @param weaponId 武器id (0~13)
  * @param weaponShowEl 游戏内武器属性值
  * @param customElLv 客制属性等级 (-1~3)
  * @param elSkin 属性零件贴皮等级，暂时弃用，默认值0
  * @param awakeElLv 5个冥赤觉醒槽的属性觉醒等级 (共5项，每项-1~5，-1代表空槽)
  */
  getBaseElDmg (weaponId, weaponShowEl, customElLv = -1, elSkin = 0, awakeElLv = [-1, -1, -1, -1, -1]) {
    let baseElDmg = 0
    let weaponItem = {}
    weaponList.forEach(weapon => {
      if (weapon.id === weaponId) weaponItem = JSON.parse(JSON.stringify(weapon))
    })
    let awakeElSum = 0
    awakeElLv.forEach(num => {
      if (num >= 0) awakeElSum += weaponItem.awakeElement[parseInt(num)]
    })
    if (weaponShowEl === '') weaponShowEl = 0
    if (weaponId !== '12' && weaponId !== '13') {
      if (parseInt(customElLv) >= 0) baseElDmg = parseInt(weaponShowEl) + weaponItem.customElement[parseInt(customElLv)] + elSkin + awakeElSum
      else baseElDmg = parseInt(weaponShowEl) + elSkin + awakeElSum
    } else {
      if (parseInt(customElLv) >= 0) baseElDmg = parseInt(weaponShowEl) + weaponItem.customElement[parseInt(customElLv)]
      else baseElDmg = parseInt(weaponShowEl)
    }
    return baseElDmg
  },
  /*
  * 计算武器攻击力上限
  * @param baseDmg 基础攻击力
  */
  getDmgLimitation (baseDmg) {
    return baseDmg * 2.0
  },
  /*
  * 计算武器攻击力上限前数据
  * @param baseDmg 基础攻击力
  * @param bluntLv 斩味：0绿斩、1黄斩、2橙斩、3红斩、4其他
  * @param baseAttRates 基础攻击力倍率数组
  * @param otherAttacks 额外攻击力加成数组
  */
  getBeforeDmgLimit (baseDmg, bluntLv = 4, baseAttRates = [], otherAttacks = []) {
    let baseAttRate = 1
    baseAttRates.forEach(item => {
      baseAttRate *= baseDmgRate[parseInt(item)].rate
    })
    let otherAttackSum = 0
    otherAttacks.forEach(item => {
      otherAttackSum += otherAttack[parseInt(item)].attack
    })
    return (baseDmg + bluntSkill[parseInt(bluntLv)]) * baseAttRate + otherAttackSum
  },
  /*
  * 计算武器属性伤害上限前数据
  * @param baseElDmg 基础属性攻击力
  * @param elSkillArray 属性加成类技能数组
  */
  getBeforeElLimit (baseElDmg, elSkillArray = []) {
    let baseElRate = 1
    let extractEl = 0
    elSkillArray.forEach(num => {
      baseElRate *= elementSkillList[parseInt(num)].baseElDmgRate
      extractEl += elementSkillList[parseInt(num)].extractElDmg
    })
    return (baseElDmg * baseElRate + extractEl)
  },
  /*
  * 计算武器属性伤害上限
  * @param weaponId 武器ID
  * @param baseElDmg 基础属性伤害
  * @param isAwake 冥赤套效果(0:无 1:冥赤三件套 2:冥赤五件套)
  */
  getElLimitation (weaponId, baseElDmg, isAwake) {
    let limit = 0
    if (weaponId === '12' || weaponId === '13') {
      switch (parseInt(isAwake)) {
        case 0:
          limit = baseElDmg * 1.57
          break
        case 1:
          limit = baseElDmg * 1.8
          break
        case 2:
          limit = baseElDmg * 2.35
          break
      }
    } else {
      switch (parseInt(isAwake)) {
        case 0:
          limit = Math.max(baseElDmg * 1.6, baseElDmg + 15)
          break
        case 1:
          limit = Math.max(baseElDmg * 2.2, baseElDmg + 15)
          break
        case 2:
          limit = Math.max(baseElDmg * 2.55, baseElDmg + 15)
          break
      }
    }
    return limit
  },
  /*
  * 计算武器属性上限后数值
  * @param beforeElLimit 武器属性上限前数据
  * @param elLimit 武器属性上限
  */
  getAfterElLimit (beforeElLimit, elLimit) {
    return Math.min(beforeElLimit, elLimit)
  },
  /*
  * 计算武器攻击力上限后数值
  * @param beforeDmgLimit 武器攻击力上限前数据
  * @param dmgLimit 武器攻击力上限
  */
  getAfterDmgLimit (beforeDmgLimit, dmgLimit) {
    return Math.min(beforeDmgLimit, dmgLimit)
  },
  /*
  * 计算武器约后属性伤害
  * @param weaponId 武器ID
  * @param afterElLimit 武器属性上限后数据
  * @param limitRate 武器属性上限后倍率（默认为1）
  * @param isElCritical 属性会心情况（0无 1属性会心 2真属性会心）
  */
  getSumElDmg (weaponId, afterElLimit, limitRate = 1, isElCritical) {
    let weapon = {}
    weaponList.forEach(item => {
      if (item.id === weaponId) weapon = JSON.parse(JSON.stringify(item))
    })
    switch (parseInt(isElCritical)) {
      case 0:
        return Math.round(afterElLimit * limitRate * 1)
      case 1:
        return Math.round(afterElLimit * limitRate * weapon.elementCritical)
      case 2:
        return Math.round(afterElLimit * limitRate * weapon.trueElementCritical)
    }
  },
  /*
  * 计算武器总攻击力
  * @param afterDmgLimit 武器攻击力上限后数据
  * @param limitRate 武器攻击力上限后倍率（默认为1）
  */
  getSumAttack (afterDmgLimit, limitRate = 0) {
    return Math.round(afterDmgLimit * weaponLimitRate[parseInt(limitRate)].rate)
  },
  /*
  * 计算武器总攻击力百分比
  * @param sumAttack 总攻击力
  */
  getAttRate (sumAttack) {
    return sumAttack / 100
  },
  /*
  * 计算武器最终属性伤害
  * @param weaponId 武器ID
  * @param sumElDmg 约后属性伤害
  * @param attRate 武器攻击力百分比（默认1）
  * @param elementChanger 属性修改器（默认1）
  * @param elRate 属性伤害倍率（默认1）
  */
  getElementDmg (weaponId, sumElDmg, attRate = 1, elementChanger = 1, elRate = 1) {
    if (weaponId === '12' || weaponId === '13') {
      return sumElDmg * attRate * elementChanger * elRate
    } else return sumElDmg * elementChanger * elRate
  },
  /*
  * 计算武器物理伤害倍率
  * @param closeItemNumber 近战零件数量
  * @param farItemNumber 远程零件数量
  * @param bottleType 瓶子种类
  * @param bladeRate 刃中补正（暂不使用，默认为1）
  */
  getPhysicalDmgRate (closeItemNumber, farItemNumber, bottleType, bladeRate = 1) {
    return closeItemRate[parseInt(closeItemNumber)] * farItemRate[parseInt(farItemNumber)] * bottleList[parseInt(bottleType)] * bladeRate
  },
  /*
  * 计算武器物理伤害
  * @param skillNumber 动作值
  * @param attRate 攻击动作百分比
  * @param criticalSituation 会心情况
  * @param physicalDmgRate 物理伤害倍率
  */
  getPhysicalDmg (skillNumber, attRate, criticalSituation, physicalDmgRate) {
    return parseFloat(skillNumber) * attRate * criticalRate[parseInt(criticalSituation)] * physicalDmgRate
  },
  /*
  * 计算武器属性肉质百分比
  * @param meatElRate 基础属性肉质
  * @param bladeNumber 斩味
  */
  getBaseElMeatRate (meatElRate, bladeNumber) {
    let blade = bladeRate[parseInt(bladeNumber)]
    return (meatElRate * blade) / 100
  },
  /*
  * 计算武器物理肉质百分比
  * @param meatRate 基础物理肉质
  * @param bladeNumber 斩味
  */
  getBasePHYMeatRate (meatRate, bladeNumber) {
    let blade = bladeRate[parseInt(bladeNumber)]
    return (meatRate * blade) / 100
  },
  /*
  * 计算软化后的物理肉质百分比
  * @param meatRate 基础物理肉质
  * @param offset 肉质偏移
  * @param bladeNumber 斩味
  */
  getBaseMeatAfterClaw (meatRate, offset, bladeNumber) {
    let baseMeat = Math.floor(0.75 * meatRate) + (25 + offset) * bladeRate[parseInt(bladeNumber)]
    return baseMeat / 100
  },
  /*
  * 计算武器包含肉质的物理伤害
  * @param physicDmg 武器物理伤害
  * @param physicMeatRate 物理肉质百分比
  * @param unchangedDmg 固定伤害
  */
  getToMonsterPHYDmg (physicDmg, physicMeatRate, unchangedDmg = 0) {
    return Math.round(physicDmg * physicMeatRate + unchangedDmg)
  },
  /*
  * 计算武器包含肉质的属性伤害
  * @param elementDmg 武器属性伤害
  * @param elMeatRate 属性肉质百分比
  */
  getToMonsterElDmg (elementDmg, elMeatRate) {
    return Math.round(elementDmg * elMeatRate)
  },
  /*
  * 计算武器包含肉质的总伤害
  * @param toMonsterPHYDmg 武器物理伤害
  * @param toMonsterElDmg 武器属性伤害
  */
  getTotalDmg (toMonsterPHYDmg, toMonsterElDmg) {
    return toMonsterPHYDmg + toMonsterElDmg
  }
}
