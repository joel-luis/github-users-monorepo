import{U as o}from"./index-B9CHDvjL.js";import"./iframe-BNXAg7bn.js";import"./preload-helper-DJhfBHO7.js";import"./index-4NuNxk69.js";const m={title:"Components/UserCard",component:o,tags:["autodocs"],parameters:{layout:"centered"}},s={id:1,login:"octocat",avatar_url:"https://github.com/octocat.png",html_url:"https://github.com/octocat",type:"User",score:1},r={args:{user:s}},e={args:{user:{...s,login:"github",type:"Organization",avatar_url:"https://github.com/github.png",html_url:"https://github.com/github"}}},t={args:{user:{...s,login:"very-long-username-that-might-overflow"}}},a={args:{user:{...s,login:"user-with_special.chars"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUser
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      ...mockUser,
      login: 'github',
      type: 'Organization',
      avatar_url: 'https://github.com/github.png',
      html_url: 'https://github.com/github'
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      ...mockUser,
      login: 'very-long-username-that-might-overflow'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      ...mockUser,
      login: 'user-with_special.chars'
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","Organization","LongUsername","WithSpecialCharacters"];export{r as Default,t as LongUsername,e as Organization,a as WithSpecialCharacters,g as __namedExportsOrder,m as default};
