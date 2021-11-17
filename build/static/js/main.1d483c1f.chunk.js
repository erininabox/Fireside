(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],Array(28).concat([function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(22),r=n.n(i),a=(n(28),n(2)),s=n(3),o=(n(29),n(5)),l=n.n(o),u=n(11),j=n(9),d=n(0);function h(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var g={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:h,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=h();return e?JSON.parse(atob(e.split(".")[1])).user:null}},b="/api/users/";var O={signup:function(e){return fetch(b+"signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Username or email already taken!")})).then((function(e){var t=e.token;return g.setToken(t)}))},logout:function(){g.removeToken()},login:function(e){return fetch(b+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return g.setToken(t)}))},getUser:function(){return g.getUserFromToken()},getOne:function(e){return fetch(b+e,{method:"GET",headers:{Authorization:"Bearer "+g.getToken()}}).then((function(e){return e.json()}))},getAll:function(){return fetch(b,{method:"GET",headers:{Authorization:"Bearer "+g.getToken()}}).then((function(e){return e.json()}))}},f=n(10);n(32),n(33);function p(e){return Object(d.jsx)("button",{onClick:e.handleCustomClick,className:"custombutton-container",children:e.children})}function m(e){var t=e.goToNextPage,n=Object(c.useState)({username:"",email:"",password:""}),i=Object(a.a)(n,2),r=i[0],s=i[1];function o(e){s(Object(u.a)(Object(u.a)({},r),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(d.jsxs)("div",{id:"firstpage-container",children:[Object(d.jsx)("h1",{children:"Sign - Up"}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("p",{children:"Name"}),Object(d.jsx)("input",{name:"username",onChange:o,value:r.username})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("p",{children:"Email"}),Object(d.jsx)("input",{name:"email",onChange:o,value:r.email})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("p",{children:"Password"}),Object(d.jsx)("input",{name:"password",onChange:o,value:r.password})]}),Object(d.jsx)(p,{handleCustomClick:function(){r.username&&r.email&&r.password&&t(r)},children:"Next"})]})}n(34);for(var x=[],v=18;v<=110;v++)x.push(v);function k(e){var t=e.goToNextPage,n=Object(c.useState)(18),i=Object(a.a)(n,2),r=i[0],s=i[1];function o(e){s(e.target.innerText)}return Object(d.jsxs)("div",{id:"secondpage-container",children:[Object(d.jsx)("h2",{children:"How old are you?"}),Object(d.jsxs)("h1",{children:[r," years old"]}),Object(d.jsx)(p,{handleCustomClick:function(){t({age:r})},children:"Next"}),Object(d.jsx)("div",{id:"age-picker-overlay"}),Object(d.jsx)("div",{id:"age-picker",children:x.map((function(e){return e===+r?Object(d.jsx)("div",{className:"age-choice selected-age",children:e},e):Object(d.jsx)("div",{className:"age-choice",onClick:o,children:e},e)}))})]})}var C=n(12),w=(n(35),[["18-30",18,30],["31-40",31,40],["41-50",41,50],["51-60",51,60],["61-70",61,70],["71-80",71,80],["81-90",81,90],["91+",91,110]]);function N(e){var t=e.goToNextPage,n=Object(c.useState)([]),i=Object(a.a)(n,2),r=i[0],s=i[1];function o(e){var t=w.filter((function(t){return t[0]===e.target.innerText})),n=Object(C.a)(r);n.push(t),s(n)}function l(e){var t;t=r.filter((function(t){return!(t[0][0]===e.target.innerText)})),s(Object(C.a)(t))}return Object(d.jsxs)("div",{id:"thirdpage-container",children:[Object(d.jsx)("h1",{children:"What Age Group are you looking to make friends in?"}),Object(d.jsx)("div",{id:"age-range-picker",children:w.map((function(e,t){return function(e){var t=JSON.stringify(r),n=JSON.stringify(e);return-1!==t.indexOf(n)}(e)?Object(d.jsx)("div",{className:"age-range selected-range",onClick:l,children:e[0]},t):Object(d.jsx)("div",{className:"age-range",onClick:o,children:e[0]},t)}))}),Object(d.jsx)(p,{handleCustomClick:function(){t({ageRanges:r[0]})},children:"Next"})]})}n(36);var S=[["Stories","ic_outline-auto-stories.svg"],["Life Advice","healthicons_medical-advice-outline.svg"],["Recipes","clarity_list-line.svg"],["Meetings","la_user-friends.svg"],["Gifting Advice","ant-design_gift-outlined.svg"],["Tech Help","emojione-monotone_mobile-phone.svg"],["Conversation","bi_chat.svg"],["Pop Culture","mdi_drama-masks.svg"]];function y(e){var t=e.goToNextPage,n=Object(c.useState)([]),i=Object(a.a)(n,2),r=i[0],s=i[1];function o(e){var t=S.filter((function(t){return t[0]===e.target.innerText})),n=Object(C.a)(r);n.push(t),s(n)}function l(e){var t;t=r.filter((function(t){return!(t[0][0]===e.target.innerText)})),s(Object(C.a)(t))}return Object(d.jsxs)("div",{id:"fourth-page-container",children:[Object(d.jsx)("h1",{children:"What can you offer?"}),Object(d.jsx)("div",{id:"offer-picker",children:S.map((function(e,t){return function(e){var t=JSON.stringify(r),n=JSON.stringify(e);return-1!==t.indexOf(n)}(e)?Object(d.jsxs)("div",{className:"offer selected-offer",onClick:l,children:[Object(d.jsx)("img",{src:"icons/"+e[1],width:45,height:45,alt:"Some icon"}),Object(d.jsx)("p",{children:e[0]})]},t):Object(d.jsxs)("div",{className:"offer",onClick:o,children:[Object(d.jsx)("img",{src:"icons/"+e[1],width:45,height:45,alt:"Some icon"}),Object(d.jsx)("p",{children:e[0]})]},t)}))}),Object(d.jsx)(p,{handleCustomClick:function(){var e=r.map((function(e){return e[0][0]}));t({whatToOffer:e})},children:"Next"})]})}n(37);var T=[["Caring","ei_heart.svg"],["Empathetic","ion_ear-outline.svg"],["Curious","bi_question.svg"],["Thoughtful","icon-park-outline_brain.svg"],["Extrovert","healthicons_i-groups-perspective-crowd-outline.svg"],["Introvert","la_user-friends-1.svg"],["Adventerous","icons8_adventures.svg"],["Creative","emojione-monotone_artist-palette.svg"]];function P(e){var t=e.goToNextPage,n=Object(c.useState)([]),i=Object(a.a)(n,2),r=i[0],s=i[1];function o(e){var t=T.filter((function(t){return t[0]===e.target.innerText})),n=Object(C.a)(r);n.push(t),s(n)}function l(e){var t;t=r.filter((function(t){return!(t[0][0]===e.target.innerText)})),s(Object(C.a)(t))}return Object(d.jsxs)("div",{id:"fifthpage-container",children:[Object(d.jsx)("h1",{children:"How would you describe yourself?"}),Object(d.jsx)("div",{id:"self-description-picker",children:T.map((function(e,t){return function(e){var t=JSON.stringify(r),n=JSON.stringify(e);return-1!==t.indexOf(n)}(e)?Object(d.jsxs)("div",{className:"self-description selected-self-description",onClick:l,children:[Object(d.jsx)("img",{src:"icons/"+e[1],width:45,height:45,alt:"Some icon"}),Object(d.jsx)("p",{children:e[0]})]},t):Object(d.jsxs)("div",{className:"self-description",onClick:o,children:[Object(d.jsx)("img",{src:"icons/"+e[1],width:45,height:45,alt:"Some icon"}),Object(d.jsx)("p",{children:e[0]})]},t)}))}),Object(d.jsx)(p,{handleCustomClick:function(){var e=r.map((function(e){return e[0][0]}));t({description:e})},children:"Next"})]})}n(38);function A(e){var t=e.goToNextPage,n=e.skipUser,c=e.match;function i(e){var t="";e.length>2?t=e.slice(0,e.length-1).join(", ")+" & "+e[e.length-1]:1===e.length&&(t=e[0]);return t}var r=c.description?i(c.description):"",a=c.whatToOffer?i(c.whatToOffer):"";return Object(d.jsxs)("div",{id:"matchselection-container",children:[Object(d.jsx)("h1",{children:"Here are your matches!"}),Object(d.jsxs)("div",{className:"matchinfo-wrapper",children:[Object(d.jsx)("div",{className:"match-name",children:c.username}),Object(d.jsxs)("div",{className:"match-info",children:[Object(d.jsxs)("div",{children:[c.age," years old"]}),Object(d.jsx)("div",{children:r}),Object(d.jsx)("div",{children:"Interested in ".concat(a)})]})]}),Object(d.jsx)("p",{children:"Would you like to chat with ".concat(c.username,"?")}),Object(d.jsx)(p,{handleCustomClick:function(){t({match:c.username})},children:"Yes"}),Object(d.jsx)(p,{handleCustomClick:function(){n()},children:"Skip"})]})}n(39),n(40);function _(e){var t=e.thisPage,n=e.pageOn;return Object(d.jsx)("div",{children:n>=t?Object(d.jsx)("div",{className:"marker marker-active"}):Object(d.jsx)("div",{className:"marker"})})}function E(e){var t=e.page;return Object(d.jsx)("div",{id:"pagemarker-wrapper",children:Object(d.jsxs)("div",{id:"pagemarker-container",children:[Object(d.jsx)(_,{thisPage:0,pageOn:t}),Object(d.jsx)(_,{thisPage:1,pageOn:t}),Object(d.jsx)(_,{thisPage:2,pageOn:t}),Object(d.jsx)(_,{thisPage:3,pageOn:t}),Object(d.jsx)(_,{thisPage:4,pageOn:t}),Object(d.jsx)(_,{thisPage:5,pageOn:t})]})})}n(41);var I=[{username:"Mario",email:"email@gmail.com",age:55,description:["Caring","Curious","Adventurous"],whatToOffer:["Life Advice","Stories","Pop Culture"]},{username:"Luigi",email:"email@gmail.com",age:59,description:["Caring","Introvert","Curious","Adventurous"],whatToOffer:["Life Advice","Stories","Pop Culture"]},{username:"Peach",email:"email@gmail.com",age:51,description:["Empathetic","Caring","Curious","Adventurous"],whatToOffer:["Life Advice","Stories","Pop Culture"]},{username:"Toad",email:"email@gmail.com",age:56,description:["Caring","Curious","Adventurous"],whatToOffer:["Life Advice","Stories","Pop Culture"]}];function L(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)([]),h=Object(a.a)(o,2),g=h[0],b=h[1],f=Object(c.useState)(0),p=Object(a.a)(f,2),x=p[0],v=p[1],C=Object(c.useState)(""),w=Object(a.a)(C,2),S=(w[0],w[1]),T=Object(c.useState)({username:"",email:"",password:"",age:null,ageRanges:[],description:[],whatToOffer:[],match:""}),_=Object(a.a)(T,2),L=_[0],U=_[1],J=Object(s.g)();function G(){return(G=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.signup(L);case 3:e.handleSignUpOrLogin(),J.push("/messaging"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message),S(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function M(e){U(Object(u.a)(Object(u.a)({},L),e)),r((function(e){return e+1}))}function F(){return(F=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getAll();case 3:t=e.sent,b(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),b(I);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){6===i&&function(){G.apply(this,arguments)}()}),[i]),Object(c.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),console.log(g),Object(d.jsxs)("div",{id:"form-container",children:[Object(d.jsx)(E,{page:i}),0===i?Object(d.jsx)(m,{goToNextPage:M}):1===i?Object(d.jsx)(k,{goToNextPage:M}):2===i?Object(d.jsx)(N,{goToNextPage:M}):3===i?Object(d.jsx)(y,{goToNextPage:M}):4===i?Object(d.jsx)(P,{goToNextPage:M}):Object(d.jsx)(A,{goToNextPage:M,skipUser:function(){x<g.length-1?v((function(e){return e+1})):v(0)},match:0!=g.length?g[x]:I[x]})]})}n(50);function U(e){var t,n,i=Object(c.useState)({email:"",password:""}),r=Object(a.a)(i,2),o=r[0],h=r[1],g=Object(c.useState)(""),b=Object(a.a)(g,2),m=b[0],x=b[1],v=Object(s.g)();function k(e){h(Object(u.a)(Object(u.a)({},o),{},Object(f.a)({},e.target.name,e.target.value))),x("")}function C(){return(C=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.login(o);case 3:t.sent,e.handleSignUpOrLogin(),v.push("/messaging"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),x("Log In Failed - Try Again");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{id:"login-container",children:[Object(d.jsx)("h1",{children:"Login Page"}),Object(d.jsx)("div",{className:"form-container",children:Object(d.jsxs)("form",{autoComplete:"off",className:"form-elements",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",(t={type:"text",name:"email",value:o.email,onChange:k},Object(f.a)(t,"type","email"),Object(f.a)(t,"required",!0),t)),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",(n={type:"password",name:"password",value:o.password,onChange:k},Object(f.a)(n,"type","password"),Object(f.a)(n,"required",!0),n))]})}),Object(d.jsx)(p,{handleCustomClick:function(){return C.apply(this,arguments)},children:"Login"}),Object(d.jsxs)("p",{className:"error-message",children:[Object(d.jsx)("br",{}),m]})]})}n(51);var J=n(13);function G(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container",style:{backgroundImage:"url(/fireside.png)"},children:[Object(d.jsxs)("div",{className:"fuzz",children:[Object(d.jsx)("h1",{className:"homepage-title",children:"FIRESIDE"}),Object(d.jsx)("h3",{className:"stupid-inspirational-quote",children:"Making intergenerational connections"})]}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)(J.b,{to:"/Login",className:"link",children:Object(d.jsx)("button",{class:"btn",children:"Login"})}),Object(d.jsx)(J.b,{to:"/onboarding",className:"link",children:Object(d.jsx)("button",{class:"btn",children:"Sign-Up"})})]})]})})}n(52),n(53);function M(e){var t=e.handleNextClick;return Object(d.jsxs)("div",{id:"onpage1-container",children:[Object(d.jsx)("h1",{children:"Fireside"}),Object(d.jsx)("img",{src:"images/Older_Young_Peeps.svg",alt:"Old and yound person hanging out"}),Object(d.jsx)("h2",{children:"Connect Intergenerationally"}),Object(d.jsx)("h3",{children:"Make genuine connections while bridging generational gaps"}),Object(d.jsx)(p,{handleCustomClick:t,children:"Next"})]})}n(54);function F(e){var t=e.handleNextClick;return Object(d.jsxs)("div",{id:"onpage2-container",children:[Object(d.jsx)("img",{src:"images/Happy-Bunch-Chat.svg",alt:"Two women hanging around a rediculously large phone"}),Object(d.jsx)("h2",{children:"Maximize Interaction"}),Object(d.jsx)("h3",{children:"Discuss gift ideas or schedule a time to hang out during the holidays"}),Object(d.jsx)(p,{handleCustomClick:t,children:"Next"})]})}n(55);function B(e){var t=e.handleNextClick;return Object(d.jsxs)("div",{id:"onpage3-container",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"images/GuyInPhone.svg",alt:"A man looking at a woman in a ridiculously large phone"}),Object(d.jsx)("img",{id:"flipped",src:"images/GirlInPhone.svg",alt:"A woman looking at a man in a ridiculously large phone"})]}),Object(d.jsx)("h2",{children:"Share Your Stories"}),Object(d.jsx)("h3",{children:"Share stories, advice and wisdom to build closer connections"}),Object(d.jsx)(p,{handleCustomClick:t,children:"Get Started"})]})}function H(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),i=n[0],r=n[1],o=Object(s.g)();function l(){2===i?o.push("./signup"):r((function(e){return e+1}))}return Object(d.jsx)("div",{id:"onboarding-container",children:0===i?Object(d.jsx)(M,{handleNextClick:l}):1===i?Object(d.jsx)(F,{handleNextClick:l}):Object(d.jsx)(B,{handleNextClick:l})})}n(56);function R(e){var t=e.user,n=Object(c.useState)(""),i=Object(a.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)({username:"user"}),u=Object(a.a)(o,2),h=u[0],g=u[1];function b(){return(b=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getOne(t.match);case 3:n=e.sent,g(n.user[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{id:"messagepage-container",children:[Object(d.jsx)("h1",{children:"Connect with ".concat(h.username)}),Object(d.jsx)("label",{htmlFor:"message",children:"Type a Message for them."}),Object(d.jsx)("textarea",{name:"message",value:r,onChange:function(e){s(e.target.value)},rows:"15",cols:"43"}),Object(d.jsx)(p,{handleCustomClick:function(){console.log(r)},children:"Send"})]})}n(57);function z(e){var t=Object(c.useState)([{username:"Sally",email:"email123@email123.com",password:"12345",age:78,ageRanges:"31-40",description:"adventurous, creative",whatToOffer:[]}]),n=Object(a.a)(t,2),i=n[0],r=n[1];Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/members");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]);var s=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/api/members");case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Login PAGE"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("button",{onClick:s,children:"Click ME"}),Object(d.jsx)("h4",{children:"Members:"}),i.map((function(e,t){return Object(d.jsxs)("li",{className:"member",children:[Object(d.jsx)("p",{children:e.username}),Object(d.jsx)("p",{children:e.age}),Object(d.jsx)("p",{children:e.description}),Object(d.jsxs)("p",{children:["Interested in members ",e.ageRanges]}),Object(d.jsxs)("p",{children:["Contact ",e.username,": ",e.email]})]},e._id)}))]})]})}var W=function(){var e=Object(c.useState)(O.getUser()),t=Object(a.a)(e,2),n=t[0],i=t[1];function r(){i(O.getUser())}return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{exact:!0,path:"/members",children:Object(d.jsx)(z,{handleSignUpOrLogin:r})}),Object(d.jsx)(s.b,{exact:!0,path:"/login",children:Object(d.jsx)(U,{handleSignUpOrLogin:r})}),Object(d.jsx)(s.b,{exact:!0,path:"/signup",children:Object(d.jsx)(L,{handleSignUpOrLogin:r})}),Object(d.jsx)(s.b,{exact:!0,path:"/onboarding",children:Object(d.jsx)(H,{})}),Object(d.jsx)(s.b,{exact:!0,path:"/",children:Object(d.jsx)(G,{})}),n?Object(d.jsx)(s.d,{children:Object(d.jsx)(s.b,{exact:!0,path:"/messaging",children:Object(d.jsx)(R,{user:n})})}):Object(d.jsx)(s.a,{to:"/login"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(d.jsx)(J.a,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[58,1,2]]]);
//# sourceMappingURL=main.1d483c1f.chunk.js.map