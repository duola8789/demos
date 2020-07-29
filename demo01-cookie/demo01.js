/**
 * Created by zh on 2018/1/5.
 */
var url = window.url;
var index = url.indexOf('callBack');
var callBack = url.slice(index + 'callBack='.length, url.length);
eval(callBack)({name: 'jay'});
// setTimeout(callBack + "({name : 'jay'})", 0);
