var num1, num2;

process.stdout.write('请输入num1的值');


process.stdin.on('data', (chunk) => {
    if (!num1) {
        num1 = Number(chunk);
        process.stdout.write('请输入num2的值');
    } else {
        num2 = Number(chunk);
        process.stdout.write(`结果是：${num1 + num2}`);
    }
})