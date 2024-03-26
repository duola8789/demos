const a = [1, 2, 3, 4, 5];
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
a.forEach(async it => {
  await wait(3000);
  console.log(it);
});

window.addEventListener('message', e => {
  console.log(e.data); // 子页面发送的消息, hello, parent!
});
