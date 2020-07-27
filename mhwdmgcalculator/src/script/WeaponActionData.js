/* eslint-disable no-unused-vars */
// 武器动作值数据库 Data from https://tieba.baidu.com/p/6591591373?see_lz=1
const actionDataList = [
  {
    name: '大剑',
    id: '0',
    actions: [
      {
        name: '直斩', // 招式名称
        actionNum: 48, // 动作值
        elementChanger: 1 // 属性补正
      },
      {
        name: '横击',
        actionNum: 16,
        elementChanger: 1
      },
      {
        name: '横击(强蓄力斩派生)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '上捞斩',
        actionNum: 38,
        elementChanger: 1
      },
      {
        name: '上捞斩(强蓄力斩派生)',
        actionNum: 41,
        elementChanger: 1
      },
      {
        name: '横扫斩',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '横扫斩(强横扫派生)',
        actionNum: 29,
        elementChanger: 1
      },
      {
        name: '冲撞攻击 Lv1',
        actionNum: 26,
        elementChanger: 0
      },
      {
        name: '冲撞攻击 Lv2',
        actionNum: 35,
        elementChanger: 0
      },
      {
        name: '冲撞攻击 Lv3',
        actionNum: 48,
        elementChanger: 0
      },
      {
        name: '蓄力斩 Lv1',
        actionNum: 48,
        elementChanger: 1
      },
      {
        name: '蓄力斩 Lv2',
        actionNum: 77,
        elementChanger: 1.3
      },
      {
        name: '蓄力斩 Lv3',
        actionNum: 110,
        elementChanger: 1.5
      },
      {
        name: '强蓄力斩 Lv1',
        actionNum: 82,
        elementChanger: 1.4
      },
      {
        name: '强蓄力斩 Lv2',
        actionNum: 111,
        elementChanger: 1.5
      },
      {
        name: '强蓄力斩 Lv3',
        actionNum: 131,
        elementChanger: 1.7
      },
      {
        name: '强横扫 Lv1',
        actionNum: 59,
        elementChanger: 1
      },
      {
        name: '强横扫 Lv2',
        actionNum: 66,
        elementChanger: 1.3
      },
      {
        name: '强横扫 Lv3',
        actionNum: 78,
        elementChanger: 1.5
      },
      {
        name: '真蓄力斩 Lv1(第一次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '真蓄力斩 Lv2(第一次命中)',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '真蓄力斩 Lv3(第一次命中)',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '真蓄力斩 Lv1(第二次命中)',
        actionNum: 120,
        elementChanger: 1.4
      },
      {
        name: '真蓄力斩 Lv2(第二次命中)',
        actionNum: 175,
        elementChanger: 1.5
      },
      {
        name: '真蓄力斩 Lv3(第二次命中)',
        actionNum: 211,
        elementChanger: 1.7
      },
      {
        name: '强击真蓄力斩 Lv1(第二次命中)',
        actionNum: 144,
        elementChanger: 1.4
      },
      {
        name: '强击真蓄力斩 Lv2(第二次命中)',
        actionNum: 210,
        elementChanger: 1.5
      },
      {
        name: '强击真蓄力斩 Lv3(第二次命中)',
        actionNum: 264,
        elementChanger: 1.8
      },
      {
        name: '踢',
        actionNum: 5,
        elementChanger: 0
      },
      {
        name: '飞身跃入横扫斩 Lv1',
        actionNum: 75,
        elementChanger: 2.2
      },
      {
        name: '飞身跃入横扫斩 Lv2',
        actionNum: 96,
        elementChanger: 3.15
      },
      {
        name: '飞身跃入横扫斩 Lv3',
        actionNum: 118,
        elementChanger: 3.5
      },
      {
        name: '跳跃蓄力斩 Lv1',
        actionNum: 58,
        elementChanger: 1
      },
      {
        name: '跳跃蓄力斩 Lv2',
        actionNum: 69,
        elementChanger: 1.1
      },
      {
        name: '跳跃蓄力斩 Lv3',
        actionNum: 87,
        elementChanger: 1.2
      },
      {
        name: '蓄力上捞斩 Lv1',
        actionNum: 48,
        elementChanger: 1
      },
      {
        name: '蓄力上捞斩 Lv2',
        actionNum: 72,
        elementChanger: 1.3
      },
      {
        name: '蓄力上捞斩 Lv3',
        actionNum: 98,
        elementChanger: 1.5
      },
      {
        name: '下坠突刺 Lv1',
        actionNum: 16,
        elementChanger: 0.2
      },
      {
        name: '下坠突刺 Lv2',
        actionNum: 22,
        elementChanger: 0.25
      },
      {
        name: '下坠突刺 Lv3',
        actionNum: 27,
        elementChanger: 0.3
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 48,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第二次命中)',
        actionNum: 6,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(循环命中)',
        actionNum: 6,
        elementChanger: 0.5
      },
      {
        name: '飞翔爪武器攻击(最后一击)',
        actionNum: 60,
        elementChanger: 1
      },
      {
        name: '骑乘攻击 Lv1(第一次命中)',
        actionNum: 100,
        elementChanger: 1
      },
      {
        name: '骑乘攻击 Lv2(第一次命中)',
        actionNum: 122,
        elementChanger: 1.3
      },
      {
        name: '骑乘攻击 Lv3(第一次命中)',
        actionNum: 139,
        elementChanger: 1.5
      },
      {
        name: '骑乘攻击 Lv1(第二次命中)',
        actionNum: 58,
        elementChanger: 1
      },
      {
        name: '骑乘攻击 Lv2(第二次命中)',
        actionNum: 72,
        elementChanger: 1.3
      },
      {
        name: '骑乘攻击 Lv3(第二次命中)',
        actionNum: 89,
        elementChanger: 1.5
      }
    ]
  },
  {
    name: '片手剑',
    id: '1',
    actions: [
      {
        name: '斩下',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '横斩',
        actionNum: 13,
        elementChanger: 1
      },
      {
        name: '剑盾连击(剑)',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '剑盾连击(盾)',
        actionNum: 10,
        elementChanger: 0
      },
      {
        name: '旋回斩',
        actionNum: 16,
        elementChanger: 1
      },
      {
        name: '旋回斩(向后)',
        actionNum: 17,
        elementChanger: 1
      },
      {
        name: '突进斩',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '防御斩',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '瞬间盾攻击',
        actionNum: 6,
        elementChanger: 0
      },
      {
        name: '上捞斩',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '回旋斩击',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '水平斩',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '反击斩',
        actionNum: 21,
        elementChanger: 1
      },
      {
        name: '蓄力斩(第一次命中)',
        actionNum: 29,
        elementChanger: 0
      },
      {
        name: '蓄力斩(第二次命中)',
        actionNum: 40,
        elementChanger: 1
      },
      {
        name: '上冲斩',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '向下强锤',
        actionNum: 43,
        elementChanger: 0
      },
      {
        name: '向下强锤(着陆)',
        actionNum: 39,
        elementChanger: 0
      },
      {
        name: '飞身跃入斩',
        actionNum: 30,
        elementChanger: 1.1
      },
      {
        name: '精准突击(JR) Ⅰ(第一次命中)',
        actionNum: 25,
        elementChanger: 0
      },
      {
        name: '精准突击(JR) Ⅰ(第二次命中)',
        actionNum: 23,
        elementChanger: 1
      },
      {
        name: '精准突击(JR) Ⅰ(第三次命中)',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '精准突击(JR) Ⅱ',
        actionNum: 35,
        elementChanger: 0
      },
      {
        name: '精准突击(JR) Ⅲ(第一次命中)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '精准突击(JR) Ⅲ(第二次命中)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '精准突击(JR) Ⅲ(第二次-失败)',
        actionNum: 8,
        elementChanger: 1
      },
      {
        name: '完美精准突击(JR) Ⅰ(第一次命中)',
        actionNum: 45,
        elementChanger: 0
      },
      {
        name: '完美精准突击(JR) Ⅰ(第二次命中)',
        actionNum: 45,
        elementChanger: 1.2
      },
      {
        name: '完美精准突击(JR) Ⅰ(第三次命中)',
        actionNum: 60,
        elementChanger: 1.2
      },
      {
        name: '完美精准突击(JR) Ⅱ',
        actionNum: 55,
        elementChanger: 0
      },
      {
        name: '完美精准突击(JR) Ⅲ(第一次命中)',
        actionNum: 65,
        elementChanger: 1.35
      },
      {
        name: '完美精准突击(JR) Ⅲ(第二次命中)',
        actionNum: 70,
        elementChanger: 1.8
      },
      {
        name: '完美精准突击(JR) Ⅲ(第二次-失败)',
        actionNum: 13,
        elementChanger: 1
      },
      {
        name: '盾攻击',
        actionNum: 8,
        elementChanger: 0
      },
      {
        name: '裹拳盾击',
        actionNum: 16,
        elementChanger: 0
      },
      {
        name: '奋力强锤',
        actionNum: 31,
        elementChanger: 0
      },
      {
        name: '突进斩',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '跳跃斩',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '下坠突刺',
        actionNum: 14,
        elementChanger: 0.3
      },
      {
        name: '跳跃上捞斩',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '跳跃突进斩',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '顺斩(第一次命中)',
        actionNum: 10,
        elementChanger: 1
      },
      {
        name: '顺斩(第二次命中)',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '对空飞翔爪',
        actionNum: 8,
        elementChanger: 0
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 10,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第二次命中)',
        actionNum: 10,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第三次命中)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第四次命中)',
        actionNum: 28,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(三连击-盾)',
        actionNum: 26,
        elementChanger: 0
      },
      {
        name: '骑乘攻击(三连击-剑)',
        actionNum: 45,
        elementChanger: 1
      }
    ]
  },
  {
    name: '双剑',
    id: '2',
    actions: [
      {
        name: '二连斩(全部命中)',
        actionNum: 18,
        elementChanger: 0.6
      },
      {
        name: '二连反击斩(全部命中)',
        actionNum: 19,
        elementChanger: 0.6
      },
      {
        name: '车轮斩(全部命中)',
        actionNum: 31,
        elementChanger: 0.7
      },
      {
        name: '横挥斩(4次全部命中)',
        actionNum: 16,
        elementChanger: 0.6
      },
      {
        name: '上捞斩(横挥斩派生)',
        actionNum: 31,
        elementChanger: 0.7
      },
      {
        name: '反旋斩(全部命中)',
        actionNum: 10,
        elementChanger: 0.6
      },
      {
        name: '左回旋斩(全部命中)',
        actionNum: 27,
        elementChanger: 0.6
      },
      {
        name: '右回旋斩(全部命中)',
        actionNum: 27,
        elementChanger: 0.6
      },
      {
        name: '左二回旋斩(全部命中)',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '右二回旋斩(全部命中)',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '鬼人连斩(前四次全部命中)',
        actionNum: 32,
        elementChanger: 0.8
      },
      {
        name: '鬼人连斩(后三次全部命中)',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '鬼人反手斩',
        actionNum: 11,
        elementChanger: 0.8
      },
      {
        name: '鬼人二连斩(全部命中)',
        actionNum: 21,
        elementChanger: 0.8
      },
      {
        name: '鬼人六连斩(全部命中)',
        actionNum: 70,
        elementChanger: 0.8
      },
      {
        name: '左移动斩',
        actionNum: 7,
        elementChanger: 0.8
      },
      {
        name: '右移动斩',
        actionNum: 7,
        elementChanger: 0.8
      },
      {
        name: '上捞斩(移动斩派生)',
        actionNum: 9,
        elementChanger: 0.8
      },
      {
        name: '鬼人突进连斩(第一+第二次命中)',
        actionNum: 9,
        elementChanger: 0.6
      },
      {
        name: '鬼人二连斩(第三次命中)',
        actionNum: 8,
        elementChanger: 1
      },
      {
        name: '鬼人二连斩(第四+第五次命中)',
        actionNum: 9,
        elementChanger: 0.6
      },
      {
        name: '鬼人二连斩(第六次命中)',
        actionNum: 8,
        elementChanger: 1
      },
      {
        name: '上捞斩(鬼人突进连斩派生)',
        actionNum: 8,
        elementChanger: 0.8
      },
      {
        name: '鬼人乱舞(第一+第二次命中)',
        actionNum: 34,
        elementChanger: 1
      },
      {
        name: '鬼人乱舞(第三~第十四次命中)',
        actionNum: 114,
        elementChanger: 0.8
      },
      {
        name: '鬼人乱舞(第十五+第十六次命中)',
        actionNum: 27,
        elementChanger: 1
      },
      {
        name: '跳跃二段斩(全部命中)',
        actionNum: 21,
        elementChanger: 0.6
      },
      {
        name: '顺斩(全部命中)',
        actionNum: 46,
        elementChanger: 0.7
      },
      {
        name: '空中回旋乱舞(前两次命中)',
        actionNum: 25,
        elementChanger: 0.5
      },
      {
        name: '空中回旋乱舞(后四次命中)',
        actionNum: 65,
        elementChanger: 0.7
      },
      {
        name: '空中回旋乱舞·天(前四次命中)',
        actionNum: 56,
        elementChanger: 0.4
      },
      {
        name: '空中回旋乱舞·天(后续单次命中)',
        actionNum: 21,
        elementChanger: 1
      },
      {
        name: '回旋乱舞终结(全部命中)',
        actionNum: 64,
        elementChanger: 0.7
      },
      {
        name: '回旋乱舞终结(全部命中-空中回旋乱舞派生)',
        actionNum: 64,
        elementChanger: 0.8
      },
      {
        name: '飞翔爪攻击',
        actionNum: 8,
        elementChanger: 0
      },
      {
        name: '飞翔爪武器攻击(前两次命中)',
        actionNum: 26,
        elementChanger: 0.7
      },
      {
        name: '飞翔爪武器攻击(第三次命中)',
        actionNum: 9,
        elementChanger: 0.5
      },
      {
        name: '飞翔爪武器攻击(后三次命中)',
        actionNum: 27,
        elementChanger: 0.7
      },
      {
        name: '飞翔爪回旋捞斩(全部命中)',
        actionNum: 46,
        elementChanger: 1
      },
      {
        name: '骑乘鬼人连斩(前两次命中)',
        actionNum: 36,
        elementChanger: 1
      },
      {
        name: '骑乘鬼人连斩(第三~第六次命中)',
        actionNum: 40,
        elementChanger: 0.5
      },
      {
        name: '骑乘鬼人连斩(后续循环命中-单次)',
        actionNum: 10,
        elementChanger: 0.7
      },
      {
        name: '骑乘鬼人连斩(终结命中-单次)',
        actionNum: 23,
        elementChanger: 1
      }
    ]
  },
  {
    name: '太刀',
    id: '3',
    actions: [
      {
        name: '踏步斩',
        actionNum: 24,
        elementChanger: 1
      },
      {
        name: '直斩',
        actionNum: 21,
        elementChanger: 1
      },
      {
        name: '突刺',
        actionNum: 12,
        elementChanger: 1
      },
      {
        name: '上捞斩',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '袈裟斩',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '左右移动斩',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '气刃踏步斩(气刃槽≥20%)',
        actionNum: 28,
        elementChanger: 1
      },
      {
        name: '气刃踏步斩(气刃槽＜20%)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅰ(气刃槽≥15%)',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅰ(气刃槽＜15%)',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅱ',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅲ(第一次命中)',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅲ(第二次命中)',
        actionNum: 19,
        elementChanger: 1
      },
      {
        name: '气刃斩 Ⅲ(第三次命中)',
        actionNum: 34,
        elementChanger: 1
      },
      {
        name: '气刃大回旋',
        actionNum: 38,
        elementChanger: 1
      },
      {
        name: '见切(气刃槽≥10%)',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '见切(气刃槽＜10%)',
        actionNum: 12,
        elementChanger: 1
      },
      {
        name: '气刃突刺',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '气刃兜割(白刃)',
        actionNum: 10,
        elementChanger: 0.3
      },
      {
        name: '气刃兜割(黄刃)',
        actionNum: 15,
        elementChanger: 0.3
      },
      {
        name: '气刃兜割(红刃)',
        actionNum: 25,
        elementChanger: 0.3
      },
      {
        name: '居合拔刀斩(第一次命中)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '居合拔刀斩(第二次命中)',
        actionNum: 13,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(无刃)',
        actionNum: 17,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(白刃-第一次命中)',
        actionNum: 19,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(白刃-第二次命中)',
        actionNum: 55,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(黄刃-第一次命中)',
        actionNum: 31,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(黄刃-第二次命中)',
        actionNum: 72,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(红刃-第一次命中)',
        actionNum: 39,
        elementChanger: 1
      },
      {
        name: '居合拔刀气刃斩(红刃-第二次命中)',
        actionNum: 86,
        elementChanger: 1
      },
      {
        name: '跳跃斩',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅰ(气刃槽≥15%)',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅰ(气刃槽＜15%)',
        actionNum: 16,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽≥20%-第一次命中)',
        actionNum: 12,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽＜20%-第一次命中)',
        actionNum: 4,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽≥20%-第二次命中)',
        actionNum: 36,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽＜20%-第二次命中)',
        actionNum: 16,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽≥20%-第三次命中)',
        actionNum: 38,
        elementChanger: 1
      },
      {
        name: '跳跃气刃斩 Ⅱ/Ⅲ(气刃槽＜20%-第三次命中)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '跳跃上捞斩',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '空中拔刀气刃斩(气刃槽≥20%)',
        actionNum: 48,
        elementChanger: 1
      },
      {
        name: '空中拔刀气刃斩(气刃槽＜20%)',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第二次命中)',
        actionNum: 6,
        elementChanger: 0.2
      },
      {
        name: '骑乘攻击(前三次命中)',
        actionNum: 42,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(终结-头部以外)',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(终结-第一次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(终结-第二次命中)',
        actionNum: 34,
        elementChanger: 1
      }
    ]
  },
  {
    name: '大锤',
    id: '4',
    actions: [
      {
        name: '挥旋',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '返挥',
        actionNum: 16,
        elementChanger: 1
      },
      {
        name: '纵挥 Ⅰ',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '纵挥 Ⅱ',
        actionNum: 23,
        elementChanger: 1
      },
      {
        name: '压迫/回旋强压迫',
        actionNum: 86,
        elementChanger: 1
      },
      {
        name: '蓄力挥旋(1蓄)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '蓄力返挥(1蓄)',
        actionNum: 25,
        elementChanger: 1
      },
      {
        name: '蓄力压迫(2蓄)',
        actionNum: 38,
        elementChanger: 1
      },
      {
        name: '横挥/回旋横挥',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '蓄力敲打(3蓄-第一次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '蓄力敲打(3蓄-第二次命中)',
        actionNum: 76,
        elementChanger: 1
      },
      {
        name: '蓄力强压迫(2蓄)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '蓄力强敲打(3蓄-第一或第二次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '蓄力强敲打(3蓄-最终命中)',
        actionNum: 85,
        elementChanger: 1
      },
      {
        name: '回旋攻击(第一次命中)',
        actionNum: 26,
        elementChanger: 1
      },
      {
        name: '回旋攻击(后续单次命中)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '回旋返挥/蓄力返挥(超蓄力)',
        actionNum: 55,
        elementChanger: 1
      },
      {
        name: '回转挥旋',
        actionNum: 32,
        elementChanger: 1
      },
      {
        name: '敲打 Ⅰ/敲打终结(第一或第二次命中)',
        actionNum: 28,
        elementChanger: 1
      },
      {
        name: '敲打 Ⅱ',
        actionNum: 32,
        elementChanger: 1
      },
      {
        name: '敲打 Ⅲ',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '敲打 Ⅳ',
        actionNum: 65,
        elementChanger: 1
      },
      {
        name: '敲打终结(第三次命中)',
        actionNum: 100,
        elementChanger: 1
      },
      {
        name: '跳跃敲打',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '跳跃蓄力攻击 Lv1',
        actionNum: 65,
        elementChanger: 1
      },
      {
        name: '跳跃蓄力攻击 Lv2',
        actionNum: 70,
        elementChanger: 1
      },
      {
        name: '跳跃蓄力攻击 Lv3',
        actionNum: 80,
        elementChanger: 1
      },
      {
        name: '空中回转攻击(旋转)',
        actionNum: 25,
        elementChanger: 1
      },
      {
        name: '空中回转攻击(最终命中)',
        actionNum: 100,
        elementChanger: 1
      },
      {
        name: '飞翔爪',
        actionNum: 8,
        elementChanger: 0
      },
      {
        name: '旋转飞扑攻击',
        actionNum: 8,
        elementChanger: 0.8
      },
      {
        name: '飞扑攻击/旋转飞扑攻击终结',
        actionNum: 40,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 20,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第二次命中)',
        actionNum: 55,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(第一次命中)',
        actionNum: 68,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(第二次命中)',
        actionNum: 85,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(第三次命中)',
        actionNum: 111,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv1第一次命中)',
        actionNum: 32,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv2第一次命中)',
        actionNum: 42,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv3第一次命中)',
        actionNum: 55,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv1第二次命中)',
        actionNum: 60,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv2第二次命中)',
        actionNum: 77,
        elementChanger: 1
      },
      {
        name: '骑乘蓄力攻击(尾部骑乘Lv3第二次命中)',
        actionNum: 90,
        elementChanger: 1
      }
    ]
  },
  {
    name: '狩猎笛',
    id: '5',
    actions: [
      {
        name: '左挥',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '前扣',
        actionNum: 28,
        elementChanger: 1
      },
      {
        name: '右挥',
        actionNum: 27,
        elementChanger: 1
      },
      {
        name: '连音攻击(第一次命中)',
        actionNum: 15,
        elementChanger: 1
      },
      {
        name: '连音攻击(第二次命中)',
        actionNum: 22,
        elementChanger: 1
      },
      {
        name: '后扣',
        actionNum: 37,
        elementChanger: 1
      },
      {
        name: '大地一击(第一次命中)',
        actionNum: 14,
        elementChanger: 1
      },
      {
        name: '大地一击(第二次命中)',
        actionNum: 39,
        elementChanger: 1
      },
      {
        name: '柄击/响音攻击第一击',
        actionNum: 10,
        elementChanger: 1
      },
      {
        name: '响音攻击',
        actionNum: 17,
        elementChanger: 0.8
      },
      {
        name: '演奏',
        actionNum: 29,
        elementChanger: 1
      },
      {
        name: '重奏',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '响周波·打(第一次命中)',
        actionNum: 50,
        elementChanger: 0
      },
      {
        name: '响周波·打(第二次命中)',
        actionNum: 100,
        elementChanger: 0
      },
      {
        name: '响周波·打(第三次命中)',
        actionNum: 150,
        elementChanger: 0
      },
      {
        name: '跳跃敲打',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '跳跃强敲打',
        actionNum: 55,
        elementChanger: 1
      },
      {
        name: '空中演奏',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 29,
        elementChanger: 1
      },
      {
        name: '翔爪武器攻击(第二次命中)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(反复攻击单次命中)',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(终结命中)',
        actionNum: 55,
        elementChanger: 1
      }
    ]
  },
  {
    name: '长枪',
    id: '6',
    actions: [
      {
        name: '中段突刺 Ⅰ',
        actionNum: 20,
        elementChanger: 0.7
      },
      {
        name: '中段突刺 Ⅱ',
        actionNum: 20,
        elementChanger: 0.7
      },
      {
        name: '中段突刺 Ⅲ',
        actionNum: 27,
        elementChanger: 0.7
      },
      {
        name: '上段突刺 Ⅰ/抵消突刺',
        actionNum: 22,
        elementChanger: 0.7
      },
      {
        name: '上段突刺 Ⅱ',
        actionNum: 22,
        elementChanger: 0.7
      },
      {
        name: '上段突刺 Ⅲ',
        actionNum: 27,
        elementChanger: 0.7
      },
      {
        name: '横扫 Ⅰ/Ⅱ/Ⅲ',
        actionNum: 20,
        elementChanger: 0.7
      },
      {
        name: '防御突刺',
        actionNum: 20,
        elementChanger: 0.7
      },
      {
        name: '反击突刺',
        actionNum: 40,
        elementChanger: 0.7
      },
      {
        name: '飞身跃入突刺(单次命中)',
        actionNum: 8,
        elementChanger: 0.3
      },
      {
        name: '盾攻击',
        actionNum: 14,
        elementChanger: 0
      },
      {
        name: '转身攻击',
        actionNum: 50,
        elementChanger: 0.8
      },
      {
        name: '跳跃突刺/跳跃突进突刺',
        actionNum: 30,
        elementChanger: 0.7
      },
      {
        name: '反击钩爪(第一次命中)',
        actionNum: 8,
        elementChanger: 0
      },
      {
        name: '反击钩爪(第二次命中)',
        actionNum: 16,
        elementChanger: 0
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 33,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第二次命中)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '骑乘终结突刺(第一次命中)',
        actionNum: 40,
        elementChanger: 1
      },
      {
        name: '骑乘终结突刺(第二次命中)',
        actionNum: 10,
        elementChanger: 1
      },
      {
        name: '骑乘终结突刺(第三次命中)',
        actionNum: 20,
        elementChanger: 1
      }
    ]
  },
  {
    name: '铳枪',
    id: '7',
    actions: [
      {
        name: '踏步上突刺',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '水平突刺',
        actionNum: 24,
        elementChanger: 1
      },
      {
        name: '防御突刺',
        actionNum: 18,
        elementChanger: 1
      },
      {
        name: '上捞斩',
        actionNum: 30,
        elementChanger: 1
      },
      {
        name: '敲打',
        actionNum: 48,
        elementChanger: 1
      },
      {
        name: '横扫斩',
        actionNum: 68,
        elementChanger: 1
      },
      {
        name: '跳跃突刺',
        actionNum: 25,
        elementChanger: 1
      },
      {
        name: '跳跃装填敲打/跳跃敲打(第二次命中)',
        actionNum: 44,
        elementChanger: 1
      },
      {
        name: '跳跃敲打(第一次命中)',
        actionNum: 32,
        elementChanger: 1
      },
      {
        name: '跳跃上捞斩',
        actionNum: 35,
        elementChanger: 1
      },
      {
        name: '飞翔爪武器攻击(第一次命中)',
        actionNum: 45,
        elementChanger: 1
      },
      {
        name: '骑乘攻击(突刺)',
        actionNum: 25,
        elementChanger: 1
      }
    ]
  },
  {
    name: '斩斧',
    id: '8',
    actions: []
  },
  {
    name: '盾斧',
    id: '9',
    actions: []
  },
  {
    name: '操虫棍',
    id: '10',
    actions: []
  },
  {
    name: '弓',
    id: '11',
    actions: []
  },
  {
    name: '重弩炮',
    id: '12',
    actions: []
  },
  {
    name: '轻弩炮',
    id: '13',
    actions: []
  }
]
