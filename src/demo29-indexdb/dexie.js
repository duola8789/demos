/**
 * Created by zh on 2021/9/14.
 */
const db = new Dexie('friend_database');
db.version(6).stores({
  friends: 'name, [age+size+isThread], weight',
});

// db.version(8)
//     .stores({
//         persons2: 'name, [age+size+isThread], weight'
//     })
//     .upgrade((trans) => {
//         return trans.friends
//             .toCollection()
//             .toArray()
//             .then((newData) => {
//                 console.time('bulkPut');
//                 return trans.persons2.bulkPut(newData);
//             })
//             .then(() => {
//                 console.timeEnd('bulkPut'); // 1716.781982421875 ms
//             });
//     });

db.version(11)
  .stores({
    persons6: 'name, [age+size+isThread], weight',
  })
  .upgrade(trans => {
    console.time('put');
    return trans.friends
      .each(v => {
        trans.persons6.put(v);
      })
      .then(() => {
        console.timeEnd('put');
      });
  });

// Array.from({ length: 10000 })
//     .map((v, index) => ({
//         name: 'Jay' + index,
//         age: index,
//         isThread: index % 2 ? 0 : 1,
//         size: index + 1000,
//         weight: 10000
//     }))
//     .forEach(async (v) => {
//         await db.friends.put({ ...v });
//     });

async function show() {
  return db.friends.where(['age', 'size', 'isThread']).between([21, 2], [21, 2], true, true).toArray();
}

show().then(v => {
  console.log(v);
});
