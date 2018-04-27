#!/usr/bin/env node
var program = require('commander');
// var xgm = require('./xgm.js');
program
    .version('0.0.1')
    .option('-m, --param <value>','生成新的', make)
    .command('deply ')
    .description('部署一个文件')
    .action(function(){
        console.log(arg)
    })
    .parse(process.argv);
function make(param){
    // 判断是一级目录还是二级目录
    console.log(param);
    if (param.indexOf('/') > -1) {
        var paths = param.split('/');
        var firstPath = paths[0];
        var secondPath = paths[1];
        // xgm.createFiles(firstPath,secondPath);
    } else {
        // xgm.createFiles(param);
    }
}