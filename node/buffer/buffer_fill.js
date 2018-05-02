const b = Buffer.allocUnsafe(50).fill('h');

// 输出: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
console.log(b.toString())