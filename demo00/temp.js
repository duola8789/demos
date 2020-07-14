/**
 * Created by zh on 2020/6/24.
 */
let a = {
  x: {
    y: 123
  }
};

const proxy = (target, sourceKey) => {
  return new Proxy(target, {
    get(obj, key) {
      return obj[sourceKey][key];
    }
  });
};

const proxyA = proxy(a, 'x');

console.log(proxyA.y); // 123
