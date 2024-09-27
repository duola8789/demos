// 7-18 合并 K 个升序链表
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743237&page=0
class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

function arrayToListNode(arr) {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0], null);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    tail.next = new ListNode(arr[i]);
    tail = tail.next;
  }
  return head;
}

function listNodeToArray(head) {
  const arr = [];
  let tail = head;
  while (tail) {
    arr.push(tail.val);
    tail = tail.next;
  }
  return arr;
}

function mergeTowList(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTowList(l1.next, l2);
    return l1;
  }

  l2.next = mergeTowList(l1, l2.next);
  return l2;
}

function mergeLists(arrList) {
  const listNodeList = [...arrList].map(v => arrayToListNode(v));

  let result = null;

  while (listNodeList.length >= 1) {
    result = mergeTowList(listNodeList.shift() || null, listNodeList.shift() || null);
    if (listNodeList.length === 0) {
      break;
    }
    listNodeList.unshift(result);
  }

  return listNodeToArray(result);
}
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const arrList = JSON.parse(buf);
  console.log(`[${mergeLists(arrList).join(', ')}]`);
});
