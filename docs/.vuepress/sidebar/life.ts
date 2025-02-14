import { arraySidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export const life = arraySidebar([
  "",
  {
    text: "游戏人生",
    link: "game/",
    prefix: "game/",
    children: "structure",
  },
  {
    text: "养生健康",
    link: "health/",
    prefix: "health/",
    children: "structure",
  },
  {
    text: "作品清单",
    // link: "health/",
    // prefix: "health/",
    children: ["comic", "movie", "music"],
  },
]);
