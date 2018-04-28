/**
 * Created by zh on 2018/1/13.
 */
"use strict";
require("babel-core/register");
require("babel-polyfill");

// 移植到Vue2之后直接使用lodash中的_.debounce替换即可
import debounce from './debounce'
import _ from 'lodash'

import w from './test'
import {b} from './test'

// function time(ms, message, index) {
//   console.log(index);
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms * 1000, message)
//   })
// }
//
// async function fetch() {
//   console.time(1);
//   let result = [];
//   for (let i = 1; i < 4; i++) {
//     let ms = 5;
//     result[i] = time(ms, `${i} is complete`, `${i} is start`);
//   }
//   for (let i = 1; i < 4; i++) {
//     console.log(await result[i] )
//   }
//   console.timeEnd(1);
// }
//
// async function fetch1() {
//   let result1 = time(2, `${1} is complete`, `${1} is start`);
//   let result2 = time(4, `${2} is complete`, `${2} is start`);
//   console.log( await result1);
//   console.log( await result2);
// }
//
// async function fetch2() {
//   console.time(1);
//   let [result1, result2] = await Promise.all([time(2, `${1} is complete`, `${1} is start`),  time(4, `${2} is complete`, `${2} is start`)])
//   console.log(result1);
//   console.log(result2);
//   console.timeEnd(1)
// }

// async函数进行AJAX操作
// const URL = 'https://api.github.com/users/github';
//
// async function getDate(){
//   let res = await fetch(URL);
//   let result = await res.json();
//   console.log('fetch finish -----------------', result.message)
//   return result
// }
// console.log('fetch start');
// getDate().then(val => console.log('++++++++++++++', val));
// console.log('fetch processing');

// 2s后打印字符
// function timeout(text, ms){
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, text)
//   })
// }
// async function print(text,ms){
//   return timeout(text, ms);
// }
// print('hello world', 2000).then(val => console.log(val))

// 捕获错误
// const color = 'background: #aaa;color: red'
// async function f() {
//   let a = await 111;
//   try {
//     throw new Error('wrong hahaha');
//   } catch (e) {
//     console.log('inside error', e)
//   }
//   let b = await 222;
//   return a;
// }
//
// f().then(v => console.log('outside success', v))
//   .catch(v => console.log('outside wrong', v))

let timeout1 = function () {
  return new Promise(resolve => {
    setTimeout(resolve, 3000, 'timeout1')
  })
};
let timeout2 = function () {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, 'timeout2')
  })
}
let timeout3 = function () {
  return new Promise(resolve => {
    setTimeout(resolve, 4000, 'timeout3')
  })
}


// 继发操作
// async function fn() {
//   console.log('计时开始')
//   console.time('操作')
//   let result1 = await timeout1();
//   let result2 = await timeout2();
// }

// 并发操作1
// async function fn() {
//   console.log('计时开始')
//   console.time('操作')
//   let t1 = timeout1();
//   let t2 = timeout2();
//   let result1 = await t1;
//   let result2 = await t2;
// }

// 并发操作2
// async function fn() {
//   console.log('计时开始')
//   console.time('操作')
//   let result = await Promise.all([timeout1(), timeout2()]);
// }

// 继发操作2
async function fn() {
  console.log('计时开始')
  console.time('操作')
  let array = [timeout1(), timeout2()];
  for (let val of array) {
    await val
  }
}

// 不正常操作
// async function fn() {
//   console.log('计时开始')
//   console.time('操作')
//   let array = [timeout1, timeout2];
//   array.forEach( async (val) => {
//     await val()
//   })
// }
//
// fn().then(() => {
//   console.log('计时结束')
//   console.timeEnd('操作')
// })


let arr = [timeout1, timeout2, timeout3]

// 同时发出，按顺序输出
// async function f(urls) {
//   let res = urls.map((url) => url())
//   for(let i of res){
//     console.log(await i)
//   }
// }

// 同时发出，谁先完成输出谁
// async function f(urls) {
//   let res = urls.map(async (url) => {
//     console.log(await url())
//   })
// }

// 依次发出，依次输出
// async function f(urls) {
//   for (let url of urls) {
//     console.log(await url())
//   }
// }
//
// f(arr)


// decorator
// function mixin(...argus) {
//   return function (target) {
//     return Object.assign(target, argus)
//   }
// }
//
// const foo = {name: 'jay'}
//
// @mixin(foo)
// class Person {
// }
//
// console.log(Person.name)


// debounce相关
function main() {
  obj.say()
}

function test() {
  console.log(123)
}

let obj = {
  say: _.debounce(function () {
    console.log(456)
  }, 500)
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', main())
setInterval(main, 222)


console.log(w)
setTimeout(function () {
  console.log(w)
}, 3000)
let a = {
  a: 123,
  b: 333,
}
