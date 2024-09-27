/**
 * Created by zh on 2021/9/14.
 */
const request = window.indexedDB.open('test-db', 2);

let db;

request.onsuccess = function (event) {
  console.log('数据库打开成功');
  db = request.result;
  add();
  read();
  readAll();
  update();
  remove();
  findByIndex();
};

request.onupgradeneeded = event => {
  console.log('数据库版本升级');
  db = event.target.result;
  let objectStore;
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
  }
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
};

function add() {
  const request = db.transaction(['person'], 'readwrite').objectStore('person').add({
    id: 44,
    name: '张三',
    age: 99,
    email: 'ZHANGSAN@163.COM',
  });

  request.onsuccess = event => {
    console.log('数据写入成功');
  };

  request.onerror = event => {
    console.log('数据写入失败');
  };
}

function read() {
  const objectStore = db.transaction(['person']).objectStore('person');
  const request = objectStore.get(1);

  request.onsuccess = e => {
    const result = request.result;
    if (result) {
      console.log('Name', result.name);
      console.log('Age', result.age);
      console.log('Email', result.email);
    } else {
      console.log('未获得数据记录');
    }
  };
}

function readAll() {
  const objectStore = db.transaction(['person']).objectStore('person');

  objectStore.openCursor().onsuccess = event => {
    const cursor = event.target.result;
    if (cursor) {
      console.log('ID', cursor.key);
      console.log('Name', cursor.value.name);
      console.log('Age', cursor.value.age);
      console.log('Email', cursor.value.email);
      cursor.continue();
    } else {
      console.log('没有更多数据了');
    }
  };
}

function update() {
  const request = db.transaction(['person'], 'readwrite').objectStore('person').put({
    id: 2,
    name: '李四',
    age: 100,
    email: 'hello@163.com',
  });

  request.onsuccess = function () {
    console.log('数据更新成功');
  };

  request.onerror = function () {
    console.log('数据更新失败');
  };
}

function remove() {
  const request = db.transaction(['person'], 'readwrite').objectStore('person').delete(44);

  request.onsuccess = function () {
    console.log('数据删除成功');
  };
}

function findByIndex() {
  const store = db.transaction(['person'], 'readwrite').objectStore('person');
  const index = store.index('name');
  const request = index.get('张三');

  request.onsuccess = function (e) {
    if (e.target.result) {
      console.log('通过索引找到了', e.target.result.name);
    } else {
      console.log('没有这个人');
    }
  };
}
