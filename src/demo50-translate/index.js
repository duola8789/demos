import { Yr, ZIe, h5e } from './scripts/tools.js';

const EIe = {
  regex: 'translatewebpages.org/result/.+$',
};

let NV = null,
  glt = 'original';

async function Rte(t) {
  if (!NV) {
    NV = t.tabId;
  }
  if (glt === 'translated') {
    //  TODO 恢复原文
    glt = 'original';
  } else {
    // 翻译
    glt = 'translated';
    await QIe(t);
  }
}

Rte({
  type: 'netease-ai-assistant-fullpage-translate',
  info: {
    editable: false,
    frameId: 0,
    frameUrl: 'http://localhost:63342/demos/root/index.html?_ijt=f39bao6jqipceo6lmai8r4ok9e&_ij_reload=RELOAD_ON_SAVE',
    menuItemId: 'netease-ai-assistant-fullpage-translate',
    pageUrl: 'http://localhost:63342/demos/root/index.html?_ijt=f39bao6jqipceo6lmai8r4ok9e&_ij_reload=RELOAD_ON_SAVE',
  },
  tabId: 719922928,
});

async function QIe(t) {
  let e = window.location,
    r = await Yr(),
    a = ZIe(e),
    n = {
      location: e,
      settings: r,
      rule: a,
    },
    o = await hlt(document.body, n);
  for (let i of o)
    Hb.push({
      state: 1,
      node: i,
      index: -1,
    });
  Sb.default.runtime.onMessage.addListener(i => {
    if (i.type === 'branch-translate-resp' && i.state === 1 && i.uuid) {
      let l = PV.get(i.uuid);
      l && qIe(l, i.data, n);
    }
  }),
    GIe(n),
    Fte(n),
    Ote(n);
}

function OIe(t, e) {
  if (!(t && t.innerText && t.innerText.trim())) {
    return [];
  }
  let r = e.rule,
    a = [];
  if (r && r.selectors.length > 0) {
    let n = r.selectors
      .map(o => {
        let i = t.querySelectorAll(o);
        return Array.from(i);
      })
      .flat();
    a.push(...n);
  } else {
    if (r && r.additionalSelectors.length > 0) {
      let l = r.additionalSelectors
        .map(s => {
          let u = t.querySelectorAll(s);
          return Array.from(u);
        })
        .flat();
      a.push(...l);
    }
    // 获取DOM元素关键函数，将文本节点的父元素的父元素，放到数组 n 中
    const n = [],
      treeWalkFilter = l => {
        // 元素节点，例如<p>
        if (l.nodeType === Node.ELEMENT_NODE && r.excludeTags.indexOf(l.nodeName) !== -1) {
          // 若返回值为 NodeFilter.FILTER_REJECT，则不包含以此节点为根的子树中的任意节点。
          return NodeFilter.FILTER_REJECT;
        }
        // 元素或者属性中实际的文本
        if (l.nodeType === Node.TEXT_NODE) {
          let s = l.parentNode;
          if (s && s.parentNode && s !== document.body) {
            s = s.parentNode;
          }
          if (s && s.nodeType === Node.ELEMENT_NODE && !n.includes(s)) {
            n.push(s);
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      },
      // 显示 Text 节点 和 Element 节点。
      i = document.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, treeWalkFilter);

    while (i.nextNode()) {}
    a.push(...n);
    a.sort(function (l, s) {
      return l.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  return a;
}

const $c = 'netease-ai-assiatant-trans-mark',
  kh = 'netease-ai-assiatant-trans-notranslate';

// t: 节点，e：规则对象 rule
// 用来过滤不需要处理的节点
function RIe(t, e) {
  if (
    (t.hasAttribute && t.hasAttribute($c)) ||
    e.excludeTags.concat(e.additionalExcludeTags ? e.additionalExcludeTags : []).indexOf(t.nodeName) !== -1 ||
    t.classList.contains(kh) ||
    t.isContentEditable ||
    (t.parentElement && t.parentElement.hasAttribute($c)) ||
    // element.closest是一个用于查找最接近的父元素的方法。它接受一个选择器作为参数，并返回与该选择器匹配的最接近的父元素。
    (t.closest && t.closest(`[${$c}="1"]`))
  )
    return false;
  if (t.nodeName === 'P') {
    if (t.querySelector('img') && t.childNodes.length < 3) {
      return !(t.innerText.length < 80);
    }
  }
  return true;
}

// 判断是否是ASCII字符
function VIe(t) {
  for (let e = 0; e < t.length; e++) {
    if (t.charCodeAt(e) > 127) {
      return true;
    }
  }
  return false;
}

function IIe(t) {
  let e = t.trim();
  return e.length >= 3 || e.split(' ').length >= 2 || (!VIe(e) && e.length >= 2);
}

function l4t(t) {
  var e;
  return ((e = s5e(t)) == null ? void 0 : e.detectedCharacters) === 'traditional';
}

async function sm(t) {
  // 判断中文
  let e = await h5e(t);
  return e === 'zh' || e === 'zh-CN' || e === 'zh-TW' ? (l4t(t) ? 'zh-Hant' : 'zh-Hans') : p4t.includes(e) ? e : null;
}

function Mte(t, e) {
  return t === e;
}

// 检测一个字符串是否只包含数字、点号、逗号、冒号、斜杠、空格等特定字符
function Cte(t) {
  return /^(\d|\.|[:,./]|\s)*$/.test(t);
}

async function hlt(t, e) {
  let r = [],
    a = e.location,
    n = a.origin + a.pathname;
  if (new RegExp(EIe.regex).test(n)) {
    return [];
  }
  let l = (await Yr()).defaultTargetLanguage;
  // 找到所有文本元素的父级元素的父级元素，并且排序
  r = OIe(t, e);

  //  块级元素
  let s = e.rule.blockTags.concat(e.rule.additionalBlockTags ? e.rule.additionalBlockTags : []),
    u = [];

  async function c(f) {
    var v, x, M;
    // 对包含文本元素的爷爷元素做遍历
    for (const g of f)
      if (RIe(g, e.rule) && g.innerText && g.innerText.trim() && IIe(g.innerText.trim()))
        if (g.children.length === 0 && s.indexOf(g.nodeName) !== -1) {
          let A = await sm(g.innerText);
          !Mte(A, l) && !Cte(g.innerText) && (u.push(g), g.setAttribute($c, '1'));
        } else {
          let A = false;
          // 有没有有效的文本元素
          for (let C of g.childNodes)
            if (C.nodeName === '#text' && (v = C.textContent) != null && v.trim()) {
              A = true;
              break;
            }
          if (['PRE', 'CODE'].indexOf(g.tagName) === -1) {
            const text = g.textContent;
            if (A && u.indexOf(g) === -1 && text !== null && text.trim() && text.trim().length < 2e3) {
              // 太长的、无效的不翻译
              let C = await sm(g.innerText);
              // 判断是不是同一种语言或者只包含特殊字符
              if (!Mte(C, l) && !Cte(g.innerText)) {
                u.push(g);
                // 添加翻译标记
                g.setAttribute($c, '1');
              }
            } else {
              await c(Array.from(g.children));
            }
          }
        }
  }

  await c(r);
  let d = _Ie(t, e.rule.excludeSelectors);
  return NIe(t, u, d);
}
