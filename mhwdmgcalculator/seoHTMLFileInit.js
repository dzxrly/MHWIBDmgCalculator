const fs = require('fs')
const indexDir = './dist/index.html'
const calIndexDir = './dist/CalculatorView/index.html'
const prefixString = 'id="busuanzi_value_site_pv">'
const suffixString = '</span>'
const replaceString = '加载中...'

/**
 * 字符串指定位置替换
 * @param {*} originString 源数据
 * @param {*} prefixString 前缀匹配项
 * @param {*} suffixString 后缀匹配项
 * @param {*} replaceString 替换的数据
 */
function htmlReplace (originString, prefixString, suffixString, replaceString) {
  let prefixIndex = originString.indexOf(prefixString)
  let prefixText = originString.substring(0, prefixIndex + prefixString.length)
  let suffixText = originString.substring(originString.indexOf(suffixString, prefixIndex + prefixString.length))
  return prefixText + replaceString + suffixText
}

function HTMLFileInit () {
  let indexHTMLFile
  let calIndexHTMLFile
  try {
    indexHTMLFile = fs.readFileSync(indexDir, 'utf-8')
  } catch (e) {
    console.error(`[${indexDir} 文件读取错误]: ${e}`)
    return
  }
  try {
    calIndexHTMLFile = fs.readFileSync(calIndexDir, 'utf-8')
  } catch (e) {
    console.error(`[${calIndexDir} 文件读取错误]: ${e}`)
    return
  }
  indexHTMLFile = htmlReplace(indexHTMLFile, prefixString, suffixString, replaceString)
  calIndexHTMLFile = htmlReplace(calIndexHTMLFile, prefixString, suffixString, replaceString)
  try {
    fs.writeFileSync(indexDir, indexHTMLFile, 'utf-8')
    fs.writeFileSync(calIndexDir, calIndexHTMLFile, 'utf-8')
    console.log('[文件修改成功]')
  } catch (e) {
    console.error(`[文件写入错误]: ${e}`)
  }
}

HTMLFileInit()