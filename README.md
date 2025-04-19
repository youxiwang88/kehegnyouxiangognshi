# 科恒3D打印有限公司网站

这是科恒3D打印有限公司的官方网站源码，使用HTML、CSS和JavaScript构建的现代响应式企业网站。

## 网站结构

```
├─ index.html             # 首页
├─ products.html          # 产品服务页面
├─ advantages.html        # 技术优势页面 (待开发)
├─ cases.html             # 成功案例页面 (待开发)
│  ├─ consumer-electronics.html    # 消费电子案例
│  ├─ automotive.html              # 汽车制造案例
│  └─ medical.html                 # 医疗器械案例
├─ about.html             # 关于我们页面 (待开发)
│  ├─ qualifications.html          # 企业资质
│  └─ smart-factory.html           # 智能工厂
├─ support.html           # 技术支持页面 (待开发)
│  ├─ file-submission.html         # 文件提交规范
│  └─ quote.html                   # 在线报价系统
├─ news.html              # 新闻动态页面 (待开发)
├─ contact.html           # 联系我们页面
├─ css/                   # CSS样式文件夹
│  └─ styles.css                   # 主样式文件
├─ js/                    # JavaScript文件夹
│  └─ main.js                      # 主JavaScript文件
└─ images/                # 图片资源文件夹
   ├─ 3d-printing.jpg              # 工业级3D打印图片
   ├─ cnc-machining.jpg            # CNC精密加工图片
   ├─ mold-development.jpg         # 模具开发图片
   ├─ automotive.jpg               # 汽车零部件图片
   ├─ medical.jpg                  # 医疗定制图片
   └─ electronics.jpg              # 消费电子图片
```

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS (通过CDN引入)
- Font Awesome (图标库)

## 功能特点

1. **响应式设计**：适配各种设备尺寸，从手机到桌面显示器
2. **现代化UI**：使用Tailwind CSS构建的直观美观界面
3. **交互元素**：
   - 动态数字统计
   - 下拉导航菜单
   - 材料选择器
   - 联系表单
4. **性能优化**：
   - 延迟加载非关键资源
   - 优化图像
   - 最小化CSS和JavaScript

## 开发说明

### 本地开发

1. 克隆仓库:
```
git clone https://github.com/yourusername/keheng3d-website.git
cd keheng3d-website
```

2. 启动本地服务器 (可以使用任意HTTP服务器，例如Python内置的):
```
python -m http.server
```

3. 浏览器访问:
```
http://localhost:8000
```

### 部署

网站可以部署到任何静态网站托管服务，如：
- GitHub Pages
- Netlify
- Vercel
- 传统虚拟主机

## 待完成功能

- [ ] 完成所有页面的开发
- [ ] 添加在线报价系统
- [ ] 添加3D产品展示组件
- [ ] 集成地图API
- [ ] 实现多语言支持 (中文/英文)

## 维护指南

### 更新内容

1. **新闻更新**：修改`news.html`文件，按照现有格式添加新的新闻条目。
2. **产品更新**：修改`products.html`或相应的子页面。
3. **案例更新**：在`cases`目录下的相应行业文件中添加新案例。

### 图片优化

添加新图片时，请确保:
1. 图片已经过压缩优化
2. 使用适当的格式 (JPEG用于照片，PNG用于有透明度的图片)
3. 提供响应式图片变体 (不同尺寸)

## 联系方式

如果有任何关于网站开发的问题，请联系:
- 邮箱：webmaster@keheng3d.com

---

© 2025 科恒3D打印有限公司。保留所有权利。 