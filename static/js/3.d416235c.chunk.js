(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[3],{301:function(e,n,t){e.exports={users:"Users_users__37jCp",userPhoto:"Users_userPhoto__156-W"}},302:function(e,n,t){e.exports={listContainer:"Paginator_listContainer__1C4wK",selectedPage:"Paginator_selectedPage__3Vf54",unSelectedPage:"Paginator_unSelectedPage__3wq28"}},306:function(e,n,t){"use strict";t.r(n);var r=t(21),s=t(22),o=t(24),i=t(23),c=t(1),u=t.n(c),l=t(12),a=t(130),g=t(301),p=t.n(g),d=t(49),j=t(89),h=t(302),f=t.n(h),b=t(0),v=function(e){for(var n=e.totalItemCount,t=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(n/t),l=[],a=1;a<=u;a++)l.push(a);var g=Object(c.useState)(1),p=Object(j.a)(g,2),d=p[0],h=p[1],v=Math.ceil(u/i),O=(d-1)*i+1,P=d*i;return Object(b.jsxs)("div",{className:f.a.listContainer,children:[O>1&&Object(b.jsx)("button",{onClick:function(){return h(1)},children:"begin"}),O>1&&Object(b.jsx)("button",{onClick:function(){return h(d-1)},children:"prev"}),l.filter((function(e){return e<=P&&e>=O})).map((function(e){var n=r===e?f.a.selectedPage:f.a.unSelectedPage;return Object(b.jsx)("span",{className:n,onClick:function(){r!==e&&s(e)},children:e},e)})),Object(b.jsxs)("span",{children:[P<u&&Object(b.jsx)("button",{onClick:function(){return h(d+1)},children:"next"}),P<u&&Object(b.jsx)("button",{onClick:function(){return h(v)},children:"end"})]})]})},O=t(97),P=t(16),x=function(e){var n=e.user,t=e.isFollowingProgress,r=e.unFollow,s=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(P.b,{to:"/Profile/"+n.id,children:Object(b.jsx)("img",{src:null!=n.photos.small?n.photos.small:O.a,className:p.a.userPhoto})})}),Object(b.jsx)("div",{children:n.followed?Object(b.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.city"}),Object(b.jsx)("div",{children:"user.location.country"})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:n.name}),Object(b.jsx)("div",{children:n.status})]}),Object(b.jsx)("span",{children:Object(b.jsxs)("div",{children:["\u041c\u043e\u0439 ID: ",n.id]})})]}),Object(b.jsx)("hr",{})]})},w=function(e){var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.isFollowingProgress,i=e.unFollow,c=e.follow,u=e.isFetching,l=e.users;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[" ",u?Object(b.jsx)(d.a,{}):null]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{totalItemCount:n,pageSize:t,currentPage:r,onPageChanged:s}),Object(b.jsx)("div",{className:p.a.users,children:l.map((function(e){return Object(b.jsx)(x,{user:e,isFollowingProgress:o,unFollow:i,follow:c},e.id)}))})]})]})},C=t(10);function F(e,n){return e===n}function m(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!e(n[s],t[s]))return!1;return!0}function y(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var S=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var o=0,i=r.pop(),c=y(r),u=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(t)),l=e((function(){for(var e=[],n=c.length,t=0;t<n;t++)e.push(c[t].apply(null,arguments));return u.apply(null,e)}));return l.resultFunc=i,l.dependencies=c,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,t=null,r=null;return function(){return m(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var _=S((function(e){return e.usersPage.users}),(function(e){return e})),k=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.isFollowingProgress},q=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var t=e.props;(0,t.requestUsers)(n,t.pageSize)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,isFollowingProgress:this.props.isFollowingProgress,toggleIsFetching:this.props.toggleIsFetching})})}}]),t}(u.a.Component);n.default=Object(C.d)(Object(l.b)((function(e){return{users:_(e),pageSize:k(e),totalUsersCount:U(e),currentPage:z(e),isFetching:A(e),isFollowingProgress:I(e)}}),{follow:a.b,unFollow:a.e,setCurrentPage:a.d,requestUsers:a.c}))(q)}}]);
//# sourceMappingURL=3.d416235c.chunk.js.map