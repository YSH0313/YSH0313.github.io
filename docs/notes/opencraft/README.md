---
title: 开源项目
icon: solar:programming-bold
createTime: 2024/12/28 15:39:08
permalink: /opencraft/
---

### ==Single_process== 异步并发爬虫框架

<NpmBadgeGroup
repo="YSH0313/single_process"
items="stars,version,dm,license,source"
/>

[`single_process`](https://github.com/YSH0313/single_process)
是一个可以帮助你快速开发一个网络爬虫应用的异步并发框架，拥有三个优先级队列消息管道供你选择:

- `内存优先级模式`: 无需消息队列服务，适用于本地开发或不需要分布式抓取场景。
- `RabbitMq模式`: 使用 `RabbitMq` 作为优先级队列，可进行分布式协同抓取，提高抓取效率。
- `Redis队列模式`: 使用 `Redis` 作为优先级队列，与 `RabbitMq` 队列并无二致，适应不同的队列使用场景。

它还提供了许多内置功能，使你的注意力更多的放在爬虫逻辑本身，让你的开发代码更加的简洁，减少重复代码工作，爬虫代码更加规范，方便维护。

除此以外它的并发功能还可以为你做一些数据处理的工作。

---

### ==Pacer== 异步后端框架

<NpmBadgeGroup
repo="YSH0313/pacer"
items="stars,version,dm,license,source"
/>

[`Pacer`](https://github.com/YSH0313/pacer) 是一套专为 `python` 工程师开发的一套 `异步后端框架` ，是一个功能完备的 Web
框架，提供了许多内置功能，帮助开发者快速搭建高质量的 Web 应用。

- 全功能框架：`Pacer` 提供了丰富的内置功能，如认证系统、管理后台、ORM（对象关系映射）、表单处理、缓存、路由、会话管理等，使得开发者无需重新发明轮子，快速构建
  Web 应用。
- 可扩展性：虽然 `Pacer` 提供了大量内置功能，但它也允许开发者根据需求扩展和自定义。
- 安全性高：`Pacer` 在设计时就强调安全性，提供了防止 SQL 注入、跨站脚本攻击（XSS）、跨站请求伪造（CSRF）等的机制，适合对安全性要求较高的应用。
- 高性能：主要得益于 `asyncio` 的异步特性，因此能提供更好的性能和响应速度，`asyncio` 是 Python
  内置的异步框架，它提供了用于编写并发代码的基本设施，尤其是 `协程（coroutines）` 和 `事件循环（event loop）`。它允许你执行 I/O
  密集型任务而不会阻塞程序的其他部分。

---