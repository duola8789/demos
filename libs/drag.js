/**
 * Created by zh on 2018/12/25.
 */

/**
 * 实例化时传入一个DOM节点
 * 如果多个元素需要实例化多个对象
 */
class Drag {
  constructor(target) {
    this.dragging = false;
    this.diffX = 0;
    this.diffY = 0;
    this.className = 'draggable';
    this.target = target;
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    if (!this.target) {
      return;
    }

    const {type, clientX, clientY} = event;

    switch (type) {
      case 'mousedown': {
        // 不放在前面，是为了保证鼠标快速移动时div移动速度能够赶得上
        if (!event.target.classList.contains(this.className)) {
          return;
        }
        this.dragging = true;
        this.diffX = clientX - this.target.offsetLeft;
        this.diffY = clientY - this.target.offsetTop;
        break;
      }
      case 'mousemove': {
        if (this.dragging) {
          const clientWidth = document.documentElement.clientWidth, //浏览器时下窗口可视区域宽度
            clientHeight = document.documentElement.clientHeight, //浏览器时下窗口可视区域高度
            offsetWidth = this.target.offsetWidth,
            offsetHeight = this.target.offsetHeight;

          let x = clientX - this.diffX,
            y = clientY - this.diffY;

          // 防止移出屏幕
          if (x < 0) {
            x = 0;
          }
          if (x > clientWidth - offsetWidth) {
            x = clientWidth - offsetWidth;
          }
          if (y < 0) {
            y = 0;
          }
          if (y > clientHeight - offsetHeight) {
            y = clientHeight - offsetHeight;
          }

          this.target.style.left = x + 'px';
          this.target.style.top = y + 'px';
        }

        break;
      }
      case 'mouseup': {
        if (!event.target.classList.contains(this.className)) {
          return;
        }
        this.dragging = false;
        break;
      }
    }
  }

  enable() {
    window.addEventListener('mousedown', this.handleEvent);
    window.addEventListener('mousemove', this.handleEvent);
    window.addEventListener('mouseup', this.handleEvent);
  }

  disable() {
    window.removeEventListener('mousedown', this.handleEvent);
    window.removeEventListener('mousemove', this.handleEvent);
    window.removeEventListener('mouseup', this.handleEvent);
  }
}

if (typeof exports === 'object') {
  module.exports = Drag;
} else {
  window.Drag = Drag;
}
