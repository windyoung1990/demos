const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf)
// 输出{"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    // console.log(key, value);
    console.log(key)
    return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});
console.log(copy)