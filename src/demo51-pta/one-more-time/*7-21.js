// 7-21 去除重复字母
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937539&page=0
// 重点: ①使用了两个map，分别是统计字符个数的map和是否在栈中的map，返回的是一个栈②遍历过程中，对于每个不重复的字，内部在进行一次遍历，判断栈顶的字符是否大于当前字符，如果大于则弹出栈顶元素，直到栈顶元素小于等于当前字符
function fn(str) {}

const str1 = 'abecbcd';
const str2 = 'cbacdcbc';
const str3 = 'bcabc'; // abc

console.log(fn(str1));
console.log(fn(str2));
console.log(fn(str3));
