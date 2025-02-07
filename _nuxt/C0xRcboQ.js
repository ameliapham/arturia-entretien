import{B as k}from"./Cgd-zBkn.js";import"./BAc_ZpKr.js";import"./DlAUqK2U.js";const T={title:"Components/Button",component:k,argTypes:{range:{control:{type:"select"},options:["lab","brute","freak","step","fuse"]},class:{control:"text"},default:{control:"text",description:"Button label (slot content)"}}},a=x=>({components:{Button:k},setup(){return{args:x}},template:'<Button v-bind="args">{{ args.default }}</Button>'}),t=a.bind({});t.args={range:"lab",class:"",default:"Lab Button"};const e=a.bind({});e.args={range:"brute",class:"",default:"Brute Button"};const n=a.bind({});n.args={range:"freak",class:"",default:"Freak Button"};const r=a.bind({});r.args={range:"step",class:"",default:"Step Button"};const s=a.bind({});s.args={range:"fuse",class:"",default:"Fuse Button"};var o,u,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,g,B;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(B=(g=n.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var i,b,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,v,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(F=(v=s.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const C=["Lab","Brute","Freak","Step","Fuse"];export{e as Brute,n as Freak,s as Fuse,t as Lab,r as Step,C as __namedExportsOrder,T as default};
