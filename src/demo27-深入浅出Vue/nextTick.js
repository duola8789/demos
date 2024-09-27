/**
 * Created by zh on 2020/6/27.
 */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0, l = copies.length; i < l; i++) {
    copies[i]();
  }
}

let microTimerFunc;
let macroTimerFunc = function () {};

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // 利用 Promise.resolve 来将更新添加到微任务
  const p = Promise.resolve;
  microTimerFunc = () => {
    p.then(flushCallbacks);
  };
} else {
  microTimerFunc = macroTimerFunc;
}

let useMacroTask = false;

export function witchMacroTask(fn) {
  return (
    fn._withTask ||
    (fn._withTask = function () {
      useMacroTask = true;
      const res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    })
  );
}

export function nextTick(cb, ctx) {
  let _resolve;

  callbacks.push(() => {
    if (cb) {
      cb.call(ctx);
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  // 利用 pending 来标记是否已经向任务队列添加了一个任务
  // 如果已经开始使用 flushCallbacks 执行任务，那么将 pending 设为 false
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}

Vue.prototype.$nextTick = function (fn) {
  return nextTick(fn, this);
};
