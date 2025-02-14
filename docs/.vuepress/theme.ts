import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  // 主题选项：https://theme-hope.vuejs.press/zh/config/theme/layout.html
  hostname: "https://zxy.wsn640.top",


  author: {
    name: "孤悲",
    url: "https://zxy.wsn640.top",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",

  // 是否全局启用路径导航
  breadcrumb: false,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: true,

  // 深色模式配置
  darkmode: "switch",
  // 全屏按钮
  fullscreen: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "taroTan1997/taroTan1997.github.io",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 文档存放路径
  docsDir: "docs",

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,
  // 侧边栏排序规则
  // sidebarSorter: ['readme', 'order', 'title'],

  // footer: "默认页脚",
  footer: '本站原创内容基于 <a class="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 共享, 转载请注明出处。',
  displayFooter: true,

  // 页面布局 Frontmatter 配置：https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#pageinfo
  //pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime", "PageView"],

  // 主题功能选项：https://theme-hope.vuejs.press/zh/config/theme/feature.html
  blog: {
    //articleInfo: ["Date", "PageView", "Category", "Tag", "ReadingTime"],
    articleInfo: ["Date", "Category", "Tag", "ReadingTime", "PageView"],
    name: "孤悲",
    avatar: "/avatar_self.webp",
    description: "每天都是新的一天",
    intro: "/intro.html",
    roundAvatar: true,
  },

  // 隐藏打印按钮
  // print: false,

  plugins: {
    blog: true,

    // 评论配置（仅做样例，记得更换）
    comment: {
      provider: "Waline",
      serverURL: "https://comment-tau-five.vercel.app",
      reaction: [
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44d.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44f.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f60e.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f602.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f635-200d-1f4ab.png",
      ],
      // 部署 Waline：https://waline.js.org/guide/get-started.html
      // pageview: true, // 浏览量统计
      locales: {
        "/": {
          // 表情互动提示文字
          reactionTitle: "已到达文章底部，欢迎留言、表情互动~",
          reaction0: "赞一个",
          reaction1: "支持下",
          reaction2: "有点酷",
          reaction3: "啥玩意",
          reaction4: "看不懂",
          // Waline 等级标签
          admin: "站长",
          level0: "锻体",
          level1: "炼气",
          level2: "筑基",
          level3: "金丹",
          level4: "元婴",
          level5: "化神",
        },
      },

      // Giscus 备用配置
      /*
      provider: "Giscus",
      repo: "rockbenben/LearnData",
      repoId: "R_kgDOHdfk6Q",
      category: "Comments",
      categoryId: "DIC_kwDOHdfk6c4CQYNn",
      */
    },

    // 组件库
    components: {
      components: ["Badge", "BiliBili", "VideoPlayer", "YouTube"],
    },

    // 禁用不需要的配置
    mdEnhance: {
      align: true,
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      // chart: true,
      // codetabs: true, // 代码块分组
      container: true,
      // demo: true, //代码演示
      // echarts: true,
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      // imgMark: true,
      imgSize: true,
      figure: true,
      include: true, //导入文件
      // katex: true,
      mark: true,
      // mermaid: true,
      footnote: true,
      tasklist: true,
      sub: true, // 上下角标
      sup: true,
      // tabs: true, // 选项卡
      // vpre: true,
      // vuePlayground: true, // Vue 交互演示
    },

    // rss 属性
    feed: {
      rss: true,
      count: 10,
    },
  },

  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,



});
