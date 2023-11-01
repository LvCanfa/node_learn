const { readFileSync, writeFileSync } = require('fs')
writeFileSync(
    './content/my_write.txt',
    'hha i write the content in \n my_write.txt',
    {
        flag: 'a'
    }
)
/**
 * encoding：指定要使用的字符编码，默认为'utf8'。例如，可以使用'utf16le'来指定使用 UTF-16 Little Endian 编码。
 * mode：指定文件的权限模式，默认为0o666。这是一个八进制数，用于设置文件的读取、写入和执行权限。
 * flag：指定文件打开的方式，默认为'w'。常用的选项包括：
 *  'r'：以只读方式打开文件。如果文件不存在，将引发错误。
    'r+'：以读写方式打开文件。如果文件不存在，将引发错误。
    'w'：以写入方式打开文件。如果文件不存在，则创建新文件，如果文件存在，则截断文件并从头开始写入。
    'w+'：以读写方式打开文件。如果文件不存在，则创建新文件，如果文件存在，则截断文件并从头开始写入。
    'a'：以追加方式打开文件。如果文件不存在，则创建新文件，写入的数据将添加到文件末尾。
    'a+'：以读写方式打开文件。如果文件不存在，则创建新文件，写入的数据将添加到文件末尾。
    'wx'：以排他写入方式打开文件。如果文件已经存在，操作会失败。
    'ax'：以排他追加方式打开文件。如果文件已经存在，操作会失败。
 */

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second);

