/*! For license information please see 3.7fb2390d.chunk.js.LICENSE.txt */
(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[3],{307:function(e,t,n){e.exports={users:"Users_users__3BlS9",userPhoto:"Users_userPhoto__3RoFz"}},308:function(e,t,n){e.exports={listContainer:"Paginator_listContainer__2ltsZ",listContainerCn:"Paginator_listContainerCn__1T4Wg",selectedPage:"Paginator_selectedPage__2cY10",unSelectedPage:"Paginator_unSelectedPage__ctudR"}},309:function(e,t,n){var s;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)){if(s.length){var i=r.apply(null,s);i&&e.push(i)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var c in s)n.call(s,c)&&s[c]&&e.push(c);else e.push(s.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()},313:function(e,t,n){"use strict";n.r(t);var s=n(27),r=n(28),o=n(30),i=n(29),c=n(1),a=n.n(c),l=n(12),u=n(55),j=n(307),g=n.n(j),h=n(44),p=n(71),d=n(49),b=n(308),O=n.n(b),f=n(309),x=n.n(f),P=n(0),v=function(e){for(var t=e.totalItemCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,a=Math.ceil(t/n),l=[],u=1;u<=a;u++)l.push(u);var j=Object(c.useState)(1),g=Object(d.a)(j,2),h=g[0],b=g[1],f=Math.ceil(a/i),v=(h-1)*i+1,w=h*i;return Object(P.jsxs)("div",{className:x()(O.a.listContainer,O.a.listContainerCn),children:[v>1&&Object(P.jsx)("button",{onClick:function(){return b(1)},children:"begin"}),v>1&&Object(P.jsx)("button",{onClick:function(){return b(h-1)},children:"prev"}),l.filter((function(e){return e<=w&&e>=v})).map((function(e){var t=s===e;return Object(P.jsx)("span",{className:x()(Object(p.a)({},O.a.selectedPage,t),Object(p.a)({},O.a.unSelectedPage,!t)),onClick:function(){!t&&r(e)},children:e},e)})),Object(P.jsxs)("span",{children:[w<a&&Object(P.jsx)("button",{onClick:function(){return b(h+1)},children:"next"}),w<a&&Object(P.jsx)("button",{onClick:function(){return b(f)},children:"end"})]})]})},w=n(99),C=n(17),F=n(120),_=function(e){var t=e.user,n=e.isFollowingProgress,s=e.unFollow,r=e.follow;return Object(P.jsxs)("div",{children:[Object(P.jsxs)("span",{children:[Object(P.jsx)("div",{children:Object(P.jsx)(C.b,{to:"/Profile/"+t.id,children:Object(P.jsx)("img",{src:null!=t.photos.small?t.photos.small:w.a,className:g.a.userPhoto})})}),Object(P.jsx)(F.a,{followed:t.followed,userId:t.id,isFollowingProgress:n,unFollow:s,follow:r})]}),Object(P.jsxs)("span",{children:[Object(P.jsxs)("span",{children:[Object(P.jsx)("div",{children:"user.location.city"}),Object(P.jsx)("div",{children:"user.location.country"})]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("div",{children:t.name}),Object(P.jsx)("div",{children:t.status})]}),Object(P.jsx)("span",{children:Object(P.jsxs)("div",{children:["\u041c\u043e\u0439 ID: ",t.id]})})]}),Object(P.jsx)("hr",{})]})},S=function(e){var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,o=e.isFollowingProgress,i=e.unFollow,c=e.follow,a=e.isFetching,l=e.users;return Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{children:[" ",a?Object(P.jsx)(h.a,{}):null]}),Object(P.jsxs)("div",{children:[Object(P.jsx)(v,{totalItemCount:t,pageSize:n,currentPage:s,onPageChanged:r}),Object(P.jsx)("div",{className:g.a.users,children:l.map((function(e){return Object(P.jsx)(_,{user:e,isFollowingProgress:o,unFollow:i,follow:c},e.id)}))})]})]})},m=n(10),y=n(145),k=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(S,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,isFollowingProgress:this.props.isFollowingProgress,toggleIsFetching:this.props.toggleIsFetching})})}}]),n}(a.a.Component);t.default=Object(m.d)(Object(l.b)((function(e){return{users:Object(y.f)(e),pageSize:Object(y.d)(e),totalUsersCount:Object(y.e)(e),currentPage:Object(y.a)(e),isFetching:Object(y.b)(e),isFollowingProgress:Object(y.c)(e)}}),{follow:u.b,unFollow:u.e,setCurrentPage:u.d,requestUsers:u.c}))(k)}}]);
//# sourceMappingURL=3.7fb2390d.chunk.js.map