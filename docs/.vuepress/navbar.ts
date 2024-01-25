import { navbar } from "vuepress-theme-hope";

export const allNavbar = navbar([
    "/home",
    { text: "面试宝典", icon: "overflow", link: "/10001" },
    { text: "文章中心", icon: "blog", link: "/article" },
    { text: "HarmonyOS", icon: "/icons/harmonyos/hm_16.svg", link: "/harmonyos" },
    {
        text: "网站相关",
        icon: "info",
        children: [
            { text: "关于本站", icon: "people", link: "/about-this" },
            { text: "网站历史", icon: "time", link: "/history" },
            { text: "BlogRes测试版本", icon: "api", link: "https://blogres.github.io/vtest/" },
        ],
    },
    {
        text: "友情链接",
        icon: "api",
        children: [
            { text: "VuePress Theme Hope 文档", icon: "api", link: "https://theme-hope.vuejs.press/zh/" },
            { text: "VuePress Theme Hope 源码", icon: "api", link: "https://github.com/vuepress-theme-hope/vuepress-theme-hope" },
            {
                text: "鸿蒙",
                icon: "info",
                children: [
                    { text: "开发|华为开发者联盟", icon: "api", link: "https://developer.huawei.com/consumer/cn/develop/" },
                    { text: "华为应用开发者学堂", icon: "api", link: "https://developer.huawei.com/consumer/cn/training/" },
                    { text: "HarmonyOS看板|华为开发者联盟", icon: "api", link: "https://developer.huawei.com/consumer/cn/console/overview" },
                    { text: "华为AppGallery Connect", icon: "api", link: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/" },
                    { text: "DevEco Studio下载", icon: "api", link: "https://developer.harmonyos.com/cn/develop/deveco-studio?ha_linker=eyJ0cyI6MTcwNDUyNjQwMzQ3MywiaWQiOiI0Mzg4NDViY2U3NDEyNzU4Mzc3NmI2YzYwNjU1NDA0NyJ9#download" },
                ],
            },
            {
                text: "其他",
                icon: "info",
                children: [
                    { text: "快速创建 SpringBoot 项目", icon: "api", link: "https://start.spring.io/" },
                    { text: "Spring Tools 4", icon: "api", link: "https://spring.io/tools/" },
                    { text: "JDK下载", icon: "api", link: "https://www.oracle.com/java/technologies/downloads/" },
                    { text: "IntelliJ IDEA下载", icon: "api", link: "https://www.jetbrains.com/zh-cn/idea/download/other.html" },
                    { text: "IntelliJ IDEA专业版VS社区版", icon: "api", link: "https://www.jetbrains.com/zh-cn/products/compare/?product=idea&product=idea-ce" },
                    { text: "Visual Studio Code下载", icon: "api", link: "https://code.visualstudio.com/Download" },
                    { text: "Maven3下载", icon: "api", link: "https://archive.apache.org/dist/maven/maven-3/" },
                    { text: "Tomcat9下载", icon: "api", link: "https://tomcat.apache.org/download-90.cgi" },
                    { text: "Eclipse下载", icon: "api", link: "https://www.eclipse.org/downloads/packages/release/" },
                    { text: "Eclipse汉化下载", icon: "api", link: "https://archive.eclipse.org/technology/babel/index.php" },
                    { text: "Java项目依赖查找Maven", icon: "api", link: "https://mvnrepository.com/search?q=mybatisplus" },
                    { text: "Java项目依赖查找JetBrains", icon: "api", link: "https://package-search.jetbrains.com/" },
                    { text: "Java项目依赖查找Aliyun", icon: "api", link: "https://developer.aliyun.com/mvn/search" },
                    { text: "SpringBoot Banner生成", icon: "api", link: "http://patorjk.com/software/taag/#p=display&f=Big&t=Type%20Something%20" },
                    { text: "how2j Java学习入门网站", icon: "api", link: "https://how2j.cn/" },
                    { text: "JavaGuide（Java学习+面试指南）", icon: "api", link: "https://javaguide.cn/" },
                    { text: "Web开发技术(火狐翻译而来)", icon: "api", link: "https://developer.mozilla.org/zh-CN/docs/Web" },
                    { text: "escapelife 运维开发博客", icon: "api", link: "https://www.escapelife.site/" },
                    { text: "markdownlint 配置（MD0xx）", icon: "api", link: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md" },
                    { text: "JetBrains 开源项目认证", icon: "api", link: "https://www.jetbrains.com/shop/eform/opensource" },
                    { text: "mysql下载", icon: "api", link: "https://downloads.mysql.com/archives/community/" },
                    { text: "npmmirror 镜像站", icon: "api", link: "https://npmmirror.com/" },
                    { text: "npmjs 镜像站", icon: "api", link: "https://www.npmjs.com/" },
                    { text: "yourkit", icon: "api", link: "https://www.yourkit.com/docs/" },
                    { text: "Cron 在线校验", icon: "api", link: "http://cron.qqe2.com/" },
                    { text: "Cron 在线表达式生成器", icon: "api", link: "http://cron.ciding.cc/" },
                    { text: "在线工具", icon: "api", link: "https://tool.lu/" },
                    { text: "站长工具 开发常用", icon: "api", link: "https://tool.jisuapi.com/" },
                    { text: "程序员盒子", icon: "api", link: "https://www.coderutil.com/" },
                    { text: "菜鸟工具", icon: "api", link: "https://c.runoob.com/" },
                    { text: "各种免费资源", icon: "api", link: "https://www.thosefree.com/" },
                    { text: "MSDN 纯净系统下载", icon: "api", link: "https://next.itellyou.cn/" },
                    { text: "Office Tool Plus", icon: "api", link: "https://otp.landian.vip/zh-cn/" },
                    { text: "WinPE 工具箱", icon: "api", link: "https://www.wepe.com.cn/" },
                    { text: "Motrix下载器（推荐）", icon: "api", link: "https://motrix.app/" },
                    { text: "BitComet下载器", icon: "api", link: "https://www.bitcomet.com/en" },
                    { text: "RGB颜色对照表", icon: "api", link: "https://tool.oschina.net/commons?type=3" },
                    { text: "RGB颜色值与十六进制颜色码转换工具", icon: "api", link: "https://www.sioe.cn/yingyong/yanse-rgb-16/" },
                    { text: "JSON格式化 转Java工具", icon: "api", link: "https://www.bejson.com/" },
                    { text: "在线时间、json换算", icon: "api", link: "http://www.jsons.cn/time/" },
                    { text: "在线PDF工具", icon: "api", link: "https://tools.pdf24.org/zh/" },
                    { text: "Vagrant+VMware", icon: "api", link: "https://app.vagrantup.com/boxes/search" },
                    { text: "操作系统国际排行", icon: "api", link: "https://distrowatch.com/dwres.php?resource=popularity" },
                    { text: "NATAPP内网穿透", icon: "api", link: "https://natapp.cn/" },
                    { text: "在线生成透明ICO图标", icon: "api", link: "https://www.ico51.cn/" },
                    { text: "在线图片压缩", icon: "api", link: "https://docsmall.com/image-compress" },
                    { text: "线修改图片工具", icon: "api", link: "https://www.gaitubao.com/" },
                    { text: "IP测速DNS查询", icon: "api", link: "https://www.itdog.cn/" },
                    { text: "网站DNS检测", icon: "api", link: "https://sites.ipaddress.com/github.com/" },
                    { text: "Snipaste截图工具", icon: "api", link: "https://zh.snipaste.com/" },
                    { text: "Windows使用苹果主题", icon: "api", link: "https://www.mydockfinder.com/" },
                    { text: "在线打字练习", icon: "api", link: "https://dazi.91xjr.com/" },
                ],
            },
        ],
    },
    { text: "Markdown测试", icon: "overflow", link: "/markdown" },
]);
