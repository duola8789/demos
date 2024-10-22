const fs = require('fs');
const path = require('path');
const Freemarker = require('freemarker');
const { exec } = require('child_process');

const freemarker = new Freemarker({ root: __dirname });

const args = process.argv.slice(2) || []; // 获取传入的参数
const targetFile = args[0] || 'notify'; // 获取第一个参数

console.log(targetFile);

const inputPath = path.join(__dirname, `${targetFile}.ftl`);
const outputPath = path.join(__dirname, 'output', 'index.html');

// 确保 output 目录存在
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// 启动 http-server
exec(`npx http-server ${path.dirname(outputPath)} -o -p 8080`, (err, stdout, stderr) => {
  if (err) {
    console.error(`启动 http-server 时出错: ${err}`);
    return;
  }
  console.log(`http-server 输出: ${stdout}`);
  console.error(`http-server 错误: ${stderr}`);
});

fs.watchFile(inputPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log(`${inputPath} 文件内容发生了变化 -- ${new Date().toLocaleString()}`);
    freemarker.renderFile(inputPath, {}, (err, result) => {
      if (err) {
        throw new Error(err);
      }

      fs.writeFile(outputPath, result, err => {
        if (err) {
          return console.error('写入文件时出错:', err);
        }
      });
    });
  }
});
