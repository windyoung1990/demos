// fs.createReadStream(path[, options])
// path <string> | <Buffer> | <URL>
// options <string> | <Object>
// flags <string>
// encoding <string>
// fd <integer>
// mode <integer>
// autoClose <boolean>
// start <integer>
// end <integer>
// highWaterMark <integer>

const fs = require('fs');


fs.createReadStream('message.txt',{start: 5,end: 10})
