(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),s=a.n(r),i=(a(94),a(2));var o=function(){return Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("div",{className:"header-container mobile-container",children:[Object(i.jsx)("div",{className:"d-flex justify-content-between",children:Object(i.jsx)("a",{className:"header-title",style:{color:"#f2f2f2",textDecoration:"none"},children:Object(i.jsx)("img",{src:"images/logo-header.png",alt:"Logo",width:"150",height:"50"})})}),Object(i.jsxs)("div",{className:"text-dark",style:{color:"#f2f2f2",textDecoration:"none"},children:["Hola ",Object(i.jsx)("b",{children:"Tomas. "}),"\xa0",Object(i.jsx)("span",{children:Object(i.jsx)("a",{className:"login-btn",style:{color:"#f2f2f2",textDecoration:"none"},children:"Sign Out"})})]})]})})};var l=function(){return Object(i.jsxs)("div",{className:"container-footer",children:[Object(i.jsxs)("div",{className:"donations",children:[Object(i.jsx)("h2",{style:{color:"white",textDecoration:"none"},children:"Donaciones"}),Object(i.jsxs)("div",{className:"bubbles",children:[Object(i.jsxs)("a",{rel:"noreferrer",href:"https://linktr.ee/tomasferrari",target:"_blank",style:{color:"white",textDecoration:"none"},children:[Object(i.jsx)("i",{className:"fa fa-bitcoin","aria-hidden":"true"}),"\xa0 Cripto\xa0"]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("img",{src:"https://cdn.cafecito.app/imgs/cafecito_logo.svg",alt:"cafecito"}),Object(i.jsx)("a",{href:"https://cafecito.app/tomyferra",target:"_blank",rel:"noreferrer",style:{marginLeft:2,color:"white",textDecoration:"none"},children:"\xa0 Cafecito"})]})]})]}),Object(i.jsxs)("div",{className:"agradecimientos",style:{color:"white",textDecoration:"none"},children:["Gracias por su ayuda!",Object(i.jsx)("div",{className:"bubbles",style:{color:"white",textDecoration:"none"}})]}),Object(i.jsxs)("div",{className:"social-network",children:[Object(i.jsx)("h2",{style:{color:"white",textDecoration:"none"},children:"Redes Sociales"}),Object(i.jsxs)("div",{className:"bubbles",children:[Object(i.jsxs)("a",{href:"mailto:ferra.tomy@gmail.com",style:{color:"white",textDecoration:"none"},children:[Object(i.jsx)("i",{className:"fa fa-google","aria-hidden":"true"}),"\xa0 Mail"]}),Object(i.jsxs)("a",{href:"https://instagram.com/tomyferra",target:"_blank",rel:"noreferrer",style:{color:"#FFFFFF",textDecoration:"none",marginLeft:2},children:[Object(i.jsx)("i",{class:"fa fa-instagram"}),"\xa0 Instagram"]})]})]})]})},d=a(11),j=a(166),b=a(171),u=a(70),m=a.n(u);var h=function(e){var t=n.a.useState(2),a=Object(d.a)(t,2),c=(a[0],a[1],n.a.useState(-1)),r=Object(d.a)(c,2),s=(r[0],r[1],n.a.useState("")),o=Object(d.a)(s,2),l=o[0],j=o[1],u=n.a.useState(""),h=Object(d.a)(u,2),O=h[0],x=h[1],p=n.a.useState(0),f=Object(d.a)(p,2),g=f[0],v=f[1],N=n.a.useState(0),y=Object(d.a)(N,2),C=y[0],_=y[1];return e.show?Object(i.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(i.jsx)("form",{onSubmit:function(e){console.log("Data posted");var t={productname:l,company:O,price:g,rating:Number(C)};t.rating>=0&&t.rating<=5?(console.log(t),m.a.post("http://localhost:5000/products/add",t).then((function(e){return console.log(e.data)})).then((function(e){return alert("Producto agregado correctamente")})).catch((function(e){return console.log(e)})).catch((function(e){return alert("Error al cargar el producto")}))):alert("El rating debe ser entre 0 y 5")},children:Object(i.jsxs)("div",{className:"modal-container",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("div",{className:"modal-header",children:"Nuevo Producto"}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsx)(b.a,{required:!0,id:"outlined-required",label:"Nombre",fullWidth:"true",placeholder:"Nombre...",value:l,onChange:function(e){return j(e.target.value)}})}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsx)(b.a,{required:!0,id:"outlined-required",label:"Empresa",fullWidth:"true",placeholder:"Empresa...",value:O,onChange:function(e){return x(e.target.value)}})}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsx)(b.a,{required:!0,id:"outlined-number",label:"Precio",type:"number",fullWidth:"true",value:g,onChange:function(e){return v(e.target.value)},InputLabelProps:{shrink:!0}})}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsx)(b.a,{required:!0,id:"outlined-number",label:"Rating (0-5)",type:"text",value:C,onChange:function(e){return _(e.target.value)},fullWidth:"true",InputLabelProps:{shrink:!0}})}),Object(i.jsx)("div",{className:"modal-body",children:"Agreg\xe1 una foto!"}),Object(i.jsx)("form",{action:"/action_page.php",children:Object(i.jsx)("input",{type:"file",id:"myFile",name:"filename"})}),Object(i.jsxs)("div",{className:"modal-footer",children:[Object(i.jsx)("button",{className:"red-btn",onClick:e.onClose,children:"Close"}),Object(i.jsxs)("button",{className:"blue-btn-footer",type:"submit",children:["Save"," "]})]})]})})}):null},O=a(167),x=a(75),p=a.n(x),f=a(165),g=a(170),v=a(168),N=a(169);var y=function(e){e.sortby,e.setsortby;var t=Object(c.useState)(""),a=Object(d.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),o=Object(d.a)(s,2),l=o[0],u=o[1];return Object(i.jsx)("section",{className:"toolbar",children:Object(i.jsxs)("div",{className:"toolrow  flex-column flex-lg-row justify-content-between",children:[Object(i.jsxs)("div",{className:"add-product",children:[Object(i.jsxs)(j.a,{onClick:function(){return u(!0)},variant:"contained",color:"primary",children:["Agregar un producto \xa0\xa0",Object(i.jsx)("i",{className:"fa fa-plus"})]}),Object(i.jsx)(h,{onClose:function(){return u(!1)},show:l})]}),Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsx)("div",{className:"d-flex",children:Object(i.jsxs)("form",{noValidate:!0,autoComplete:"off",style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)(b.a,{variant:"outlined",placeholder:"Producto...",inputProps:{"aria-label":"description"}}),Object(i.jsx)(O.a,{type:"submit","aria-label":"search",children:Object(i.jsx)(p.a,{})})]})})}),Object(i.jsx)("div",{className:"select-sort-by",children:Object(i.jsxs)(f.a,{className:"select-sort-by",variant:"outlined",style:{minWidth:220,margin:1,color:"white",borderColor:"white"},children:[Object(i.jsx)(N.a,{id:"demo-simple-select-outlined-label",className:"select-sort-by",style:{color:"white"},children:"Ordenar por..."}),Object(i.jsxs)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",className:"select-sort-by",value:n,onChange:function(e){r(e.target.value)},label:"Ordenar por...",style:{color:"white !important",borderColor:"white !important",placeholder:"white"},children:[Object(i.jsx)(g.a,{value:"mejor_puntaje",children:Object(i.jsx)("em",{children:"Mejor puntaje"})}),Object(i.jsx)(g.a,{value:"peor_puntaje",children:"Peor puntaje"}),Object(i.jsx)(g.a,{value:"mas_barato",children:"Mas barato"}),Object(i.jsx)(g.a,{value:"mas_caro",children:"Mas caro"}),Object(i.jsx)(g.a,{value:"nombre_ascendente",children:"Nombre ascendente"}),Object(i.jsx)(g.a,{value:"nombre_descendente",children:"Nombre descendente"})]})]})})]})})},C=a(53),_=a.n(C),w=a(76);var P=function(e){var t=n.a.useState(2),a=Object(d.a)(t,2),c=a[0],r=a[1],s=e.Nombre,o=e.Rating,l=e.Cantidad_Puntuaciones;return e.show?(o=function(e){var t=e-Math.floor(e);return t<.25?Math.floor(e):t>=.25&&t<.75?Math.floor(e)+.5:Math.floor(e)+1}(o),Object(i.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(i.jsxs)("div",{className:"modal-container",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("div",{className:"modal-header",children:Object(i.jsx)("b",{children:s})}),Object(i.jsxs)("div",{className:"modal-body2",children:[Object(i.jsx)("h2",{children:"Puntaje:"}),Object(i.jsxs)("div",{className:"rating-radio-btn",children:[Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"0",name:"Rating",value:"0"}),Object(i.jsx)("label",{for:"0",children:"0"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"0.5",name:"Rating",value:"0.5"}),Object(i.jsx)("label",{for:"0.5",children:"0.5"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"1",name:"Rating",value:"1"}),Object(i.jsx)("label",{for:"1",children:"1"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"1.5",name:"Rating",value:"1.5"}),Object(i.jsx)("label",{for:"1.5",children:"1.5"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"2",name:"Rating",value:"2"}),Object(i.jsx)("label",{for:"2",children:"2"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"2.5",name:"Rating",value:"2.5"}),Object(i.jsx)("label",{for:"2.5",children:"2.5"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"3",name:"Rating",value:"3"}),Object(i.jsx)("label",{for:"3",children:"3"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"3.5",name:"Rating",value:"3.5"}),Object(i.jsx)("label",{for:"3.5",children:"3.5"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"4",name:"Rating",value:"4"}),Object(i.jsx)("label",{for:"4",children:"4"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"4.5",name:"Rating",value:"4.5"}),Object(i.jsx)("label",{for:"4.5",children:"4.5"})]}),Object(i.jsxs)("div",{className:"rating-btn",children:[Object(i.jsx)("input",{type:"radio",id:"5",name:"Rating",value:"5"}),Object(i.jsx)("label",{for:"5",children:"5"})]})]}),Object(i.jsxs)("h4",{children:[o," / 5 (",l,")"]}),Object(i.jsx)("h2",{children:"Precio:"}),Object(i.jsx)("input",{type:"number",id:"precio",name:"precio",placeholder:"$..."}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"modal-footer",children:[Object(i.jsx)("button",{className:"red-btn",onClick:e.onClose,children:"Close"}),Object(i.jsxs)("button",{className:"blue-btn-footer",onClick:function(){r(c),console.log(c)},children:["Save"," "]})]})]})})):null};var R=function(e){var t=e.id,a=e.nombre,n=e.rating,r=e.precio,s=e.empresa,o=e.puntuaciones,l=Object(c.useState)(!1),b=Object(d.a)(l,2),u=b[0],m=b[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2);return O[0],O[1],n=function(e){var t=e-Math.floor(e);return t<.25?Math.floor(e):t>=.25&&t<.75?Math.floor(e)+.5:Math.floor(e)+1}(n),Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsxs)("div",{className:"card card-height p-4 mt-4",children:[Object(i.jsx)("div",{className:"product-img d-flex flex-row justify-content-center align-items-center h-200",children:Object(i.jsx)("img",{className:"contain-fit",src:"images/".concat(t,".png"),alt:a,width:"300",height:"200"})}),Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsx)("h3",{className:"w-200",children:a}),Object(i.jsx)("p",{className:"w-200",children:s})]})]}),Object(i.jsxs)("div",{className:"productBox ",children:[Object(i.jsxs)("p",{children:["$",r]}),Object(i.jsxs)("span",{className:"puntuaciones",children:[Object(i.jsxs)("b",{className:"rating-value",children:[Object(i.jsx)("i",{class:"fa fa-star fa-1x"}),"\xa0\xa0",n]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(j.a,{onClick:function(){return m(!0)},variant:"contained",color:"primary",disableElevation:"true",children:"Opinar"}),Object(i.jsx)(P,{onClose:function(){return m(!1)},show:u,ID:t,Nombre:a,Rating:n,Precio:r,Cantidad_Puntuaciones:o})]})]})]})]},t)},S=[{ID:"1",Nombre:"COCA COLA ORIGINAL",Codigo_de_barras:"12",Rating:"2.585150522",Empresa:"The Coca Cola Company",Cantidad_Puntuaciones:"27",Precio:"1200"},{ID:"2",Nombre:"QUESO HOLANDA",Codigo_de_barras:"5099",Empresa:"Sancor",Rating:"0.560243983",Cantidad_Puntuaciones:"26",Precio:"1400"},{ID:"3",Nombre:"GOMITAS MOGUL",Codigo_de_barras:"",Empresa:"Mogul",Rating:"0.124828186",Cantidad_Puntuaciones:"81",Precio:"100"},{ID:"4",Nombre:"CHICLES BELDENT",Codigo_de_barras:"77936189",Rating:"3.414764943",Empresa:"Beldent",Cantidad_Puntuaciones:"2",Precio:"600"},{ID:"5",Nombre:"JABON LUX",Codigo_de_barras:"7.79E+12",Empresa:"Lux",Rating:"0.615569132",Cantidad_Puntuaciones:"90",Precio:"340"},{ID:"6",Nombre:"MARLBORO GOLD",Codigo_de_barras:"77905819",Rating:"4.838244775",Empresa:"Malboro",Cantidad_Puntuaciones:"66",Precio:"440"},{ID:"7",Nombre:"MAYONESA HELMANS",Codigo_de_barras:"77954961",Rating:"1.910000143",Empresa:"Helmans",Cantidad_Puntuaciones:"74",Precio:"10"}],D=a(77),E=a.n(D);var k=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),u=b[0],m=b[1],h=Object(c.useState)(!0),O=Object(d.a)(h,2),x=O[0],p=O[1],f=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return Object(c.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(1e3);case 3:console.log("time"),p(!1),l(S),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),p(!1),m(!0),n(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!0===u?Object(i.jsxs)("div",{className:"text-danger",children:[Object(i.jsx)("i",{class:"fa fa-exclamation-triangle fa-3x"}),"ERROR: ",Object(i.jsxs)("b",{children:["Loading products failed ",a]})]}):Object(i.jsx)("div",{className:"container products-list",children:Object(i.jsx)(E.a,{type:"media",rows:15,className:"productlist-placeholder",ready:!1===x,children:Object(i.jsx)("div",{className:"product-row",children:o.map((function(e){var t=e.ID,a=e.Nombre,c=e.Empresa,n=e.Rating,r=e.Cantidad_Puntuaciones,s=e.Precio;return Object(i.jsx)(R,{id:t,nombre:a,empresa:c,rating:n,puntuaciones:r,precio:s})}))})})})};var I=function(){var e=Object(c.useState)("mejor_puntaje"),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{sortby:a,setsortby:n}),Object(i.jsx)(k,{data:S})]})},M=a(79);var L=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(M.a,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(I,{}),Object(i.jsx)(l,{})]})})};s.a.render(Object(i.jsx)(L,{}),document.getElementById("root"))},94:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.386e60f5.chunk.js.map