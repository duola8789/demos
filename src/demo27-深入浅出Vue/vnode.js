/**
 * Created by zh on 2020/5/27.
 */
class VNode {
    constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory, isComment) {
        this.tag = tag;
        this.data = data;
        this.key = data && data.key;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.context = context;
        this.componentOptions = componentOptions;
        this.asyncFactory = asyncFactory;
        this.ns = undefined;
        this.isStatic = false;
        this.isComment = isComment;
        this.isCloned = false;
    }
}

export const createEmptyVNode = (text) => {
    const node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};

export const createTextVNode = (value) => {
    return new VNode(undefined, undefined, undefined, String(value));
};

export const cloneVNode = (vnode, deep) => {
    const cloned = new VNode(
        vnode.tag,
        vnode.data,
        vnode.children,
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
    );

    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;

    if (deep && vnode.children) {
        cloned.children = cloneVNode(vnode.children);
    }

    return cloned;
};

function isDef(v) {
    return v !== undefined && v !== null;
}

const nodeOps = {
    parentNode(node) {
        return node.parentNode;
    },
    removeNode(node, child) {
        node.removeChild(child);
    }
};

function removeNode(el) {
    const parent = nodeOps.parentNode(el);
    if (isDef(parent)) {
        nodeOps.removeNode(parent, el);
    }
}
