function concatTests(t,e){return fs.existsSync(t)&&fs.unlink(t),e.forEach(function(e){"string"==typeof e?readAppend(t,test):"[object Array]"===Object.prototype.toString.call(e)&&e.forEach(function(e){readAppend(t,e)})}),t}function readAppend(t,e){fs.readFile(e,function(e,n){e&&reject(e),fs.appendFileSync(t,n,"utf8")})}var fs=require("fs");exports.concatTests=concatTests;