(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[3],{424:function(e,n,t){e.exports={users:"Users_users__2xFJp",userPhoto:"Users_userPhoto__1t5f-"}},425:function(e,n,t){e.exports={listContainer:"Paginator_listContainer__RQ9OM",listContainerCn:"Paginator_listContainerCn__3a6o_",selectedPage:"Paginator_selectedPage__vuYZk",unSelectedPage:"Paginator_unSelectedPage__3PrPg"}},428:function(e,n,t){"use strict";t.r(n);var r=t(70),s=t(71),o=t(74),i=t(73),u=t(0),c=t.n(u),l=t(29),a=t(116),g=t(424),h=t.n(g),p=t(92),j=t(135),f=t(63),d=t(425),b=t.n(d),P=t(6),v=t.n(P),O=t(1),x=function(e){for(var n=e.totalItemCount,t=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,c=Math.ceil(n/t),l=[],a=1;a<=c;a++)l.push(a);var g=Object(u.useState)(1),h=Object(f.a)(g,2),p=h[0],d=h[1],P=Math.ceil(c/i);null===p&&(p=1);var x=(p-1)*i+1,w=p*i;return Object(O.jsxs)("div",{className:v()(b.a.listContainer,b.a.listContainerCn),children:[x>1&&Object(O.jsx)("button",{onClick:function(){return d(1)},children:"begin"}),x>1&&Object(O.jsx)("button",{onClick:function(){return d(p-1)},children:"prev"}),l.filter((function(e){return e<=w&&e>=x})).map((function(e){var n=r===e;return Object(O.jsx)("span",{className:v()(Object(j.a)({},b.a.selectedPage,n),Object(j.a)({},b.a.unSelectedPage,!n)),onClick:function(){!n&&s(e)},children:e},e)})),Object(O.jsxs)("span",{children:[w<c&&Object(O.jsx)("button",{onClick:function(){return d(p+1)},children:"next"}),w<c&&Object(O.jsx)("button",{onClick:function(){return d(P)},children:"end"})]})]})},w=t(188),C=t(30),F=t(210),y=function(e){var n=e.user,t=e.isAuth,r=e.isFollowingProgress,s=e.unFollow,o=e.follow;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(C.c,{to:"/Profile/"+n.id,children:Object(O.jsx)("img",{src:null!=n.photos.small?n.photos.small:w.a,className:h.a.userPhoto})})}),t&&Object(O.jsx)(F.a,{followed:n.followed,userId:n.id,isFollowingProgress:r,unFollow:s,follow:o})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"user.location.city"}),Object(O.jsx)("div",{children:"user.location.country"})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:n.name}),Object(O.jsx)("div",{children:n.status})]})]}),Object(O.jsx)("hr",{})]})},_=function(e){var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.isFollowingProgress,i=e.unFollow,u=e.follow,c=e.isFetching,l=e.users,a=e.isAuth;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[" ",c?Object(O.jsx)(p.a,{}):null]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{totalItemCount:n,pageSize:t,currentPage:r,onPageChanged:s}),Object(O.jsx)("div",{className:h.a.users,children:l.map((function(e){return Object(O.jsx)(y,{user:e,isFollowingProgress:o,unFollow:i,follow:u,isAuth:a},e.id)}))})]})]})},m=t(31);function S(e,n){return e===n}function k(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!e(n[s],t[s]))return!1;return!0}function A(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var z=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var o=0,i=r.pop(),u=A(r),c=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(t)),l=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return c.apply(null,e)}));return l.resultFunc=i,l.dependencies=u,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,t=null,r=null;return function(){return k(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var U=z((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),I=function(e){return e.usersPage.pageSize},M=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},J=function(e){return e.usersPage.isFollowingProgress},R=function(e){return e.auth.isAuth},D=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var t=e.props;(0,t.requestUsers)(n,t.pageSize)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:this.props.pageTitle}),Object(O.jsx)(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,isFollowingProgress:this.props.isFollowingProgress,toggleIsFetching:this.props.toggleIsFetching,isAuth:this.props.isAuth})]})}}]),t}(c.a.Component);n.default=Object(m.d)(Object(l.b)((function(e){return{users:U(e),pageSize:I(e),totalUsersCount:M(e),currentPage:N(e),isFetching:q(e),isFollowingProgress:J(e),isAuth:R(e)}}),{follow:a.b,unFollow:a.e,requestUsers:a.c,toggleIsFetching:a.d}))(D)}}]);
//# sourceMappingURL=3.1a3d3459.chunk.js.map