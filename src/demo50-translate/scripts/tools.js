import config from './config.js';

const VV = config.rules;

export function Yr() {
  return config.settings;
}

function Tte(t) {
  // 去除协议
  t.indexOf('http') === 0 && (t = t.split('//')[1]);

  let e = [],
    r = t.split('/')[0].split('.'); // host

  if (r[r.length - 1].indexOf(':') !== -1) {
    let n = r[r.length - 1].split(':');
    (r[r.length - 1] = n[0]), r.push(n[1]);
  }
  e.push(...r);
  let a = t.split('/');
  return a.shift(), a.length > 0 && a[a.length - 1] !== '' && e.push(...a), e;
}

function $Ie(t) {
  // t === localhost/demos/root/index.html
  // e === ['localhost', 'demos', 'root', 'index.html']
  let e = Tte(t);
  for (let r of VV.sepcial)
    for (let a of r.matches) {
      let n = Tte(a),
        o = !0;
      for (let i = 0; i < n.length; i++) n[i] !== '*' && n[i] !== e[i] && (o = !1);
      if (o) return r;
    }
  return null;
}

// 获取匹配到当前 url 的 sepcial selectors
export function ZIe(t) {
  let e = VV.general;
  if (VV.sepcial.length > 0) {
    let r = $Ie(t.hostname + t.pathname);
    r &&
      (r.selectors && (e.selectors = r.selectors),
      r.additionalSelectors && e.additionalSelectors.push(...r.additionalSelectors),
      r.excludeSelectors && (e.excludeSelectors = r.excludeSelectors),
      r.excludeTags && e.excludeTags.push(...r.excludeTags),
      r.additionalExcludeTags && e.additionalExcludeTags.push(...r.additionalExcludeTags),
      r.inlineTags && (e.inlineTags = r.inlineTags),
      r.additionalInlineTags && e.additionalInlineTags.push(...r.additionalInlineTags),
      r.blockTags && (e.blockTags = r.blockTags),
      r.additionalBlockTags && e.additionalBlockTags.push(...r.additionalBlockTags));
  }
  return e;
}

// 异步判断语种
export async function h5e(t) {
  let e = t.trim();
  return new Promise(r => {
    (async () => {
      let a = await chrome.default.i18n.detectLanguage(e);
      if (a.languages.length > 0) {
        let n = a.languages[0].language;
        r(n);
      }
      r('en');
    })();
  });
}
