(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(33),a=n(3),i="ADD_MESSAGE",c={dialogs:[{id:1,name:"Dima",src:"https://avatarko.ru/img/avatar/9/serial_8759.jpg"},{id:2,name:"Andrey",src:"https://avatarko.ru/img/avatar/33/muzhchina_32048.jpg"},{id:3,name:"Sveta",src:"https://avatarko.ru/img/avatar/26/devushka_blondinka_kapyushon_25929.jpg"},{id:4,name:"Sasha",src:"https://avatarko.ru/img/avatar/5/devushka_4066.jpg"},{id:5,name:"Victor",src:"https://avatarko.ru/img/avatar/26/muzhchina_serfing_25374.jpg"}],messages:[{id:1,message:"Hi!",name:"Dima",st:"active"},{id:2,message:"How are you?",name:"Andrey",st:"passive"},{id:3,message:"Wow!",name:"Sveta",st:"active"},{id:4,message:"Yo!",name:"Sasha",st:"passive"},{id:5,message:"Yah!",name:"Victor",st:"active"}]},s=function(e,t){return{type:i,currentName:e,newMessageBody:t}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n="";n=e.messages.length%2===0?"active":"passive";var s=e.messages.length+1;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:s,message:t.newMessageBody,name:t.currentName,st:n}])});default:return e}}},130:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return S})),n.d(t,"b",(function(){return A}));var r=n(7),a=n.n(r),i=n(13),c=n(33),s=n(3),o=n(14),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="FOLLOW",j="UNFOLLOW",d="SET_USERS",b="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingProgress:[]},v=function(e){return{type:l,userID:e}},m=function(e){return{type:j,userID:e}},g=function(e){return{type:b,currentPage:e}},x=function(e){return{type:f,isFetching:e}},_=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(e)),r(x(!0)),n.next=4,o.c.requestUsers(e,t);case 4:0!==(i=n.sent).data&&(r(x(!1)),r((c=i.data.items,{type:d,users:c})),r((a=i.data.totalCount,{type:p,count:a})));case 6:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,r(n);case 3:e.sent,t(i(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,o.c.unFollow.bind(o.c),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,o.c.follow.bind(o.c),v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!0})});case j:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!1})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case b:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case p:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.count});case f:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{isFollowingProgress:t.isFetching?[].concat(Object(c.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}}},132:function(e,t,n){e.exports={preload:"Preloader_preload__PgYFJ"}},136:function(e,t,n){e.exports={top:"ProfileHead_top__13xU8"}},137:function(e,t,n){e.exports={main:"Profile_main__1hnbJ"}},139:function(e,t,n){e.exports={items:"MyPosts_items__KrcgC"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(138),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"75852ffb-adc3-4383-ad7d-adeade81f55b"}}),i={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e),{})},getFollow:function(e){return a.get("follow/".concat(e))}},c={getProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:17889;return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},updateProfile:function(e){return a.put("profile",e)},uploadPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},exit:function(){return a.delete("auth/login")},captcha:function(){return a.get("security/get-captcha-url")}}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),a=n(27),i=n(28),c=n(30),s=n(29),o=n(1),u=n.n(o),l=n(11),j=n(12),d=n(31),b=n(0),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(s.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(r.a)({},this.props)):Object(b.jsx)(l.a,{to:"/Login"})}}]),o}(u.a.Component);return Object(j.b)(p,{ownUserName:d.b})(t)}},171:function(e,t,n){},172:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__254fO",activeLink:"Navbar_activeLink__hl5Dz",friend:"Navbar_friend__wkDLL"}},24:function(e,t,n){e.exports={avatar:"ProfileInfo_avatar__2nVvx",descriptionBlock:"ProfileInfo_descriptionBlock__2Se2i",fullName:"ProfileInfo_fullName__3sSym",inputWrapper:"ProfileInfo_inputWrapper__3WApd",inputFile:"ProfileInfo_inputFile__7Z7i4",inputFileIconWrapper:"ProfileInfo_inputFileIconWrapper__cHxoK",inputFileButtonText:"ProfileInfo_inputFileButtonText__2uOzJ",inputFileButton:"ProfileInfo_inputFileButton__3eqAh",contact:"ProfileInfo_contact__1On_P"}},300:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(69),c=n.n(i),s=(n(171),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))}),o=n(27),u=n(28),l=n(30),j=n(29),d=n(11),b=n(17),p=(n(172),n(0)),f=function(e){return Object(p.jsx)("div",{children:"News"})},h=function(e){return Object(p.jsx)("div",{children:"Music"})},O=n(71);function v(){return Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0444\u043e\u0440\u043c\u0430.")},children:Object(p.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})}var m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={isToggleOn:!0},r.handleClick=r.handleClick.bind(Object(O.a)(r)),r}return Object(u.a)(n,[{key:"handleClick",value:function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){return Object(p.jsx)("button",{onClick:this.handleClick,children:this.state.isToggleOn?"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e":"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e"})}}]),n}(a.a.Component),g=function(){return Object(p.jsxs)("div",{children:["Settings",Object(p.jsx)(v,{}),Object(p.jsx)(m,{})]})},x=n(12),_=n(56),w=n.n(_),k=function(e){return Object(p.jsxs)("div",{className:w.a.item,children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:e.src})}),e.name]})},S=function(e){var t=e.sidebar.friends.map((function(e){return Object(p.jsx)(k,{name:e.name,id:e.id,src:e.src})}));return Object(p.jsxs)("div",{className:w.a.dialogs,children:[Object(p.jsx)("div",{children:"Friends:"}),Object(p.jsx)("div",{className:w.a.dialogItems,children:t})]})},A=Object(x.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(S),y=n(23),N=n.n(y),P=function(e){return Object(p.jsxs)("nav",{className:N.a.nav,children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/Profile",activeClassName:N.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{exact:!0,to:"/Dialogs",activeClassName:N.a.activeLink,children:"Message"})}),Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/News",activeClassName:N.a.activeLink,children:"News"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{to:"/Music",activeClassName:N.a.activeLink,children:"Music"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{to:"/Users",activeClassName:N.a.activeLink,children:"Users"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/Settings",activeClassName:N.a.activeLink,children:"Settings"})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{to:"/Friends",activeClassName:N.a.activeLink,children:"Friends"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("ul",{className:N.a.friend,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e.dialogs[1].src})," ",Object(p.jsx)("br",{}),e.dialogs[1].name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e.dialogs[2].src})," ",Object(p.jsx)("br",{}),e.dialogs[2].name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e.dialogs[3].src}),Object(p.jsx)("br",{}),e.dialogs[3].name]})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/Login",activeClassName:N.a.activeLink,children:"Login"})})]})},C=Object(x.b)((function(e){return{dialogs:e.dialogPage.dialogs}}),(function(){return{}}))(P),F=n(3),E=n(53),L=n(24),T=n.n(L),I=n(54),R=n(97),D=function(e){var t=Object(r.useState)(!1),n=Object(E.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(e.status),s=Object(E.a)(c,2),o=s[0],u=s[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"status:"}),!a&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{disabled:e.userId!==e.id,onClick:function(){return i(!0)},children:e.status})}),a&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){e.userId===e.id&&(i(!1),e.updateStatus(o))},onChange:function(e){return u(e.currentTarget.value)},value:o})})]})},B=n.p+"static/media/add.b7e07a06.svg",U=n(133),H=n(42),M=n.n(H),z=n(127),Y=n(128),q=n(44),V=n(32),W=["handleSubmit","submitting","error"],J=Object(Y.a)({form:"profile"})((function(e){var t=e.handleSubmit,n=e.submitting,r=e.error,a=Object(U.a)(e,W);return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(z.a,{name:"FullName",type:"text",label:"Full Name",component:q.b,validate:[V.c,V.b],value:a.profile.fullName})}),Object(p.jsx)("div",{children:Object(p.jsx)(z.a,{name:"AboutMe",type:"text",label:"About Me",component:q.b,validate:[V.c,V.b],defaultValue:a.profile.aboutMe})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(z.a,{name:"lookingForAJob",component:"input",type:"checkbox"}),"Looking for a job"]}),Object(p.jsx)("div",{children:Object(p.jsx)(z.a,{name:"lookingForAJobDescription",type:"text",label:"Looking for a job description",component:q.b,validate:[V.c,V.b]})}),r&&Object(p.jsx)("span",{className:M.a.formSummaryError,children:r}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",disabled:n,children:"Sign in"})})]})})})),K=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["Full name: ",Object(p.jsx)("i",{children:e.profile.fullName})]}),Object(p.jsxs)("div",{children:["About me: ",Object(p.jsx)("i",{children:e.profile.aboutMe})]}),Object(p.jsx)("div",{children:e.profile.lookingForAJob?Object(p.jsx)("span",{children:Object(p.jsx)("i",{children:"I am looking for a job "})}):Object(p.jsx)("span",{children:Object(p.jsx)("i",{children:"I have a job"})})}),Object(p.jsxs)("div",{children:["Looking for a job description: ",Object(p.jsx)("i",{children:e.profile.lookingForAJobDescription})]}),Object(p.jsxs)("div",{children:["Contacts: ",Object.keys(e.profile.contacts).map((function(t){return Object(p.jsx)(G,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},G=function(e){var t=e.contactTitle,n=e.contactValue;return Object(p.jsxs)("div",{className:T.a.contact,children:[t,": ",Object(p.jsx)("i",{children:n})]})},X=function(e){var t=Object(r.useState)(!1),n=Object(E.a)(t,2),a=n[0],i=n[1];return e.profile?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:T.a.descriptionBlock,children:[Object(p.jsx)("div",{className:T.a.fullName,children:e.profile.fullName}),Object(p.jsx)(D,{userId:e.profile.userId,id:e.id,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:T.a.avatar,src:e.profile.photos.large||R.a})}),e.isOwner&&Object(p.jsxs)("div",{class:T.a.inputWrapper,children:[Object(p.jsx)("input",{type:"file",id:"input__file",className:T.a.inputFile,onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),Object(p.jsxs)("label",{htmlFor:"input__file",className:T.a.inputFileButton,children:[Object(p.jsx)("span",{className:T.a.inputFileIconWrapper,children:Object(p.jsx)("img",{className:T.a.inputFileIcon,src:B,width:"25"})}),Object(p.jsx)("span",{className:T.a.inputFileButtonText,children:"Download your photo"})]})]}),e.isOwner&&Object(p.jsx)("button",{onClick:function(){return i(!0)},children:"edit profile"}),Object(p.jsx)("br",{}),a?Object(p.jsx)(J,{profile:e.profile,updateProfile:e.updateProfile,setEditMode:i,onSubmit:function(t){e.updateProfile(t).then(i(!1))}}):Object(p.jsx)(K,{profile:e.profile}),Object(p.jsx)("div",{children:Object(p.jsx)("br",{})}),Object(p.jsx)("div",{children:Object(p.jsx)("br",{})}),!e.isOwner&&Object(p.jsx)("div",{children:e.follow?Object(p.jsxs)("span",{children:["Subscribed ",e.profile.fullName]}):Object(p.jsxs)("span",{children:["You can subscribe on Users Page to ",e.profile.fullName]})})]})}):Object(p.jsx)(I.a,{})},Z=n(136),Q=n.n(Z),$=a.a.memo((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:Q.a.top,src:"https://wikiway.com/upload/iblock/dfd/16-voshod.jpg"})})})),ee=n(137),te=n.n(ee),ne=n(7),re=n.n(ne),ae=n(13),ie=n(33),ce=n(14),se="social_network/profile/ADD_POST",oe="social_network/profile/SET_USER_PROFILE",ue="social_network/profile/SET_USER_FOLLOW",le="social_network/profile/SET_USER_STATUS",je="social_network/profile/DELETE_POST",de="social_network/profile/SET_USER_PHOTO_SUCCESS",be="social_network/profile/UPDATE_USER_PROFILE",pe={posts:[{id:1,message:"Hi, how are you?",likeCount:11},{id:2,message:"Okay",likeCount:13},{id:3,message:"Right",likeCount:15}],newPostState:"YOY",profile:null,follow:!0,status:""},fe=function(e){return{type:le,status:e}},he=function(e){return{type:be,profile:e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:var n=e.posts.length+1;return Object(F.a)(Object(F.a)({},e),{},{posts:[].concat(Object(ie.a)(e.posts),[{id:n,message:t.text,likeCount:17+n}])});case je:return Object(F.a)(Object(F.a)({},e),{},{posts:Object(ie.a)(e.posts.filter((function(e){return e.id!==t.postId})))});case oe:return Object(F.a)(Object(F.a)({},e),{},{profile:t.profile});case de:return Object(F.a)(Object(F.a)({},e),{},{profile:Object(F.a)(Object(F.a)({},e.profile),{},{photos:t.photos})});case be:return Object(F.a)(Object(F.a)({},e),{},{profile:Object(F.a)(Object(F.a)({},e.profile),{},{fullName:t.profile.FullName,aboutMe:t.profile.AboutMe,lookingForAJob:t.profile.lookingForAJob,lookingForAJobDescription:t.profile.lookingForAJobDescription})});case ue:return Object(F.a)(Object(F.a)({},e),{},{follow:t.follow});case le:return Object(F.a)(Object(F.a)({},e),{},{status:t.status});default:return e}},ve=n(139),me=n.n(ve),ge=n(75),xe=n.n(ge),_e=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:xe.a.item,children:[e.message," "]}),Object(p.jsxs)("div",{className:"".concat(xe.a.item," ").concat(xe.a.active),children:["Like Count: ",e.likeCount]})]})},we=n(40),ke=function(e){var t=e.handleSubmit;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(z.a,{name:"post",component:q.a,label:"Enter you message",validate:[V.c,V.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})};ke=Object(Y.a)({form:"post",onSubmitSuccess:function(e,t){return t(Object(we.a)("post"))}})(ke);var Se=function(e){return Object(p.jsxs)("div",{className:me.a.items,children:["My posts",Object(p.jsx)(ke,{onSubmit:function(t){var n;n=t.post,e.addPost(n)}}),Object(p.jsx)("h3",{children:"NEW POST"}),Object(ie.a)(e.posts).reverse().map((function(e){return Object(p.jsx)(_e,{message:e.message,likeCount:e.likeCount},e.id)}))]})},Ae=Object(x.b)((function(e){return{posts:e.postPage.posts,newPostState:e.postPage.newPostState}}),(function(e){return{addPost:function(t){e(function(e){return{type:se,text:e}}(t))}}}))(Se),ye=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)($,{}),Object(p.jsxs)("div",{className:te.a.main,children:[Object(p.jsx)(X,{profile:e.profile,follow:e.follow,id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,updateProfile:e.updateProfile}),Object(p.jsx)(Ae,{})]})]})},Ne=(n(141),n(10)),Pe=n(31),Ce=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"setPreviousState",value:function(){var e=this.props.match.params.userId;!e&&this.props.isAuth&&((e=this.props.id)||this.props.history.push("/Login")),this.props.getUserProfile(e),this.props.getUserFollow(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.setPreviousState()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.setPreviousState()}},{key:"render",value:function(){return Object(p.jsx)(ye,Object(F.a)(Object(F.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,follow:this.props.follow,status:this.props.status,updateStatus:this.props.updateStatus,id:this.props.id,addPhoto:this.props.savePhoto,updateProfile:this.props.updateProfile}))}}]),n}(a.a.Component),Fe=Object(Ne.d)(Object(x.b)((function(e){return{profile:e.postPage.profile,follow:e.postPage.follow,status:e.postPage.status,id:e.auth.id,isAuth:e.auth.isAuth}}),{ownUserName:Pe.b,getUserProfile:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:oe,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserFollow:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.c.getFollow(e);case 2:r=t.sent,n((a=r.data,{type:ue,follow:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.getStatus(e);case 2:r=t.sent,n(fe(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(fe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.uploadPhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:de,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfile:function(e){return function(){var t=Object(ae.a)(re.a.mark((function t(n){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.updateProfile(e);case 2:0===t.sent.data.resultCode&&n(he(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d.f)(Ce),Ee=n(60),Le=n.n(Ee),Te=function(e){return Object(p.jsxs)("header",{className:Le.a.header,children:[Object(p.jsx)("span",{children:Object(p.jsx)("img",{className:"".concat(Le.a.image," ").concat(Le.a.active),src:"https://avatars.mds.yandex.net/get-pdb/1754666/ed246d9f-c717-44c3-9022-dbd43488dcab/s1200?webp=false"})}),Object(p.jsxs)("span",{className:Le.a.loginBlock,children:[" ",e.isAuth?Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("div",{children:e.login}),Object(p.jsx)("button",{onClick:e.userSignOut,children:"Log out"})]}):Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/Login",children:"Login"})})]})]})},Ie=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(Te,Object(F.a)({},this.props))}}]),n}(a.a.Component),Re=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{userSignOut:Pe.d})(Ie),De="social_network/app/INITIALIZATION_SUCCESSFUL",Be={initialization:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(F.a)(Object(F.a)({},e),{},{initialization:!0});default:return e}},He=n(126),Me={friends:[{id:1,name:"Dima",src:"https://avatarko.ru/img/avatar/9/serial_8759.jpg"},{id:2,name:"Andrey",src:"https://avatarko.ru/img/avatar/33/muzhchina_32048.jpg"},{id:3,name:"Sveta",src:"https://avatarko.ru/img/avatar/26/devushka_blondinka_kapyushon_25929.jpg"},{id:4,name:"Sasha",src:"https://avatarko.ru/img/avatar/5/devushka_4066.jpg"},{id:5,name:"Victor",src:"https://avatarko.ru/img/avatar/26/muzhchina_serfing_25374.jpg"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ye=n(130),qe=n(140),Ve=n(129),We=Object(Ne.c)({initializeReducer:Ue,postPage:Oe,dialogPage:He.b,sidebar:ze,usersPage:Ye.a,auth:Pe.a,form:Ve.a}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,Ke=Object(Ne.e)(We,Je(Object(Ne.a)(qe.a)));window.__store__=Ke;var Ge=Ke,Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),Ze=a.a.lazy((function(){return n.e(5).then(n.bind(null,305))})),Qe=a.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),$e=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getInitialization()}},{key:"render",value:function(){return this.props.initialization?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Re,{}),Object(p.jsx)(C,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(d.b,{path:"/Profile/:userId?",render:function(){return Object(p.jsx)(Fe,{})}}),Object(p.jsx)(d.b,{path:"/News",render:function(){return Object(p.jsx)(f,{})}}),Object(p.jsx)(d.b,{path:"/Music",render:function(){return Object(p.jsx)(h,{})}}),Object(p.jsx)(d.b,{path:"/Settings",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(d.b,{path:"/Friends",render:function(){return Object(p.jsx)(A,{})}}),Object(p.jsxs)(r.Suspense,{fallback:Object(p.jsx)(I.a,{}),children:[Object(p.jsx)(d.b,{path:"/Dialogs",render:function(){return Object(p.jsx)(Qe,{})}}),Object(p.jsx)(d.b,{path:"/Users",render:function(){return Object(p.jsx)(Xe,{})}}),Object(p.jsx)(d.b,{path:"/Login",render:function(){return Object(p.jsx)(Ze,{})}})]})]})]})}):Object(p.jsx)(I.a,{})}}]),n}(a.a.Component),et=Object(Ne.d)(d.f,Object(x.b)((function(e){return{initialization:e.initializeReducer.initialization}}),{getInitialization:function(){return function(){var e=Object(ae.a)(re.a.mark((function e(t){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(Pe.b)()),e.next=3,Promise.all([n]);case 3:t({type:De});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))($e),tt=function(){return Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{store:Ge,children:Object(p.jsx)(et,{})})})};c.a.render(Object(p.jsx)(tt,{}),document.getElementById("root")),s()},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return h}));var r=n(7),a=n.n(r),i=n(13),c=n(3),s=n(14),o=n(40),u=(n(1),"social_network/auth/SET_USER_DATA"),l="social_network/auth/GET_CAPTCHA_URL",j="social_network/auth/DELETE_CAPTCHA_URL",d={id:"",email:"",login:"",password:"",rememberMe:!1,isAuth:!1,serverMessage:"",captchaURL:""},b=function(e,t,n,r){return{type:u,payload:{id:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,i=r.id,c=r.email,o=r.login,t(b(i,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n,r){return function(){var c=Object(i.a)(a.a.mark((function i(c){var u,l,d,b;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n,r);case 2:u=a.sent,c({type:j}),0===u.data.resultCode?c(p()):10===u.data.resultCode?(l=Object(o.b)("login",{captcha:"Enter the captcha"}),c(l),c(O())):1===u.data.resultCode&&(d=u.data.messages.length>0?u.data.messages[0]:"Same error",b=Object(o.b)("login",{_error:d}),c(b));case 5:case"end":return a.stop()}}),i)})));return function(e){return c.apply(this,arguments)}}()},h=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.exit();case 2:0===e.sent.data.resultCode&&t(b(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.captcha();case 2:(n=e.sent).data.url&&t((r=n.data.url,{type:l,url:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),t.payload);case l:return Object(c.a)(Object(c.a)({},e),{},{captchaURL:t.url});case j:return Object(c.a)(Object(c.a)({},e),{},{captchaURL:""});default:return e}}},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=function(e){return e||"number"===typeof e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},i=a(15),c=a(33)},42:function(e,t,n){e.exports={formControl:"FormsContorls_formControl__2l5Zf",error:"FormsContorls_error__3WFxj",formSummaryError:"FormsContorls_formSummaryError__1UJMq"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(3),a=(n(1),n(42)),i=n.n(a),c=n(0),s=function(e){var t=e.input,n=e.label,a=e.type,s=e.meta,o=s.touched,u=s.error,l=s.warning;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(o&&u&&i.a.error),children:[Object(c.jsx)("label",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:a})),Object(c.jsx)("br",{}),o&&(u&&Object(c.jsx)("span",{children:u})||l&&Object(c.jsx)("span",{children:l}))]})]})},o=function(e){var t=e.input,n=e.label,a=e.type,s=e.meta,o=s.touched,u=s.error,l=s.warning;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(o&&u&&i.a.error),children:[Object(c.jsx)("label",{children:n}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:a})),Object(c.jsx)("br",{}),o&&(u&&Object(c.jsx)("span",{children:u})||l&&Object(c.jsx)("span",{children:l}))]})]})}},54:function(e,t,n){"use strict";var r=n.p+"static/media/audio.b9d9b13a.svg",a=(n(1),n(132)),i=n.n(a),c=n(0);t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:i.a.preload,src:r})})}},56:function(e,t,n){e.exports={dialogs:"Friends_dialogs__155f1",dialogItems:"Friends_dialogItems__F-FTd",item:"Friends_item__2vBWj",active:"Friends_active__1GAjJ",name:"Friends_name__3esEP",messages:"Friends_messages__3Wvpk",passive:"Friends_passive__NhNxF"}},60:function(e,t,n){e.exports={header:"Header_header__1iTo0",image:"Header_image__2iO5K",active:"Header_active__1bqCA",loginBlock:"Header_loginBlock__1lcCU"}},75:function(e,t,n){e.exports={item:"Post_item__2Viu7",active:"Post_active__2n0ms"}},97:function(e,t,n){"use strict";t.a="data:image/png;base64,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"}},[[300,1,2]]]);
//# sourceMappingURL=main.1427bc54.chunk.js.map