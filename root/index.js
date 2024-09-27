class MyQueue {
  constructor() {
    this.stack = [];
    this.helpStck = [];
  }

  move() {
    if (this.helpStck.length === 0) {
      while (this.stack.length > 0) {
        this.helpStck.push(this.stack.pop());
      }
    }
  }

  push(item) {
    this.stack.push(item);
    return null;
  }

  pop() {
    this.move();
    return this.helpStck.pop();
  }

  peak() {
    this.move();
    return this.helpStck[this.helpStck.length - 1];
  }

  empty() {
    return this.stack.length === 0 && this.helpStck.length === 0;
  }
}

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.pop();
myQueue.peak();
myQueue.empty();
