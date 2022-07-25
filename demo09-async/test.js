/**
 * Created by zh on 2018/4/28.
 */
let a = 123;
function b() {
    alert(333);
}
setTimeout(function () {
    a = 999;
}, 1500);
export default a;
export {b};
