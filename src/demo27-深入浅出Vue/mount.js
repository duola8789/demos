/**
 * Created by zh on 2020/6/29.
 */
import { createEmptyVNode } from './vnode';

function noop(a, b, c) {}

function createFunction(code) {
  return new Function(code);
}

function compileToFunctions(template, options, vm) {
  // 混合参数
  options = extend({}, options);

  // 检查缓存职工是否已经存在已经编译的模板
  const key = options.delimiters ? String(options.delimiters) + template : template;
  if (cache[key]) {
    return cache[key];
  }

  // 将模板字符串转换为AST再转换为代码字符串
  const compiled = compile(template, options);

  // 将代码字符串转换为渲染函数
  const res = {};
  res.render = createFunction(compiled.render);

  return (cache[key] = res);
}

const inBrowser = typeof window !== 'undefined';

function mountComponent(vm, el) {
  // 如果实例上没有渲染函数，设置默认的渲染函数，这个渲染函数会创建一个注释节点，并且在开发环境中给出警告
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      // 警告
    }
  }
  // 触发生命周期钩子
  callHook(vm, 'beforeMount');

  // 执行挂载操作，观察数据状态，状态改变持续进行渲染
  vm._watcher = new Watcher(
    vm,
    () => {
      vm._update(vm._render());
    },
    noop
  );
}

Vue.prototype.$mount = function (el) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el);
};

const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el) {
  // query 方法用来获取 DOM 元素
  el = el && query(el);

  const options = this.$options;
  // 当 render 选项不存在时才会将模板编译为渲染函数传递给 $options.render
  if (!options.render) {
    let template = options.template;
    if (template) {
      if (typeof template === 'string') {
        // 如果 template 为 # 开头的字符串，会被当做选择符，如果不是以 # 开头，说明 template 是用户设置的模板，不需要处理，直接使用
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
        }
      } else if (template.nodeType) {
        // 如果 template 不是字符串，根据 nodeType 判断是否是一个DOM元素，
        template = template.innerHTML;
      } else {
        // 非生产环境下提示模板无效
      }
    } else if (el) {
      // 如果没有设置 template 选项的话，会返回参数中提供的 DOM 元素的 HTML 字符串
      template = getOuterHTML(el);
    }

    // 将模板编译为渲染函数
    if (template) {
      const { render } = compileToFunctions(template, options, this);

      // 将通过模板编译得到的渲染函数挂载到 option 上
      options.render = render;
    }
  }

  return mount.call(this, el);
};
