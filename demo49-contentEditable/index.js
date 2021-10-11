// TODO: lodash-es
let html_editor;
function debounce(cb, timeout) {
    let timer;
    function debounced(...rest) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            cb(...rest);
        }, timeout);
    }
    debounced.cancel = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    };
    return debounced;
}

const NATIVE_EVENTS = {
    // @xxx 点击事件回调
    onATClick(name, email) {
        console.log('onATClick', name, email);
    },
    // 进入 @联系人 状态
    onEntryATState() {
        console.log('onEntryATState');
    },
    // @ 字符之后的 text 变化回调，text 为 @ 字符和光标之间的的字符串
    onATTextChange(text) {
        console.log('onAtTextChange', text);
    },
    // 退出 @联系人 状态
    onExitAtState() {
        console.log('onExitAtState');
    }
};

class ATProcess {
    constructor(nativeEvents) {
        this.nativeEvents = nativeEvents;
        this.config = {
            exitChars: [' ', '/', '\\'],
            className: 'divNeteaseSiriusATContact'
        };
        this.isComposition = false;
        this.onATTextChange = debounce(nativeEvents.onATTextChange, 300);
        this.inATProcess = false;
        this.ATRange = {
            range: new Range(),
            container: null,
            offset: 0
        };
        this.selectionText = '';
        this.inputTemp = [];
    }

    toggleComposition(isComposition) {
        this.isComposition = isComposition;
    }

    // 进入 @ 处理流程
    startATProcess() {
        this.inATProcess = true;

        const range = window.getSelection().getRangeAt(0);

        this.ATRange.container = range.startContainer;
        this.ATRange.offset = range.startOffset;
        this.ATRange.range.setStart(range.startContainer, Math.max(this.ATRange.offset - 1, 0));
    }

    // 退出 @ 处理流程
    exitATProcess(clear = true) {
        if (!this.inATProcess) {
            return;
        }
        if (clear) {
            this.ATRange.range.setStart(this.ATRange.container, 0);
            this.ATRange.range.setEnd(this.ATRange.container, this.ATRange.offset + this.inputTemp.length - 1);
            this.ATRange.range.deleteContents();
        }

        this.toggleComposition(false);
        this.inATProcess = false;
        this.inputTemp = [];
        this.nativeEvents.onExitAtState();
        this.ATRange.range.setEnd(this.ATRange.container, 0);
    }

    // insertContent(content) {
    //     const node = document.createTextNode(content);
    //     this.insertNodeInRange(node, false);
    //     this.handleATInput(content);
    // }

    // 处理输入内容
    handleATInput(currentInputValue, inputType, cursorY) {
        // 在 @ 流程当中
        if (this.inATProcess) {
            // 如果是删除（退格）
            const isDel = !currentInputValue && inputType === 'deleteContentBackward';
            if (isDel) {
                const selection = window.getSelection();
                if (this.selectionText) {
                    const selectionText = selection.anchorNode.data;
                    const index = selectionText.indexOf('@');
                    this.inputTemp = [...selectionText.slice(index)];
                } else {
                    if (this.inputTemp.length > 1) {
                        this.inputTemp.splice(selection.anchorOffset - this.ATRange.offset + 1, 1);
                    } else {
                        this.inputTemp = [];
                    }
                }
            } else if (inputType === 'insertFromPaste') {
                // 粘贴直接退出流程
                this.exitATProcess(false);
            } else {
                this.inputTemp.push(...currentInputValue);
            }

            // 输入终止字符或者传递内容被删干净了
            if (this.config.exitChars.includes(currentInputValue) || this.inputTemp.length <= 0) {
                this.onATTextChange.cancel();
                this.exitATProcess(false);
                return;
            }

            this.onATTextChange(this.inputTemp.slice(1).join(''));
            return;
        }

        if (currentInputValue === '@') {
            this.inputTemp.push(currentInputValue);
            this.startATProcess();
            this.nativeEvents.onEntryATState(cursorY);
        }
    }

    // 插入节点
    insertNodeInRange(node, needSpace = true) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const startEmptyNode = document.createTextNode('\u00a0');
        const endEmptyNode = document.createTextNode('\u00a0');

        range.deleteContents();

        if (needSpace) {
            range.insertNode(endEmptyNode);
            range.insertNode(node);
            range.insertNode(startEmptyNode);
        } else {
            range.insertNode(node);
        }

        const newRange = document.createRange();
        newRange.selectNodeContents(endEmptyNode);
        newRange.collapse(false);
        selection.removeAllRanges();
        selection.addRange(newRange);
    }

    // 插入 @xxx 块
    insertATContact(name, mailAddress, isRecipient) {
        if (!this.inATProcess) {
            return;
        }
        const style = this.getATStyle(isRecipient);
        const node = document.createElement('a');
        node.setAttribute('id', html_editor.createUUID());
        node.setAttribute('class', this.config.className);
        node.setAttribute('style', style);
        node.setAttribute('isrecipient', isRecipient);
        node.setAttribute('contenteditable', false);
        node.setAttribute('mail-address', mailAddress);
        node.addEventListener('click', () => {
            this.nativeEvents.onATClick(name, mailAddress);
        });
        node.innerText = `@${name}`;
        this.insertNodeInRange(node);
        this.exitATProcess();
    }

    // 处理 @xxx 对应的样式
    getATStyle(isRecipient) {
        const style = isRecipient
            ? {
                  display: 'inline-block',
                  color: '#FFF',
                  background: '#3946FF',
                  'border-radius': '8px',
                  padding: '0 4px',
                  cursor: 'pointer'
              }
            : {
                  display: 'inline-block',
                  color: ' #3964FF',
                  cursor: 'pointer'
              };
        return Object.keys(style).reduce((total, key) => {
            return (total += `${key}:${style[key]};`);
        }, '');
    }

    // 更新 @xxx 样式
    updateATContactStyle(el, mailAddress, isReceipt) {
        const targets = el.querySelectorAll(`.${this.config.className}[mail-address='${mailAddress}']`);
        if (targets.length > 0) {
            targets.forEach((target) => {
                target.setAttribute('style', this.getATStyle(isReceipt));
            });
        }
    }

    // // 处理光标移出当前输入的@xxx的范围
    // cursorOut() {
    //     setTimeout(() => {
    //         if (this.isStop) {
    //             return;
    //         }
    //         const anchorOffset = window.getSelection().anchorOffset;
    //         const atRangeStart = this.ATRange.offset;
    //         const atRangeEnd = this.ATRange.offset + this.inputTemp.length;
    //         if (this.inATProcess) {
    //             if (anchorOffset < atRangeStart || anchorOffset > atRangeEnd) {
    //                 this.exitATProcess(false);
    //             }
    //         }
    //     }, 0);
    // }
}

window.onload = function () {
    html_editor = {
        createUUID() {
            var s = [];
            var hexDigits = '0123456789abcdef';
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = '-';

            var uuid = s.join('');
            return uuid;
        },
        editor: document.getElementById('editor'),
        getCaretYPosition() {
            return 100;
        }
    };

    const atProcess = new ATProcess(NATIVE_EVENTS);

    html_editor.editor.addEventListener('input', (event) => {
        if (!atProcess.isComposition) {
            atProcess.handleATInput(event.data, event.inputType, html_editor.getCaretYPosition());
        }
    });

    html_editor.editor.addEventListener('compositionstart', (e) => {
        atProcess.toggleComposition(true);
    });

    html_editor.editor.addEventListener('compositionend', (e) => {
        if (atProcess.isComposition) {
            atProcess.handleATInput(e.data, 'insertText', html_editor.getCaretYPosition());
        }
        atProcess.toggleComposition(false);
    });

    // html_editor.editor.addEventListener('selectstart', () => {
    //     atProcess.cursorOut();
    // });

    document.addEventListener('selectionchange', (e) => {
        if (e.target && e.target.activeElement === html_editor.editor) {
            atProcess.selectionText = window.getSelection().toString();
        }
    });

    html_editor.editor.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'enter') {
            atProcess.exitATProcess(false);
        }
    });

    const insertBtn = document.querySelector('#insertBtn');
    insertBtn.addEventListener('click', () => {
        atProcess.insertATContact('周昊', 'zhouhao1@corp.netease.com', false);
    });

    setTimeout(() => {
        atProcess.insertATContact('周昊', 'zhouhao1@corp.netease.com', false);
    }, 3000);

    /// breaks the blockquote into two if possible
    html_editor.editor.addEventListener('keydown', function (e) {
        // 处理 @xxx
        if (e.key.toLowerCase() === 'enter') {
            atProcess.exitATProcess(false);
        }
    });

    // 光标处把@区域替换为 [@样式标签]
    html_editor.insertATContact = function (name, mailAddress, isRecipient) {
        atProcess.insertATContact(name, mailAddress, isRecipient);
    };

    // 更改@标签样式
    html_editor.updateATContact = function (mailAddress, isRecipient) {
        atProcess.updateATContactStyle(html_editor.editor, mailAddress, isRecipient);
    };

    // 退出 @ 状态
    html_editor.onExitAtState = function () {
        atProcess.exitATProcess(false);
    };

    let isReceipt = false;
    const changeBtn = document.querySelector('#changeBtn');
    changeBtn.addEventListener('click', () => {
        isReceipt = !isReceipt;
        atProcess.updateATContactStyle(html_editor.editor, 'zhouhao1@corp.netease.com', isReceipt);
    });

    const changeStrInput = document.querySelector('#changeStrInput');
    const changeStrBtn = document.querySelector('#changeStrBtn');
    changeStrBtn.addEventListener('click', () => {
        // atProcess.insertContent(changeStrInput.value);
    });

    const exitBtn = document.querySelector('#exitBtn');
    exitBtn.addEventListener('click', () => {
        atProcess.exitATProcess();
    });
};
