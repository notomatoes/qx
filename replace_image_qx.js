/*
 * Quantumult X
 * 将匹配到的图片请求重定向到指定图片
 */

const targetImageURL =
  "https://wework.qpic.cn/wwpic3az/646431_OP3ULHLNTAmhYbo_1775817962/0";

$done({
  status: "HTTP/1.1 302 Found",
  headers: {
    Location: targetImageURL
  }
});
