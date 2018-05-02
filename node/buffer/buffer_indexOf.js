const buf = Buffer.from('this is a buffer');

// 输出: 0
console.log(buf.indexOf('this'));

// 输出: 2
console.log(buf.indexOf('is'));

// 输出: 8
console.log(buf.indexOf(Buffer.from('a buffer')));

// 输出: 8
// (97 是 'a' 的十进制 ASCII 值)
console.log(buf.indexOf(97));

// 输出: -1
console.log(buf.indexOf(Buffer.from('a buffer example')));

// 输出: 8
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));


const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

// 输出: 4
console.log(utf16Buffer.indexOf('\u03a3', 0, 'ucs2'));

// 输出: 6
console.log(utf16Buffer.indexOf('\u03a3', -4, 'ucs2'));