"use strict";(self.webpackChunkboost_documentation=self.webpackChunkboost_documentation||[]).push([[802],{6284:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=s(4848),o=s(8453);const i={sidebar_position:1},a="Create Task",n={id:"tutorial-basics/create_task",title:"Create Task",description:"One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery.",source:"@site/docs/tutorial-basics/create_task.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create_task",permalink:"/BoostDocumentation/docs/tutorial-basics/create_task",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create_task.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/BoostDocumentation/docs/category/tutorial---basics"},next:{title:"Create Product",permalink:"/BoostDocumentation/docs/tutorial-basics/create_product"}},c={},d=[{value:"Create your first task",id:"create-your-first-task",level:2},{value:"Register your first task",id:"register-your-first-task",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-task",children:"Create Task"})}),"\n",(0,r.jsx)(t.p,{children:"One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery."}),"\n",(0,r.jsxs)(t.p,{children:["Tasks are divided into two sections: ",(0,r.jsx)(t.code,{children:"task"})," and ",(0,r.jsx)(t.code,{children:"reply"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"tasks"})," and ",(0,r.jsx)(t.code,{children:"replies"})," are running asynchrounously to the rest of the application. The ",(0,r.jsx)(t.code,{children:"task"})," is process executed in Celery workers, while ",(0,r.jsx)(t.code,{children:"reply"})," is result collector, which keeps track of all tasks in execution and checks when they are collected."]}),"\n",(0,r.jsx)(t.h2,{id:"create-your-first-task",children:"Create your first task"}),"\n",(0,r.jsxs)(t.p,{children:["To create your first tasks, you need to first go to: ",(0,r.jsx)(t.code,{children:"app\\tasks\\services"}),", there you will find ",(0,r.jsx)(t.code,{children:"user_tasks.py"})," which serves as example for tasks. Simply open that file and add following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Python",children:'def my_first_task(user_id,payload):\n    # here goes your code\n    print("Hello from my first tasks")\n    return user_id\n\ndef my_first_task_reply(task_id, user_id, payload):\n    # here goes reply code\n    # payload = `required_payload` from `user_task`\n    print(f"Hello from my first task reply: {payload}")\n'})}),"\n",(0,r.jsx)(t.h2,{id:"register-your-first-task",children:"Register your first task"}),"\n",(0,r.jsxs)(t.p,{children:["To register your own tasks, you need to first go to: ",(0,r.jsx)(t.code,{children:"app\\tasks\\services"}),", there you will find two files ",(0,r.jsx)(t.code,{children:"__init__.py"})," which works as tasks register. Open it and register your tasks:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Python",children:'TaskStore().register_task(\n    "my_first_task",\n    my_first_task,\n    my_first_task_reply,\n    0 # set cost to zero\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now it should be visible in ",(0,r.jsx)(t.code,{children:"user's dashboard"})," after login."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>n});var r=s(6540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);