/**
 * Created by zh on 2020/6/24.
 */
function Vue() {
  this._events = Object.create(null);
}

Vue.prototype.$on = function (event, fn) {
  const vm = this;
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      this.$on(event[i], fn);
    }
  } else {
    (vm._events[event] || (vm._events[event] = [])).push(fn);
  }
  return vm;
};

Vue.prototype.$off = function (event, fn) {
  const vm = this;

  if (arguments.length === 0) {
    vm._events = Object.create(null);
    return null;
  }

  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      this.$off(event[i], fn);
    }
    return vm;
  }

  const cbs = vm._events[event];
  if (!cbs) {
    return vm;
  }

  if (arguments.length === 1) {
    vm._events[event] = null;
    return vm;
  }

  if (fn) {
    let cb;
    let i = cbs.length;
    // 注意，遍历时从后向前进行的
    while (i--) {
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
  }
  return vm;
};

Vue.prototype.$once = function (event, fn) {
  const vm = this;

  function on() {
    vm.$off(event, on);
    fn.apply(vm, arguments);
  }

  on.fn = fn;
  vm.$on(event, on);

  return vm;
};

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  let i = list.length - start;
  let ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

Vue.prototype.$emit = function (event) {
  const vm = this;
  const cbs = vm._events[event];

  if (cbs) {
    const args = toArray(arguments, 1);
    for (let i = 0, l = cbs.length; i < l; i++) {
      try {
        cbs[i].apply(vm, args);
      } catch (e) {
        console.error(e);
      }
    }
  }
  return vm;
};
