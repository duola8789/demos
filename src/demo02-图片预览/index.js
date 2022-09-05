'use strict';
const input = document.querySelector('#file'),
    wrapper = document.querySelector('#preview'),
    img = document.querySelector('#img');

document.addEventListener('drop', function (e) {
    //释放
    e.preventDefault();
});

document.addEventListener('dragenter', function (e) {
    //拖进
    e.preventDefault();
});

document.addEventListener('dragleave', function (e) {
    //拖离
    e.preventDefault();
});

document.addEventListener('dragover', function (e) {
    //拖来拖去
    e.preventDefault();
});

// 使用 fileReader
function preview(files) {
    Object.keys(files).forEach(function (file) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[file]);
        fileReader.onload = function () {
            img.src = fileReader.result;
            img.title = files[file].name;
        };
    });
}

// 使用 createObjectURL
function preview2(files) {
    Object.keys(files).forEach(function (file) {
        img.src = window.URL.createObjectURL(files[file]);
    });
}

input.onchange = function (e) {
    let files = e.target.files;
    preview(files);
};

wrapper.addEventListener('drop', function (e) {
    let files = e.dataTransfer.files;
    preview2(files);
});
