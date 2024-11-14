const fs = require('fs');
const path = require('path');
const Freemarker = require('freemarker');
const { exec } = require('child_process');

const freemarker = new Freemarker({ root: __dirname });
const folderPath = path.join(__dirname, 'template');

function renderFile(filePath, fileName) {
  const fullFileName = `${fileName}.html`;
  const outputPath = path.join(__dirname, 'output', fullFileName);

  freemarker.renderFile(filePath, {}, (err, result) => {
    if (err) {
      throw new Error(err);
    }
    fs.writeFile(outputPath, result, err => {
      if (err) {
        return console.error('写入文件时出错:', err);
      }
      console.log('写入文件完成: ', fullFileName);
    });
  });
}

try {
  // 读取目录内容
  const files = fs.readdirSync(folderPath);

  // 输出目录中的文件和子目录名称
  files.forEach(filename => {
    const filePath = path.join(__dirname, 'template', filename);
    renderFile(filePath, filename.split('.')[0]);
  });
} catch (err) {
  console.error('无法读取目录:', err);
}

fs.watch(folderPath, (eventType, filename) => {
  if (eventType === 'change') {
    console.log(`文件 ${filename} 发生了 ${eventType} 变化`);
    const filePath = path.join(__dirname, 'template', filename);
    renderFile(filePath, filename.split('.')[0]);
  }
});

console.log(`正在监视文件夹: ${folderPath}`);
