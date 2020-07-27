# 怪物猎人世界冰原 DLC 伤害计算器

## 一个基于 `Vue.js` 的简易伤害计算器

当前版本`Ver.1.0.1`

> 所有数据及计算公式引用自[狩技 MOD 组中文 Wiki](http://wiki.mhwmod.com/)

计算器链接：[https://dzxrly.github.io/MHWIBDmgCalculator/#/](https://dzxrly.github.io/MHWIBDmgCalculator/#/)

### 注意事项

- 目前只能计算物理伤害和属性伤害，异常状态计算计划要做
- 暂时没有做表单验证，所以请在需要输入数字的输入框输入纯数字(整数或浮点数)
- 固定伤害部分暂不不做
- 部分计算过程中有特殊变动的技能(如龙之千矢、响周波·龙、笛子冲击波、长枪人车、铳枪炮击、斩斧强属性瓶的属性补正)无法计算

### TODO LIST

|   类型   |    状态    |                                 描述                                 |
| :------: | :--------: | :------------------------------------------------------------------: |
| BUG 修复 | In Process |                 部分招式有特殊属性补正，需要单独列出                 |
|   功能   | In Process |                        补全所有武器动作值信息                        |
|   功能   |   TO DO    |                             怒后补正计算                             |
|   功能   |   TO DO    |                            会心镜加成计算                            |
|   功能   |   TO DO    |                           武器贴皮强化计算                           |
| BUG 修复 |    Done    | 武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板 |

### 更新日志

- 2020-7-27`Ver.1.0.1`
  - **BUG 修复**武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板
  - **功能添加**新增武器攻击力上限后倍率类技能可选

---

Made By 鎧羅突擊弩賊(小黑盒 ID: `1319011`)
