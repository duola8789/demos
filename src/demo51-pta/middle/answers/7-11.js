// 7-11 二叉树的中序遍历
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096975228929&page=0
// https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function genTree(list) {
  if (!list.length) {
    return null;
  }
  const root = new TreeNode(list[0]);
  const queue = [root];

  let i = 1;

  while (i < list.length) {
    const cur = queue.shift();
    if (list[i]) {
      cur.left = new TreeNode(list[i]);
      queue.push(cur.left);
    }
    i++;
    if (list[i]) {
      cur.right = new TreeNode(list[i]);
      queue.push(cur.right);
    }
    i++;
  }

  return root;
}

function fn(list) {
  if (!list || list.length === 0) {
    return [];
  }
  const result = [];
  const root = genTree(list);

  function inorder(node) {
    if (node) {
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  }

  if (root) {
    inorder(root);
  }
  return result;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const line = buf.split('\n')[0];
  const list = line.split(',').map(v => (v === 'null' ? null : String(v)));
  const result = fn(list);
  console.log(result.join(','));
});
