# Divit Finance 企业官网模板（静态站点）

一个基于 Tailwind CSS + 原生 JavaScript 的专业另类资产管理公司展示网站模板（灵感参考 Blackstone 等一线资管官网）。

## 🎯 概览

- 11 个页面：首页 + 10 个子页面（内容已填充）
- 响应式设计：适配桌面与移动端
- 增强交互：暗色模式、滚动动画、Hero 轮播、增强悬停、返回顶部按钮
- 技术栈：Tailwind（CDN）、Vanilla JS、Google Fonts（Inter）
- 品牌：Divit Finance（部分页面 `<title>` 仍有 “ABC Management” 残留，见“品牌统一清单”）

## 📄 页面清单

1. `index.html` — 首页（Hero 轮播 + 全部增强功能）
2. `pages/about-us.html` — 关于我们（已启用暗色/动画）
3. `pages/leadership.html` — 领导团队（6 位高管）
4. `pages/values.html` — 价值观
5. `pages/investment-solutions.html` — 投资解决方案
6. `pages/portfolio-management.html` — 投资组合管理
7. `pages/advisory-services.html` — 咨询服务
8. `pages/news.html` — 新闻
9. `pages/research.html` — 研究
10. `pages/market-commentary.html` — 市场评论
11. `pages/contact.html` — 联系我们

> 现状：除首页与 About Us 外，其余子页面默认仅加载基础样式（未引入增强 CSS/JS）。

## 🚀 快速开始

- 直接用浏览器打开 `index.html` 预览；或
- 在项目根目录启动本地静态服务器：

```bash
python3 -m http.server 5173
# 浏览器访问 http://localhost:5173
```

## 🧭 使用说明（关键交互）

- 暗色模式：导航栏月亮/太阳按钮切换，偏好保存在 `localStorage`
- 轮播图：自动播放（5s），支持箭头与圆点导航
- 滚动动画：元素进入视窗淡入（可用 `fade-in-up`/`fade-in-left` 等类）
- 返回顶部：页面右下角按钮在滚动后显示

## ⚙️ 为子页面启用增强功能

首页与 `pages/about-us.html` 已启用增强功能。若要在其他页面启用，按以下步骤：

1) 在 `<head>` 中启用暗色模式并引入增强样式（子页面路径为 `../assets`）：

```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: { extend: { colors: { primary: { 50: '#f8f9fa', 100: '#e9ecef', 900: '#1a1a1a' } } } }
  }
</script>
<link rel="stylesheet" href="../assets/css/enhanced-styles.css" />
```

2) 在导航中（建议在 `Contact` 后、`Get Started` 前）加入暗色切换按钮：

```html
<button id="darkModeToggle" aria-label="Toggle dark mode" class="text-gray-900">
  <svg id="moonIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  <svg id="sunIcon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
</button>
```

3) 在 `</body>` 前引入交互脚本：

```html
<script src="../assets/js/animations.js"></script>
```

4) 为需要动画的元素添加类：`fade-in-up` / `fade-in` / `fade-in-left` / `fade-in-right`

> 路径提示：首页使用 `assets/`，子页面使用 `../assets/`。

## 🧩 目录结构

```
divitfinance_web/
├── index.html
├── README.md
├── pages/
│   ├── about-us.html
│   ├── leadership.html
│   ├── values.html
│   ├── investment-solutions.html
│   ├── portfolio-management.html
│   ├── advisory-services.html
│   ├── news.html
│   ├── research.html
│   ├── market-commentary.html
│   └── contact.html
└── assets/
    ├── css/
    │   └── enhanced-styles.css
    └── js/
        └── animations.js
```

## 🏢 公司与策略（模板文案）

- 定位：另类资产管理（Private Credit、Commercial Real Estate、Infrastructure）
- 目标客户：高净值与机构投资者
- 规模：$12B+ AUM；成立于 2010

## 🎨 自定义与品牌统一

1) 自定义配色：编辑 `assets/css/enhanced-styles.css` 中的 CSS 变量（同时包含暗色变量）。
2) 品牌统一清单：
   - 将所有页面的 `<title>` 更新为 “… - Divit Finance”（部分页面仍为 “ABC Management”）。
   - 如需替换品牌，全文搜索 “Divit Finance” 与 “ABC Management” 统一替换。
   - 确认导航与页脚中的公司名一致。

## ⚡ 性能与发布建议

- 图片本地化与压缩，添加 `loading="lazy"`
- 生产建议使用构建版 Tailwind（Purge 未用样式）替代 CDN
- 可部署至任意静态主机（GitHub Pages、Vercel、Netlify 等）

## 🛠 技术栈

- Tailwind CSS（CDN）
- Vanilla JavaScript（无框架依赖）
- Google Fonts（Inter）

## 🔎 已知事项

- 子页面默认未引入增强 CSS/JS（按“为子页面启用增强功能”操作）
- 个别页面 `<title>` 仍含 “ABC Management” 文案

---

版本：3.1  
最后更新：2025-10  
许可：教育和展示用途  
公司（模板）：Divit Finance — Alternative Asset Management
