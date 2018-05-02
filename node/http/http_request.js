const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'msg': 'hello world'
});

const options = {
    hostname: 'www.google.com',
    prot: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`状态码：${res.statusCode}`);
    console.log(`响应头：${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`响应主体：${chunk}`);
    });
    res.on('end', () => {
        console.log('响应中已无数据');
    });
});


req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
});

req.write(postData);
req.end();