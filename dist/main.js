(()=>{"use strict";const t=[{id:1,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/1.jpg",tags:["Art","Design"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:2,title:"Motivation Is The First Step To Success",imageURL:"./src/img/strategies/2.jpg",tags:["Culture"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:3,title:"Success Steps For Your Personal Or Business Life",imageURL:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",imageURL:"./src/img/strategies/4.jpg",tags:["Culture","Design","Art"],wide:!0,text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:5,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/5.jpg",tags:["Design"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:6,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/1.jpg",tags:["Art","Design"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:7,title:"Motivation Is The First Step To Success",imageURL:"./src/img/strategies/2.jpg",tags:["Culture"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:8,title:"Success Steps For Your Personal Or Business Life",imageURL:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],text:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"}];class e{constructor({id:t,title:e,imageURL:s,tags:i,wide:a,...o}){this.id=t,this.title=e,this.imageURL=s,this.tags=i,this.wide=a}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy",this.wide&&e.classList.add("strategy_wide"),e.setAttribute("data-id",this.id),this.wide?(t+='<div class="strategy__pic strategy__pic_wide">',this.imageURL&&(t+=`<img class="strategy__img strategy__img_wide" src=${this.imageURL} alt="strategy" />`),t+="</div>"):(t+='<div class="strategy__pic">',this.imageURL&&(t+=`<img class="strategy__img" src=${this.imageURL} alt="strategy" />`),t+="</div>"),t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__title">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>t+=`<span class="tag tag_colored">${e}</span>`)),t+="</div>"),t+="</div>",e.innerHTML=t,e}}class s extends class{constructor(t){this.classes=t,this.overlay="",this.modal="",this.modalCloseBtn=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"div","modal__close-button"),this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal(),this.changeModalOpacity()}createDomNode(t,e,...s){return(t=document.createElement(e)).classList.add(...s),t}setContent(t){"string"==typeof t?this.modal.innerHTML=t:(this.modal.innerHTML="",this.modal.append(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(t){let e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-button"))&&(t.stopPropagation(),document.querySelector(".overlay").classList.remove("overlay_active"),setTimeout((()=>{document.querySelector(".overlay").remove()}),550))}changeModalOpacity(){setTimeout((()=>{this.overlay.classList.add("overlay_active")}),0)}}{constructor(t,{id:e,title:s,imageURL:i,tags:a,text:o,date:r}){super(t),this.id=e,this.title=s,this.imageURL=i,this.tags=a,this.text=o,this.date=r}generateContent(){let t="";return t+='<div class="modal__pic">',this.imageURL&&(t+=`<img class="modal__img" src=${this.imageURL} alt="strategy" />`),t+="</div>",t+='<div class="modal__content">',this.date&&(t+=`<p class="modal__date">${this.date}</p>`),this.title&&(t+=`<h3 class="modal__title">${this.title}</h3>`),this.text&&(t+=`<p class="modal__text">${this.text}</p>`),this.tags&&(t+='<div class="modal__tags tags">',this.tags.map((e=>t+=`<span class="tag tag_bordered">${e}</span>`)),t+="</div>"),t+="</div>",t}renderModal(){let t=this.generateContent();super.buildModal(t)}}const i=t=>{new s("article__modal",t).renderModal()},a=t=>{window.innerWidth>1024&&t.classList.contains("strategy_wide")&&t.classList.add("strategy_wide-active")},o=t=>{t.classList.contains("strategy_wide-active")&&t.classList.remove("strategy_wide-active")};window.onload=function(){t&&(()=>{const s=(()=>{const t=document.querySelector(".strategies__container");return t.innerHTML="",t})();(t=>{let s=[];return t.forEach((t=>{s.push(new e(t))})),s})(t).forEach((t=>{s.append(t.generateArticle())})),document.querySelector(".strategies__container").addEventListener("click",(e=>{if(e.target.closest(".strategy")){let s=e.target.closest(".strategy").getAttribute("data-id"),a=t.find((t=>t.id==s));i(a)}}))})(),document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){const e=t.target;(()=>{const t=document.querySelector(".strategies__tags .tag_selected");t.classList.remove("tag_selected"),t.classList.add("tag_bordered")})(),(t=>{t.classList.remove("tag_bordered"),t.classList.add("tag_selected")})(e),"All"===e.innerText?document.querySelectorAll(".strategies__container .strategy").forEach((t=>{t.classList.remove("strategy_hidden"),o(t)})):(t=>{document.querySelectorAll(".strategies__container .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((s=>{s.innerText===t.innerText&&(e.classList.remove("strategy_hidden"),a(e))}))}))})(e)}}))}})();