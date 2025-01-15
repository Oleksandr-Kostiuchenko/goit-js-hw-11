import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=t=>`
    <li class="gallery-item">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        
        <div class='description-image'>
        <p>
        Likes <br>
        ${t.likes}
        </p>
        <p>
        Views <br>
        ${t.views}
        </p>
        <p>
        Likes <br>
        ${t.likes}
        </p>
        <p>Downloads <br>
        ${t.comments}</p>

        </div>
    </li>`,u=(t,o,i)=>{fetch(`https://pixabay.com/api/?q=${t}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return o.innerHTML="",i.value="",s.json()}).then(s=>{s.total===0&&iziToast.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"30",messageLineHeight:"",backgroundColor:"red",theme:"light",color:""});let e=[];s.hits.map(r=>{e.push(l(r))}),e.join(""),o.insertAdjacentHTML("beforeend",e)})},m=document.querySelector(".user-query-form"),a=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const d=document.querySelector(".galley-list"),f=t=>{t.preventDefault();const o=a.value.trim();if(o===""){c.show({message:"Please fill the gap!",messageColor:"white",messageSize:"30",messageLineHeight:"",backgroundColor:"red",theme:"light",color:""});return}u(o,d,a)};m.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
