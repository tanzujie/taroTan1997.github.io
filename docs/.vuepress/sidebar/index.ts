import { sidebar } from "vuepress-theme-hope";
import { code } from "./code";
import { reading } from "./reading";
import { life } from "./life";
import { computer } from "./computer";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar({
  "/code/": code,
  "/code/language/": "structure",
  "/code/system-design/": "structure",
  "/note/": "structure",
  "/life/": life,
  "/algo/": "structure",
  "/deploy/": "structure",
  "/computer/": computer,
  
});
