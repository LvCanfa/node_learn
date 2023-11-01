
const { readFile, writeFile } = require('fs');
// 不加 utf8 的话返回的result的Buffer缓冲区内容
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result_async.txt', `Here is the result: ${first}\n${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result)
        })

    })
})