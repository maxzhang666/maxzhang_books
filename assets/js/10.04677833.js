(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{335:function(t,a,r){"use strict";r.r(a);var s=r(4),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[t._v("删除本地tag：")])]),t._v(" "),a("p",[a("code",[t._v("git tag -d v1.1.1")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("批量删除本地tag")])]),t._v(" "),a("p",[a("code",[t._v('git tag | grep "v1.1.*" | xargs git tag -d')])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("删除远程tag")])]),t._v(" "),a("p",[a("code",[t._v("git push origin --delete tag v1.1.1")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("批量删除远程tag")])]),t._v(" "),a("p",[a("code",[t._v("git show-ref --tag | awk '/v1\\.1\\.[0-9]{1}[0-9]{0,}$/ {print \":\" $2}' | xargs git push origin")])])])}),[],!1,null,null,null);a.default=i.exports}}]);