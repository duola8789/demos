/**
 * Created by zh on 2020/4/2.
 */
const isObject = (val) => Object.prototype.toString.call(val) === '[object Object]';

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

const seenObjects = new Set();
