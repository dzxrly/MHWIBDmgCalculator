# 怪物猎人世界冰原 DLC 伤害计算器

## 一个基于 `Vue.js` 的简易伤害计算器

计算器链接：

[https://dzxrly.github.io/MHWIBDmgCalculator/#/](https://dzxrly.github.io/MHWIBDmgCalculator/#/)(Github Page)

[https://egg-targaryen.gitee.io/mhwibdmgcalculator/#/](https://egg-targaryen.gitee.io/mhwibdmgcalculator/#/)(Gitee 码云, 国内访问更快)

当前版本`Ver.1.0.7`

## 数据来源

伤害计算公式、绝大部分补正与加成信息引用自[狩技 MOD 组中文 Wiki](http://wiki.mhwmod.com/)

武器招式中文名与动作值来自[【搬运】冰原所有武器动作值、各种补正表](https://tieba.baidu.com/p/6591591373) By [全团的希望](https://tieba.baidu.com/home/main?un=_%E5%90%8E_%E7%9F%A5HO%E8%A7%89&ie=utf-8&id=tb.1.756c6ba6.IDeQsAudnybJlsDQl8giPA?t=1579074945&fr=pb)

## 注意事项

- 目前只能计算物理伤害和属性伤害，异常状态计算暂时不做
- 暂时没有做表单验证，所以请在需要输入数字的输入框输入纯数字(整数或浮点数)
- 固定伤害部分有计划要做，请耐心等待
- "软化后伤害(xx 怪物)"指计算了特定怪物的 ±5 肉质补正后的理论软化伤害，但仍需要通过输入肉质以获取正确值！
- 下列计算过程中有特殊变动的技能无法计算或无法得出准确结果(不全)
  - 龙之千矢
  - 响周波·龙
  - 笛子冲击波
  - 长枪人车
  - 铳枪炮击
  - 斩斧强属性瓶的属性补正
  - 盾斧榴弹瓶瓶爆炸伤害
  - 虫棍猎虫攻击与猎虫加成
  - 弓箭曲射
  - 弓箭迅雷闪击
  - 重弩机关龙弹
  - 重弩狙击龙弹
  - 轻弩起爆龙弹
  - 轻弩反击龙弹
  - 重/轻弩龙击弹
  - 重/轻弩撤甲榴弹
  - 重/轻弩扩散弹
  - 重/轻弩异常弹、BUFF 弹
  - 轻弩飞翔爪攻击

## TODO LIST

|   类型   |    状态    |                                 描述                                 |
| :------: | :--------: | :------------------------------------------------------------------: |
| BUG 修复 | In Process |                 部分招式有特殊属性补正，需要单独列出                 |
|   功能   |   TO DO    |                           武器贴皮强化计算                           |
|   功能   |   TO DO    |                             固定伤害计算                             |
| BUG 修复 |    Done    | 武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板 |
| BUG 修复 |    Done    |              修复了怒后补正为空时无法得出计算结果的 BUG              |
| BUG 修复 |    Done    |                    修复了软化后伤害计算错误的问题                    |
|   功能   |    Done    |                        补全所有武器动作值信息                        |
|   功能   |    Done    |                            会心镜加成计算                            |
|   功能   |    Done    |                             怒后补正计算                             |

## 更新日志

- 2020-08-05 `Ver.1.0.7`

  - **BUG 修复**-修复了软化后伤害计算错误的问题

- 2020-08-04 `Ver.1.0.6`

  - **BUG 修复**-修复了怒后补正为空时无法得出计算结果的 BUG

- 2020-08-02 `Ver.1.0.5`

  - **BUG 修复**-修复了会心镜计算无效的 BUG
  - **页面优化**-优化了排版，数据来源更加清晰明了
  - **功能添加**-添加了怒后补正计算功能

- 2020-08-01 `Ver.1.0.4`

  - **功能添加**-为重弩添加了会心镜计算功能

- 2020-07-30 `Ver.1.0.3`

  - **网页优化**-动态导入 JS，优化网页访问速度
  - **网页优化**-SEO 优化

- 2020-07-29 `Ver.1.0.2`

  - **功能添加**-补全所有武器动作值信息

- 2020-07-27 `Ver.1.0.1`

  - **BUG 修复**-武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板
  - **功能添加**-新增武器攻击力上限后倍率类技能可选

---

Made By 鎧羅突擊弩賊(小黑盒 ID: `1319011`)
