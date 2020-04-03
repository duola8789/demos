/**
 * Created by zh on 2020/4/2.
 */
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const isObject = (val) => typeof val === 'object' && val !== null;

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

// 改写数组的原生方法
['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice'].forEach((method) => {
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;

    let inserted;
    switch (method) {
      case 'push':
      case 'unshift': {
        inserted = args;
        break;
      }
      case 'splice': {
        inserted = args.slice(2);
        break;
      }
    }
    if (inserted) {
      ob.observeArray(inserted);
    }

    ob.dep.notify();
    return result;
  });
});

// 判断 __proto__ 是否可用
const hasProto = '__proto__' in {};

// getOwnPropertyNames 获得元素本身可枚举和不可枚举的属性
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

// 拦截数组的原型
function protoAugment(target, src, keys) {
  target.__proto__ = src;
}

// 添加实例属性
function copyAugment(target, src, keys) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    def(target, key, src[key]);
  }
}

function observe(val) {
  if (!isObject(val)) {
    return;
  }
  let ob;
  if (Object.prototype.hasOwnProperty.call(val, '__proto__') && val instanceof Observer) {
    ob = val.__proto__;
  } else {
    ob = new Observer(val);
  }
  return ob;
}

const defineReactive = (data, key, value) => {
  let childOb = observe(value);
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend();
      //
      if (childOb) {
        childOb.dep.depend();
      }
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

class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();

    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      // 拦截数组原生方法
      const augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(value) {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(value, keys[i], value[keys[i]]);
    }
  }

  // 侦测数组中的每一项
  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
