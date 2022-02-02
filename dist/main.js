(()=>{"use strict";const t=[{id:1,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:2,title:"Motivation Is The First Step To Success",imageURL:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:3,title:"Success Steps For Your Personal Or Business Life",imageURL:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",imageURL:"./src/img/strategies/4.jpg",tags:["Culture","Design","Art"],wide:!0,content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:5,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/5.jpg",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:6,title:"Increasing Prosperity With Positive Thinking",imageURL:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:7,title:"Motivation Is The First Step To Success",imageURL:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:8,title:"Success Steps For Your Personal Or Business Life",imageURL:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"}];class e{constructor({id:t,title:e,imageURL:i,tags:s,wide:a,...o}){this.id=t,this.title=e,this.imageURL=i,this.tags=s,this.wide=a}generateArticleHTML(){let t="",e=document.createElement("article");return e.className="strategy",this.wide&&e.classList.add("strategy_wide"),e.setAttribute("data-id",this.id),this.wide?(t+='<div class="strategy__pic strategy__pic_wide">',this.imageURL&&(t+=`<img class="strategy__img strategy__img_wide" src=${this.imageURL} alt="strategy" />`),t+="</div>"):(t+='<div class="strategy__pic">',this.imageURL&&(t+=`<img class="strategy__img" src=${this.imageURL} alt="strategy" />`),t+="</div>"),t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__title">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>t+=`<span class="tag tag_colored">${e}</span>`)),t+="</div>"),t+="</div>",e.innerHTML=t,e}}const i=t=>{window.innerWidth>1024&&t.classList.contains("strategy_wide")&&t.classList.add("strategy_wide-active")},s=t=>{t.classList.contains("strategy_wide-active")&&t.classList.remove("strategy_wide-active")};window.onload=function(){t&&(()=>{const i=(()=>{const t=document.querySelector(".strategies__container");return t.innerHTML="",t})();(t=>{let i=[];return t.forEach((t=>{i.push(new e(t))})),i})(t).forEach((t=>{i.append(t.generateArticleHTML())}))})(),document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){const e=t.target;(()=>{const t=document.querySelector(".strategies__tags .tag_selected");t.classList.remove("tag_selected"),t.classList.add("tag_bordered")})(),(t=>{t.classList.remove("tag_bordered"),t.classList.add("tag_selected")})(e),"All"===e.innerText?document.querySelectorAll(".strategies__container .strategy").forEach((t=>{t.classList.remove("strategy_hidden"),s(t)})):(t=>{document.querySelectorAll(".strategies__container .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((s=>{s.innerText===t.innerText&&(e.classList.remove("strategy_hidden"),i(e))}))}))})(e)}}))}})();