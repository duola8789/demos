/**
 * Created by zh on 2020/7/2.
 */
let cid = 1;

Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};

    const Super = this;
    const SuperId = Super.cid;
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
    }

    const name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
        // 对组件名字进行校验，在开发模式下进行警告
    }

    const Sub = function VueComponent(options) {
        this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;

    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // 处理 props、computed 等属性

    // 缓存构造函数
    cachedCtors[SuperId] = Sub;
    return Sub;
};
