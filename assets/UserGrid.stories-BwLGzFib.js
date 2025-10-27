import{a as c}from"./index-B9CHDvjL.js";import"./iframe-BNXAg7bn.js";import"./preload-helper-DJhfBHO7.js";import"./index-4NuNxk69.js";const l={title:"Components/UserGrid",component:c,tags:["autodocs"],parameters:{layout:"centered"}},t=Array.from({length:12},(n,r)=>({id:r+1,login:`user${r+1}`,avatar_url:`https://github.com/user${r+1}.png`,html_url:`https://github.com/user${r+1}`,type:r%3===0?"Organization":"User",score:Math.random()*100})),e={args:{users:t}},s={args:{users:[t[0]]}},a={args:{users:t.slice(0,3)}},o={args:{users:Array.from({length:50},(n,r)=>({id:r+1,login:`developer${r+1}`,avatar_url:`https://github.com/developer${r+1}.png`,html_url:`https://github.com/developer${r+1}`,type:r%4===0?"Organization":"User",score:Math.random()*100}))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    users: mockUsers
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    users: [mockUsers[0]]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    users: mockUsers.slice(0, 3)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    users: Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      login: \`developer\${i + 1}\`,
      avatar_url: \`https://github.com/developer\${i + 1}.png\`,
      html_url: \`https://github.com/developer\${i + 1}\`,
      type: i % 4 === 0 ? 'Organization' : 'User',
      score: Math.random() * 100
    }))
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","SingleUser","FewUsers","ManyUsers"];export{e as Default,a as FewUsers,o as ManyUsers,s as SingleUser,g as __namedExportsOrder,l as default};
