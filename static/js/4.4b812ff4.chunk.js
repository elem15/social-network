(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[4],{439:function(e,t,n){e.exports={listContainer:"Paginator_listContainer__RQ9OM",listContainerCn:"Paginator_listContainerCn__3a6o_",selectedPage:"Paginator_selectedPage__vuYZk",unSelectedPage:"Paginator_unSelectedPage__3PrPg"}},440:function(e,t,n){e.exports={users:"Users_users__2xFJp",userPhoto:"Users_userPhoto__1t5f-"}},444:function(e,t,n){"use strict";n.r(t);var r=n(43),s=n(44),o=n(46),a=n(45),i=n(0),c=n.n(i),l=n(24),u=n(125),h=n(6),f=n(78),p=n(8),d=n(439),g=n.n(d),b=n(5),j=n.n(b),x=n(2),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z"}}]},name:"vertical-right",theme:"outlined"},m=n(11),v=function(e,t){return i.createElement(m.a,Object(x.a)(Object(x.a)({},e),{},{ref:t,icon:O}))};v.displayName="VerticalRightOutlined";var P=i.forwardRef(v),C=n(135),w=n(100),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 00254 164z"}}]},name:"vertical-left",theme:"outlined"},F=function(e,t){return i.createElement(m.a,Object(x.a)(Object(x.a)({},e),{},{ref:t,icon:y}))};F.displayName="VerticalLeftOutlined";var k=i.forwardRef(F),S=n(1),N=function(e){for(var t=e.totalItemCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,a=void 0===o?5:o,i=e.portionNumber,c=e.setPortionNumber,l=Math.ceil(t/n),u=[],h=1;h<=l;h++)u.push(h);var f=Math.ceil(l/a);null===i&&(i=1);var d=(i-1)*a+1,b=i*a;return Object(S.jsxs)("div",{className:j()(g.a.listContainer,g.a.listContainerCn),children:[d>1&&Object(S.jsx)(P,{style:{color:"green"},onClick:function(){return c(1)}}),d>1&&Object(S.jsx)(C.a,{style:{color:"cornflowerblue"},onClick:function(){return c(i-1)}}),u.filter((function(e){return e<=b&&e>=d})).map((function(e){var t=r===e;return Object(S.jsx)("span",{className:j()(Object(p.a)({},g.a.selectedPage,t),Object(p.a)({},g.a.unSelectedPage,!t)),onClick:function(){!t&&s(e)},children:e},e)})),Object(S.jsxs)("span",{children:[b<l&&Object(S.jsx)(w.a,{style:{color:"cornflowerblue"},onClick:function(){return c(i+1)}}),b<l&&Object(S.jsx)(k,{style:{color:"green"},onClick:function(){return c(f)}})]})]})},U=n(440),_=n.n(U),z=n(226),I=n(47),A=n(227),E=n(443),R=n(425),V=n(426),L=function(e){var t=e.user,n=e.isAuth,r=e.isFollowingProgress,s=e.unFollow,o=e.follow;return Object(S.jsx)(E.a,{title:t.name,extra:Object(S.jsx)(I.c,{to:"/Profile/"+t.id,children:"profile..."}),style:{width:220,height:185},children:Object(S.jsxs)(R.a,{children:[Object(S.jsx)(V.a,{span:12,children:Object(S.jsx)(I.c,{to:"/Profile/"+t.id,children:Object(S.jsx)("img",{src:null!=t.photos.small?t.photos.small:z.a,className:_.a.userPhoto,alt:"profile"})})}),Object(S.jsxs)(V.a,{span:12,style:{textAlign:"center"},children:[n&&Object(S.jsx)(A.a,{followed:t.followed,userId:t.id,isFollowingProgress:r,unFollow:s,follow:o}),Object(S.jsx)("div",{children:t.status})]})]})})},M=n(430),T=n(103),q=n(3),D=n(4),B=n(116),J=n(15),K=n(35),H=n(31),W=i.forwardRef((function(e,t){var n,r=e.prefixCls,s=void 0===r?"rc-switch":r,o=e.className,a=e.checked,c=e.defaultChecked,l=e.disabled,u=e.loadingIcon,f=e.checkedChildren,d=e.unCheckedChildren,g=e.onClick,b=e.onChange,x=e.onKeyDown,O=Object(J.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),m=Object(K.a)(!1,{value:a,defaultValue:c}),v=Object(h.a)(m,2),P=v[0],C=v[1];function w(e,t){var n=P;return l||(C(n=e),null===b||void 0===b||b(n,t)),n}var y=j()(s,o,(n={},Object(p.a)(n,"".concat(s,"-checked"),P),Object(p.a)(n,"".concat(s,"-disabled"),l),n));return i.createElement("button",Object.assign({},O,{type:"button",role:"switch","aria-checked":P,disabled:l,className:y,ref:t,onKeyDown:function(e){e.which===H.a.LEFT?w(!1,e):e.which===H.a.RIGHT&&w(!0,e),null===x||void 0===x||x(e)},onClick:function(e){var t=w(!P,e);null===g||void 0===g||g(t,e)}}),u,i.createElement("span",{className:"".concat(s,"-inner")},P?f:d))}));W.displayName="Switch";var G=W,Q=n(93),Y=n(81),Z=n(70),X=n(232),$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n},ee=i.forwardRef((function(e,t){var n,r=e.prefixCls,s=e.size,o=e.disabled,a=e.loading,c=e.className,l=void 0===c?"":c,u=$(e,["prefixCls","size","disabled","loading","className"]),h=i.useContext(Q.b),f=h.getPrefixCls,p=h.direction,d=i.useContext(Z.b),g=i.useContext(Y.b),b=(null!==o&&void 0!==o?o:g)||a,x=f("switch",r),O=i.createElement("div",{className:"".concat(x,"-handle")},a&&i.createElement(B.a,{className:"".concat(x,"-loading-icon")})),m=j()((n={},Object(D.a)(n,"".concat(x,"-small"),"small"===(s||d)),Object(D.a)(n,"".concat(x,"-loading"),a),Object(D.a)(n,"".concat(x,"-rtl"),"rtl"===p),n),l);return i.createElement(X.a,{insertExtraNode:!0},i.createElement(G,Object(q.a)({},u,{prefixCls:x,className:m,disabled:b,ref:t,loadingIcon:O})))}));ee.__ANT_SWITCH=!0;var te=ee,ne=M.a.Search,re=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.isFollowingProgress,a=e.unFollow,c=e.follow,l=e.isFetching,u=e.users,p=e.isAuth,d=e.portionNumber,g=e.setPortionNumber,b=e.setIsFriends,j=e.setSearchUser,x=e.onSearchUserPageChanged,O=e.isFriends,m=function(e){j(""),b(e),x(1,e,"")},v=Object(i.useState)(null),P=Object(h.a)(v,2),C=P[0],w=P[1];return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[" ",l?Object(S.jsx)(f.a,{}):null]}),Object(S.jsxs)(R.a,{children:[Object(S.jsxs)(V.a,{style:{margin:"10px 30px 10px 0"},xs:{span:24,offset:0},sm:{span:15,offset:0},children:[null===O&&Object(S.jsx)(T.a,{type:"primary",onClick:function(){return m(!0)},children:"click to show only friends"}),O&&Object(S.jsx)(T.a,{type:"dashed",onClick:function(){return m(!1)},children:"click to show everyone except friends"}),!1===O&&Object(S.jsx)(T.a,{onClick:function(){return m(null)},children:"click to show all users"}),Object(S.jsx)(N,{totalItemCount:t,pageSize:n,currentPage:r,onPageChanged:s,portionNumber:d,setPortionNumber:g})]}),Object(S.jsxs)(V.a,{style:{margin:"10px 30px 10px 0"},xs:{span:24,offset:0},sm:{span:7,offset:0},children:[Object(S.jsx)(ne,{placeholder:"Search user",onSearch:function(e){j(e),x(1,C,e)},enterButton:!0,style:{maxWidth:"300px"}}),Object(S.jsx)("br",{}),Object(S.jsx)(te,{onChange:function(e){e||(e=null),w(e)}})," Only friends"]})]}),Object(S.jsx)(R.a,{children:u.map((function(e){return Object(S.jsx)(V.a,{style:{margin:"10px 30px 10px 0"},xs:{span:24,offset:0},sm:{span:14,offset:2},md:{span:10,offset:2},lg:{span:8,offset:3},xl:{span:5,offset:1},xxl:{span:4,offset:2},children:Object(S.jsx)(L,{user:e,isFollowingProgress:o,unFollow:a,follow:c,isAuth:p})},e.id)}))})]})},se=n(32);function oe(e,t){return e===t}function ae(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,s=0;s<r;s++)if(!e(t[s],n[s]))return!1;return!0}function ie(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var ce=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];var o=0,a=r.pop(),i=ie(r),c=e.apply(void 0,[function(){return o++,a.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return c.apply(null,e)}));return l.resultFunc=a,l.dependencies=i,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe,n=null,r=null;return function(){return ae(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var le=ce((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.isFollowingProgress},ge=function(e){return e.usersPage.portionNumber},be=function(e){return e.auth.isAuth},je=function(e){return e.usersPage.isFriends},xe=function(e){return e.usersPage.searchUser},Oe=n(421).a.Title,me=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize,n.isFriends,n.searchUser)},e.onSearchUserPageChanged=function(t,n,r){var s=e.props;(0,s.requestUsers)(t,s.pageSize,n,r)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize,e.isFriends,e.searchUser)}},{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Oe,{level:4,children:this.props.pageTitle}),Object(S.jsx)(re,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,onSearchUserPageChanged:this.onSearchUserPageChanged,setIsFriends:this.props.setIsFriends,setSearchUser:this.props.setSearchUser,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,isFollowingProgress:this.props.isFollowingProgress,toggleIsFetching:this.props.toggleIsFetching,isAuth:this.props.isAuth,portionNumber:this.props.portionNumber,setPortionNumber:this.props.setPortionNumber,isFriends:this.props.isFriends})]})}}]),n}(c.a.Component);t.default=Object(se.d)(Object(l.b)((function(e){return{users:le(e),pageSize:ue(e),totalUsersCount:he(e),currentPage:fe(e),isFetching:pe(e),isFollowingProgress:de(e),isAuth:be(e),portionNumber:ge(e),isFriends:je(e),searchUser:xe(e)}}),{follow:u.b,unFollow:u.h,requestUsers:u.c,toggleIsFetching:u.g,setPortionNumber:u.e,setIsFriends:u.d,setSearchUser:u.f}))(me)}}]);
//# sourceMappingURL=4.4b812ff4.chunk.js.map