/**
 * Created by zh on 2020/6/27.
 */
function Vue() {}

function callHook() {}

function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

export function lifecycleMixin(Vue) {
    Vue.prototype.$forceUpdate = function () {
        const vm = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    };
}

Vue.prototype.$destroy = function () {
    const vm = this;

    // 防止反复执行，销毁只需要执行一次
    if (vm._isBeginDestroyed) {
        return;
    }

    // 触发钩子函数
    callHook(vm, 'beforeDestroyed');

    // 清理当前组件与父组件的关联
    const parent = vm.parent;
    if (parent && !parent._isBeingDestroyed && !vm.$option.abstract) {
        remove(parent.$children, vm);
    }

    // 移除 watcher 监听的所有状态
    if (vm._watcher) {
        vm._watcher.teardown();
    }

    // 当创建 watcher 实例时，都将 watcher 实例添加到 vm._watchers 中
    // 清除用户收到创建的 watcher 就需要将 _watchers 中的实例移除
    let i = vm._watchers.length;
    while (i--) {
        vm._watchers[i].teardown();
    }

    // 表明 Vue 实例有被小水
    vm._isDestroyed = true;

    // 解绑模板中的指令
    vm.__patch__(vm._vnode, null);

    // 触发 destroyed 钩子函数
    callHook(vm, 'destroyed');

    // 移除事件监听器
    vm.$off();
};
