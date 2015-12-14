var quiz = require('semiquiz');

module.exports = function(args, content){
  console.log(content);
  var compiler = new quiz.Compiler();
  var content = compiler.compile(content);
   console.dir(content);
  return content.html.template;
}