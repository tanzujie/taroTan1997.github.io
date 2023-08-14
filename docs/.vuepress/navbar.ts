import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "home主页", icon: "home", link: "/" },
//  随笔
  {
    text: "个人随笔",
    icon: "note",
    link: "/note/",
    activeMatch: "^/note/",
  },
// 生活
  {
    text: "个人生活",
    icon: "flower",
    prefix: "/life/",
    // link: "/life/",
    // activeMatch: "^/life/",
    children: [
      {
        text: "读书笔记",
        icon: "read",
        link: "https://zxy.wsn640.top/reading/",
      },
      {
        text: "游戏人生",
        icon: "language",
        link: "game/",
        activeMatch: "^/life/game/$",
      },
      {
        text: "健康养生",
        icon: "template",
        link: "health/",
        activeMatch: "^/life/health/$",
      },
    ],

  },
//   学习笔记
  {
    text: "学习笔记",
    icon: "edit",
    children: [
      {
        text: "开发笔记",
        icon: "code",
        prefix: "/code/",
        children: [
          { text: "开发笔记", icon: "code", link: "", activeMatch: "^/code/$" },
          {
            text: "编程语言",
            icon: "language",
            link: "language/",
            activeMatch: "^/code/language/$",
          },
          {
            text: "前端开发",
            icon: "template",
            link: "frontend/",
            activeMatch: "^/code/frontend/$",
          },
          {
            text: "后端开发",
            icon: "module",
            link: "backend/",
            activeMatch: "^/code/backend/$",
          },
          {
            text: "系统设计",
            icon: "structure",
            link: "system-design/",
            activeMatch: "^/code/system-design/$",
          },
        ],
      },
      {
        text: "算法笔记",
        icon: "rank",
        prefix: "/code/",
        children: [
          {
            text: "算法笔记",
            icon: "rank",
            link: "algo/",
            activeMatch: "^/algo/$",
          },
        ],
      },
      {
        text: "部署笔记",
        icon: "rank",
        prefix: "/code/",
        children: [
          {
            text: "部署笔记",
            icon: "rank",
            link: "deploy/",
            activeMatch: "^/deploy/$",
          },
        ],
      },
    ],
  },
// 电脑技术
    {
        text: "电脑技术",
        icon: "computer",
        link: "/computer/",
        activeMatch: "^/computer/",

    },
]);
