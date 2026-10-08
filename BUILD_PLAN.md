# 构建理念与执行计划

供新项目的 agent 接续工作。目标是可长期维护的独立 Obsidian 知识库和自动更新的网站，而不是为当前几篇笔记制作一次性网页。

## 最新执行状态（2026-10-08）

### 阅读界面修订（2026-10-08）

- 根据用户对已上线页面的反馈，首页将编号阅读顺序改为按逻辑分组的笔记导览，每篇一句说明；仍使用同一份 `index.md` 和原生双链。
- 正文宽度上限为 45rem（默认字号下 720px），隐藏侧栏不会拉宽正文；标题使用与正文一致的系统字体。
- 左侧保留原生 explorer，改为单行省略、悬停显示完整标题、当前页背景高亮和低调字号。文件夹点击折叠，不按现有文件名硬编码导航。
- 禁用 graph 和原先仅透明隐藏的 reader-mode；使用一个通用 Quartz 布局组件提供左右侧栏独立显示/隐藏，并保留选择。小屏保留原生笔记菜单，右侧目录为可关闭抽屉。
- 修正组件 registry 的资源收集：复用已按配置实例化的组件，避免另建无用的默认实例并重复绑定菜单点击事件。手机菜单与网站目录的折叠已实际检查。
- 本地兼容性检查发现固定版本的 note embed renderer 把重复嵌入误认为循环，且标题嵌入未使用已解析的锚点。已在现有 renderer 做小范围修正，保留循环保护；`npm run verify:links` 用临时原生 Markdown 检查别名、标题与块链接、重复和嵌套嵌入、数学及相对 URL，检查后自动清理。部署工作流已加入此检查。
- 用户查看 preview 后已明确授权发布本版（2026-10-08），可将这些网站修改提交并推送到现有仓库的 `main`，由已有 GitHub Pages 工作流发布；此授权取代此前仅本地建设、用户手动上传的安排。线上发布结果需以本次 Actions 部署和实际页面验证为准。用户原有 `.obsidian/community-plugins.json` 修改保留，不纳入此次网站提交。

### 初次构建记录

以下状态取代本文迁移阶段的“尚未安装网站”记录：

- 用户已在 Obsidian 验证此独立 vault；本轮保留其已有本地设置修改，未改动原九篇物理笔记和三个附件。
- 当前目录实际为 `scattering-theory-for-ultracold`；远程已由用户建立并连接到 `https://github.com/SHAOZHEN545/scattering-theory-for-ultracold.git`，分支为 `main`。未改名。
- 已安装并固定 Quartz **v5.0.0**（官方 release commit `ab346fa66a895e12d63a308e70ce330ba795822a`）。源码位于 `quartz/`，保留 MIT 许可证；npm 和 Quartz 插件分别由两个 lockfile 固定。Node.js 使用 24。
- 网站直接读取 `Scattering theory notes/`。在同一目录新增 `index.md` 作为网站首页及 Obsidian 阅读入口；没有复制或转换第二份正文。
- 已配置 MathJax、原生双链、折叠 callout、蓝色解释框、红色审阅框、章节导航、目录、全文搜索、关系图、悬停预览及深浅色模式。`note-properties` 插件负责解析标题和 frontmatter，必须保持启用；仅隐藏其属性展示。
- `quartz/styles/custom.scss` 是通用 figure 和阅读样式适配：保留数值宽度、图片独立对齐、元数据控制的图注对齐、小号灰色图注以及窄屏长公式横向滚动。
- 修复 Quartz 插件安装器对 Windows 空格路径的处理和安装失败时的退出状态。另由 `scripts/adapt-quartz-plugins.mjs` 对固定版本的 explorer、search、graph 内嵌脚本做 URL 适配：使用 Quartz 自带的 `getFullSlug`、`resolveRelative` 和共享 `fetchData`，避免跳到域名根目录。没有新增 Markdown 解析器或图片组件。`npm run plugins` 自动应用该适配，重复执行已验证。
- `.github/workflows/deploy.yml` 在 `main` 的 push 或手动触发时安装依赖、安装固定插件、构建、校验并部署至 GitHub Pages；插件编译产物有缓存。仅成功构建和校验后进入部署。
- `npm run plugins`、`npm run build`、`npm run verify` 全部通过。最终 10 篇源 Markdown 生成 12 个 HTML 页面；363 个本地链接、章节锚点和资源引用全部通过，未发现 MathJax 错误。
- 浏览器实际验证了仓库子路径、搜索结果跳转、章节目录跳转、第 0 章 24 个初始折叠框及三张图、第 5 章 8 个红色审阅框、第 6 章长公式；390px 宽度下页面无横向溢出，10 个长显示公式可在公式框内滚动。
- 临时新笔记验证了左、右、居中图片、独立的图注对齐、14.4px 灰色图注、图注内公式，以及新建子文件夹中的图片和搜索跳转。临时示例已移除。
- 根目录维护资料、`.obsidian/`、网站源码均不作为网站正文发布。README 已更新为首次发布和日常维护说明。

**尚需用户完成首次线上发布：** 本轮没有提交或推送到远程，也没有操作用户 GitHub 账户的 Pages 设置。按原先手动上传安排，用户提交并推送本轮改动到 `main`，然后在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。到 Actions 等待 `Publish scattering notes` 的 build 和 deploy 成功；如需，手动 Run workflow。目标地址为 `https://shaozhen545.github.io/scattering-theory-for-ultracold/`。实际远程部署和一次真实 push 更新尚未验证，不能把本地构建通过说成网站已经上线。

## 目标与命名

内容定位：超冷原子与分子物理实验所需的散射理论，包括基本概念、渐近动力学、多通道表示、振幅、截面、分波、低能散射和 Feshbach 共振。

迁移阶段文件夹名曾记为 `scattering-theory-for-ultracold-experiments`；当前实际名为 `scattering-theory-for-ultracold`。用户指出早先名字没有明确体现原子分子物理或 AMO。随后建议 GitHub 名为 **`ultracold-amo-scattering-notes`**，但该建议未被明确选定或应用。不要把命名建议当作已完成事项。

建议标题：**Scattering Theory for Ultracold Atomic and Molecular Physics**。
建议简介：Scattering theory notes for experiments with ultracold atoms and molecules.

## 已确认的构建理念

- 尽量减少编辑和发布的 friction。日常在本地 Obsidian 中修改、新增笔记与图片。
- 优先使用 Obsidian 原生语法、Quartz 现成能力和成熟的发布流程，少写自定义解析器、组件或脚本。
- Markdown 和图片是唯一内容来源，不长期维护另一份网站专用正文，不要求每次手动转换格式。
- 普通解释使用原生 `note`、`info` 蓝色 callout；个人审阅想法、疑问和遗留问题使用原生 `danger` 红色 callout。
- 网页适配对以后新增内容同样生效，不按具体文件名、章节或现有图片硬编码。
- 保留用户的图片排版约定：尺寸、图片对齐、图注对齐，以及低调的小号灰色图注。
- 不要求逐像素复制整个 Obsidian 界面，但关键语义、交互和阅读效果要保留；公式可读，折叠推导可展开。
- 更新流程：本地编辑 → Git 提交并推送 → 自动构建 → 自动部署。更新以成功推送和部署为界，不是未经提交的本地实时同步。
- 用户说“明天做样页”是语音转录错误，已经纠正为现在继续推进，不要把工作推迟到第二天。

## 当前已完成

独立知识库已复制到当前文件夹，位于原 thesis 仓库的同一级。原仓库仍保留散射笔记；两者没有双向同步。

```text
.
├── .obsidian/
│   ├── app.json / appearance.json / community-plugins.json
│   ├── core-plugins.json / hotkeys.json
│   ├── plugins/
│   │   ├── callout-integrator/
│   │   ├── math-in-callout/
│   │   └── obsidian-git/
│   └── snippets/image-custom.css
├── Scattering theory notes/
│   ├── 9 篇 Markdown 笔记
│   └── Pictures/（2 个 SVG、1 个 PNG）
├── .gitignore
├── AGENTS.md
├── README.md
└── BUILD_PLAN.md
```

9 篇笔记包括 Scattering Theory 0–6、Scattering Theory 0 Supplement 和 Feshbach Resonance I。

已完成检查与配置：

- 9 篇笔记和 3 个附件与迁移时的源文件逐一校验一致。
- 15 处双链和图片嵌入均能在独立目录中找到目标；章节锚点还需网站端验证。
- 11 处 `mythoughts` 已替换为 `danger`；只改类型，标题和正文保留。
- 已迁移并启用三个社区插件和一个实际存在的 CSS snippet。
- 新笔记默认存入 `Scattering theory notes/`，新附件默认存入其 `Pictures/`。
- 已初始化独立 Git，初始分支为 `main`。在本次移交前，没有执行提交或连接远程；开始工作时重新检查，以防用户已手动上传。
- 原 vault 的 Obsidian Git `data.json` 没有迁移，避免继承旧仓库设置。
- `.gitignore` 已忽略工作区状态、Git 插件本地配置、常见系统文件及未来网站构建产物。

上述为迁移阶段记录。Quartz 安装、配置、本地构建和浏览器检查现已完成，GitHub Actions 部署配置已就绪；首次真实线上部署待用户手动上传与启用 Pages，见本文最新执行状态。

## 插件与 CSS 的取舍

| 项目 | 当前处理与原因 |
| --- | --- |
| Callout Integrator | 保留；方便编辑长段 callout，并迁移了原快捷键 |
| Better Math in Callouts & Blockquotes | 保留；改善本地 Live Preview 数学显示 |
| Obsidian Git | 保留；新仓库的 Git 工作流需要单独配置 |
| Callout Manager | 未迁移；粉色小鸟 `mythoughts` 已改为原生 `danger` |
| Supercharged Links | 未迁移；原规则只装饰 `References` 路径链接，当前集合未用到 |
| `image-custom.css` | 原样迁移并启用，网页端需要通用适配 |
| `citation.css`、`supercharged-links-gen.css` | 未迁移；当前集合没有对应目标 |
| `math-scroll`、`custom-callout`、`bold-math`、`bold-script` | 原配置列为启用，但原文件夹缺少实际文件；不要按名称猜测实现或声称已迁移 |

这些插件服务于本地编辑，不意味着网站应运行 Obsidian 插件。网站优先采用 Quartz 对应的现成能力。

## 图片约定：重点保留

先阅读 `.obsidian/snippets/image-custom.css`。用户强调图片排版由 `figure` callout 和 CSS snippet 配合完成，不是仅靠一行图片嵌入语法。

```markdown
> [!figure]
> ![[Classical analog.svg|center|600]]
> 这里是小号灰色图注，可以包含行内公式 $E=\hbar\omega$。
```

现有 CSS 的行为：

- `figure` 容器透明、无边框、隐藏标题栏。
- 图片与图注上下排列。
- 图注字号约为正文的 0.9 倍，使用 muted 颜色。
- 图片别名中的 `center`、`left`、`right` 控制图片对齐，数字控制尺寸。
- callout 元数据控制图注对齐，例如 `[!figure|center]`。
- 处理内容溢出，避免图注中的公式引发不必要的竖向滚动条。

Quartz 的 HTML 不一定与 Obsidian 相同。先检查构建后如何保留尺寸、别名和元数据，优先用少量统一 CSS 适配选择器和变量。只有现成能力确实丢失必要信息时，才考虑最小的通用转换，不要先写新的图片组件或解析器。

## 技术路线与目录原则

选用 **Quartz + GitHub Pages + GitHub Actions**。先制作本地可浏览的试样，再配置发布。

实施时核对当前官方文档、支持的版本、数学引擎选项与内容目录配置，固定依赖和 lockfile。此前调查的官方文档支持 Obsidian 双链、callout、折叠和数学；不要照抄旧版本命令。

保留根目录作为可直接打开的 Obsidian vault，并保留当前笔记目录。优先配置 Quartz 从这份目录读取。若当前版本要求特定结构，采用改动最少且受支持的布局，说明 Obsidian 配置的影响，不引入需要手工同步的第二份正文。

网站源码与构建产物分开。使用明确内容目录或过滤规则，避免把 `.obsidian`、插件脚本、本地 Git 状态及本计划等维护资料自动公开成笔记。

数学优先用 MathJax 制作样页比较，因为本地 Obsidian 使用 MathJax；这是减少差异的初始选择，不保证字号和布局完全一致。若考虑 KaTeX，基于兼容性和实际对比决定。

网站提供章节导航和目录。保留 `danger` 审阅框及正文，不擅自删除或润色个人疑问。

## 下一步执行顺序

1. 在此独立文件夹工作，读 `AGENTS.md`、本文件和图片 CSS，检查现有文件及 Git 状态。后续用户可能已经上传或修改文件，不要一直假设初始状态。
2. 使用当前受支持的 Quartz 安装方式建立最小网站骨架，保持唯一 Markdown 来源和少量配置。
3. 让整个内容目录参与构建，重点视觉检查 Scattering Theory 0、5、6：0 检查折叠推导、callout 内公式、图片和图注；5 检查审阅框；6 检查长篇数学、长公式和阅读布局。
4. 验证双链、别名、章节锚点、图片尺寸与对齐、图注、桌面和窄屏公式溢出，修正通用适配。
5. 新增临时普通笔记和 figure 示例，验证新增内容自动得到相同效果；移除临时示例，保留通用配置。
6. 向用户提供本地预览，说明实际完成情况，收集外观反馈。
7. 用户明确表示会手动上传 GitHub，尊重这一安排，不替他创建或上传远程仓库。远程地址、最终仓库名和 Pages 设置明确后，配置 push 触发的构建部署。
8. 验证一次新提交确实更新网站，记录日常维护步骤及如何查看部署结果。

## 验收标准

- 根目录仍能在 Obsidian 打开，必要插件、快捷键和图片 snippet 可用。
- 网站构建成功，所有笔记和图片能浏览。
- 双链与章节锚点正确，折叠框可展开，审阅框和普通解释框明显区分。
- 行内和块公式，包括 callout 和图注里的公式，正确显示且不被裁切。
- 图片尺寸和左右居中对齐有效，图注保持小号灰色，布局稳定。
- 新增笔记和图片自动使用同样规则，不需要逐页定制。
- 部署配置就绪后，push 自动构建发布；失败原因可以在 Actions 中查看。
- 没有长期维护的第二份正文，也没有引入无必要的插件或渲染框架。

## 编辑约束

- Markdown 文件和 Markdown 代码块：行内数学使用 `$...$`，块数学使用 `$$...$$`，不得使用反斜杠括号或方括号数学定界符。
- 保留 Obsidian 双链、原生 callout 和通用 figure 写法。
- 未经要求不改写物理内容，不清理审阅问题，不扩大为内容重写。
- 原 thesis 仓库与这里没有同步关系，后续发布内容在这里编辑。
- 推进已明确的本地建设；只有依赖未知远程地址、账户等信息时再索取缺失信息。

## 官方参考

- [Quartz：Obsidian compatibility](https://quartz.jzhao.xyz/features/obsidian-compatibility)
- [Quartz：callouts](https://quartz.jzhao.xyz/features/callouts)
- [Quartz：LaTeX configuration](https://quartz.jzhao.xyz/plugins/latex)
- [Quartz：hosting / GitHub Pages](https://quartz.jzhao.xyz/hosting)
- [Obsidian：callouts](https://obsidian.md/help/callouts)

