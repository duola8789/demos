/**
 * Created by zh on 2018/1/13.
 */
"use strict";
require("babel-core/register");
require("babel-polyfill");

function time(ms, message, index) {
  console.log(index);
  return new Promise(function (resolve) {
    setTimeout(resolve, ms * 1000, message)
  })
}

async function fetch() {
  console.time(1);
  let result = [];
  for (let i = 1; i < 4; i++) {
    let ms = 5;
    result[i] = time(ms, `${i} is complete`, `${i} is start`);
  }
  for (let i = 1; i < 4; i++) {
    console.log(await result[i] )
  }
  console.timeEnd(1);
}

async function fetch1() {
  let result1 = time(2, `${1} is complete`, `${1} is start`);
  let result2 = time(4, `${2} is complete`, `${2} is start`);
  console.log( await result1);
  console.log( await result2);
}

async function fetch2() {
  console.time(1);
  let [result1, result2] = await Promise.all([time(2, `${1} is complete`, `${1} is start`),  time(4, `${2} is complete`, `${2} is start`)])
  console.log(result1);
  console.log(result2);
  console.timeEnd(1)
}

