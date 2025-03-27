import{h as k,i as _,o as C,r as I,a as o,c as i,d as p,b as e,F as v,f as y,j as u,e as x,w,n as j,t as c,g as d}from"./index-3c715f2c.js";const M={class:"py-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 relative overflow-hidden"},z={class:"container-custom relative z-10"},L={class:"flex flex-wrap items-center justify-center gap-3 mt-6"},F=["onClick"],B={key:0,class:"absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-50"},N={key:1,class:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 transform"},S={class:"relative z-10"},V={class:"section bg-white relative overflow-hidden"},A={class:"container-custom relative z-10"},E={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},P={class:"h-52 bg-gray-100 overflow-hidden relative"},$=["src","alt"],O={class:"absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm"},J={class:"p-6 relative"},D={class:"text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors flex items-center"},H={class:"text-gray-600 mb-6"},T={class:"flex justify-between items-center pt-2 border-t border-gray-100"},Y={class:"flex items-center"},q={key:0,class:"flex items-center text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-full text-xs"},G={key:1,class:"flex items-center text-primary-600 font-medium bg-primary-50 px-3 py-1.5 rounded-full text-xs"},K={key:0,class:"card text-center py-16 my-8 backdrop-blur-sm bg-white/80 border border-gray-200"},Q={class:"section bg-gradient-tech relative overflow-hidden"},R={class:"container-custom relative z-10 py-12"},U={class:"card-glass relative overflow-hidden bg-white/10 backdrop-blur-md p-8 md:p-12 text-center border border-white/20 rounded-2xl shadow-lg"},Z={__name:"ProductsView",setup(W){const b=[{id:"all",name:"全部"},{id:"ai",name:"AI工具"},{id:"data",name:"数据分析"},{id:"assist",name:"智能助手"},{id:"other",name:"其他"}],m=[{id:1,title:"AI写作助手",description:"基于大型语言模型的智能写作工具，提升您的文字创作效率，支持多种文体和风格定制。",image:"https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"ai",isFree:!1},{id:2,title:"智能数据分析平台",description:"利用AI处理和分析海量数据，发现隐藏的商业洞见，助力企业做出更明智的决策。",image:"https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"data",isFree:!1},{id:3,title:"智能语音助手",description:"自然交互的语音助手，为您提供全方位的智能服务，打造无缝的人机交互体验。",image:"https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"assist",isFree:!0},{id:4,title:"代码辅助工具",description:"智能代码补全与优化工具，提高开发效率，减少错误，适合各种编程语言。",image:"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"ai",isFree:!0},{id:5,title:"数据可视化工具",description:"直观展示复杂数据关系，定制各类图表与仪表盘，让数据更易理解。",image:"https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"data",isFree:!1},{id:6,title:"创意灵感生成器",description:"突破创意瓶颈，获取新鲜灵感，适用于设计师、作家、营销人员等创意工作者。",image:"https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1080",categoryId:"other",isFree:!0}],a=k("all"),g=_(()=>a.value==="all"?m:m.filter(n=>n.categoryId===a.value)),h=n=>{const t=b.find(r=>r.id===n);return t?t.name:"未分类"};return C(()=>{const n={"@context":"https://schema.org","@type":"ItemList",itemListElement:m.map((l,f)=>({"@type":"ListItem",position:f+1,item:{"@type":"Product",name:l.title,description:l.description,image:l.image,url:`https://xiahua-ai.com/products/${l.id}`,category:h(l.categoryId),offers:{"@type":"Offer",price:l.isFree?"0":"联系获取",priceCurrency:"CNY",availability:"https://schema.org/InStock"}}}))},t={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首页",item:"https://xiahua-ai.com"},{"@type":"ListItem",position:2,name:"产品",item:"https://xiahua-ai.com/products"}]};let r=document.createElement("script");r.type="application/ld+json",r.textContent=JSON.stringify(n),document.head.appendChild(r);let s=document.createElement("script");s.type="application/ld+json",s.textContent=JSON.stringify(t),document.head.appendChild(s)}),(n,t)=>{const r=I("router-link");return o(),i("div",null,[t[21]||(t[21]=p('<section class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-16 md:py-20"><div class="absolute inset-0 circuit-bg opacity-20"></div><div class="absolute inset-0 dot-grid opacity-30"></div><div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div><div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div><div class="container-custom relative z-10"><div class="inline-block px-3 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"><span class="flex items-center"><span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span> 探索AI技术落地应用 </span></div><h1 class="text-white mb-4">我的<span class="relative inline-block"><span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>产品 </span></h1><p class="text-white text-opacity-90 text-xl max-w-2xl">探索小华同学AI开发的创新产品，体验科技带来的智能生活方式</p></div></section>',1)),e("section",M,[t[2]||(t[2]=e("div",{class:"absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-40"},null,-1)),t[3]||(t[3]=e("div",{class:"absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-50 rounded-full opacity-30"},null,-1)),e("div",z,[t[1]||(t[1]=p('<div class="relative text-center mb-6"><div class="inline-block bg-gradient-to-r from-primary-600/10 via-primary-500/20 to-primary-600/10 rounded-xl px-6 py-2 backdrop-blur-sm"><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-200/20 rounded-full blur-3xl"></div><div class="flex items-center justify-center"><div class="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 animate-pulse"></div><span class="text-primary-700 font-semibold tracking-wide">分类浏览</span><div class="w-1.5 h-1.5 rounded-full bg-primary-500 ml-2 animate-pulse" style="animation-delay:0.5s;"></div></div></div><div class="h-px w-36 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div></div>',1)),e("div",L,[(o(),i(v,null,y(b,s=>e("button",{key:s.id,onClick:l=>a.value=s.id,class:j(["px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group",a.value===s.id?"bg-primary-500 text-white shadow-md shadow-primary-200/50 transform scale-105":"bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"])},[a.value===s.id?(o(),i("span",B)):u("",!0),a.value===s.id?(o(),i("span",N)):u("",!0),e("span",S,c(s.name),1)],10,F)),64))])])]),e("section",V,[t[13]||(t[13]=e("div",{class:"absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"},null,-1)),t[14]||(t[14]=e("div",{class:"absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-50"},null,-1)),e("div",A,[e("div",E,[(o(!0),i(v,null,y(g.value,s=>(o(),i("div",{key:s.id,class:"card group glow-effect backdrop-blur-sm bg-white/95 border border-gray-100 hover:border-primary-100 transition-all duration-300 rounded-xl overflow-hidden"},[e("div",P,[e("img",{src:s.image,alt:s.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"},null,8,$),e("div",O,c(h(s.categoryId)),1),t[4]||(t[4]=e("div",{class:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"},null,-1)),t[5]||(t[5]=e("div",{class:"absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity"},null,-1)),t[6]||(t[6]=e("div",{class:"absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity"},null,-1))]),e("div",J,[t[11]||(t[11]=e("div",{class:"absolute top-0 right-0 w-20 h-20 opacity-5 circuit-bg"},null,-1)),e("h3",D,[d(c(s.title)+" ",1),t[7]||(t[7]=e("div",{class:"ml-2 w-1.5 h-1.5 rounded-full bg-primary-500 opacity-80"},null,-1))]),e("p",H,c(s.description),1),e("div",T,[e("div",Y,[s.isFree?(o(),i("span",q,t[8]||(t[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),d(" 免费使用 ")]))):(o(),i("span",G,t[9]||(t[9]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),d(" 付费产品 ")])))]),x(r,{to:`/products/${s.id}`,class:"btn-primary-outline btn-sm group"},{default:w(()=>t[10]||(t[10]=[d(" 了解详情 "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1 inline-block transition-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1)])),_:2},1032,["to"])])])]))),128))]),g.value.length===0?(o(),i("div",K,[t[12]||(t[12]=p('<div class="text-gray-400 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-bold text-gray-700 mb-2">暂无产品</h3><p class="text-gray-500 mb-6">该分类下暂时没有产品，请尝试其他分类。</p>',3)),e("button",{onClick:t[0]||(t[0]=s=>a.value="all"),class:"btn btn-outline mx-auto"}," 查看全部产品 ")])):u("",!0)])]),e("section",Q,[t[17]||(t[17]=e("div",{class:"absolute inset-0 dot-grid opacity-10"},null,-1)),t[18]||(t[18]=e("div",{class:"absolute inset-0 circuit-bg opacity-10"},null,-1)),t[19]||(t[19]=e("div",{class:"absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"},null,-1)),t[20]||(t[20]=e("div",{class:"absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"},null,-1)),e("div",R,[e("div",U,[t[16]||(t[16]=p('<div class="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium"><span class="flex items-center"><span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span> 个性化服务 </span></div><h2 class="mb-6 text-white">需要<span class="relative inline-block"><span class="absolute inset-x-0 bottom-0 h-3 bg-white/20 -z-10 transform skew-x-3"></span>定制开发</span>？ </h2><p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto"> 除了现有产品外，我们还提供AI应用定制开发服务，根据您的需求打造专属解决方案。 </p>',3)),x(r,{to:"/about",class:"btn bg-white text-primary-600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"},{default:w(()=>t[15]||(t[15]=[d(" 联系我 "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 ml-1 inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})],-1)])),_:1})])])])])}}};export{Z as default};
