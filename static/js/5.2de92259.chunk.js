(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[5],{309:function(e,t,s){"use strict";s.r(t);var r=s(27),o=s(28),n=s(30),a=s(29),i=s(1),c=s.n(i),p=s(12),u=s(56),g=s(147),l=s(10),h=s(146),b=s(0),j=function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(r.a)(this,s);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){var s=e.props;(0,s.requestUsers)(t,s.pageSize)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g.a,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,isFollowingProgress:this.props.isFollowingProgress,toggleIsFetching:this.props.toggleIsFetching})})}}]),s}(c.a.Component);t.default=Object(l.d)(Object(p.b)((function(e){return{users:Object(h.f)(e),pageSize:Object(h.d)(e),totalUsersCount:Object(h.e)(e),currentPage:Object(h.a)(e),isFetching:Object(h.b)(e),isFollowingProgress:Object(h.c)(e)}}),{follow:u.b,unFollow:u.e,setCurrentPage:u.d,requestUsers:u.c}))(j)}}]);
//# sourceMappingURL=5.2de92259.chunk.js.map