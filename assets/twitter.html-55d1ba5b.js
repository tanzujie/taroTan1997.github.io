const e=JSON.parse('{"key":"v-67194af5","path":"/code/system-design/system-design-primer/twitter.html","title":"设计推特时间轴与搜索功能","lang":"zh-CN","frontmatter":{"isOriginal":false,"order":-9999,"article":false,"category":["转载"],"tag":["系统设计"],"description":"原文地址：github.com/donnemartin/system-design-primer 译文出自：掘金翻译计划 译者：XatMassacrE、L9m、Airmacho、xiaoyusilen、jifaxu、根号三","head":[["meta",{"property":"og:url","content":"https://zxy.wsn640.top/code/system-design/system-design-primer/twitter.html"}],["meta",{"property":"og:site_name","content":"zxy"}],["meta",{"property":"og:title","content":"设计推特时间轴与搜索功能"}],["meta",{"property":"og:description","content":"原文地址：github.com/donnemartin/system-design-primer 译文出自：掘金翻译计划 译者：XatMassacrE、L9m、Airmacho、xiaoyusilen、jifaxu、根号三"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-14T09:07:38.000Z"}],["meta",{"property":"article:author","content":"孤悲"}],["meta",{"property":"article:tag","content":"系统设计"}],["meta",{"property":"article:modified_time","content":"2023-08-14T09:07:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"设计推特时间轴与搜索功能\\",\\"description\\":\\"原文地址：github.com/donnemartin/system-design-primer 译文出自：掘金翻译计划 译者：XatMassacrE、L9m、Airmacho、xiaoyusilen、jifaxu、根号三\\"}"]]},"headers":[{"level":2,"title":"第一步：简述用例与约束条件","slug":"第一步-简述用例与约束条件","link":"#第一步-简述用例与约束条件","children":[{"level":3,"title":"用例","slug":"用例","link":"#用例","children":[]},{"level":3,"title":"限制条件与假设","slug":"限制条件与假设","link":"#限制条件与假设","children":[]}]},{"level":2,"title":"第二步：概要设计","slug":"第二步-概要设计","link":"#第二步-概要设计","children":[]},{"level":2,"title":"第三步：设计核心组件","slug":"第三步-设计核心组件","link":"#第三步-设计核心组件","children":[{"level":3,"title":"用例：用户发表了一篇推特","slug":"用例-用户发表了一篇推特","link":"#用例-用户发表了一篇推特","children":[]},{"level":3,"title":"用例：用户浏览主页时间轴","slug":"用例-用户浏览主页时间轴","link":"#用例-用户浏览主页时间轴","children":[]},{"level":3,"title":"用例：用户浏览用户时间轴","slug":"用例-用户浏览用户时间轴","link":"#用例-用户浏览用户时间轴","children":[]},{"level":3,"title":"用例：用户搜索关键词","slug":"用例-用户搜索关键词","link":"#用例-用户搜索关键词","children":[]}]},{"level":2,"title":"第四步：架构扩展","slug":"第四步-架构扩展","link":"#第四步-架构扩展","children":[]},{"level":2,"title":"其它要点","slug":"其它要点","link":"#其它要点","children":[{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"异步与微服务","slug":"异步与微服务","link":"#异步与微服务","children":[]},{"level":3,"title":"通信","slug":"通信","link":"#通信","children":[]},{"level":3,"title":"安全性","slug":"安全性","link":"#安全性","children":[]},{"level":3,"title":"延迟数值","slug":"延迟数值","link":"#延迟数值","children":[]},{"level":3,"title":"持续探讨","slug":"持续探讨","link":"#持续探讨","children":[]}]}],"git":{"createdTime":1692004058000,"updatedTime":1692004058000,"contributors":[{"name":"taroTan1997","email":"tanzujie1997@stu.scau.edu.cn","commits":1}]},"readingTime":{"minutes":12.4,"words":3720},"filePathRelative":"code/system-design/system-design-primer/twitter.md","localizedDate":"2023年8月14日","excerpt":"<blockquote>\\n<ul>\\n<li>原文地址：<a href=\\"https://github.com/donnemartin/system-design-primer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github.com/donnemartin/system-design-primer</a></li>\\n<li>译文出自：<a href=\\"https://github.com/xitu/gold-miner\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">掘金翻译计划</a></li>\\n<li>译者：<a href=\\"https://github.com/XatMassacrE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">XatMassacrE</a>、<a href=\\"https://github.com/L9m\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">L9m</a>、<a href=\\"https://github.com/Airmacho\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Airmacho</a>、<a href=\\"https://github.com/xiaoyusilen\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">xiaoyusilen</a>、<a href=\\"https://github.com/jifaxu\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">jifaxu</a>、<a href=\\"https://github.com/sqrthree\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">根号三</a></li>\\n</ul>\\n</blockquote>","autoDesc":true}');export{e as data};
