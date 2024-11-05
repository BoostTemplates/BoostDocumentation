"use strict";(self.webpackChunkboost_documentation=self.webpackChunkboost_documentation||[]).push([[708],{2750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(4848),i=r(8453);const n={sidebar_position:3},o="Create Public Route",a={id:"tutorial-basics/create_public_route",title:"Create Public Route",description:"This is standard feature provided by Flask. Boost divides routes and forms into seperate files, and these are divided into private, public, and only accessible by admin. All files serving routes and forms need to be registered (imported) to main/init.py.",source:"@site/docs/tutorial-basics/create_public_route.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create_public_route",permalink:"/BoostDocumentation/docs/tutorial-basics/create_public_route",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create_public_route.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Product",permalink:"/BoostDocumentation/docs/tutorial-basics/create_product"},next:{title:"Create Private Route",permalink:"/BoostDocumentation/docs/tutorial-basics/create_priv_route"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"create-public-route",children:"Create Public Route"})}),"\n",(0,s.jsxs)(t.p,{children:["This is standard feature provided by Flask. Boost divides routes and forms into seperate files, and these are divided into private, public, and only accessible by admin. All files serving routes and forms need to be registered (imported) to ",(0,s.jsx)(t.code,{children:"main/__init__.py"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To create new route, simply go to ",(0,s.jsx)(t.code,{children:"pub_routes.py"})," and add new function like:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Python",children:"@routes_bp.route('/my_new_route')\ndef my_new_route():\n    response = make_response(render_template('pub/my_new_route.html'))  # Render your template\n    return response\n"})}),"\n",(0,s.jsx)(t.h1,{id:"where-are-files-served-from",children:"Where are files served from"}),"\n",(0,s.jsxs)(t.p,{children:["Files for public and private routes are served from ",(0,s.jsx)(t.code,{children:"templates"})," directory which divides into subdirectories."]}),"\n",(0,s.jsx)(t.p,{children:"Default file routes look similar to this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"templates\n\u251c\u2500\u2500 admin\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin.html\n\u2502\xa0\xa0 \u2514\u2500\u2500 login.html\n\u251c\u2500\u2500 priv\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.html\n\u2514\u2500\u2500 pub\n    \u251c\u2500\u2500 404.html\n    \u251c\u2500\u2500 base.html\n    \u251c\u2500\u2500 join.html\n    \u251c\u2500\u2500 password_recovery.html\n    \u2514\u2500\u2500 success.html\n"})}),"\n",(0,s.jsx)(t.h1,{id:"where-are-statics-served-from",children:"Where are statics served from:"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.code,{children:"templates"})," static files are served from ",(0,s.jsx)(t.code,{children:"static"})," directory which is divided into subdirectories:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"main/static\n\u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.css\n\u2514\u2500\u2500 icon\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(6540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);