(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[6],{445:function(e,t,a){"use strict";a.r(t);var c=a(24),n=a(57),s=a(43),i=a(44),r=a(46),b=a(45),j=a(0),o=a.n(j),l=a(34),m=a(82),d=a.n(m),h=a(229),p=a(230),u=a(96),O=a(74),x=a(103),v=a(1),f=Object(p.a)({form:"login"})((function(e){var t=e.handleSubmit,a=(e.submitting,e.error);return Object(v.jsx)("div",{style:{maxWidth:"300px"},children:Object(v.jsxs)("form",{onSubmit:t,children:[Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{name:"email",type:"email",label:"Email",component:u.b,validate:[O.b,O.a]})}),Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{name:"password",type:"password",label:"password",component:u.b,validate:[O.b,O.a]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{name:"rememberMe",component:"input",type:"checkbox"})," Remember Me"]}),Object(v.jsx)("div",{children:a&&Object(v.jsx)("span",{className:d.a.formSummaryError,children:a})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:d.a.button,children:Object(v.jsx)(x.a,{children:"Sign in"})})})]})})})),g=Object(p.a)({form:"login"})((function(e){var t=e.handleSubmit,a=(e.submitting,e.error);return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:t,children:[Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{name:"email",type:"email",label:"Email",component:u.b,validate:[O.b,O.a]})}),Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{name:"password",type:"password",label:"password",component:u.b,validate:[O.b,O.a]})}),Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{name:"captcha",type:"text",label:"AntiBot",component:u.b,validate:[O.b]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{name:"rememberMe",component:"input",type:"checkbox"})," Remember Me"]}),a&&Object(v.jsx)("span",{className:d.a.formSummaryError,children:a}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:d.a.button,children:Object(v.jsx)(x.a,{children:"Sign in"})})})]})})})),S=function(e){Object(r.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).submit=function(t){e.props.userSignIn(t.email,t.password,t.rememberMe,t.captcha)},e.unSubmit=function(){e.props.userSignOut()},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(v.jsx)(l.a,{to:"/Profile"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Login"}),this.props.captchaURL?Object(v.jsx)(g,{onSubmit:this.submit}):Object(v.jsx)(f,{onSubmit:this.submit}),this.props.captchaURL&&Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:this.props.captchaURL,alt:""})})]})}}]),a}(o.a.Component),y=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL,serverMessage:e.auth.serverMessage}}),{userSignIn:n.d,userSignOut:n.e})(S);t.default=y}}]);
//# sourceMappingURL=6.5a926245.chunk.js.map