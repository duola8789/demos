/**
 * Created by zh on 2020/6/17.
 */
const stack = [];
const lastTag = stack[stack.length - 1];
const comment = new RegExp('');
const conditionalComment = new RegExp('');
const docType = new RegExp('');
const endTag = new RegExp('');
const startTagOpen = new RegExp('');

function parseStartTag(html) {}

function isPlainTextElement(tag) {}

export function parseHtml(html, options) {
    while (html) {
        // lastTag 是从维护的栈中取出的最后一个元素，是当前元素的父元素
        // 判断当前元素的父元素是否是纯文本内容元素
        if (!lastTag || !isPlainTextElement(lastTag)) {
            // 非纯文本内容元素
            let textEnd = html.indexOf('<');

            // 首先处理当做非文本内容进行解析
            if (textEnd === 0) {
                // 注释
                if (comment.test(html)) {
                    // 注释的处理逻辑
                    continue;
                }

                // 条件注释
                if (conditionalComment.test(html)) {
                    // 条件注释的处理逻辑
                    continue;
                }

                // DOCTYPE
                const doctypeMatch = html.match(docType);
                if (doctypeMatch) {
                    // DOCTYPE 的处理逻辑
                    continue;
                }

                // 结束标签
                const endTagMatch = html.match(endTag);
                if (endTagMatch) {
                    // 结束标签的处理逻辑
                    continue;
                }

                // 开始标签
                const startTagMatch = parseStartTag(html);
                if (startTagMatch) {
                    // 开始标签的处理逻辑
                    continue;
                }
            }

            let text, rest, next;
            // 非文本内容解析后，文本中仍然含有 <，那么需要解析文本
            if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (
                    !endTag.test(rest) &&
                    !startTagOpen.test(rest) &&
                    !comment.test(rest) &&
                    conditionalComment.test(rest)
                ) {
                    // 如果 < 在纯文本中，那么将它视为纯文本对待
                    next = rest.indexOf('<', 1);
                    if (next < 0) break;
                    textEnd += next;
                    rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
                html = html.substring(textEnd);
            }

            // 如果模板中不再包含 < 了，那么剩余内容都是文本内容了
            if (textEnd < 0) {
                text = html;
                html = '';
            }

            // 触发文本解析的钩子函数
            if (options.chars && text) {
                options.chars(text);
            }
        } else {
            // 父元素是纯文本内容元素（script、style 或 textarea）
        }
    }
}
