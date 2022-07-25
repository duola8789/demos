/**
 * Created by zh on 2021/9/14.
 */
const db = new Dexie('friend_database');
db.version(6).stores({
    friends: 'name, [age+isThread]'
});

[
    { name: 'Jay1', age: 1, isThread: 1 },
    { name: 'Jay2', age: 21, isThread: 0 },
    { name: 'Jay3', age: 31, isThread: 0 },
    { name: 'Jay4', age: 41, isThread: 1 },
    { name: 'Jay5', age: 51, isThread: 1 }
].forEach(async (v) => {
    await db.friends.put({ ...v });
});

async function show() {
    return db.friends.where(['age', 'isThread']).between([0, 0], [100, 1], true, true).toArray();
}

show().then((v) => {
    console.log(v);
});
