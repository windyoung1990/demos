// 如果调用该方法的 util.promisify() 版本， 它会返回一个拥有 stdout 和 stderr 属性的 Promise 对象. 在发生错误的情况下, 返回一个 rejected 状态的 promise, 拥有与回调 函数一样的 error 对象, 但是附加了 stdout 和 stderr 这两个属性.
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
async function getVersion() {
    const { stdout } = await execFile('node', ['--version']);
    console.log(stdout);
}
getVersion();