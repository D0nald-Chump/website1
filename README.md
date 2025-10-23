# ABC Management Website

一个基于 Tailwind CSS 的专业投资管理公司展示网站，灵感来自 Blackstone 的设计风格。

## 🎨 特性

### ✅ 已实现
- **11 个完整页面**：首页 + 10 个子页面
- **响应式设计**：完美适配桌面和移动设备
- **统一设计语言**：所有页面保持一致的视觉风格
- **暗色模式** ⭐ NEW
- **页面滚动动画** ⭐ NEW
- **Hero 轮播图** ⭐ NEW
- **增强悬停效果** ⭐ NEW
- **返回顶部按钮** ⭐ NEW

### 📄 页面列表
1. `index.html` - 首页（包含轮播图）
2. `about-us.html` - 关于我们
3. `leadership.html` - 领导团队
4. `values.html` - 价值观
5. `investment-solutions.html` - 投资解决方案
6. `portfolio-management.html` - 投资组合管理
7. `advisory-services.html` - 咨询服务
8. `news.html` - 新闻
9. `research.html` - 研究
10. `market-commentary.html` - 市场评论
11. `contact.html` - 联系我们

## 🚀 如何使用

### 1. 打开网站
直接在浏览器中打开 `index.html` 即可查看网站。

### 2. 测试功能
- **轮播图**：首页 Hero 区域会自动切换（5秒），可以点击左右箭头或底部圆点手动切换
- **暗色模式**：点击导航栏右侧的月亮/太阳图标切换
- **滚动动画**：向下滚动页面查看元素淡入效果
- **悬停效果**：鼠标悬停在卡片、按钮上查看交互效果
- **返回顶部**：滚动到页面底部，右下角会出现返回顶部按钮

### 3. 替换内容
搜索 `[Placeholder:` 找到所有占位符内容并替换。

## 📁 文件结构

```
abc-management-website/
├── index.html                    # 首页（已添加增强功能）
├── about-us.html                 # 子页面
├── leadership.html
├── values.html
├── investment-solutions.html
├── portfolio-management.html
├── advisory-services.html
├── news.html
├── research.html
├── market-commentary.html
├── contact.html
├── animations.js                 # 所有交互功能
├── enhanced-styles.css           # 暗色模式和动画样式
└── README.md                     # 本文件
```

## ⚙️ 为其他页面添加增强功能

首页（`index.html`）已经完整集成了所有增强功能。要为其他页面添加相同的功能，需要进行以下更新：

### 步骤 1: 更新 head 部分

在每个页面的 `<script>` 标签中添加 `darkMode: 'class'`：

```html
<script>
    tailwind.config = {
        darkMode: 'class',  <!-- 添加这一行 -->
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f8f9fa',
                        100: '#e9ecef',
                        900: '#1a1a1a',
                    }
                }
            }
        }
    }
</script>
<link rel="stylesheet" href="enhanced-styles.css">  <!-- 添加这一行 -->
```

### 步骤 2: 添加暗色模式切换按钮

在导航栏中的 "Contact" 链接后、"Get Started" 按钮前添加：

```html
<!-- Dark Mode Toggle -->
<button id="darkModeToggle" aria-label="Toggle dark mode" class="text-gray-900">
    <svg id="moonIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
    </svg>
    <svg id="sunIcon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
</button>
```

### 步骤 3: 引入 JavaScript 文件

在 `</body>` 标签前替换或添加：

```html
<!-- Enhanced Animations & Interactions -->
<script src="animations.js"></script>
```

### 步骤 4: 添加滚动动画类（可选）

为需要动画效果的元素添加类名：
- `fade-in-up` - 从下方淡入
- `fade-in` - 直接淡入
- `fade-in-left` - 从左侧淡入
- `fade-in-right` - 从右侧淡入

示例：
```html
<div class="fade-in-up">
    <!-- 内容 -->
</div>
```

## 🎨 自定义配色

### 修改主题色
编辑 `enhanced-styles.css` 中的 CSS 变量：

```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #111827;
    /* 修改这些值... */
}

.dark {
    --bg-primary: #111827;
    --text-primary: #f9fafb;
    /* 修改暗色模式的值... */
}
```

## 🔧 技术栈

- **Tailwind CSS** - 通过 CDN 加载
- **Vanilla JavaScript** - 无框架依赖
- **Inter Font** - Google Fonts
- **Unsplash Images** - 占位符图片

## 📝 占位符说明

所有需要替换的内容都使用 `[Placeholder: ...]` 格式标注，便于搜索和替换：

- `[Placeholder: Company introduction...]` - 公司介绍文字
- `[Name]` - 人名
- `[Title]` - 职位
- `$XXB`、`XX+` - 统计数字
- 图片 URL - 替换为自己的图片

## ⚡ 性能提示

1. **图片优化**：将 Unsplash 图片替换为优化后的本地图片
2. **Tailwind 优化**：生产环境建议使用构建版本而非 CDN
3. **懒加载**：为图片添加 `loading="lazy"` 属性

## 🎯 适用场景

这个网站模板适合：
- ✅ 投资管理公司
- ✅ 金融咨询公司
- ✅ 资产管理公司
- ✅ 私募股权公司
- ✅ 其他需要专业、简洁展示的企业

## 📞 支持

如有问题或需要帮助，可以：
1. 检查浏览器控制台是否有错误
2. 确认所有文件都在同一目录
3. 使用现代浏览器（Chrome、Firefox、Safari、Edge）

---

**版本**: 2.0
**最后更新**: 2025年10月
**许可**: 教育和展示目的
