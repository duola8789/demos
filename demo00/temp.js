const data = {a: {b: {c: 'hello'}}};

safeGet(data, 'a.b.c'); // => scriptoj
safeGet(data, 'a.b.c.d'); // => 返回 undefined
safeGet(data, 'a.b.c.d.e.f.g'); // => 返回 undefined

console.log('hello'); // => 打印 ScriptOJ
