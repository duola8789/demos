/**
 * Created by zh on 2020/4/2.
 */
const isObject = (obj) => obj !== null && typeof obj === 'object';

function isValidArrayIndex(val) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

const parsePath = (path) => {
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
};

const defineReactive = (data, key, value) => {
  if (typeof value === 'object') {
    new Observer(value);
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend();
      return value;
    },
    set(newVal) {
      if (newVal === value) {
        return;
      }
      value = newVal;
      dep.notify();
    }
  });
};

const seenObjects = new Set();

// 递归收集依赖
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);

  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return;
  }

  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }

  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[[keys[i]]], seen);
    }
  }
}

let uid = 0;

class Dep {
  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    if (this.subs.length > 0) {
      const index = this.subs.indexOf(sub);
      if (index > -1) {
        return this.subs.splice(index, 1);
      }
    }
  }

  depend() {
    if (window.target) {
      // this.addSub(window.target);
      window.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0; i < subs.length; i++) {
      subs[i].update();
    }
  }
}

class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm;
    this.cb = cb;

    // 当创建 watcher 实例时，都将 watcher 实例添加到 vm._watchers 中
    vm._watchers.push(this);

    if (options) {
      this.deep = !!options.deep;
    } else {
      this.deep = false;
    }

    // 记录自己订阅的依赖列表
    this.deps = [];
    // 依赖列表的 Id
    this.depIds = new Set();

    // expOrFn 支持函数
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
    }
    this.value = this.get();
  }

  get() {
    window.target = this;
    this.value = this.getter.call(this.vm, this.vm);
    // deep 逻辑
    if (this.deep) {
      traverse(this.value);
    }

    window.target = undefined;
    return this.value;
  }

  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }

  addDep(dep) {
    const id = dep.id;
    if (!this.depIds.has(id)) {
      this.depIds.add(id);
      this.deps.push(dep);
      // 将自己（watcher实例）添加的 dep 的 subs 列表中
      dep.addSub(this);
    }
  }

  //  从所有依赖项的 Dep 列表中把自己移除
  teardown() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
  }
}

class Observer {
  constructor(value) {
    this.value = value;

    if (!Array.isArray(value)) {
      this.walk(value);
    }
  }

  walk(value) {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(value, keys[i], value[keys[i]]);
    }
  }
}

let data = {a: 1};
const reactiveData = new Observer(data);

const watcher = new Watcher(data, 'a', (newVal, oldVal) => {
  console.log('watcher', newVal, oldVal, '999');
});
console.log(data.a);

Vue.prototype.$watch = function (expOrFn, cb, options) {
  const vm = this;
  options = options || {};

  const watcher = new Watcher(vm, expOrFn, cb, options);

  if (options.immediate) {
    cb.call(vm, watcher.value);
  }

  return function unwatch() {
    watcher.teardown();
  };
};

function set(target, key, val) {
  // 处理数组的情况
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  // key 已存在
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  // 新增属性
  const ob = target.__ob__;
  // target 是 Vue 实例，或者是 Vue 实例的根数据对象
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' ** console.warn('...');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

Vue.prototype.$set = set;

function del(target, key) {
  // 先处理数组的情况
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 使用改造后的数组的 splice 方法就可以做到响应式删除，自动向依赖发送更新
    target.splice(key, 1);
    return;
  }

  const ob = target.__ob__;

  // 如果是 Vue 实例或者是根数据对象，则不能使用这个方法
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' ** console.warn('...');
    return;
  }

  // 如果不是自身的属性，那么什么也不操作
  if (!Object.prototype.hasOwnProperty.call(target, key)) {
    return;
  }

  delete target[key];

  // 如果不是响应式数据，也就不需要向依赖发送通知
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

Vue.prototype.$delete = set;
