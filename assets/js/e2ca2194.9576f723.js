"use strict";(self.webpackChunkboost_documentation=self.webpackChunkboost_documentation||[]).push([[306],{3441:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(4848),t=o(8453);const s={},i="Docker Containers",c={id:"features/Docker",title:"Docker Containers",description:"This template provide two docker containers operating in one network:",source:"@site/docs/features/Docker.md",sourceDirName:"features",slug:"/features/Docker",permalink:"/BoostDocumentation/docs/features/Docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nginx Configuration Documentation",permalink:"/BoostDocumentation/docs/features/nginx"}},a={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"docker-containers",children:"Docker Containers"})}),"\n",(0,r.jsx)(n.p,{children:"This template provide two docker containers operating in one network:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"version: '3'\nservices:\n  server:\n    [...]\n\n  database:\n    [...]\n\nnetworks:\n  db:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Do not change ",(0,r.jsx)(n.code,{children:"database"})," container, but if you need to add more microservices feel free to base your other dockers on ",(0,r.jsx)(n.code,{children:"server"})," docker configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["To build other microservices specify another dockerfiles like the one specified for ",(0,r.jsx)(n.code,{children:"server"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"container-network",children:"Container Network"}),"\n",(0,r.jsxs)(n.p,{children:["Both dockers operate in ",(0,r.jsx)(n.code,{children:"db"})," network, and can access eachother by not specifing ",(0,r.jsx)(n.code,{children:"ip_addresses"})," but rather passing their service names into the network configurations in python code or docker configuration. This feature simplify container to container communication."]}),"\n",(0,r.jsx)(n.h1,{id:"db-backup",children:"DB backup"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally postgres docker specify backup. So everytime you will restart it, it will fetch data from ",(0,r.jsx)(n.code,{children:"database"})," directory. You can do clean restart by removing everything from inside this directory."]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);