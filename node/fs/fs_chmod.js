// 异步地改变文件的权限

const fs = require('fs');
fs.chmod('./tmp/test.html', fs.constants.S_IRUSR, (err) => {
    if (err) {
        console.log('更改失败');
    }
});

// File modes

// Constant	Octal	Description
// fs.constants.S_IRUSR	0o400	read by owner
// fs.constants.S_IWUSR	0o200	write by owner
// fs.constants.S_IXUSR	0o100	execute/search by owner
// fs.constants.S_IRGRP	0o40	read by group
// fs.constants.S_IWGRP	0o20	write by group
// fs.constants.S_IXGRP	0o10	execute/search by group
// fs.constants.S_IROTH	0o4	read by others
// fs.constants.S_IWOTH	0o2	write by others
// fs.constants.S_IXOTH	0o1	execute/search by others