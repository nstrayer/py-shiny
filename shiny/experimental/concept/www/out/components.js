"use strict";(()=>{var j=window,B=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),nt=new WeakMap,T=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&nt.set(e,t))}return t}toString(){return this.cssText}},at=r=>new T(typeof r=="string"?r:r+"",void 0,q),_=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new T(e,r,q)},K=(r,t)=>{B?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=j.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},I=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return at(e)})(r):r;var Z,D=window,lt=D.trustedTypes,St=lt?lt.emptyScript:"",ht=D.reactiveElementPolyfillSupport,X={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},dt=(r,t)=>t!==r&&(t==t||r==r),J={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:dt},f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return K(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=J){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:X).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let o=i.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:X;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},ht?.({ReactiveElement:f}),((Z=D.reactiveElementVersions)!==null&&Z!==void 0?Z:D.reactiveElementVersions=[]).push("1.6.1");var G,V=window,C=V.trustedTypes,ct=C?C.createPolicy("lit-html",{createHTML:r=>r}):void 0,Y="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,$t="?"+g,wt=`<${$t}>`,A=document,R=()=>A.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",gt=Array.isArray,Ct=r=>gt(r)||typeof r?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,b=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,mt=/"/g,bt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=yt(1),Tt=yt(2),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),_t=new WeakMap,y=A.createTreeWalker(A,129,null,!1),xt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":"",o=O;for(let a=0;a<e;a++){let l=r[a],m,h,c=-1,v=0;for(;v<l.length&&(o.lastIndex=v,h=o.exec(l),h!==null);)v=o.lastIndex,o===O?h[1]==="!--"?o=pt:h[1]!==void 0?o=ut:h[2]!==void 0?(bt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=b):h[3]!==void 0&&(o=b):o===b?h[0]===">"?(o=i??O,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,m=h[1],o=h[3]===void 0?b:h[3]==='"'?mt:vt):o===mt||o===vt?o=b:o===pt||o===ut?o=O:(o=b,i=void 0);let L=o===b&&r[a+1].startsWith("/>")?" ":"";n+=o===O?l+wt:c>=0?(s.push(m),l.slice(0,c)+Y+l.slice(c)+g+L):l+g+(c===-2?(s.push(void 0),a):L)}let d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ct!==void 0?ct.createHTML(d):d,s]},S=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,d=t.length-1,a=this.parts,[l,m]=xt(t,e);if(this.el=S.createElement(l,s),y.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=y.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(Y)||c.startsWith(g)){let v=m[o++];if(h.push(c),v!==void 0){let L=i.getAttribute(v.toLowerCase()+Y).split(g),M=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:M[2],strings:L,ctor:M[1]==="."?tt:M[1]==="?"?et:M[1]==="@"?st:H})}else a.push({type:6,index:n})}for(let c of h)i.removeAttribute(c)}if(bt.test(i.tagName)){let h=i.textContent.split(g),c=h.length-1;if(c>0){i.textContent=C?C.emptyScript:"";for(let v=0;v<c;v++)i.append(h[v],R()),y.nextNode(),a.push({type:2,index:++n});i.append(h[c],R())}}}else if(i.nodeType===8)if(i.data===$t)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){var i,n,o,d;if(t===E)return t;let a=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,l=z(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=x(r,a._$AS(r,t.values),a,s)),t}var F=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);y.currentNode=n;let o=y.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let m;l.type===2?m=new w(o,o.nextSibling,this,t):l.type===1?m=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(m=new it(o,this,t)),this._$AV.push(m),l=i[++a]}d!==l?.index&&(o=y.nextNode(),d++)}return y.currentNode=A,n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},w=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),z(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ct(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=S.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let o=new F(n,this),d=o.u(this.options);o.v(s),this.$(d),this._$AH=o}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new S(t)),e}T(t){gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new w(this.k(R()),this.k(R()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},H=class{constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=x(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let d=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=x(this,d[s+a],e,a),l===E&&(l=this._$AH[a]),o||(o=!z(l)||l!==this._$AH[a]),l===p?t=p:t!==p&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tt=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Ht=C?C.emptyScript:"",et=class extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}},st=class extends H{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:p)===E)return;let i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var ft=V.litHtmlPolyfillSupport;ft?.(S,w),((G=V.litHtmlVersions)!==null&&G!==void 0?G:V.litHtmlVersions=[]).push("2.7.4");var At=(r,t,e)=>{var s,i;let n=(s=e?.renderBefore)!==null&&s!==void 0?s:t,o=n._$litPart$;if(o===void 0){let d=(i=e?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new w(t.insertBefore(R(),d),d,void 0,e??{})}return o._$AI(r),o};var rt,ot;var u=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=At(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};u.finalized=!0,u._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:u});var Et=globalThis.litElementPolyfillSupport;Et?.({LitElement:u});((ot=globalThis.litElementVersions)!==null&&ot!==void 0?ot:globalThis.litElementVersions=[]).push("3.3.2");var U=class extends u{constructor(){super();this.tabs=[];this.selected_tab_index=0}handleSlotchange(e){let s=e.target;if(!s)return;let i=s.assignedNodes({flatten:!0});this.tabs=i.reduce((n,o)=>{if(o instanceof HTMLElement&&o.tagName.toLowerCase()==="shiny-tab"){let d=o.attributes.getNamedItem("name")?.value;if(!d)return n;n.push({name:d,el:o})}return n},[]),this.select_tab()}select_tab(e=this.selected_tab_index){this.selected_tab_index=e,this.tabs.forEach((s,i)=>{let n=i===e;s.el.style.display=n?"block":"none",s.el.inert=!n})}render(){return $`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="divider"></div>
          <div class="tabs">
            ${this.tabs.map((e,s)=>$`<span
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
    `}};U.properties={tabs:{},selected_tab_index:{}},U.styles=_`
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
  `;function W(r,t,e){let s=document.createAttribute(t);return s.value=e,r.attributes.setNamedItem(s),r}var P=class extends u{constructor(){super(),W(this,"slot","footer")}render(){return $`
      <div class="footer">
        <slot></slot>
      </div>
    `}};P.properties={},P.styles=_`
    :host {
      display: block;
      position: relative;
    }
  `;var N=class extends u{constructor(){super();this.is_open=!0,W(this,"slot","sidebar")}render(){return $`
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
    `}toggle_open(){this.is_open=!this.is_open}};N.properties={is_open:{}},N.styles=_`
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
  `;var k=class extends u{constructor(){super();this.name="tab",this.dataset["shiny-tab"]=this.name}render(){return $`
      <div class="footer">
        <slot></slot>
      </div>
    `}};k.properties={name:{}},k.styles=_`
    :host {
      display: block;
      position: relative;
    }
  `;customElements.define("shiny-footer",P);customElements.define("shiny-sidebar",N);customElements.define("shiny-tabset",U);customElements.define("shiny-tab",k);})();
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
