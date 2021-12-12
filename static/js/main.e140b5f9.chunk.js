(this["webpackJsonpstore-api"]=this["webpackJsonpstore-api"]||[]).push([[0],{28:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s.n(i),c=s(14),a=s.n(c),r=s(20),l=s(16),d=s(6),o=(s(28),s(4)),j=s(1),b=function(e){return Object(j.jsxs)("div",{className:"basket",children:[e.items.length>0?e.items.slice(0,3).map((function(t,s){return Object(j.jsxs)("div",{className:"basket__item",children:[Object(j.jsx)("span",{className:"basket__item-name",children:t.title}),Object(j.jsxs)("span",{className:"basket__item-quantity",children:["x",t.qt]}),Object(j.jsxs)("span",{className:"basket__item-price",children:["\xa3",(t.price*t.qt).toFixed(2)]}),Object(j.jsx)("div",{className:"basket__item-delete",onClick:function(){return e.delete(t)},children:"X"})]},s)})):"Basket empty!",e.items.length>0&&Object(j.jsxs)("div",{className:"btn btn--secondary",children:["See full basket\xa0",Object(j.jsx)(o.e,{})]}),e.items.length>0&&Object(j.jsx)("div",{className:"btn btn--primary",onClick:e.clear,children:"Clear basket"})]})},m=s(13),u=function(e){var t=Object(i.useState)(!1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=Object(i.useState)(0),r=Object(d.a)(a,2),l=r[0],u=r[1];Object(i.useEffect)((function(){var t=0;e.items.forEach((function(e){t+=e.price*e.qt})),u(t)}),[e.items]);return Object(j.jsx)("div",{className:"nav",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m.b,{to:"/",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"logo-the",children:"the"}),"Store"]})}),Object(j.jsxs)("div",{className:"nav__links",children:[Object(j.jsx)(m.b,{to:"/wishlist",className:"btn btn--secondary btn__wishlist",children:"Wishlist"}),Object(j.jsxs)("div",{className:"btn btn--primary btn__basket",onClick:function(){c(!n)},children:[Object(j.jsx)(o.e,{})," \xa0\xa3",l.toFixed(2)]})]}),n&&Object(j.jsx)(b,{items:e.items,delete:e.delete,clear:e.clear})]})})},h=function(e){var t=Object(i.useState)(1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=function(e){"inc"===e&&n<50?c(n+1):"dec"===e&&n>1&&c(n-1)};return Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal__inner",children:[Object(j.jsx)(o.f,{className:"modal__inner-close",onClick:e.closeModal}),Object(j.jsx)("h1",{className:"modal__inner-title",children:e.item.title}),Object(j.jsx)("img",{className:"modal__inner-img",src:e.item.image,alt:""}),Object(j.jsx)("p",{className:"modal__inner-desc",children:e.item.description}),Object(j.jsxs)("div",{className:"modal__inner-btns",children:[Object(j.jsx)("button",{className:"btn btn--secondary",onClick:function(){return a("dec")},children:Object(j.jsx)(o.b,{})}),Object(j.jsx)("input",{type:"number",min:"1",max:"50",value:n}),Object(j.jsx)("button",{className:"btn btn--secondary",onClick:function(){return a("inc")},children:Object(j.jsx)(o.c,{})}),Object(j.jsx)("button",{className:"btn btn--primary",style:{marginLeft:"0.25rem"},onClick:function(){return e.addToBasket(e.item.id,n)},children:Object(j.jsx)(o.e,{})}),Object(j.jsx)("button",{className:"btn btn--secondary",style:{marginLeft:"0.25rem"},onClick:e.inWishlist?function(){return e.removeFromWishlist(e.item.id)}:function(){return e.addToWishlist(e.item.id)},children:e.inWishlist?Object(j.jsx)(o.a,{className:"addToWishlist--filled"}):Object(j.jsx)(o.d,{})})]})]})})},O=function(e){var t=Object(i.useState)(!1),s=Object(d.a)(t,2),n=s[0],c=s[1],a=function(){c(!n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card__img",children:Object(j.jsx)("img",{src:e.img,alt:e.name})}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsxs)("div",{className:"card__info-name",onClick:a,children:[e.name.split(" ").slice(0,5).join(" "),e.name.split(" ").length>5&&"..."]}),Object(j.jsxs)("span",{className:"card__info-price",children:["\xa3",e.price.toFixed(2)]})]}),Object(j.jsxs)("div",{className:"card__btns",children:[Object(j.jsxs)("div",{className:"addToBasket btn btn--primary",onClick:function(){return e.addToBasket(e.id,1)},children:["Add to basket\xa0",Object(j.jsx)(o.e,{})]}),Object(j.jsx)("div",{className:"addToWishlist btn btn--secondary",onClick:e.inWishlist?function(){return e.removeFromWishlist(e.id)}:function(){return e.addToWishlist(e.id)},children:e.inWishlist?Object(j.jsx)(o.a,{className:"addToWishlist--filled"}):Object(j.jsx)(o.d,{})})]})]}),n&&Object(j.jsx)(h,{addToWishlist:e.addToWishlist,addToBasket:e.addToBasket,inWishlist:e.inWishlist,removeFromWishlist:e.removeFromWishlist,closeModal:a,item:e.item})]})},f=function(e){var t=Object(i.useState)("all"),s=Object(d.a)(t,2),n=s[0],c=s[1],a=function(){return"all"===n?e.items:e.items.filter((function(e){return e.category===n}))};return Object(j.jsxs)(j.Fragment,{children:[e.items.length>0&&Object(j.jsxs)("select",{className:"filters",onChange:function(e){return c(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"ALL"}),["electronics","jewelery","men's clothing","women's clothing"].map((function(e,t){return Object(j.jsx)("option",{value:e,children:e.toUpperCase()},t)}))]}),Object(j.jsx)("div",{className:"grid",children:a().length>0?a().map((function(t){return Object(j.jsx)(O,{item:t,id:t.id,name:t.title,img:t.image,price:t.price,addToBasket:e.addToBasket,addToWishlist:e.addToWishlist,removeFromWishlist:e.removeFromWishlist,inWishlist:!!t.inWishlist},t.id)})):Object(j.jsx)("div",{className:"spinner"})})]})},x=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"fw-xl clr-nl",children:"Wishlist"}),Object(j.jsx)("div",{className:"grid",children:e.items.map((function(e,t){return Object(j.jsx)("div",{children:e.title},t)}))})]})},v=s(10),p=(s(35),s(2)),N=JSON.parse(localStorage.getItem("basket"))||[],k=JSON.parse(localStorage.getItem("wishlist"))||[],_=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],c=Object(i.useState)(N),a=Object(d.a)(c,2),o=a[0],b=a[1],h=Object(i.useState)(k),O=Object(d.a)(h,2),_=O[0],g=O[1];Object(i.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){_.forEach((function(t){var s=e.indexOf(e.find((function(e){return e.id===t.id})));e[s].inWishlist=!0})),n(e)}))}),[]),Object(i.useEffect)((function(){localStorage.setItem("basket",JSON.stringify(o))}),[o]),Object(i.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(_))}),[_]);var W=function(e,t){var i=s.find((function(t){return t.id===e})),n=Object(l.a)(o),c=n.find((function(t){return e===t.id}));c?(c.qt+=t,v.b.success("x".concat(t," ").concat(i.title," now in basket"))):(c=Object(r.a)(Object(r.a)({},i),{},{qt:t}),n.push(c),v.b.success("x".concat(t," ").concat(i.title," added to basket!"))),b(n)},y=function(e){var t=s.find((function(t){return t.id===e})),i=Object(l.a)(_),n=i.find((function(t){return e===t.id}));v.b.success("".concat(t.title," added to wishlist!")),n||(t.inWishlist=!0,i.push(t),g(i))},S=function(e){g(_.filter((function(t){return t.id!==e}))),v.b.error("".concat(s.find((function(t){return t.id===e})).title," removed from wishlist"));var t=Object(l.a)(s),i=t.indexOf(t.find((function(t){return t.id===e})));t[i].inWishlist=!1};return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{className:"Nav",clear:function(){b([])},delete:function(e){b(o.filter((function(t){return t!==e}))),v.b.error("All ".concat(e.title," removed from basket"))},items:o}),Object(j.jsxs)("div",{className:"container content",children:[Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/wishlist",render:function(){return Object(j.jsx)(x,{removeFromWishlist:S,items:_})}}),Object(j.jsx)(p.a,{path:"/",render:function(){return Object(j.jsx)(f,{wishlist:_,items:s,addToBasket:W,addToWishlist:y,removeFromWishlist:S})}})]}),Object(j.jsx)(v.a,{position:"bottom-right",autoClose:2e3})]})]})})};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e140b5f9.chunk.js.map