window.onload = function () {
    const div = document.querySelector('#test');
    const range = new Range();
    range.setStart(div.childNodes[1].firstChild, 0);
    range.setEnd(div.childNodes[1].firstChild, 2);
    range.deleteContents();
    window.getSelection().removeRange(range);
};
