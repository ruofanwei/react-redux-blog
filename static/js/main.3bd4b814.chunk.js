(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e.n(o),i=e(18),u=e.n(i),a=(e(35),e(3)),s=e(2),l=e(8),f=e(6),b=e(17),h="token",d=function(n){localStorage.setItem(h,n)},p=function(){return localStorage.getItem(h)},g="https://student-json-api.lidemy.me",j=function(){var n=p();return fetch("".concat(g,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},m=Object(b.b)({name:"user",initialState:{isLoadingUser:!1,errorMessage:null,userData:null},reducers:{setIsLoadingUser:function(n,t){n.isLoadingUser=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload},setUser:function(n,t){n.userData=t.payload}}}),x=m.actions,O=x.setIsLoadingUser,v=x.setErrorMessage,w=x.setUser,y=function(n,t){return function(e){return function(n,t){return fetch("".concat(g,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(n,t).then((function(n){if(0!==n.ok)return d(n.token),j().then((function(n){if(1===n.ok)return e(w(n.data)),n;e(v(n.toString()))}));e(v(n.message))}))}},k=function(n,t,e){return function(r){return function(n,t,e){return fetch("".concat(g,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(n,t,e).then((function(n){if(0!==n.ok)return d(n.token),j().then((function(n){if(1===n.ok)return r(w(n.data)),n;r(v(n.toString()))}));r(v(n.message))}))}},N=m.reducer,z=e(4);function B(){var n=Object(a.a)(["\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ",";\n  color: red;\n"]);return B=function(){return n},n}function M(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color:  ",";\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  border-radius: 10px;\n  background: ",";\n  padding: 10px;\n  border-color: ",";\n  &:hover{\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color:  ",";\n  }\n"]);return M=function(){return n},n}function S(){var n=Object(a.a)(["\n  width: 400px;\n  outline: none;\n  margin-top: 30px;\n  border-radius: 10px;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  padding: 10px;\n  border-color: ",";\n  margin-left: 20px;\n  font-size: ",";\n  color:  ",";\n\n  &:hover{\n    outline: none;\n    border-color: ",";\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ",";\n"]);return D=function(){return n},n}function L(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 50px auto 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  border-radius: 10px;\n  align-items: center;\n  \n"]);return L=function(){return n},n}var P=s.b.form(L(),(function(n){return n.theme.colors.darkWhite})),Y=s.b.div(D(),(function(n){return n.theme.fonts.LG})),G=s.b.input(S(),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightBlue})),C=s.b.button(M(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white})),F=s.b.div(B(),(function(n){return n.theme.fonts.MD}));function E(){var n=Object(z.c)((function(n){return n.user.errorMessage})),t=Object(z.b)(),e=Object(o.useState)(""),c=Object(l.a)(e,2),i=c[0],u=c[1],a=Object(o.useState)(""),s=Object(l.a)(a,2),b=s[0],h=s[1],d=Object(f.f)(),p=function(){return t(v(null))};Object(o.useEffect)((function(){return function(){return t(v(null))}}),[t]);return Object(r.jsxs)(P,{onSubmit:function(n){n.preventDefault(),t(y(i,b)).then((function(n){n&&d.push("/")}))},children:[n&&Object(r.jsx)(F,{children:n}),Object(r.jsxs)(Y,{children:["username: ",Object(r.jsx)(G,{value:i,onFocus:p,onChange:function(n){return u(n.target.value)}})]}),Object(r.jsxs)(Y,{children:["password: ",Object(r.jsx)(G,{type:"password",value:b,onFocus:p,onChange:function(n){return h(n.target.value)}})]}),Object(r.jsx)(C,{type:"submit",children:"\u767b\u5165"})]})}function I(){var n=Object(a.a)(["\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ",";\n  color: red;\n"]);return I=function(){return n},n}function W(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color:  ",";\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  border-radius: 10px;\n  margin-top: 10px;\n  background: ",";\n  padding: 10px;\n  border-color: ",";\n  &:hover{\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color:  ",";\n  }\n"]);return W=function(){return n},n}function T(){var n=Object(a.a)(["\n  width: 400px;\n  outline: none;\n  margin-top: 30px;\n  border-radius: 10px;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  padding: 10px;\n  border-color: ",";\n  margin-left: 20px;\n  font-size: ",";\n  color:  ",";\n\n  &:hover{\n    outline: none;\n    border-color: ",";\n  }\n"]);return T=function(){return n},n}function U(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ",";\n\n"]);return U=function(){return n},n}function J(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  border-radius: 10px;\n  align-items: center;\n  \n"]);return J=function(){return n},n}var R=s.b.form(J(),(function(n){return n.theme.colors.darkWhite})),$=s.b.div(U(),(function(n){return n.theme.fonts.LG})),A=s.b.input(T(),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightBlue})),_=s.b.button(W(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white})),H=s.b.div(I(),(function(n){return n.theme.fonts.MD}));function K(){var n=Object(z.b)(),t=Object(o.useState)(""),e=Object(l.a)(t,2),c=e[0],i=e[1],u=Object(o.useState)(""),a=Object(l.a)(u,2),s=a[0],b=a[1],h=Object(o.useState)(""),d=Object(l.a)(h,2),p=d[0],g=d[1],j=Object(z.c)((function(n){return n.user.errorMessage})),m=function(){return n(v(null))},x=Object(f.f)();Object(o.useEffect)((function(){return function(){return n(v(null))}}),[n]);return Object(r.jsxs)(R,{onSubmit:function(t){t.preventDefault(),n(k(s,c,p)).then((function(n){n&&x.push("/")}))},children:[j&&Object(r.jsx)(H,{children:j}),Object(r.jsxs)($,{children:["nickname: ",Object(r.jsx)(A,{value:c,onFocus:m,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)($,{children:["username: ",Object(r.jsx)(A,{value:s,onFocus:m,onChange:function(n){return b(n.target.value)}})]}),Object(r.jsxs)($,{children:["password: ",Object(r.jsx)(A,{type:"password",value:p,onFocus:m,onChange:function(n){return g(n.target.value)}})]}),Object(r.jsx)(_,{type:"submit",children:"\u8a3b\u518a"})]})}function X(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  margin: 50px 0;\n  line-height: 50px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 12em;\n  animation: \n    "," 7s steps(11),\n     "," 1s steps(1);\n\n  &:hover{\n    text-decoration: none;\n    color: ",";\n  }\n"]);return X=function(){return n},n}function q(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  margin: 50px 0;\n  line-height: 50px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 4em;\n  animation: \n    "," 6s steps(11),\n     "," 1s steps(1);\n\n  &:hover{\n    text-decoration: none;\n    color: ",";\n  }\n"]);return q=function(){return n},n}function Q(){var n=Object(a.a)(["\n  border: 1px dash ",";\n  border-radius: 10px;\n  padding: 16px;\n  background: ",";\n  margin-bottom: 30px;\n  box-shadow: 0 0 4px ",";\n  width: 70%;\n  margin: 0 auto;\n  \n"]);return Q=function(){return n},n}function V(){var n=Object(a.a)(["\n  margin-top: 70px;\n"]);return V=function(){return n},n}function Z(){var n=Object(a.a)(["\n  50% { border-color: transparent; border-right: .05em solid; }\n  100% { width: none; border-right: .05em solid;}\n"]);return Z=function(){return n},n}function nn(){var n=Object(a.a)(["\n  from { width: 0 }\n"]);return nn=function(){return n},n}var tn=Object(s.c)(nn()),en=Object(s.c)(Z()),rn=s.b.div(V()),on=s.b.div(Q(),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkWhite}),(function(n){return n.theme.colors.darkGrey})),cn=s.b.h1(q(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkBlue}),tn,en,(function(n){return n.theme.colors.brown})),un=s.b.p(X(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkBlue}),tn,en,(function(n){return n.theme.colors.brown}));function an(){return Object(r.jsx)(rn,{children:Object(r.jsxs)(on,{children:[Object(r.jsx)(cn,{children:"Hello \u263a "}),Object(r.jsx)(un,{children:" Welcome to my blog!"})]})})}var sn=Object(b.b)({name:"posts",initialState:{isLoadingPost:!1,post:null,errorMessage:null,newPostResponse:null,posts:[],paginate:[]},reducers:{setIsLoadingPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload},setPosts:function(n,t){n.posts=t.payload},setPaginate:function(n,t){n.paginate=t.payload}}}),ln=sn.actions,fn=ln.setIsLoadingPost,bn=ln.setPost,hn=(ln.setNewPostResponse,ln.setErrorMessage),dn=ln.setPosts,pn=ln.setPaginate,gn=function(n){return function(t){return t(fn(!0)),function(n){return fetch("".concat(g,"/posts?id=").concat(n)).then((function(n){return n.json()}))}(n).then((function(n){return t(bn(n[0])),t(fn(!1)),n[0]}))}},jn=function(n,t){return function(e){return function(n,t){var e=p();return fetch("".concat(g,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(n,t).then((function(n){if(0!==n.ok)return n;e(hn(n.message))}))}},mn=function(n){return function(t){t(fn(!0)),function(n){return fetch("".concat(g,"/posts?_page=").concat(n,"&_limit=5&_sort=id&_order=desc")).then((function(n){return n}))}(n).then((function(n){var e=n.clone(),r=Math.ceil(e.headers.get("x-total-count")/5);return t(pn(function(n){for(var t=[],e=1;e<=n;e++)t.push(e);return t}(r))),n.json()})).then((function(n){t(dn(n)),t(fn(!1))}))}},xn=function(n){return function(t){return function(n){return fetch("".concat(g,"/posts/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},On=function(n,t,e){return function(r){return r(fn(!0)),function(n,t,e){return fetch("".concat(g,"/posts/").concat(e),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({title:n,body:t,id:e})}).then((function(n){return n.json()}))}(n,t,e).then((function(n){if(0!==n.ok)return r(fn(!1)),n;r(hn(n.message))}))}},vn=sn.reducer;function wn(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color: ",';\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 10px;\n  background: ',";\n  padding: 10px;\n  border-color: ",";\n  &:hover {\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color: ",';\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  margin-right: 30px;\n  font-weight: bold;\n  border-radius: 10px;\n  background: ',";\n  padding: 10px;\n  border-color: ",";\n  &:hover {\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(a.a)(["\n  display: flex;\n  font-size: 48px;\n  font-weight: bold;\n  color: #333;\n"]);return kn=function(){return n},n}function Nn(){var n=Object(a.a)(["\n  display: flex;\n  font-size: 48px;\n  font-weight: bold;\n  color: #333;\n"]);return Nn=function(){return n},n}function zn(){var n=Object(a.a)(["\n  font-size: 30px;\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 7px;\n  font-weight: bold;\n  margin: auto;\n"]);return zn=function(){return n},n}function Bn(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  margin-top: 30px;\n  height: 350px;\n  overflow: scroll; \n  white-space:pre-line;\n  word-break: break-all;\n\n  &:hover{\n    text-decoration: none;\n    color: ",";\n  }\n"]);return Bn=function(){return n},n}function Mn(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",';\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  margin-right: 10px;\n\n  &:hover {\n    text-decoration: none;\n    color: ',";\n  }\n"]);return Mn=function(){return n},n}function Sn(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n\n  &:hover{\n    text-decoration: none;\n    color: ",";\n  }\n"]);return Sn=function(){return n},n}function Dn(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n\n  &:hover{\n    text-decoration: none;\n    color: ",";\n  }\n"]);return Dn=function(){return n},n}function Ln(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 40px auto 10px auto;\n  padding: 0 20px;\n  border: 1px dash ",";\n  border-radius: 10px;\n  padding: 16px;\n  background: ",";\n  box-shadow: 0 0 4px ",";\n"]);return Ln=function(){return n},n}var Pn=s.b.div(Ln(),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkWhite}),(function(n){return n.theme.colors.darkGrey})),Yn=s.b.h2(Dn(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brown})),Gn=s.b.div(Sn(),(function(n){return n.theme.fonts.SM}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brown})),Cn=s.b.div(Mn(),(function(n){return n.theme.fonts.SM}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brown})),Fn=s.b.p(Bn(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brown})),En=s.b.h1(zn(),(function(n){return n.theme.colors.darkBlue})),In=s.b.div(Nn()),Wn=s.b.div(kn()),Tn=s.b.button(yn(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white})),Un=s.b.button(wn(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white}));function Jn(){var n=Object(f.h)().id,t=Object(z.b)(),e=Object(f.f)(),c=Object(z.c)((function(n){return n.posts.isLoadingPost})),i=Object(z.c)((function(n){return n.posts.post})),u=Object(z.c)((function(n){return n.user.userData}));Object(o.useEffect)((function(){return t(gn(n)),function(){return t(bn(null))}}),[n,t]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Pn,{children:c?Object(r.jsx)(En,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Yn,{children:i&&i.title}),Object(r.jsxs)(Wn,{children:[Object(r.jsxs)(Cn,{children:["Created from ",u&&u.username]}),Object(r.jsxs)(Gn,{children:["at ",i&&new Date(i.createdAt).toLocaleString()]})]}),Object(r.jsx)(Fn,{children:i&&i.body}),u&&i&&u.id===i.userId&&Object(r.jsxs)(In,{children:[Object(r.jsx)(Tn,{onClick:function(){return function(n){t(xn(n)).then((function(){return e.push("/")}))}(n)},children:"Delete"}),Object(r.jsx)(Tn,{onClick:function(){return function(n){e.push("/edit/".concat(n))}(n)},children:"Edit"})]})]})}),!c&&Object(r.jsx)(Un,{onClick:function(){return window.history.go(-1)},children:"Back"})]})}var Rn=e(12);function $n(){var n=Object(a.a)(["\n  border: 1px dash ",';\n  border-radius: 10px;\n  font-family: "Neucha";\n  font-size: 30px;\n  margin-top: 40px;\n  color: ',";\n  letter-spacing: 7px;\n  font-weight: bold;\n  padding: 16px;\n  text-align: center;\n  background: ",";\n  margin-bottom: 30px;\n  box-shadow: 0 0 4px ",";\n  \n"]);return $n=function(){return n},n}function An(){var n=Object(a.a)(["\n  color: ",';\n  font-family: "Neucha";\n  letter-spacing: 2px;\n  font-weight: bold;\n  width: 20%;\n  font-size: ',";\n"]);return An=function(){return n},n}function _n(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",';\n  text-decoration: none;\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  width: 80%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  &:hover {\n    text-decoration: none;\n    color: ',";\n  }\n"]);return _n=function(){return n},n}function Hn(){var n=Object(a.a)(["\n  border: 1px dash ",";\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  background: ",";\n  margin-bottom: 30px;\n  box-shadow: 0 0 4px ",";\n  cursor: pointer;\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(a.a)(["\n  display: flex;\n  cursor: pointer;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(a.a)(['\n  font-family: "Neucha";\n  font-weight: bold;\n  cursor: pointer;\n  &:hover {\n    background: ',";\n    border-color: ",";\n  }\n"]);return Xn=function(){return n},n}function qn(){var n=Object(a.a)(["\n  list-style-type: none;\n  cursor: pointer;\n"]);return qn=function(){return n},n}function Qn(){var n=Object(a.a)(["\n  position: absolute;\n  left: 50%;\n  top: 90%;\n  transform: translate(-50%);\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(a.a)(["\n  margin-top: 40px;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(a.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return Zn=function(){return n},n}var nt=s.b.div(Zn()),tt=s.b.div(Vn()),et=s.b.div(Qn()),rt=s.b.li(qn()),ot=s.b.a(Xn(),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow})),ct=s.b.ul(Kn()),it=s.b.ul(Hn(),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkWhite}),(function(n){return n.theme.colors.darkGrey})),ut=Object(s.b)(Rn.b)(_n(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brown})),at=s.b.div(An(),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.fonts.SM})),st=s.b.h1($n(),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.darkWhite}),(function(n){return n.theme.colors.darkGrey}));function lt(){var n=Object(z.b)(),t=Object(z.c)((function(n){return n.posts.isLoadingPost})),e=Object(z.c)((function(n){return n.posts.posts})),c=Object(z.c)((function(n){return n.posts.paginate}));Object(o.useEffect)((function(){return n(mn(1))}),[n]);return Object(r.jsxs)(nt,{children:[t?Object(r.jsx)(st,{children:"loading..."}):Object(r.jsx)(tt,{children:e&&e.map((function(n){return Object(r.jsxs)(it,{children:[Object(r.jsx)(ut,{to:"/posts/".concat(n.id),children:n.title}),Object(r.jsx)(at,{children:new Date(n.createdAt).toLocaleString()})]},n.id)}))}),Object(r.jsx)(et,{children:Object(r.jsx)(ct,{children:e&&c.map((function(t){return Object(r.jsx)(rt,{className:"page-item",children:Object(r.jsx)(ot,{onClick:function(){return function(t){return n(mn(t))}(t)},className:"page-link",children:t})},t)}))})})]})}function ft(){var n=Object(a.a)(["\n  font-size: 30px;\n  color: ",';\n  text-decoration: none;\n  font-family: "Neucha";\n  letter-spacing: 7px;\n  font-weight: bold;\n  margin: auto;\n']);return ft=function(){return n},n}function bt(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color: ",';\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  border-radius: 10px;\n  background: ',";\n  padding: 10px;\n  border-color: ",";\n  &:hover {\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return bt=function(){return n},n}function ht(){var n=Object(a.a)(['\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ',";\n  color: red;\n"]);return ht=function(){return n},n}function dt(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",';\n  text-decoration: none;\n  font-family: "Neucha";\n  letter-spacing: 4px;\n  font-weight: bold;\n  margin: 30px 0;\n  border-radius: 10px;\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n  overflow: scroll;\n  outline: none;\n  border-color: ',";\n  &:hover {\n    text-decoration: none;\n    outline: none;\n    color: ",";\n    border-color: ",";\n  }\n"]);return dt=function(){return n},n}function pt(){var n=Object(a.a)(["\n  font-size: ",";\n  color: ",';\n  text-decoration: none;\n  font-family: "Neucha";\n  border-radius: 10px;\n  letter-spacing: 4px;\n  font-weight: bold;\n  width: 100%;\n  outline: none;\n  border-color: ',";\n\n  &:hover {\n    text-decoration: none;\n    outline: none;\n    color: ",";\n    border-color: ",";\n  }\n"]);return pt=function(){return n},n}function gt(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return gt=function(){return n},n}var jt=s.b.form(gt()),mt=s.b.input(pt(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightBlue})),xt=s.b.textarea(dt(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.darkBlue}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightBlue})),Ot=s.b.div(ht(),(function(n){return n.theme.fonts.MD})),vt=s.b.button(bt(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white})),wt=s.b.h1(ft(),(function(n){return n.theme.colors.darkBlue}));function yt(){var n=Object(o.useState)(""),t=Object(l.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(""),u=Object(l.a)(i,2),a=u[0],s=u[1],b=Object(z.c)((function(n){return n.posts.errorMessage})),h=Object(f.f)(),d=Object(f.h)().id,p=Object(z.b)(),g=Object(z.c)((function(n){return n.posts.isLoadingPost})),j=function(){return p(hn(null))};return Object(o.useEffect)((function(){return p(gn(d)).then((function(n){console.log(n),c(n.title),s(n.body)})),function(){return p(bn(null))}}),[d,p]),Object(r.jsxs)(jt,{onSubmit:function(n){if(n.preventDefault(),!e||!a||""===e.trim()||""===a.trim())return p(hn("there is no title or content"));p(On(e,a,d)).then((function(n){n&&h.push("/")}))},children:[b&&Object(r.jsx)(Ot,{children:b}),g?Object(r.jsx)(wt,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(mt,{placeholder:"Title ... ",value:e,onChange:function(n){return c(n.target.value)},onFocus:j}),Object(r.jsx)(xt,{placeholder:"Content ... ",value:a,onChange:function(n){return s(n.target.value)},onFocus:j}),Object(r.jsx)(vt,{type:"submit",children:"Update"})]})]})}function kt(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  color:  ",";\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  border-radius: 10px;\n  background: ",";\n  padding: 10px;\n  border-color: ",";\n  &:hover{\n    outline: none;\n    background: ",";\n    border-color: ",";\n    color:  ",";\n  }\n"]);return kt=function(){return n},n}function Nt(){var n=Object(a.a)(["\n  outline: none;\n  font-size: ",";\n  width: 800px;\n  color:  ",";\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  border-radius: 10px;\n  padding: 10px;\n  margin-left: 20px;\n  border-color: ",";\n  &:hover{\n    border-color: ",";\n  }\n  height: 400px;\n"]);return Nt=function(){return n},n}function zt(){var n=Object(a.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]);return zt=function(){return n},n}function Bt(){var n=Object(a.a)(["\n  width: 800px;\n  outline: none;\n  margin-top: 30px;\n  border-radius: 10px;\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  padding: 10px;\n  border-color: ",";\n  margin-left: 20px;\n  font-size: ",";\n  color:  ",";\n\n  &:hover{\n    border-color: ",";\n  }\n"]);return Bt=function(){return n},n}function Mt(){var n=Object(a.a)(["\n  display: flex;\n  margin-bottom: 10px;\n"]);return Mt=function(){return n},n}function St(){var n=Object(a.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return St=function(){return n},n}function Dt(){var n=Object(a.a)(["\n  font-family: 'Neucha';\n  letter-spacing: 4px;\n  font-weight: bold;\n  font-size: ",";\n  color: red;\n"]);return Dt=function(){return n},n}var Lt=s.b.div(Dt(),(function(n){return n.theme.fonts.MD})),Pt=s.b.form(St()),Yt=s.b.div(Mt()),Gt=s.b.input(Bt(),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightBlue})),Ct=s.b.div(zt()),Ft=s.b.textarea(Nt(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue})),Et=s.b.button(kt(),(function(n){return n.theme.fonts.MD}),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.brightBlue}),(function(n){return n.theme.colors.white}));function It(){var n=Object(o.useState)(""),t=Object(l.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(""),u=Object(l.a)(i,2),a=u[0],s=u[1],b=Object(z.c)((function(n){return n.posts.errorMessage})),h=Object(f.f)(),d=Object(z.b)(),p=function(){return d(hn(null))};return Object(r.jsxs)(Pt,{onSubmit:function(n){n.preventDefault(),d(jn(e,a)).then((function(n){n&&h.push("/")}))},children:[b&&Object(r.jsx)(Lt,{children:b}),Object(r.jsx)(Yt,{value:e,onChange:function(n){return c(n.target.value)},children:Object(r.jsx)(Gt,{onFocus:p})}),Object(r.jsx)(Ct,{value:a,onChange:function(n){return s(n.target.value)},children:Object(r.jsx)(Ft,{onFocus:p})}),Object(r.jsx)(Et,{children:"Post"})]})}function Wt(){var n=Object(a.a)(["\n  display: flex;\n  font-family: 'Neucha';\n  letter-spacing: 3px;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-left: 32px;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: ",";\n  color: ",";\n  \n &:hover{\n   color: ",";\n   text-decoration: none;\n }\n"]);return Wt=function(){return n},n}function Tt(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]);return Tt=function(){return n},n}function Ut(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ut=function(){return n},n}function Jt(){var n=Object(a.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  font-family: 'Neucha';\n  letter-spacing: 5px;\n  color: ",";\n"]);return Jt=function(){return n},n}function Rt(){var n=Object(a.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top:0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid ",";\n  padding: 0 32px;\n  box-sizing: border-box;\n  background: ",";\n"]);return Rt=function(){return n},n}var $t=s.b.nav(Rt(),(function(n){return n.theme.colors.brightYellow}),(function(n){return n.theme.colors.brightYellow})),At=s.b.div(Jt(),(function(n){return n.theme.colors.brightGrey})),_t=s.b.div(Ut()),Ht=s.b.div(Tt()),Kt=Object(s.b)(Rn.b)(Wt(),(function(n){return n.theme.fonts.LG}),(function(n){return n.theme.colors.darkWhite}),(function(n){return n.theme.colors.white}));function Xt(){var n=Object(f.g)(),t=Object(f.f)(),e=Object(z.b)(),o=Object(z.c)((function(n){return n.user.userData})),c=Object(z.c)((function(n){return n.user.isLoadingUser}));return Object(r.jsxs)($t,{children:[Object(r.jsxs)(_t,{children:[Object(r.jsx)(At,{children:"Blog"}),Object(r.jsxs)(Ht,{children:[Object(r.jsx)(Kt,{to:"/",$active:"/"===n.pathname,children:"Home"}),Object(r.jsx)(Kt,{to:"/about",$active:"/about"===n.pathname,children:"About"}),o&&Object(r.jsx)(Kt,{to:"/new-post",$active:"/new-post"===n.pathname,children:"Post"})]})]}),c?null:Object(r.jsxs)(Ht,{children:[!o&&Object(r.jsx)(Kt,{to:"/login",$active:"/login"===n.pathname,children:"Login"}),!o&&Object(r.jsx)(Kt,{to:"/register",$active:"/register"===n.pathname,children:"Register"}),o&&Object(r.jsx)(Kt,{to:"/",onClick:function(){d(""),e(w(null)),"/"!==n.pathname&&t.push("/")},children:"Logout"})]})]})}function qt(){var n=Object(a.a)(["\n  padding: 64px;\n  background: url(https://i.imgur.com/YcPaK24.jpg);\n  background-position: center; \n  background-repeat: no-repeat; \n  background-size: cover;\n  height: 710px;\n"]);return qt=function(){return n},n}var Qt=s.b.div(qt());var Vt=function(){var n=Object(z.c)((function(n){return n.user.userData})),t=Object(z.b)();return Object(o.useEffect)((function(){p()&&t((function(n){if(n(O(!0)),p())return j().then((function(t){if(n(O(!1)),1===t.ok)return n(w(t.data)),t.data;d(null)}));n(O(!1))}))}),[t]),Object(r.jsx)(Qt,{children:Object(r.jsxs)(Rn.a,{children:[Object(r.jsx)(Xt,{}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{exact:!0,path:"/",children:Object(r.jsx)(lt,{})}),Object(r.jsx)(f.a,{path:"/login",children:Object(r.jsx)(E,{})}),Object(r.jsx)(f.a,{path:"/register",children:Object(r.jsx)(K,{})}),Object(r.jsx)(f.a,{path:"/about",children:Object(r.jsx)(an,{})}),Object(r.jsx)(f.a,{path:"/edit/:id",children:n&&Object(r.jsx)(yt,{})}),Object(r.jsx)(f.a,{path:"/posts/:id",children:Object(r.jsx)(Jn,{})}),Object(r.jsx)(f.a,{path:"/new-post",children:n&&Object(r.jsx)(It,{})})]})]})})},Zt=(e(42),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))}),ne=Object(b.a)({reducer:{posts:vn,user:N}});u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(z.a,{store:ne,children:Object(r.jsx)(s.a,{theme:{colors:{white:"#fff",brown:"#ba7967",darkBlue:"#407088",darkWhite:"rgba(255, 255, 255, 0.7)",darkYellow:"#b58900",darkGreen:"#557571",darkGrey:"#5a5a5a",brightBlue:"#6cc3d5",brightYellow:"#ffce67",brightGrey:"#f8f9fa",brightGreen:"#78c2ad",brightPink:"#f3969a"},fonts:{LG:"24px",MD:"18px",SM:"14px"}},children:Object(r.jsx)(Vt,{})})})}),document.getElementById("root")),Zt()}},[[43,1,2]]]);
//# sourceMappingURL=main.3bd4b814.chunk.js.map