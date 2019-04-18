webpackJsonp([1],{"1uuo":function(t,n){},"2iWP":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),i=e("//Fk"),o=e.n(i),s=e("Xxa5"),a=e.n(s),u=e("exGp"),l=e.n(u),c=e("EFqf"),h=e.n(c),d={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?h()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e4}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:this.enableHtml}},[this.enableHtml?n("div",{domProps:{innerHTML:this._s(this.result)}}):n("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]};var p=e("VU/8")(d,m,!1,function(t){e("VFFZ")},"data-v-d3c6bc94",null).exports,f=e("OEdS"),v=e.n(f),g={name:"Editor",props:["code"],computed:{highlightedCode:function(){return v.a.highlight(this.code,v.a.languages.css)},codeInstyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e4},updateCode:function(t){this.$emit("update:code",t.target.textContent)}}},w={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"code",domProps:{innerHTML:t._s(t.codeInstyleTag)}}),t._v(" "),e("div",{ref:"container",staticClass:"styleEditor",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.highlightedCode)},on:{blur:function(n){return t.updateCode(n)}}})])},staticRenderFns:[]};var b=e("VU/8")(g,w,!1,function(t){e("lXfR")},"data-v-5f7b2d90",null).exports,k={name:"bottom",data:function(){return{demourl:[{url:"http://eveningwater.com/",title:"个人网站"},{url:"https://github.com/eveningwater",title:"github"}],paused:!1,playing:!1,autoPlaying:!1,audio:""}},mounted:function(){},methods:{playMusic:function(){this.playing=!0,this.autoPlaying=!0,this.audio=new Audio,this.audio.loop="loop",this.audio.autoplay="autoplay",this.audio.src="http://eveningwater.com/project/newReact-music-player/audio/%E9%BB%84%E5%9B%BD%E4%BF%8A%20-%20%E7%9C%9F%E7%88%B1%E4%BD%A0%E7%9A%84%E4%BA%91.mp3",this.$refs.music.appendChild(this.audio)},skipAnimationFun:function(t){t.preventDefault(),this.$emit("on-skip")},pauseFun:function(t){t.preventDefault(),this.paused=!this.paused,this.$emit("on-pause",this.paused)},musicPause:function(){this.playing=!this.playing,this.playing?this.audio.play():this.audio.pause()}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bottom"}},[e("a",{attrs:{id:"pause"},on:{click:t.pauseFun}},[t._v(t._s(t.paused?"继续动画 ||":"暂停动画"))]),t._v(" "),e("a",{attrs:{id:"skipAnimation"},on:{click:t.skipAnimationFun}},[t._v("跳过动画")]),t._v(" "),e("p",t._l(t.demourl,function(n,r){return e("span",{key:r},[e("a",{attrs:{href:n.url}},[t._v(t._s(n.title))])])}),0),t._v(" "),e("div",{ref:"music",class:t.playing?"rotate":"",attrs:{id:"music"},on:{click:t.musicPause}})])},staticRenderFns:[]};var y=e("VU/8")(k,_,!1,function(t){e("2iWP")},"data-v-28d2c7bb",null).exports,E=(e("ZsCP"),["/*\n* 大家好,我叫夕水(eveningwater),\n* 是一个web前端开发工程师,\n* 这是一个我为自己而写的简历.\n* 让我们一起来看看吧.\n*/\n/* 首先给动画加上过渡效果*/\nbody{\n\ttransition:all .5s;\n}\n/* 过渡效果加上了,但是你并没有看到啥,\n* 是不是啊?\n* 不要着急,继续往下看就是了:\n* 过渡效果只是为了让动画更顺畅一点罢了.\n* 先改变背景颜色,毕竟白色背景太单调了不是吗?\n*/\nhtml{\n\tbackground-color:#abb1b1;\n}\n/*\n* 等待所有的字体都变成白色...\n*/\nbody,html{\n\tcolor:#fff;\n}\n/*\n* 但是就这样,肯定还远远不够,嗯,\n* 我就加个编辑器,\n* 用于装css代码的,\n* 将这些代码都装在这里面\n*/\n.styleEditor{\n\twidth:45%;\n\theight:77vh;\n\tbackground:#202120;\n\tborder:1px solid #f2f2f2;\n}\n/*\n* 编辑器写好了,但是字体颜色全是白色,\n* 是不是太过单调了些?\n* 别着急,我马上把代码高亮效果添加上,\n* 继续......\n*/\n.token.comment{color:#b4b4b4;font-family:italic;}\n.token.selector{ color: #de8322; }\n.token.property{ color: #a230ea; }\n.token.punctuation{ color: #29e354;}\n.token.function{ color: #de32b0;}\n/*\n* 代码高亮效果添加了,但是我发现这个编辑器,\n* 这样看着好没意思,\n* 嗯,加点3D效果,让它看上去像立体模式一样......\n*/\n.main,.resumeEditor{\n\tperspective:1000px;\n}\n/*\n* 这只是开启了3D模式,要让它看上去有种立体感,\n* 还得加点动画......\n*/\n.styleEditor{\n\tposition:absolute;\n\tright:7%;\n\ttop:0;\n\ttransition:none;\n\ttransform:rotateY(-10deg) translateZ(100px);\n}\n/*\n* 我把滚动条的样式也设置一下.\n*/\n::-webkit-scrollbar{\n\twidth: 0;\n}\n/*\n* 嗯,这个编辑器看来是没啥问题了,但是,\n* 我觉得好像少了点什么......\n* 哦,对还少了另一个编辑器,毕竟是一个简历网页,\n* 得把我的简历写上吧.\n* 好吧,接下来,我就再写一个编辑器.\n*/\n.resumeEditor{\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\twidth:45%;\n\theight:93vh;\n\tbackground-color:#202120;\n\ttransform:rotateY(10deg) translateZ(-100px);\n}\n/*\n* 编辑器写好了,开始往里面写内容,我开始介绍我自己了......\n*/\n","\n/*\n* 对了这个简历,好像还差点啥.\n* 嗯,这只是一个文本介绍,我需要把他打造成HTML页面类型.\n* 用一个编译工具markdown编译一下\n* 好了,成功了.\n*/\n",'\n/*\n* 我先把这个编辑器调整一下.\n* 再添加点样式.\n*/\n.resumeEditor{\n\tpadding:2em;\n}\n.resumeEditor h2{\n\tdisplay:inline-block;\n\tborder-bottom:1px solid;\n\tmargin:1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n\tlist-style:none;\n}\n.resumeEditor ul > li::before{\n\tcontent:" ";\n\tmargin-right:.5em;\n}\n.resumeEditor ol{\n\tcounter-reset:section;\n}\n.resumeEditor ol li::before{\n\tcounter-increment:section;\n\tcontent:counters(section,\'.\') " ";\n\tmargin-right:.5em;\n}\n.resumeEditor blockquote{\n\tmargin: 1em;\n\tpadding: .5em;\n}\n/* 但是这超链接看着不爽,\n* 我改美观一些,\n*/\n.resumeEditor a{\n\ttext-decoration:none;\n\tcolor:#bf862d;\n}\n.resumeEditor a:hover,\n.resumeEditor a:active{\n\tcolor:#2396ff;\n}\n/*\n* 动画加载完成了.\n* 暂停和跳过动画按钮也得移除掉.....\n*/\n#pause,#skipAnimation{\n\tdisplay:none;\n}\n/*\n* 当然，你还可以自己编辑样式。\n* 比如，我把页面的背景换下\n* \n*/\nbody{\n\tbackground-color:#f2f2f2;\n}\n/*\n* 最后,我想听首歌放松放松下.\n* 歌名:<真爱你的云>\n* 歌手:黄国俊\n* 先加个按钮控制音乐的暂停和播放.\n*/\n#music{\n\tdisplay:block;\n}\n/*\n* 准备好......\n* 3...\n* 2...\n* 1...\n* 音乐开始......\n*/']),x="* 夕水(eveningwater),\n* 目前在成都工作\n-----\n技能\n-----\n* 熟悉前端开发\n* 高效的自学能力\n-----\n工作项目\n-----\n1. [个人网站](http://eveningwater.com/)\n2. [大师有空](http://api.soulside.cn/masterv3_web_formal/public/wap/wapmaster/dist/#/?id=1)\n3. [阳光助学系统](http://help.qianjiang.kunyueyun.com/#/)\n4. [园区服务系统](http://pss.kunyueyun.com/#/login)\n5. [企业应用系统](http://pes.kunyueyun.com/#/login)\n6. [商家服务系统](http://bss.kunyueyun.com/#/login)\n7. [园区官网(旧版)](http://park.kunyueyun.com/#/login)\n8. [园区官网(新版)](http://www.kunyueyun.com/)\n9. [捧场客后台管理系统](http://www.pengchangke.com.cn/admin/#/)\n10. [领梵后台](https://h5.ledfin.cn)\n11. 相关APP页面若干\n12. 领梵小程序\n13. [17素材](http://www.17sucai.com/pins/26618.html)\n-----\n其它爱好\n-----\n* 诗词(主要发表在以下网站):\n* [中国诗歌网](http://www.zgshige.com/c/2016-11-07/2029387.shtml)\n* [诗词在线](http://www.chinapoesy.com/gongxianglist894225B7-3462-42F6-8B0D-118B36FF31D8.html)\n-----\n* 完结小说(已上线)\n* [高手来都市](http://www.zhujiange.com/book/57433/index.html),虽然写的比较烂,哈哈哈哈哈!\n-----\n> 如果你喜欢这个效果的话,欢迎下载[源码](https://github.com/eveningwater/vue-resume)研究。",S={name:"app",components:{ResumeEditor:p,StyleEditor:b,BottomNav:y},data:function(){return{interval:40,currentStyle:{code:""},enableHtml:!1,fullStyle:E,currentMarkdown:"",fullMarkdown:x,timer:null}},created:function(){this.makeResume()},methods:{pauseAnimation:function(t){t&&this.timer?clearTimeout(this.timer):this.makeResume()},skipAnimation:function(){var t=this;this.timer&&clearTimeout(this.timer);var n="";this.fullStyle.map(function(t){n+=t}),setTimeout(function(){t.$set(t.currentStyle,"code",n)},100),this.currentMarkdown=x,this.enableHtml=!0,this.$refs.bottomNav.playMusic()},makeResume:function(){var t=l()(a.a.mark(function t(){var n=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.writeShowStyle(0);case 2:return t.next=4,this.writeShowResume();case 4:return t.next=6,this.writeShowStyle(1);case 6:return t.next=8,this.writeShowHtml();case 8:return t.next=10,this.writeShowStyle(2);case 10:return t.next=12,this.$nextTick(function(){n.$refs.bottomNav.playMusic()});case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),writeShowHtml:function(){var t=this;return new o.a(function(n,e){t.enableHtml=!0,n()})},writeShowStyle:function(t){var n=this;return new o.a(function(e,r){var i=l()(a.a.mark(function n(){var r,o,s,u,l,c=this;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.fullStyle[t]){n.next=3;break}return n.abrupt("return");case 3:o=this.fullStyle.filter(function(n,e){return e<=t}).map(function(t){return t.length}).reduce(function(t,n){return t+n},0),s=o-r.length,this.currentStyle.code.length<o?(u=this.currentStyle.code.length-s,l=r.substring(u,u+1)||" ",this.currentStyle.code+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),this.timer=setTimeout(i,this.interval)):e();case 6:case"end":return n.stop()}},n,this)})).bind(n);i()})},writeShowResume:function(){var t=this;return new o.a(function(n,e){var r=t.fullMarkdown.length;!function e(){t.currentMarkdown.length<r?(t.currentMarkdown=t.fullMarkdown.substring(0,t.currentMarkdown.length+1),t.currentMarkdown[t.currentMarkdown.length-1],"\n"===t.currentMarkdown[t.currentMarkdown.length-2]&&t.$refs.resumeEditor&&t.$nextTick(function(){t.$refs.resumeEditor.goBottom()}),t.timer=setTimeout(e,t.interval)):n()}()})}}},$={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main"},[e("StyleEditor",t._b({ref:"styleEditor"},"StyleEditor",t.currentStyle,!1,!0)),t._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:t.currentMarkdown,enableHtml:t.enableHtml}})],1),t._v(" "),e("BottomNav",{ref:"bottomNav",on:{"on-pause":t.pauseAnimation,"on-skip":t.skipAnimation}})],1)},staticRenderFns:[]};var M=e("VU/8")(S,$,!1,function(t){e("uepH")},"data-v-28a30610",null).exports,F=e("/ocq"),H={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var T=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},H,!1,function(t){e("1uuo")},"data-v-d8ec41bc",null).exports;r.a.use(F.a);var C=new F.a({routes:[{path:"/",name:"HelloWorld",component:T}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:C,components:{App:M},template:"<App/>"})},VFFZ:function(t,n){},ZsCP:function(t,n){},lXfR:function(t,n){},uepH:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.28351d7c4c42ea3810e0.js.map