(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{371:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("以一个简单的例子介绍一下小程序反编译的流程\n")]),s._v(" "),n("h2",{attrs:{id:"实验环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[s._v("#")]),s._v(" 实验环境")]),s._v(" "),n("ul",[n("li",[s._v("操作系统:MacOS10.13.6")]),s._v(" "),n("li",[s._v("node:v10.8.0")]),s._v(" "),n("li",[s._v("微信开发者工具:Stable v1.02.1910120")])]),s._v(" "),n("h2",{attrs:{id:"前置准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置准备"}},[s._v("#")]),s._v(" 前置准备")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("需要安装pc端模拟器工具可以选择网易MuMu,或者其它模拟器")])]),s._v(" "),n("li",[n("p",[s._v("模拟器设置中配置共享文件夹")])]),s._v(" "),n("li",[n("p",[s._v("下载反编译工具")]),s._v(" "),n("ol",[n("li",[s._v("wxappUnpacker 原作(已无)\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/qwerty472123/wxappUnpacker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/qwerty472123/wxappUnpacker"),n("OutboundLink")],1)])])]),s._v(" "),n("li",[s._v("wxappUnpacker 修复版\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/xuedingmiaojun/wxappUnpacker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/xuedingmiaojun/wxappUnpacker"),n("OutboundLink")],1)])])])])])]),s._v(" "),n("h2",{attrs:{id:"模拟器内软件安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟器内软件安装"}},[s._v("#")]),s._v(" 模拟器内软件安装")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/maxzhang666/assets@master/img/2022/01/26/Gvgbmp.png",alt:"Gvgbmp"}})]),s._v(" "),n("p",[s._v("需要安装以下两个软件")]),s._v(" "),n("ul",[n("li",[s._v("RE文件管理器(查看小程序压缩包)")]),s._v(" "),n("li",[s._v("微信(使用微信打开小程序以下载小程序包)")])]),s._v(" "),n("h2",{attrs:{id:"获取小程序包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取小程序包"}},[s._v("#")]),s._v(" 获取小程序包")]),s._v(" "),n("ol",[n("li",[s._v('使用自己手机上的微信打开"中银E路通"小程序,可以添加到"我的小程序"')]),s._v(" "),n("li",[s._v("打开模拟器的微信并登录")]),s._v(" "),n("li",[s._v('在模拟器微信的下拉小程序最近使用历史中打开"中银E路通",如果历史记录中没有就在我的小程序中找一找')]),s._v(" "),n("li",[s._v("打开小程序等待加载之后就可以去找源码包了")]),s._v(" "),n("li",[s._v("打开RE文件管理器,进入到以下路径查找源码包(可以根据下载时间区分出你想要的源码包)")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/data/data/com.tencent.mm/MicroMsg/4c8188dbf07eec893d0ac90974657aeb/appbrand/pkg\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("拷贝小程序包至模拟器共享文件夹,为了方便解包重命名为zyel\n"),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/maxzhang666/assets@master/img/2022/01/26/Hl3c5A.png",alt:"Hl3c5A"}})])]),s._v(" "),n("p",[s._v("获取完毕。")]),s._v(" "),n("h2",{attrs:{id:"开始解包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始解包"}},[s._v("#")]),s._v(" 开始解包")]),s._v(" "),n("h3",{attrs:{id:"解包流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解包流程"}},[s._v("#")]),s._v(" 解包流程")]),s._v(" "),n("ol",[n("li",[s._v("进入克隆下来的反编译工具根目录\n如果没有安装过npm包就先执行安装")])]),s._v(" "),n("p",[n("code",[s._v("npm install")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("解包")])]),s._v(" "),n("p",[n("code",[s._v("node wuWxapkg.js <path/to/zyel.wxapkg>")])]),s._v(" "),n("p",[s._v("可以看到命令行输出如下提示")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("Unpack "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" zyel2.wxapkg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nHeader info:\n  firstMark: 0xbe\n  unknownInfo:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  infoListLength:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1547")]),s._v("\n  dataLength:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("971189")]),s._v("\n  lastMark: 0xed\n\nFile list info:\n  fileCount:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/components/home/images/home-icon1.png'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1561")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2969")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/components/home/images/home-load-btn.png'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4530")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("235")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/components/key/imgs/back.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4765")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4369")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/arrow-right.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9134")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("223")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/detailsCoins-btn1-ac.png'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9357")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1180")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/detailsCoins-btn1.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10537")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("614")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/detailsCoins-btn2-ac.png'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11151")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("936")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/detailsCoins-btn2.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12087")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("546")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/home-ac.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12633")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2281")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/home.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14914")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1565")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-ac.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16479")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2324")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon1.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18803")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1115")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon3.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19918")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("852")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon4.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20770")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1038")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon5.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21808")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1039")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon6.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22847")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9137")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine-icon7.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31984")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1796")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/mine.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("33780")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1682")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/ranking-one.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("35462")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4883")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/ranking-three.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40345")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4993")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/ranking-two.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("45338")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4928")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/shop-ac.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50266")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2393")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/shop.png'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("52659")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1807")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/app-config.json'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("54466")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18010")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/app-service.js'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("72476")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("728734")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/CSR/CSR.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("801210")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3759")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/card/card.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("804969")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5518")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/coinRecord/coinRecord.html'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("810487")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3832")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/coinShop/coinShop.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("814319")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("469")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/detailsCoins/detailsCoins.html'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("814788")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4498")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/home/home.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("819286")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5043")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/integralDec/integralDec.html'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("824329")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3153")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/integralTask/integralTask.html'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("827482")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5007")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/login/login.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("832489")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1649")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/mine/mine.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("834138")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2429")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/orderList/orderList.html'")]),s._v(",\n  off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("836567")]),s._v(",\n  size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5701")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/ranking/ranking.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("842268")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4388")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/share/share.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("846656")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5327")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/shop/creditBuy.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("851983")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2730")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/shop/shop.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("854713")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3175")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/pages/welfare/welfare.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("857888")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("751")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/page-frame.html'")]),s._v(", off: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("858639")]),s._v(", size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("114111")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nSaving files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nUnpack done.\nSplit app-service.js and "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" up configs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" wxss "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" wxml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" wxs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile ./pages/CSR/CSR.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/card/card.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/coinRecord/coinRecord.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/coinShop/coinShop.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/detailsCoins/detailsCoins.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/home/home.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/integralDec/integralDec.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/integralTask/integralTask.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/login/login.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/mine/mine.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/orderList/orderList.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/ranking/ranking.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/share/share.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/shop/creditBuy.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/shop/shop.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDecompile ./pages/welfare/welfare.wxml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDecompile success"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nGuess wxss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first turn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSplitting "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/gangxue/demo/wxappUnpacker/zyel/app-service.js"')]),s._v(" done.\nImport count info: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nGuess wxss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first turn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" done.\nGenerate wxss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("second turn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nGenerate wxss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("second turn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" done.\nSave wxss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSplit and "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" up done.\nDelete files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nDeleted.\n\nFile done.\nTotal use: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3148")]),s._v(".983ms\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("如果想单独执行config、js、wxml、wxss的反编译可以在解包时加-o参数不做后续操作")])]),s._v(" "),n("h3",{attrs:{id:"工具用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具用法"}},[s._v("#")]),s._v(" 工具用法")]),s._v(" "),n("ul",[n("li",[s._v("node wuConfig.js <files...> 将 app-config.json 中的内容拆分到各个文件对应的 .json 和 app.json , 并通过搜索 app-config.json 所在文件夹下的所有文件尝试将 iconData 还原为 iconPath 。")]),s._v(" "),n("li",[s._v("node wuJs.js <files...> 将 app-service.js (或小游戏中的 game.js ) 拆分成一系列原先独立的 javascript 文件，并使用 Uglify-ES 美化，从而尽可能还原编译前的情况。")]),s._v(" "),n("li",[s._v("node wuWxml.js [-m] <files...> 将编译/混合到 page-frame.html ( 或 app-wxss.js ) 中的 wxml 和 wxs 文件还原为独立的、未编译的文件。如果加上-m指令，就会阻止block块自动省略，可能帮助解决一些相关过程的 bug 。")]),s._v(" "),n("li",[s._v("node wuWxss.js <dirs...> 通过获取文件夹下的 page-frame.html ( 或 app-wxss.js ) 和其他 html 文件的内容，还原出编译前 wxss 文件的内容。")]),s._v(" "),n("li",[s._v("node wuWxapkg.js [-o] [-d] [-s="),n("Main",{attrs:{Dir:""}},[s._v("] <files...> 将 wxapkg 文件解包，并将包中上述命令中所提的被编译/混合的文件自动地恢复原状。如果加上-o指令，表示仅解包，不做后续操作。如果加上-d指令，就会保留编译/混合后所生成的新文件，否则会自动删去这些文件。同时，前面命令中的指令也可直接加在这一命令上。"),n("s",[s._v("而如果需要解压分包，请先解压主包，然后执行node wuWxapkg.js [-d] -s="),n("Main",{attrs:{Dir:""}},[s._v(" <subPackages...>，其中Main Dir为主包解压地址。除-d与-s外，这些指令两两共存的后果是未定义的（当然，是不会有危险的）。")])],1)])],1)]),s._v(" "),n("h1",{attrs:{id:"导入开发者工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入开发者工具"}},[s._v("#")]),s._v(" 导入开发者工具")]),s._v(" "),n("p",[s._v("打开微信开发者工具,导入项目即可\n注意在中银E路通解包后的项目设置中")]),s._v(" "),n("ul",[n("li",[s._v("注意勾选不校验合法域名")]),s._v(" "),n("li",[s._v("勾掉e6转es5(这个小程序貌似并没有使用es6语法)\n"),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/maxzhang666/assets@master/img/2022/01/26/sJG7tb.png",alt:"sJG7tb"}})])])])}),[],!1,null,null,null);n.default=e.exports}}]);