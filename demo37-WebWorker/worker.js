/**
 * Created by zh on 2019/10/29.
 */

const events = {
  calculate({time}) {
    const start = Date.now();
    while (Date.now() - start < time) {}
    return 'done';
  }
};

self.addEventListener('message', (e) => {
  const {type, data, origin} = e;
  const result = events[type](data);
  self.postMessage({type: 'calculate', data: result}, origin);
});
