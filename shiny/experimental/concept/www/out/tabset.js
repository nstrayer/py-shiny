"use strict";(()=>{var T=window,k=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),et=new WeakMap,x=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(k&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(e,t))}return t}toString(){return this.cssText}},st=o=>new x(typeof o=="string"?o:o+"",void 0,j),B=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new x(e,o,j)},D=(o,t)=>{k?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},M=k?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return st(e)})(o):o;var I,L=window,it=L.trustedTypes,At=it?it.emptyScript:"",ot=L.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?At:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},rt=(o,t)=>t!==o&&(t==t||o==o),V={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:rt},$=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(M(i))}else t!==void 0&&e.push(M(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return D(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=V){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=i.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:W;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},ot?.({ReactiveElement:$}),((I=L.reactiveElementVersions)!==null&&I!==void 0?I:L.reactiveElementVersions=[]).push("1.6.1");var q,z=window,b=z.trustedTypes,nt=b?b.createPolicy("lit-html",{createHTML:o=>o}):void 0,Z="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+_,yt=`<${pt}>`,A=document,P=()=>A.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",vt=Array.isArray,St=o=>vt(o)||typeof o?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,at=/>/g,m=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,dt=/"/g,$t=/^(?:script|style|textarea|title)$/i,_t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),ft=_t(1),Pt=_t(2),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,g=A.createTreeWalker(A,129,null,!1),Et=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":"",r=U;for(let l=0;l<e;l++){let a=o[l],v,h,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===U?h[1]==="!--"?r=lt:h[1]!==void 0?r=at:h[2]!==void 0?($t.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=m):h[3]!==void 0&&(r=m):r===m?h[0]===">"?(r=i??U,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?m:h[3]==='"'?dt:ht):r===dt||r===ht?r=m:r===lt||r===at?r=U:(r=m,i=void 0);let R=r===m&&o[l+1].startsWith("/>")?" ":"";n+=r===U?a+yt:c>=0?(s.push(v),a.slice(0,c)+Z+a.slice(c)+_+R):a+_+(c===-2?(s.push(void 0),l):R)}let d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(d):d,s]},S=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0,d=t.length-1,l=this.parts,[a,v]=Et(t,e);if(this.el=S.createElement(a,s),g.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=g.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(Z)||c.startsWith(_)){let p=v[r++];if(h.push(c),p!==void 0){let R=i.getAttribute(p.toLowerCase()+Z).split(_),O=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:O[2],strings:R,ctor:O[1]==="."?F:O[1]==="?"?G:O[1]==="@"?Q:w})}else l.push({type:6,index:n})}for(let c of h)i.removeAttribute(c)}if($t.test(i.tagName)){let h=i.textContent.split(_),c=h.length-1;if(c>0){i.textContent=b?b.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],P()),g.nextNode(),l.push({type:2,index:++n});i.append(h[c],P())}}}else if(i.nodeType===8)if(i.data===pt)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)l.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function C(o,t,e=o,s){var i,n,r,d;if(t===y)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=H(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=C(o,l._$AS(o,t.values),l,s)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);g.currentNode=n;let r=g.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new E(r,r.nextSibling,this,t):a.type===1?v=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(v=new X(r,this,t)),this._$AV.push(v),a=i[++l]}d!==a?.index&&(r=g.nextNode(),d++)}return g.currentNode=A,n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},E=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):St(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=S.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let r=new J(n,this),d=r.u(this.options);r.v(s),this.$(d),this._$AH=r}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new S(t)),e}T(t){vt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new E(this.k(P()),this.k(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},w=class{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,r=!1;if(n===void 0)t=C(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{let d=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=C(this,d[s+l],e,l),a===y&&(a=this._$AH[l]),r||(r=!H(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},bt=b?b.emptyScript:"",G=class extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}},Q=class extends w{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:u)===y)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var ut=z.litHtmlPolyfillSupport;ut?.(S,E),((q=z.litHtmlVersions)!==null&&q!==void 0?q:z.litHtmlVersions=[]).push("2.7.4");var mt=(o,t,e)=>{var s,i;let n=(s=e?.renderBefore)!==null&&s!==void 0?s:t,r=n._$litPart$;if(r===void 0){let d=(i=e?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new E(t.insertBefore(P(),d),d,void 0,e??{})}return r._$AI(o),r};var Y,tt;var f=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}};f.finalized=!0,f._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:f});var gt=globalThis.litElementPolyfillSupport;gt?.({LitElement:f});((tt=globalThis.litElementVersions)!==null&&tt!==void 0?tt:globalThis.litElementVersions=[]).push("3.3.2");var N=class extends f{constructor(){super()}render(){return ft`
      <div class="tabset">
        <slot></slot>
      </div>
    `}};N.properties={},N.styles=B`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
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

    .tabset > * {
      min-width: 0;
    }

    ::slotted(*) {
      padding: var(--size-fluid-2);
    }

    ::slotted(.header),
    ::slotted(.footer) {
      background-image: var(--accent-gradient, var(--gradient-7));
      color: var(--stone-1);
      padding-block: var(--size-fluid-1);
    }

    ::slotted(.header) {
      grid-area: header;
      width: 100%;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-fluid-1);
      margin: 0;
    }

    ::slotted(.sidebar) {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--sidebar-bg-color, var(--stone-1));
      color: var(--sidebar-color, var(--stone-7));
    }

    ::slotted(.main) {
      grid-area: content;
      padding: var(--size-fluid-3);
    }

    ::slotted(.footer) {
      grid-area: footer;
    }
  `;customElements.define("shiny-tabset",N);})();
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
//# sourceMappingURL=tabset.js.map
