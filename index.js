'use strict';

hexo.extend.tag.register('issue', function(args, content){
  //第一次分析出整个问题&答案
  //[s]+ 软件开发中需求工作的目的是
  //[类型]顺序 标题
  //题目类型: [s]单选 [m]多选
  //选项顺序: +原始顺序 *随机组合
  var issue = /\[([a-z]+)\][+*] ?[\s\S]*(\[|$)/g;

},{ends: true});
