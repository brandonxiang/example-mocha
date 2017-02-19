CSRF（Cross-site request forgery）跨域请求伪造，又叫one click attack或session riding。

XSS利用站点内的信任用户。

CSRF是通过伪装来自受信任用户的请求来利用受信任的网站。

![示意图](csrf.jpg)

下面是CSRF的常见特性：
- 依靠用户标识危害网站
- 利用网站对用户标识的信任
- 欺骗用户的浏览器发送HTTP请求给目标站点
- 另外可以通过IMG标签会触发一个GET请求，可以利用它来实现CSRF攻击。

## 防范措施

- 服务端进行CSRF防御，在表单当中增加伪随机数。
- 验证码
- One-Time Tokens
- 持久化的授权方法切换成瞬间的授权方法。
- 双提交cookie
