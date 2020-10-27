webpackJsonp([0],{IRgv:function(t,_,v){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("section",[v("h1",[t._v("怪物猎人世界冰原 DLC 伤害计算器")]),t._v(" "),v("h2",[t._v("一个基于 "),v("code",{pre:!0},[t._v("Vue.js")]),t._v(" 的简易伤害计算器")]),t._v(" "),v("p",[t._v("计算器链接：")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://dzxrly.github.io/MHWIBDmgCalculator/#/"}},[t._v("https://dzxrly.github.io/MHWIBDmgCalculator/#/")]),t._v("(Github Page)")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://egg-targaryen.gitee.io/mhwibdmgcalculator/#/"}},[t._v("https://egg-targaryen.gitee.io/mhwibdmgcalculator/#/")]),t._v("(Gitee 码云, 国内访问更快)")]),t._v(" "),v("p",[t._v("当前版本"),v("code",{pre:!0},[t._v("Ver.1.1.5")])]),t._v(" "),v("h2",[t._v("数据来源")]),t._v(" "),v("p",[t._v("伤害计算公式、除武器动作值及招式译名外的补正与加成信息引用自"),v("a",{attrs:{href:"http://wiki.mhwmod.com/"}},[t._v("狩技 MOD 组中文 Wiki")]),t._v(" ,特别感谢 "),v("code",{pre:!0},[t._v("狩技 MOD 组")]),t._v(" 与 "),v("code",{pre:!0},[t._v("Monster Hunter Modding Discord")]),t._v(" 对游戏数据的挖掘与整理")]),t._v(" "),v("p",[t._v("武器招式中文名与动作值来自"),v("a",{attrs:{href:"https://tieba.baidu.com/p/6591591373"}},[t._v("【搬运】冰原所有武器动作值、各种补正表")]),t._v(" By "),v("a",{attrs:{href:"https://tieba.baidu.com/home/main?un=_%E5%90%8E_%E7%9F%A5HO%E8%A7%89&ie=utf-8&id=tb.1.756c6ba6.IDeQsAudnybJlsDQl8giPA?t=1579074945&fr=pb"}},[t._v("全团的希望")])]),t._v(" "),v("h2",[t._v("注意事项")]),t._v(" "),v("ul",[v("li",[t._v("计算弩枪子弹/弓箭射击时请注意只勾选对应的“弹/箭强化”技能！")]),t._v(" "),v("li",[t._v("目前只能计算物理伤害和属性伤害，异常状态计算暂时不做")]),t._v(" "),v("li",[t._v("暂时没有做表单验证，所以请在需要输入数字的输入框输入纯数字(整数或浮点数)")]),t._v(" "),v("li",[t._v("固定伤害部分有计划要做，请耐心等待")]),t._v(" "),v("li",[t._v('"软化后伤害(xx 怪物)"指计算了特定怪物的 ±5 肉质补正后的理论软化伤害，但仍需要通过输入肉质以获取正确值！')]),t._v(" "),v("li",[t._v("下列计算过程中有特殊变动的技能无法计算或无法得出准确结果(不全)\n"),v("ul",[v("li",[t._v("龙之千矢")]),t._v(" "),v("li",[t._v("响周波·龙")]),t._v(" "),v("li",[t._v("笛子冲击波")]),t._v(" "),v("li",[t._v("长枪人车")]),t._v(" "),v("li",[t._v("铳枪炮击")]),t._v(" "),v("li",[t._v("斩斧强属性瓶的属性补正")]),t._v(" "),v("li",[t._v("盾斧榴弹瓶瓶爆炸伤害")]),t._v(" "),v("li",[t._v("虫棍猎虫攻击与猎虫加成")]),t._v(" "),v("li",[t._v("弓箭曲射")]),t._v(" "),v("li",[t._v("弓箭迅雷闪击")]),t._v(" "),v("li",[t._v("重弩机关龙弹")]),t._v(" "),v("li",[t._v("重弩狙击龙弹")]),t._v(" "),v("li",[t._v("轻弩起爆龙弹")]),t._v(" "),v("li",[t._v("轻弩反击龙弹")]),t._v(" "),v("li",[t._v("重/轻弩龙击弹")]),t._v(" "),v("li",[t._v("重/轻弩撤甲榴弹")]),t._v(" "),v("li",[t._v("重/轻弩扩散弹")]),t._v(" "),v("li",[t._v("重/轻弩异常弹、BUFF 弹")]),t._v(" "),v("li",[t._v("轻弩飞翔爪攻击")])])])]),t._v(" "),v("h2",[t._v("TODO LIST")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("状态")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("BUG 修复")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("In Process")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("部分招式有特殊属性补正，需要单独列出")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TO DO")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("武器贴皮强化计算")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TO DO")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("固定伤害计算")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("BUG 修复")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("BUG 修复")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("修复了怒后补正为空时无法得出计算结果的 BUG")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("BUG 修复")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("修复了软化后伤害计算错误的问题")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("BUG 修复")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("修复了操虫棍飞圆斩(第二次命中)错写为了(第一次命中)的问题")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("补全所有武器动作值信息")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("优化计算伤害过程的代码")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("计算结果页面组件化+列出计算过程")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("会心镜加成计算")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Done")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("怒后补正计算")])])])]),t._v(" "),v("h2",[t._v("更新日志")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("2020-10-27 "),v("code",{pre:!0},[t._v("Ver.1.1.5")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("页面优化")]),t._v("-加载动画优化")])])]),t._v(" "),v("li",[v("p",[t._v("2020-10-22 "),v("code",{pre:!0},[t._v("Ver.1.1.4")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("页面优化")]),t._v("-现在可以看到使用须知文档加载过程并且获得反馈了")])])]),t._v(" "),v("li",[v("p",[t._v("2020-10-18 "),v("code",{pre:!0},[t._v("Ver.1.1.3")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("页面优化")]),t._v("-使用须知可以直接在原网页呈现无需跳转了")])])]),t._v(" "),v("li",[v("p",[t._v("2020-10-05 "),v("code",{pre:!0},[t._v("Ver.1.1.2")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("页面优化")]),t._v("-优化了伤害详细信息页面")]),t._v(" "),v("li",[v("strong",[t._v("BUG 修复")]),t._v("-黑龙的软化偏移应为-5，与冥赤相同")])])]),t._v(" "),v("li",[v("p",[t._v("2020-09-22 "),v("code",{pre:!0},[t._v("Ver.1.1.1")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("功能添加")]),t._v("-现在可以统计显示网站访问量了（由于是 1.1.1 版本才加入的功能，所以之前的数据不做保留）")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-27 "),v("code",{pre:!0},[t._v("Ver.1.1.0")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("代码优化")]),t._v("-优化了页面跳转与页面布局")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-10 "),v("code",{pre:!0},[t._v("Ver.1.0.9")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("代码优化")]),t._v("-优化了计算与部分页面代码")]),t._v(" "),v("li",[v("strong",[t._v("功能添加")]),t._v("-现在可以查看更多处于计算过程中的数值了")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-06 "),v("code",{pre:!0},[t._v("Ver.1.0.8")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("BUG 修复")]),t._v("-修复了操虫棍飞圆斩(第二次命中)错写为了(第一次命中)的问题")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-05 "),v("code",{pre:!0},[t._v("Ver.1.0.7")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("BUG 修复")]),t._v("-修复了软化后伤害计算错误的问题")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-04 "),v("code",{pre:!0},[t._v("Ver.1.0.6")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("BUG 修复")]),t._v("-修复了怒后补正为空时无法得出计算结果的 BUG")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-02 "),v("code",{pre:!0},[t._v("Ver.1.0.5")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("BUG 修复")]),t._v("-修复了会心镜计算无效的 BUG")]),t._v(" "),v("li",[v("strong",[t._v("页面优化")]),t._v("-优化了排版，数据来源更加清晰明了")]),t._v(" "),v("li",[v("strong",[t._v("功能添加")]),t._v("-添加了怒后补正计算功能")])])]),t._v(" "),v("li",[v("p",[t._v("2020-08-01 "),v("code",{pre:!0},[t._v("Ver.1.0.4")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("功能添加")]),t._v("-为重弩添加了会心镜计算功能")])])]),t._v(" "),v("li",[v("p",[t._v("2020-07-30 "),v("code",{pre:!0},[t._v("Ver.1.0.3")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("网页优化")]),t._v("-动态导入 JS，优化网页访问速度")]),t._v(" "),v("li",[v("strong",[t._v("网页优化")]),t._v("-SEO 优化")])])]),t._v(" "),v("li",[v("p",[t._v("2020-07-29 "),v("code",{pre:!0},[t._v("Ver.1.0.2")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("功能添加")]),t._v("-补全所有武器动作值信息")])])]),t._v(" "),v("li",[v("p",[t._v("2020-07-27 "),v("code",{pre:!0},[t._v("Ver.1.0.1")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("BUG 修复")]),t._v("-武器攻击力、属性面板填写时应提醒填写原始(未客制强化、贴皮强化)的面板")]),t._v(" "),v("li",[v("strong",[t._v("功能添加")]),t._v("-新增武器攻击力上限后倍率类技能可选")])])])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("Made By 鎧羅突擊弩賊(小黑盒 ID: "),v("code",{pre:!0},[t._v("1319011")]),t._v(")")])])}]},l=v("VU/8")(null,e,!1,null,null,null);_.default=l.exports},"bH8+":function(t,_,v){t.exports=v("IRgv")}});
//# sourceMappingURL=0.36774dd8f50aa15c70d3.js.map