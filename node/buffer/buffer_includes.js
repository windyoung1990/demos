const buf = Buffer.from('this is a buffer');

// 输出: true
console.log(buf.includes('this'));

// 输出: true
console.log(buf.includes('is'));

// 输出: true
console.log(buf.includes(Buffer.from('a buffer')));

// 输出: true
// (97 是 'a' 的十进制 ASCII 值)
console.log(buf.includes(97));

// 输出: false
console.log(buf.includes(Buffer.from('a buffer example')));

// 输出: true
console.log(buf.includes(Buffer.from('a buffer example').slice(0, 8)));

// 输出: false
console.log(buf.includes('this', 4));