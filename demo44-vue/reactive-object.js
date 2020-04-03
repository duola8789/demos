/**
 * Created by zh on 2020/4/2.
 */
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
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    if (this.subs.length > 0) {
      const index = this.subs.indexOf(sub);
      if (index > -1) {
      }
    }
  }

  depend() {
    if (window.target) {
      this.addSub(window.target);
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
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn);
    this.value = this.get();
  }

  get() {
    window.target = this;
    this.value = this.getter.call(this.vm, this.vm);
    window.target = undefined;
    return this.value;
  }

  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
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
