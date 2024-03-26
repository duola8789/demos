const str = 'https://waimao.cowork.netease.com#123 ';
const encodeStr = encodeURIComponent(str);
const matched = str.match(/(?:^|\?|&)target=(.+?)(&|$)/);
const redirectUrl = matched ? decodeURIComponent(matched[1]) : '';
console.log(redirectUrl);
