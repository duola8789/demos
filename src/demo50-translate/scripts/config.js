const settings = {
  alwaysShowIcons: false,
  apiKeys: '52315f1e9aeea76ef90aeb34194ded0a',
  apiURL: 'https://aigc.gameit.netease.com',
  autoTranslate: false,
  defaultSearchTargetLanguage: 'zh-Hans',
  defaultTargetLanguage: 'zh-Hans',
  defaultTranslateApi: 'openai',
  defaultTranslateMode: 'translate',
  email: 'zhouhao1@corp.netease.com',
  fullpageTranslationStyle: 'quote',
  inputAreaShow: false,
  networkIsPass: true,
  searchEnhancementEnableV2: true,
  searchMode: 'default',
  showSideFixedBtn: false,
  useTranslationCache: true,
  username: '周昊',
};

const rules = {
  general: {
    selectors: [],
    additionalSelectors: [],
    excludeSelectors: [],
    excludeTags: [
      'TIME',
      'TITLE',
      'SCRIPT',
      'STYLE',
      'TEXTAREA',
      'SVG',
      'svg',
      'G',
      'TEXT',
      'NOSCRIPT',
      'INPUT',
      'BUTTON',
      'BASE',
      'SELECT',
      'OPTION',
      'IMG',
      'SUB',
      'SUP',
      'HR',
      'PRE',
      'CODE',
      'KBD',
      'WBR',
      'TT',
      'RT',
      'RP',
      'META',
      'FOOTER',
      'MATH',
      'TTS-SENTENCE',
      'AIO-CODE',
      'VIDEO',
    ],
    additionalExcludeTags: [],
    inlineTags: [
      'A',
      'ABBR',
      'FONT',
      'ACRONYM',
      'B',
      'INS',
      'DEL',
      'RUBY',
      'RP',
      'RB',
      'BDO',
      'MARK',
      'BIG',
      'RT',
      'NOBR',
      'CITE',
      'DFN',
      'EM',
      'I',
      'LABEL',
      'Q',
      'S',
      'SMALL',
      'SPAN',
      'STRONG',
      'SUB',
      'SUP',
      'U',
      'KBD',
      'TT',
      'VAR',
      'IMG',
      'CODE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'TIME',
      'META',
      'WBR',
      'RELIN-HC',
      'RELIN-HIGHLIGHT',
      'RELIN-ORIGIN',
      'RELIN-TARGET',
      'XQDD_HIGHLIGHT_NEW_WORD',
      'NOBR',
    ],
    additionalInlineTags: [],
    blockTags: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'OL', 'UL', 'LI', 'P'],
    additionalBlockTags: [],
  },
  sepcial: [
    {
      matches: ['news.ycombinator.com'],
      excludeSelectors: ['span.sitebit.comhead', '.subline', 'span.pagetop', '.yclinks'],
    },
    {
      matches: ['github.com/*'],
      selectors: [
        '.markdown-title',
        '.markdown-body',
        '.Layout-sidebar p',
        'div > span.search-match',
        'li.repo-list-item p',
        '#responsive-meta-container p',
        'article p',
        'div.repo-description p',
        '[itemprop=description]',
      ],
      excludeSelectors: [
        '.css-truncate',
        "[data-test-selector='commit-tease-commit-message']",
        "[data-test-selector='create-branch.developmentForm']",
        'div.js-details-container.Details',
        'div.Box-header.position-relative',
        'div.blob-wrapper-embedded',
        'div.Box.Box--condensed.my-2',
        'div.jp-CodeCell',
        '[aria-label="Account"] .markdown-title',
      ],
    },
    {
      matches: ['www.google.com.*/*'],
      excludeSelectors: ['cite[role="text"]', 'span.VuuXrf'],
    },
    {
      matches: ['twitter.com/home'],
      excludeSelectors: [
        'div.css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws',
        'div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l',
      ],
    },
  ],
  buildinConfigUpdatedAt: 0,
};

export default {
  settings,
  rules,
};
