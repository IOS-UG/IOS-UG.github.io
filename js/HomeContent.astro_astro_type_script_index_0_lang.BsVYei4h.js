var e=window.apps||{esign:[],ksign:[]},t=()=>{let e=document.getElementById(`ios-toast`);if(e){e.classList.remove(`hide`),e.classList.add(`show`);return}let t=document.createElement(`div`);t.id=`ios-toast`,t.innerHTML=`
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;color:#a78bfa">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div>
        <div style="font-weight:700;margin-bottom:2px">
          <span class="lang-vi">Chỉ dành cho iPhone / iPad</span>
          <span class="lang-en">iPhone / iPad Only</span>
          <span class="lang-zh">仅限 iPhone / iPad</span>
          <span class="lang-ru">Только для iPhone / iPad</span>
          <span class="lang-es">Solo para iPhone / iPad</span>
          <span class="lang-ja">iPhone / iPad のみ</span>
          <span class="lang-ko">iPhone / iPad 전용</span>
          <span class="lang-fr">iPhone / iPad uniquement</span>
          <span class="lang-de">Nur für iPhone / iPad</span>
          <span class="lang-pt">Apenas para iPhone / iPad</span>
        </div>
        <div style="font-size:0.82rem;opacity:0.8">
          <span class="lang-vi">Vui lòng mở trên Safari iOS để cài đặt</span>
          <span class="lang-en">Please open on Safari iOS to install</span>
          <span class="lang-zh">请在 iOS Safari 浏览器中打开以安装</span>
          <span class="lang-ru">Пожалуйста, откройте в Safari на iOS для установки</span>
          <span class="lang-es">Por favor, abre en Safari iOS para instalar</span>
          <span class="lang-ja">インストールするには iOS の Safari で開いてください</span>
          <span class="lang-ko">설치하려면 iOS Safari에서 열어주세요</span>
          <span class="lang-fr">Veuillez ouvrir dans Safari iOS pour installer</span>
          <span class="lang-de">Bitte in Safari unter iOS öffnen, um zu installieren</span>
          <span class="lang-pt">Por favor, abra no Safari iOS para instalar</span>
        </div>
      </div>
    `,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add(`show`)),setTimeout(()=>{t.classList.remove(`show`),t.classList.add(`hide`)},3500)},n=(n,r)=>{let i=document.getElementById(r);if(!i)return;i.innerHTML=``;let a=e[n]||[];if(a.length===0){i.innerHTML=`
        <div style="text-align: center; padding: 2rem; color: var(--muted, #888);">
          <span class="lang-vi">Đang cập nhật danh sách...</span>
          <span class="lang-en">Updating list...</span>
          <span class="lang-zh">正在更新列表...</span>
          <span class="lang-ru">Обновление списка...</span>
          <span class="lang-es">Actualizando lista...</span>
          <span class="lang-ja">リストを更新中...</span>
          <span class="lang-ko">목록 업데이트 중...</span>
          <span class="lang-fr">Mise à jour de la liste...</span>
          <span class="lang-de">Liste wird aktualisiert...</span>
          <span class="lang-pt">Atualizando lista...</span>
        </div>`;return}a.forEach(e=>{let n=document.createElement(`a`);n.href=`javascript:void(0)`,n.className=`app-row`,n.addEventListener(`click`,n=>{if(n.preventDefault(),/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1){let t=e.url;if(t&&typeof t==`string`){let e=`/an-cap-cai-con-cac-suc-vat-dmm/`;if(t.includes(e)){let n=t.split(e),r=n[n.length-1];r&&(t=`itms-services://?action=download-manifest&url=https://website.khoindvn.io.vn/plists/`+r+`.plist`)}}window.location.href=t}else t()}),n.innerHTML=`
        <img src="${e.img}" class="app-icon" alt="${e.name}" loading="lazy" />
        <div class="app-text">
          <div class="app-title">${e.name}</div>
          <div class="app-sub">${e.descriptions}</div>
        </div>
        <div class="app-action">
          <span class="lang-vi">CÀI ĐẶT</span>
          <span class="lang-en">INSTALL</span>
          <span class="lang-zh">安装</span>
          <span class="lang-ru">УСТАНОВИТЬ</span>
          <span class="lang-es">INSTALAR</span>
          <span class="lang-ja">インストール</span>
          <span class="lang-ko">설치</span>
          <span class="lang-fr">INSTALLER</span>
          <span class="lang-de">INSTALLIEREN</span>
          <span class="lang-pt">INSTALAR</span>
        </div>
      `,i.appendChild(n)})};n(`esign`,`esign-list`),n(`ksign`,`ksign-list`),window.addEventListener(`appsDataReady`,function(){e=window.apps||{esign:[],ksign:[]},n(`esign`,`esign-list`),n(`ksign`,`ksign-list`)});var r=()=>{fetch(`https://website.khoindvn.io.vn/apps.js`,{mode:`cors`,cache:`no-cache`,credentials:`omit`}).then(e=>e.text()).then(t=>{try{let r=t.replace(`!isAllowed`,`false`);if(Function(r)(),window.apps){try{localStorage.setItem(`apps_cache`,JSON.stringify(window.apps)),localStorage.setItem(`apps_cache_ts`,Date.now().toString())}catch{}e=window.apps,n(`esign`,`esign-list`),n(`ksign`,`ksign-list`)}}catch(e){console.error(`apps.js refresh error:`,e)}}).catch(()=>{})};setInterval(r,3e5),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&r()});var i=document.createElement(`pre`);i.style.cssText=`position:fixed;bottom:10px;right:10px;background:#111;color:#0f0;padding:12px;font-family:monospace;font-size:11px;z-index:99999;border:1px solid #0f0;border-radius:6px;max-width:400px;word-break:break-all;white-space:pre-wrap;margin:0;`;var a=``;try{let t=window.location.hostname;a+=`Host: ${t}\n`,a+=`Apps loaded: ${e?`Yes`:`No`}\n`,a+=`ESign count: ${e.esign?e.esign.length:0}\n`,a+=`KSign count: ${e.ksign?e.ksign.length:0}\n`}catch(e){a+=`ERR: ${e.message}\n${e.stack&&e.stack.split(`
`)[1]||``}`}i.textContent=a,new URLSearchParams(window.location.search).get(`debug`)===`true`&&document.body.appendChild(i);var o={texts:[`Seller.`,`Designer.`,`Developer.`],typingSpeed:110,deletingSpeed:55,pauseAfterType:2200},s=document.getElementById(`typed-text`),c=0,l=0,u=!1,d=()=>{let e=o.texts[c];if(u)s&&(s.textContent=e.slice(0,--l)),l===0&&(u=!1,c=(c+1)%o.texts.length),setTimeout(d,o.deletingSpeed);else{if(s&&(s.textContent=e.slice(0,++l)),l===e.length){u=!0,setTimeout(d,o.pauseAfterType);return}setTimeout(d,o.typingSpeed)}};d();var f=document.getElementById(`tab-esign`),p=document.getElementById(`tab-ksign`),m=document.getElementById(`panel-esign`),h=document.getElementById(`panel-ksign`),g=document.getElementById(`seg-thumb`),_=e=>{e===`esign`?(f&&f.classList.add(`active`),p&&p.classList.remove(`active`),f&&f.setAttribute(`aria-selected`,`true`),p&&p.setAttribute(`aria-selected`,`false`),m&&m.classList.add(`active`),h&&h.classList.remove(`active`),g&&(g.style.transform=`translateX(0)`)):(p&&p.classList.add(`active`),f&&f.classList.remove(`active`),p&&p.setAttribute(`aria-selected`,`true`),f&&f.setAttribute(`aria-selected`,`false`),m&&m.classList.remove(`active`),h&&h.classList.add(`active`),g&&f&&(g.style.transform=`translateX(${f.offsetWidth}px)`))};f&&f.addEventListener(`click`,()=>_(`esign`)),p&&p.addEventListener(`click`,()=>_(`ksign`));var v=document.querySelectorAll(`.skill-fill`),y=document.querySelector(`.skills-card`),b=()=>{v.forEach(e=>{let t=e.getAttribute(`data-pct`);t&&(e.style.width=t)})},x=()=>{y&&y.getBoundingClientRect().top<window.innerHeight&&(b(),window.removeEventListener(`scroll`,x))};window.addEventListener(`scroll`,x,{passive:!0}),x();