(this["webpackJsonpstore-api"]=this["webpackJsonpstore-api"]||[]).push([[0],{27:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(20),a=s.n(c),r=s(18),l=s(14),d=s(6),j=(s(27),s(4)),o=s(0),b=function(e){return Object(o.jsxs)("div",{className:"basket",children:[e.items.length>0?e.items.slice(0,3).map((function(t,s){return Object(o.jsxs)("div",{className:"basket__item",children:[Object(o.jsx)("span",{className:"basket__item-name",children:t.title}),Object(o.jsxs)("span",{className:"basket__item-quantity",children:["x",t.qt]}),Object(o.jsxs)("span",{className:"basket__item-price",children:["\xa3",(t.price*t.qt).toFixed(2)]}),Object(o.jsx)("div",{className:"basket__item-delete",onClick:function(){return e.delete(t)},children:"X"})]},s)})):"Basket empty!",e.items.length>0&&Object(o.jsxs)("div",{className:"btn btn--secondary",children:["See full basket\xa0",Object(o.jsx)(j.e,{})]}),e.items.length>0&&Object(o.jsx)("div",{className:"btn btn--primary",onClick:e.clear,children:"Clear basket"})]})},m=s(12),u=function(e){var t=Object(i.useState)(!1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=Object(i.useState)(0),r=Object(d.a)(a,2),l=r[0],u=r[1];Object(i.useEffect)((function(){var t=0;e.items.forEach((function(e){t+=e.price*e.qt})),u(t)}),[e.items]);return Object(o.jsx)("div",{className:"nav",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m.b,{to:"/",children:Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{className:"logo-the",children:"the"}),"Store"]})}),Object(o.jsxs)("div",{className:"nav__links",children:[Object(o.jsx)(m.b,{to:"/wishlist",className:"btn btn--secondary btn__wishlist",children:"Wishlist"}),Object(o.jsxs)("div",{className:"btn btn--primary btn__basket",onClick:function(){c(!n)},children:[Object(o.jsx)(j.e,{})," \xa0\xa3",l.toFixed(2)]})]}),n&&Object(o.jsx)(b,{items:e.items,delete:e.delete,clear:e.clear})]})})},h=function(e){var t=Object(i.useState)(1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=function(e){"inc"===e&&n<50?c(n+1):"dec"===e&&n>1&&c(n-1)};return Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"modal__inner",children:[Object(o.jsx)(j.f,{className:"modal__inner-close",onClick:e.closeModal}),Object(o.jsx)("h1",{className:"modal__inner-title",children:e.item.title}),Object(o.jsx)("img",{className:"modal__inner-img",src:e.item.image,alt:""}),Object(o.jsx)("p",{className:"modal__inner-desc",children:e.item.description}),Object(o.jsxs)("div",{className:"modal__inner-btns",children:[Object(o.jsx)("button",{className:"btn btn--secondary",onClick:function(){return a("dec")},children:Object(o.jsx)(j.b,{})}),Object(o.jsx)("input",{type:"number",min:"1",max:"50",value:n}),Object(o.jsx)("button",{className:"btn btn--secondary",onClick:function(){return a("inc")},children:Object(o.jsx)(j.c,{})}),Object(o.jsx)("button",{className:"btn btn--primary",style:{marginLeft:"0.25rem"},onClick:function(){return e.addToBasket(e.item.id,n)},children:Object(o.jsx)(j.e,{})}),Object(o.jsx)("button",{className:"btn btn--secondary",style:{marginLeft:"0.25rem"},onClick:e.inWishlist?function(){return e.removeFromWishlist(e.item.id)}:function(){return e.addToWishlist(e.item.id)},children:e.inWishlist?Object(o.jsx)(j.a,{className:"addToWishlist--filled"}):Object(o.jsx)(j.d,{})})]})]})})},O=function(e){var t=Object(i.useState)(!1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=function(){c(!n)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card__img",children:Object(o.jsx)("img",{src:e.img,alt:e.name})}),Object(o.jsxs)("div",{className:"card__info",children:[Object(o.jsxs)("div",{className:"card__info-name",onClick:a,children:[e.name.split(" ").slice(0,5).join(" "),e.name.split(" ").length>5&&"..."]}),Object(o.jsxs)("span",{className:"card__info-price",children:["\xa3",e.price.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"card__btns",children:[Object(o.jsxs)("div",{className:"addToBasket btn btn--primary",onClick:function(){return e.addToBasket(e.id,1)},children:["Add to basket\xa0",Object(o.jsx)(j.e,{})]}),Object(o.jsx)("div",{className:"addToWishlist btn btn--secondary",onClick:e.inWishlist?function(){return e.removeFromWishlist(e.id)}:function(){return e.addToWishlist(e.id)},children:e.inWishlist?Object(o.jsx)(j.a,{className:"addToWishlist--filled"}):Object(o.jsx)(j.d,{})})]})]}),n&&Object(o.jsx)(h,{addToWishlist:e.addToWishlist,addToBasket:e.addToBasket,inWishlist:e.inWishlist,removeFromWishlist:e.removeFromWishlist,closeModal:a,item:e.item})]})},f=function(e){var t=Object(i.useState)("all"),s=Object(d.a)(t,2),n=s[0],c=(s[1],function(){return"all"===n?e.items:e.items.filter((function(e){return e.category===n}))});return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"grid",children:c().length>0?c().map((function(t){return Object(o.jsx)(O,{item:t,id:t.id,name:t.title,img:t.image,price:t.price,addToBasket:e.addToBasket,addToWishlist:e.addToWishlist,removeFromWishlist:e.removeFromWishlist,inWishlist:!!t.inWishlist},t.id)})):Object(o.jsx)("div",{className:"spinner"})})})},x=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"fw-xl clr-nl",children:"Wishlist"}),Object(o.jsx)("div",{className:"grid",children:e.items.map((function(t,s){return Object(o.jsx)("div",{onClick:function(){return e.removeFromWishlist(t)},children:t.title},s)}))})]})},v=s(2),N=JSON.parse(localStorage.getItem("basket"))||[],p=JSON.parse(localStorage.getItem("wishlist"))||[],_=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],c=Object(i.useState)(N),a=Object(d.a)(c,2),j=a[0],b=a[1],h=Object(i.useState)(p),O=Object(d.a)(h,2),_=O[0],k=O[1];Object(i.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){_.forEach((function(t){var s=e.indexOf(e.find((function(e){return e.id===t.id})));e[s].inWishlist=!0})),n(e)}))}),[]),Object(i.useEffect)((function(){localStorage.setItem("basket",JSON.stringify(j))}),[j]),Object(i.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(_))}),[_]);var W=function(e,t){var i=s.find((function(t){return t.id===e})),n=Object(l.a)(j),c=n.find((function(t){return e===t.id}));c?c.qt+=t:(c=Object(r.a)(Object(r.a)({},i),{},{qt:t}),n.push(c)),b(n)},g=function(e){var t=s.find((function(t){return t.id===e})),i=Object(l.a)(_);i.find((function(t){return e===t.id}))||(t.inWishlist=!0,i.push(t),k(i))},y=function(e){k(_.filter((function(t){return t.id!==e})));var t=Object(l.a)(s),i=t.indexOf(t.find((function(t){return t.id===e})));t[i].inWishlist=!1};return Object(o.jsx)(m.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{className:"Nav",clear:function(){b([])},delete:function(e){b(j.filter((function(t){return t!==e})))},items:j}),Object(o.jsx)("div",{className:"container content",children:Object(o.jsxs)(v.c,{children:[Object(o.jsx)(v.a,{path:"/wishlist",render:function(){return Object(o.jsx)(x,{removeFromWishlist:y,items:_})}}),Object(o.jsx)(v.a,{path:"/",render:function(){return Object(o.jsx)(f,{wishlist:_,items:s,addToBasket:W,addToWishlist:g,removeFromWishlist:y})}})]})})]})})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f2454b1e.chunk.js.map