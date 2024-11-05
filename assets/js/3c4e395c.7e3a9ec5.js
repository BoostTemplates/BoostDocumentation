"use strict";(self.webpackChunkboost_documentation=self.webpackChunkboost_documentation||[]).push([[852],{9650:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=s(4848),a=s(8453);const o={sidebar_position:2},t="User Management",l={id:"features/user_management",title:"User Management",description:"Boost provides basic of usermanagement, so you can start your app without worrying about how to log in users, store them or manage their password. All passwords are hashed, and user can be easily extented by modyfing models/user.py.",source:"@site/docs/features/user_management.md",sourceDirName:"features",slug:"/features/user_management",permalink:"/docs/features/user_management",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/user_management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tasks",permalink:"/docs/features/tasks"},next:{title:"Shop",permalink:"/docs/features/shop"}},i={},u=[{value:"Accessing users from Flask:",id:"accessing-users-from-flask",level:2},{value:"Accessing users from Celery:",id:"accessing-users-from-celery",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"user-management",children:"User Management"})}),"\n",(0,r.jsxs)(n.p,{children:["Boost provides basic of usermanagement, so you can start your app without worrying about how to log in users, store them or manage their password. All passwords are hashed, and user can be easily extented by modyfing ",(0,r.jsx)(n.code,{children:"models/user.py"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'import uuid\nfrom config import db\nfrom flask_sqlalchemy import SQLAlchemy\nclass User(db.Model):\n    __tablename__="user"\n\n    id = db.Column(db.String(80), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)\n    username = db.Column(db.String(80), unique=True, nullable=False)\n    email = db.Column(db.String(120), unique=True, nullable=False)\n    password = db.Column(db.String(120), nullable=False)\n    activated = db.Column(db.Boolean, nullable=True)\n    last_login = db.Column(db.DateTime, nullable=True)\n    logged_ttl = db.Column(db.Integer, nullable=True)\n    unique_session_id = db.Column(db.String(120), nullable=True)\n    access_token = db.Column(db.String(120), nullable=True)\n    available_tokens = db.Column(db.Integer, nullable=False, default = lambda: 0)\n    frozen_tokens = db.Column(db.Integer, nullable=False, default = lambda: 0)\n\n    ################ SPECIFY YOUR OWN FIELDS ######################\n    # FOR EXAMPLE license: \n    license = db.Column(db.String(120), nullable=True)   # License keys often use strings, but ensure length fits\n'})}),"\n",(0,r.jsx)(n.p,{children:"User during its lifecycle is stored in postgres database, so both Celery tasks and Flask operations can reach to the same database to fetch or edit same userbase."}),"\n",(0,r.jsx)(n.h2,{id:"accessing-users-from-flask",children:"Accessing users from Flask:"}),"\n",(0,r.jsx)(n.p,{children:"To access users from Celery task, you need to import following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"from config import db\nfrom models.user import User\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then to find user you can call query search:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'user = User.query.filter_by(username="johnymnemonic").first()\n'})}),"\n",(0,r.jsx)(n.p,{children:"To commit changes you can just simply call:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"db.session.commit()\n"})}),"\n",(0,r.jsx)(n.p,{children:"To add new user:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'user = User(\n    username = "johnymnemonic",\n    email = "johny@mnemonic.com",\n    password = bcrypt.generate_password_hash(\n        "hashedmemory"\n    ).decode(\n        \'utf-8\'\n    ),\n    last_login = datetime.now(),\n    activated = False # email\n)\n\ndb.session.add(user)\ndb.session.commit()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"accessing-users-from-celery",children:"Accessing users from Celery:"}),"\n",(0,r.jsx)(n.p,{children:"To access users from Celery task, you need to import following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"from tasks import session\nfrom models.user import User\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then to find user you can call query search:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'user = User.query.filter_by(username="johnymnemonic").first()\n'})}),"\n",(0,r.jsx)(n.p,{children:"To commit changes you can just simply call:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"session.commit()\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(6540);const a={},o=r.createContext(a);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);