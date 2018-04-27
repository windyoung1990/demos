#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var path = require('path');
program
    .version('0.0.1')
    .option('-m, --param <value>','创建demo模板', make)
    .parse(process.argv);

function make(param) {
    // console.log(param)
    if (param) {
        createFile(param)
    }
}
function createFile(filename) {
    var fileArr = filename.split('.');
    var tempPath = path.resolve(__dirname, '../template');
    var curPath = process.cwd();
    fs.exists(curPath + "/" + filename, function(exists) {
        // console.log(exists)
        if (exists) {
            console.error('该文件名已存在');
            return;
        } else {
            fs.readFile(tempPath  + '/'+ "template.html", function(err, data) {
                if (err) {
                    console.error("读取文件失败");
                } else {
                    var dataStr = data.toString().replace('template', fileArr[0]);
                    fs.writeFile(filename, dataStr,(err) => {
                        if (err) {
                            console.error("写入文件失败");
                        } else {
                            console.log("文件写入成功");
                        }
                    })
                }
            })
        }
    })
}