module.exports = function(args, content){
  //第一次分析出整个问题&答案
  //例如:[+s] 软件开发中需求工作的目的是
  //[类型 顺序] 标题
  //选项顺序:+原始顺序 *随机组合
  //题目类型:[s]单选 [m]多选  
  var issue = /\[([a-z]+)\][+*] ?[\s\S]*(\[|$)/g;
  //找到题目
  var question = /\[([+*])([a-z]+)\] *(\S*)\n/ig
  //找到选项
  var answer = /\* *(\S*) *(=T=)?\n/ig

}