(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{358:function(s,t,n){"use strict";n.r(t);var a=n(3),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("django在linux服务器执行python3 manage.py migrate，会产生了如下的错误输出：")]),s._v(" "),t("p",[s._v("django.core.exceptions.ImproperlyConfigured: SQLite 3.8.3 or later is required (found 3.7.17).")]),s._v(" "),t("p",[s._v("django发现Python使用的sqlite版本过低，不满足要求。因此，我尝试升级自带的sqlite。使用sqlite3 –version查看了CentOS的Sqlite为3.7")]),s._v(" "),t("p",[s._v("网上有很多的教程都是要更新sqlite的")]),s._v(" "),t("p",[s._v("感觉都好繁琐 我偏偏不想更新")]),s._v(" "),t("p",[s._v("因为我根本用不到sqlite啊")]),s._v(" "),t("p",[s._v("这里介绍一个最简单的方法：")]),s._v(" "),t("p",[s._v("django安装在哪些路径下，在我的系统上，需要找到/…/lib/python3.6/site-packages/django/db/backends/sqlite3/base.py这个脚本，django判断当前使用的sqlite版本的代码就在这里，找到以下代码块")]),s._v(" "),t("p",[s._v("直接修改版本号")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("check_sqlite_version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if Database.sqlite_version_info < (3, 8, 3):")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sqlite_version_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" ImproperlyConfigured"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SQLite 3.8.3 or later is required(found %s).'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sqlite_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ncheck_sqlite_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("再次尝试"),t("code",[s._v("django-admin startproject webApps")]),s._v("便会执行成功。")])])}),[],!1,null,null,null);t.default=e.exports}}]);