let l;const S=new Uint8Array(16);function A(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(S)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function f(e,t=0){return i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]}const D=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),h={randomUUID:D};function I(e,t,r){if(h.randomUUID&&!e)return h.randomUUID();e=e||{};const n=e.random||(e.rng||A)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,f(n)}const{addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:w}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:p}=__STORYBOOK_MODULE_GLOBAL__;var U="storybook/actions",j=`${U}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},E=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:E(r,t)},C=e=>!!(typeof e=="object"&&e&&E(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),K=e=>{if(C(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(n.constructor.prototype)}),t}return e},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?I():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(e,t={}){let r={...V,...t},n=function(...s){var g,O;if(t.implicit){let y=(g="__STORYBOOK_PREVIEW__"in p?p.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(y){let d=!((O=window==null?void 0:window.FEATURES)!=null&&O.disallowImplicitActionsInRenderV8),R=new w({phase:y.phase,name:e,deprecated:d});if(d)console.warn(R);else throw R}}let o=v.getChannel(),c=L(),a=5,u=s.map(K),b=s.length>1?u:u[0],x={id:c,count:0,data:{name:e,args:b},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};o.emit(j,x)};return n.isAction=!0,n.implicit=t.implicit,n}var T=(e,t)=>typeof t[e]>"u"&&!(e in t),B=e=>{let{initialArgs:t,argTypes:r,id:n,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!r)return{};let o=new RegExp(s.argTypesRegex);return Object.entries(r).filter(([c])=>!!o.test(c)).reduce((c,[a,u])=>(T(a,t)&&(c[a]=_(a,{implicit:!0,id:n})),c),{})},M=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:n}}=e;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([s,o])=>!!o.action).reduce((s,[o,c])=>(T(o,t)&&(s[o]=_(typeof c.action=="string"?c.action:o)),s),{})},Y=[M,B],m=!1,P=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!m&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in p&&typeof globalThis.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=p.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,s)=>{let o=n.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(c=>o.startsWith(c)))&&_(o)(s)}),m=!0}},N=[P];export{Y as argsEnhancers,N as loaders};
