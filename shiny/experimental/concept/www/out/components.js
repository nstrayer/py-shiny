"use strict";(()=>{var D=window,I=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),lt=new WeakMap,L=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(I&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&lt.set(e,t))}return t}toString(){return this.cssText}},ht=o=>new L(typeof o=="string"?o:o+"",void 0,X),p=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new L(e,o,X)},Z=(o,t)=>{I?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},V=I?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ht(e)})(o):o;var J,W=window,dt=W.trustedTypes,xt=dt?dt.emptyScript:"",ct=W.reactiveElementPolyfillSupport,G={toAttribute(o,t){switch(t){case Boolean:o=o?xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},pt=(o,t)=>t!==o&&(t==t||o==o),Y={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:pt},f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Z(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Y){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:G).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=i.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:G;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||pt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},ct?.({ReactiveElement:f}),((J=W.reactiveElementVersions)!==null&&J!==void 0?J:W.reactiveElementVersions=[]).push("1.6.1");var Q,q=window,x=q.trustedTypes,ut=x?x.createPolicy("lit-html",{createHTML:o=>o}):void 0,tt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+$,Ct=`<${bt}>`,A=document,M=()=>A.createComment(""),R=o=>o===null||typeof o!="object"&&typeof o!="function",yt=Array.isArray,zt=o=>yt(o)||typeof o?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,gt=/>/g,b=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,_t=/"/g,At=/^(?:script|style|textarea|title)$/i,Et=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=Et(1),It=Et(2),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ft=new WeakMap,y=A.createTreeWalker(A,129,null,!1),kt=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":"",r=O;for(let a=0;a<e;a++){let l=o[a],_,h,c=-1,m=0;for(;m<l.length&&(r.lastIndex=m,h=r.exec(l),h!==null);)m=r.lastIndex,r===O?h[1]==="!--"?r=vt:h[1]!==void 0?r=gt:h[2]!==void 0?(At.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=b):h[3]!==void 0&&(r=b):r===b?h[0]===">"?(r=i??O,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,_=h[1],r=h[3]===void 0?b:h[3]==='"'?_t:mt):r===_t||r===mt?r=b:r===vt||r===gt?r=O:(r=b,i=void 0);let B=r===b&&o[a+1].startsWith("/>")?" ":"";n+=r===O?l+Ct:c>=0?(s.push(_),l.slice(0,c)+tt+l.slice(c)+$+B):l+$+(c===-2?(s.push(void 0),a):B)}let d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(d):d,s]},w=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0,d=t.length-1,a=this.parts,[l,_]=kt(t,e);if(this.el=w.createElement(l,s),y.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=y.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(tt)||c.startsWith($)){let m=_[r++];if(h.push(c),m!==void 0){let B=i.getAttribute(m.toLowerCase()+tt).split($),j=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:j[2],strings:B,ctor:j[1]==="."?st:j[1]==="?"?it:j[1]==="@"?ot:z})}else a.push({type:6,index:n})}for(let c of h)i.removeAttribute(c)}if(At.test(i.tagName)){let h=i.textContent.split($),c=h.length-1;if(c>0){i.textContent=x?x.emptyScript:"";for(let m=0;m<c;m++)i.append(h[m],M()),y.nextNode(),a.push({type:2,index:++n});i.append(h[c],M())}}}else if(i.nodeType===8)if(i.data===bt)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function C(o,t,e=o,s){var i,n,r,d;if(t===E)return t;let a=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,l=R(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=C(o,a._$AS(o,t.values),a,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);y.currentNode=n;let r=y.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let _;l.type===2?_=new S(r,r.nextSibling,this,t):l.type===1?_=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(_=new rt(r,this,t)),this._$AV.push(_),l=i[++a]}d!==l?.index&&(r=y.nextNode(),d++)}return y.currentNode=A,n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},S=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),R(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=w.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let r=new et(n,this),d=r.u(this.options);r.v(s),this.$(d),this._$AH=r}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new w(t)),e}T(t){yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new S(this.k(M()),this.k(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},z=class{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,r=!1;if(n===void 0)t=C(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{let d=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=C(this,d[s+a],e,a),l===E&&(l=this._$AH[a]),r||(r=!R(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Ht=x?x.emptyScript:"",it=class extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}},ot=class extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:u)===E)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var $t=q.litHtmlPolyfillSupport;$t?.(w,S),((Q=q.litHtmlVersions)!==null&&Q!==void 0?Q:q.litHtmlVersions=[]).push("2.7.4");var wt=(o,t,e)=>{var s,i;let n=(s=e?.renderBefore)!==null&&s!==void 0?s:t,r=n._$litPart$;if(r===void 0){let d=(i=e?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new S(t.insertBefore(M(),d),d,void 0,e??{})}return r._$AI(o),r};var nt,at;var v=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};v.finalized=!0,v._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:v});var St=globalThis.litElementPolyfillSupport;St?.({LitElement:v});((at=globalThis.litElementVersions)!==null&&at!==void 0?at:globalThis.litElementVersions=[]).push("3.3.2");var k=class extends v{constructor(){super();this.tabs=[];this.selected_tab_index=0}handleSlotchange(e){let s=e.target;if(!s)return;let i=s.assignedNodes({flatten:!0});this.tabs=i.reduce((n,r)=>{if(r instanceof HTMLElement&&r.tagName.toLowerCase()==="shiny-tab"){let d=r.attributes.getNamedItem("name")?.value;if(!d)return n;n.push({name:d,el:r})}return n},[]),this.select_tab()}select_tab(e=this.selected_tab_index){this.selected_tab_index=e,this.tabs.forEach((s,i)=>{let n=i===e;s.el.style.display=n?"block":"none",s.el.inert=!n})}render(){return g`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="divider"></div>
          <div class="tabs">
            ${this.tabs.map((e,s)=>g`<span
                  class="tab ${s===this.selected_tab_index?"selected-tab":""}"
                  @click=${()=>this.select_tab(s)}
                  >${e.name}</span
                >`)}
          </div>
        </div>
        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};k.properties={tabs:{},selected_tab_index:{}},k.styles=p`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
      height: 100%;
    }

    .tabset {
      height: 100%;
      width: 100%;
      outline: 1px solid var(--border-color, black);
      border-radius: var(--radius-2);
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
    }

    .tab {
      margin-inline: var(--size-1);
      padding: var(--size-1);
      cursor: pointer;
      position: relative;
    }

    .selected-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--size-1);
      right: var(--size-1);
      height: var(--border-size-3);
      border-radius: var(--radius-1);
      background-color: currentColor;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .header,
    .footer {
      background-image: var(--accent-gradient, var(--gradient-7));
      color: var(--stone-1);
    }

    .header {
      grid-area: header;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-fluid-1);
      padding-block: var(--size-fluid-1);
      margin: 0;
    }

    .header,
    .footer {
      margin: 0;
      padding-inline: var(--size-fluid-2);
      display: flex;
      gap: var(--size-3);
    }

    .divider {
      background-color: var(--border-color, black);
      width: var(--border-size-1);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--sidebar-bg-color, var(--stone-1));
      color: var(--sidebar-color, var(--stone-7));
    }

    .main {
      grid-area: content;
      padding: var(--size-fluid-3);
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--size-fluid-1);
    }
  `;function K(o,t,e){let s=document.createAttribute(t);return s.value=e,o.attributes.setNamedItem(s),o}var H=class extends v{constructor(){super(),K(this,"slot","footer")}render(){return g`
      <div class="footer">
        <slot></slot>
      </div>
    `}};H.properties={},H.styles=p`
    :host {
      display: block;
      position: relative;
    }
  `;var U=class extends v{constructor(){super();this.is_open=!0,K(this,"slot","sidebar")}render(){return g`
      <div class="sidebar ${this.is_open?"open":"closed"}">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_open}
        title=${this.is_open?"Close sidebar":"Open sidebar"}
        class="open-toggle"
      >
        👈
      </div>
    `}toggle_open(){this.is_open=!this.is_open}};U.properties={is_open:{}},U.styles=p`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
      --transition: 0.4s var(--ease-3);
      --toggle-w: 20px;
      height: 100%;
      position: relative;
    }

    .sidebar {
      height: 100%;
      overflow: scroll;
      padding: var(--size-fluid-1);
      --w: var(--sidebar-width, 250px);
      margin: 0;
      transition: width var(--transition), padding var(--transition);
    }

    .sidebar.open {
      width: var(--w);
    }

    .sidebar.closed {
      width: 0;
      padding: 0;
    }

    .sidebar.closed ::slotted(*) {
      opacity: 0;
    }

    .sidebar > * {
      min-width: 0;
    }

    .sidebar.closed + .open-toggle {
      transform: translateX(var(--toggle-w)) scaleX(-1);
      transition: transform var(--transition);
    }

    .open-toggle {
      position: absolute;
      top: var(--size-1);
      font-size: var(--font-size-3);
      border-radius: var(--radius-2) 0 0 var(--radius-2);
      right: 0;
      width: var(--toggle-w);
      height: auto;
      color: var(--white);
      display: grid;
      place-content: center;
      cursor: pointer;
    }
  `;var P=class extends v{constructor(){super();this.name="tab"}render(){return g`
      <div class="footer">
        <slot></slot>
      </div>
    `}};P.properties={name:{}},P.styles=p`
    :host {
      display: block;
      position: relative;
    }
  `;var Ut={to_right:"\u{1F449}",to_left:"\u{1F448}",to_bottom:"\u{1F446}",to_top:"\u{1F446}"},Pt=p`
  .horizontal .content {
    max-width: 100vw;
    transition: max-width var(--transition), transform var(--transition),
      padding-inline var(--transition);
  }

  .horizontal.open .content {
  }

  .horizontal .content > * {
    min-width: 0;
  }

  .horizontal .toggle {
    padding-inline: var(--size-1);
  }

  .horizontal.closed .toggle > .icon {
    transform: scaleX(-1);
  }

  .horizontal.closed .content {
    max-width: 0;
    transform: scaleX(0);
    padding-inline: 0;
  }
`,Nt=p`
  .to_left .content {
    transform-origin: left;
  }
  .to_left .toggle {
    top: var(--size-1);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`,Tt=p`
  .to_right .content {
    transform-origin: left;
  }
  .to_right .toggle {
    order: -1;
    top: var(--size-1);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`,Lt=p`
  .vertical {
    flex-direction: column;
  }

  .vertical > .content {
    max-height: 100vh;
    transition: max-height var(--transition), transform var(--transition),
      padding-block var(--transition);
  }

  .vertical > .toggle {
    min-height: var(--size-7);
  }

  .vertical .toggle > .icon {
    position: absolute;
    right: 0;
  }

  .vertical.closed .toggle > .icon {
    transform: rotate(180deg);
  }

  .vertical.content > ::slotted(*) {
    min-height: 0;
  }

  .vertical.closed .content {
    transform: scaleY(0);
    max-height: 0;
    padding-block: 0;
  }
`,Ot=p`
  .to_bottom .toggle {
    order: -1;
    right: var(--size-1);
    bottom: 0;
  }
`,Mt=p`
  .to_top .toggle {
    right: var(--size-1);
  }
`,N=class extends v{constructor(){super();this.start_state="open",this.opened=null,this.dir="to_top",this.label=null}render(){return g`
      <div
        class="container ${this.dir} ${this.dir==="to_bottom"||this.dir==="to_top"?"vertical":"horizontal"} ${this.is_open?"open":"closed"}"
      >
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="toggle"
          @click=${this.toggle_open}
          title=${this.is_open?"Close collapsible":"Open collapsible"}
        >
          ${this.label?g`<span>${this.label}</span>`:""}
          <span class="icon"> ${Ut[this.dir]} </span>
        </div>
      </div>
    `}get is_open(){return this.opened===null?this.start_state==="open":this.opened}toggle_open(){if(this.opened===null){this.opened=this.start_state!=="open";return}this.opened=!this.opened}};N.properties={label:{},opened:{type:"boolean"},start_state:{},dir:{}},N.styles=[p`
      :host {
        display: block;
        font-family: var(--font-family, sans-serif);
        --transition: 0.4s var(--ease-3);
        --toggle-size: 20px;
        --accent-color: var(--stone-3);
        position: relative;
        outline: 1px solid var(--accent-color, pink);
        margin: var(--size-3);
        border-radius: var(--radius-2);
      }

      .container {
        display: flex;
      }

      .content {
        overflow: scroll;
        transition: transform var(--transition);
        padding: var(--size-fluid-1);
      }

      .toggle {
        background-color: var(--accent-color);
        font-size: var(--font-size-3);
        display: grid;
        place-content: center;
        cursor: pointer;
      }

      .toggle > .icon {
        transition: transform var(--transition);
        user-select: none;
      }
    `,Pt,Tt,Nt,Lt,Ot,Mt];var T=class extends v{constructor(){super();this.rating=0}add_rating(){this.rating+=1}remove_rating(){this.rating-=1}render(){return g`
      <div>
        <button class="thumb_down" @click=${this.remove_rating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
            />
          </svg>
        </button>
        <span class="rating">${this.rating}</span>
        <button class="thumb_up" @click=${this.add_rating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
            />
          </svg>
        </button>
      </div>
    `}};T.properties={rating:{}},T.styles=p`
    :host {
      display: block;
      position: relative;
      background-color: var(--blue-3);
      width: 200px;
      height: 100px;
      display: grid;
      place-content: center;
    }
  `;customElements.define("shiny-footer",H);customElements.define("shiny-sidebar",U);customElements.define("shiny-tabset",k);customElements.define("shiny-tab",P);customElements.define("shiny-collapsible",N);customElements.define("star-rating",T);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=components.js.map
