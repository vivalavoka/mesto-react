(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=(a(15),a(5)),l=a(1),s=o.a.createContext({name:null,about:null,avatar:null});function u(e){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"logo header__logo"}))}function p(e){var t=o.a.useContext(s),a=e.card,n=e.onCardClick,c=e.onCardLike,r=e.onDeleteCard;var i=t._id===a.owner._id,l=a.likes.some((function(e){return e._id===t._id}));return o.a.createElement("li",{className:"element"},o.a.createElement("a",{className:"element__photo-link",onClick:function(e){e.preventDefault(),n(a)},href:"/"},o.a.createElement("img",{className:"element__photo",src:a.link,alt:a.name})),o.a.createElement("div",{className:"button button_action_trash element__delete ".concat(!i&&"button_state_invisible"),onClick:function(){r(a)}}),o.a.createElement("div",{className:"element__panel"},o.a.createElement("h2",{className:"element__title"},a.name),o.a.createElement("div",{className:"element__like-wrapper",onClick:function(){c(a)}},o.a.createElement("div",{className:"button button_action_empty-heart element__like-btn ".concat(l&&"button_action_fill-heart")}),o.a.createElement("span",{className:"element__like-count"},a.likes.length))))}function m(e){var t=o.a.useContext(s);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("div",{className:"button button_action_pencil profile__edit-avatar",onClick:e.onEditAvatar}),o.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),o.a.createElement("article",{className:"profile__info"},o.a.createElement("div",{className:"profile__info-top"},o.a.createElement("h1",{className:"profile__title"},t.name),o.a.createElement("button",{type:"button",className:"button button_action_pencil profile__edit-button",onClick:e.onEditProfile})),o.a.createElement("div",{className:"profile__info-bottom"},o.a.createElement("p",{className:"profile__subtitle"},t.about))),o.a.createElement("button",{type:"button",className:"button button_action_cross profile__add-button",onClick:e.onAddPlace})),o.a.createElement("ul",{className:"elements"},e.cards.map((function(t){return o.a.createElement(p,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onDeleteCard:e.onDeleteCard})}))))}function _(e){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))}function d(e){return o.a.useEffect((function(){function t(t){"Escape"===t.key&&e.onClose()}return e.isOpen&&document.addEventListener("keyup",t),function(){document.removeEventListener("keyup",t)}})),o.a.createElement("section",{className:"popup page__popup-".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.onClose()}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"button button_action_cross popup__close-button",onClick:e.onClose}),o.a.createElement("h2",{className:"popup__title"},e.title),o.a.createElement("form",{name:"".concat(e.name,"-form"),className:"popup__form",noValidate:!0,onSubmit:e.onSubmit},e.children)))}function f(e){var t=o.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),i=Object(l.a)(r,2),u=i[0],p=i[1],m=o.a.useState(!1),_=Object(l.a)(m,2),f=_[0],h=_[1],b=o.a.useContext(s);return o.a.useEffect((function(){c(b.name),p(b.about)}),[b]),o.a.createElement(d,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),h(!0),e.onUpdateUser({name:n,about:u}).then((function(){h(!1)}))}},o.a.createElement("label",{className:"popup__input-wrap"},o.a.createElement("input",{name:"profile-name",id:"profile-name",className:"input popup__input input_state_initial",type:"text",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:n,onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{id:"profile-name-error",className:"popup__input-error"})),o.a.createElement("label",{className:"popup__input-wrap"},o.a.createElement("input",{name:"profile-about",id:"profile-about",className:"input popup__input input_state_initial",type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",required:!0,minLength:"2",maxLength:"200",value:u,onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{id:"profile-about-error",className:"popup__input-error"})),o.a.createElement("button",{className:"button popup__submit popup__submit_state_enable",type:"submit"},f?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}function h(e){var t=o.a.useRef(null),a=o.a.useState(!1),n=Object(l.a)(a,2),c=n[0],r=n[1];return o.a.createElement(d,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),r(!0),e.onUpdateAvatar({avatar:t.current.value}).then((function(){r(!1)}))}},o.a.createElement("label",{className:"popup__input-wrap"},o.a.createElement("input",{name:"avatar-link",id:"avatar-link",className:"input popup__input input_state_initial",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",required:!0,ref:t}),o.a.createElement("span",{id:"avatar-link-error",className:"popup__input-error"})),o.a.createElement("button",{className:"button popup__submit popup__submit_state_enable",type:"submit"},c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}function b(e){var t=o.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),i=Object(l.a)(r,2),s=i[0],u=i[1],p=o.a.useState(!1),m=Object(l.a)(p,2),_=m[0],f=m[1];return o.a.createElement(d,{name:"element",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),f(!0),e.onAddPlace({title:n,link:s}).then((function(){f(!1)}))}},o.a.createElement("label",{className:"popup__input-wrap"},o.a.createElement("input",{name:"element-title",id:"element-title",className:"input popup__input input_state_initial",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:n,onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{id:"element-title-error",className:"popup__input-error"})),o.a.createElement("label",{className:"popup__input-wrap"},o.a.createElement("input",{name:"element-link",id:"element-link",className:"input popup__input input_state_initial",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:s,onChange:function(e){u(e.target.value)}}),o.a.createElement("span",{id:"element-link-error",className:"popup__input-error"})),o.a.createElement("button",{className:"button popup__submit popup__submit_state_enable",type:"submit"},_?"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))}function E(e){var t=o.a.useState(!1),a=Object(l.a)(t,2),n=a[0],c=a[1];return o.a.createElement(d,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:!!e.card,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),c(!0),e.onDeleteCard(e.card).then((function(){c(!1)}))}},o.a.createElement("button",{className:"button popup__submit popup__submit_state_enable",type:"submit"},n?"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...":"\u0414\u0430"))}function v(e){var t=e.card;return o.a.useEffect((function(){function a(t){"Escape"===t.key&&e.onClose()}return t&&document.addEventListener("keyup",a),function(){document.removeEventListener("keyup",a)}})),t&&o.a.createElement("section",{className:"popup page__popup-photo ".concat(t?"popup_opened":""),onClick:function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.onClose()}},o.a.createElement("div",{className:"popup__figure-container"},o.a.createElement("button",{type:"button",className:"button button_action_cross popup__close-button"}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{className:"popup__photo",src:t.link,alt:t.name}),o.a.createElement("figcaption",{className:"popup__figcaption"},t.name))))}var C=a(4),N=a(8),k=a(9),g=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(k.a)(e,[{key:"_fetch",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.statusText,": ").concat(e.status))}))}},{key:"getProfile",value:function(){return this._fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"updateProfile",value:function(e,t){return this._fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:Object(C.a)({},this._headers,{"Content-Type":"application/json"}),body:JSON.stringify({name:e,about:t})})}},{key:"updateAvatar",value:function(e){return this._fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:Object(C.a)({},this._headers,{"Content-Type":"application/json"}),body:JSON.stringify({avatar:e})})}},{key:"getInitialCards",value:function(){return this._fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"addCard",value:function(e,t){return this._fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:Object(C.a)({},this._headers,{"Content-Type":"application/json"}),body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return this._fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return this._fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-15"),headers:{authorization:"359b95d1-25dd-40f7-8f18-447a7bfe930e"}});var y=function(){var e=o.a.useState({}),t=Object(l.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(l.a)(c,2),p=r[0],d=r[1],C=o.a.useState(!1),N=Object(l.a)(C,2),k=N[0],y=N[1],O=o.a.useState(!1),S=Object(l.a)(O,2),j=S[0],L=S[1],U=o.a.useState(null),w=Object(l.a)(U,2),P=w[0],D=w[1],x=o.a.useState(null),A=Object(l.a)(x,2),T=A[0],q=A[1],J=o.a.useState([]),I=Object(l.a)(J,2),B=I[0],H=I[1];function M(){d(!1),y(!1),L(!1),q(null),D(null)}return o.a.useEffect((function(){g.getInitialCards().then((function(e){H(Object(i.a)(e))})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){g.getProfile().then((function(e){n(e)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(s.Provider,{value:a},o.a.createElement("div",{className:"page__content"},o.a.createElement(u,null),o.a.createElement(m,{onEditAvatar:function(){d(!0)},onEditProfile:function(){y(!0)},onAddPlace:function(){L(!0)},onDeleteCard:function(e){D(e)},onCardClick:function(e){q(e)},cards:B,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));return g.changeLikeCardStatus(e._id,!t).then((function(t){var a=B.map((function(a){return a._id===e._id?t:a}));H(a)})).catch((function(e){console.log(e)}))}}),o.a.createElement(_,null),o.a.createElement(h,{isOpen:p,onClose:M,onUpdateAvatar:function(e){var t=e.avatar;return g.updateAvatar(t).then((function(e){n(e),M()})).catch((function(e){console.log(e)}))}}),o.a.createElement(f,{isOpen:k,onClose:M,onUpdateUser:function(e){var t=e.name,a=e.about;return g.updateProfile(t,a).then((function(e){n(e),M()})).catch((function(e){console.log(e)}))}}),o.a.createElement(b,{isOpen:j,onClose:M,onAddPlace:function(e){var t=e.title,a=e.link;return g.addCard(t,a).then((function(e){H([e].concat(Object(i.a)(B))),M()})).catch((function(e){console.log(e)}))}}),o.a.createElement(E,{card:P,onClose:M,onDeleteCard:function(e){return g.deleteCard(e._id).then((function(){var t=B.filter((function(t){return t._id!==e._id}));H(t),M()})).catch((function(e){console.log(e)}))}}),o.a.createElement(v,{card:T,onClose:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.aaa233cc.chunk.js.map