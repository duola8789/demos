self.addEventListener('activate', function (event) {
  // 激活
  console.log(event, 'activate');
});

self.addEventListener('fetch', function (event) {
  // 拦截主线层的请求, 匹配 URL
  console.log(event, 'fetch');
});
