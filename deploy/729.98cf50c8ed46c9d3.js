"use strict";(self.webpackChunktp04_chekatt_rayane=self.webpackChunktp04_chekatt_rayane||[]).push([[729],{1729:(GS,x2,l)=>{l.r(x2),l.d(x2,{CatalogueModule:()=>US});var A=l(6895),S2=l(3074),o=l(4006),N2=l(529),b2=l(1787),c=l(8274),e7=l(2340);let P=(()=>{class s{constructor(a){this.http=a,this.env=e7.N}getProducts(){return this.http.get(this.env.apiBaseUrl+"/products")}getProduct(a){return this.http.get(this.env.apiBaseUrl+`/product/${a}`)}}return s.\u0275fac=function(a){return new(a||s)(c.LFG(N2.eN))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var w2=l(4318);function r7(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"div",2)(1,"div",3)(2,"h3",4),c._uU(3),c.qZA()(),c.TgZ(4,"div",5)(5,"div",6),c._UZ(6,"img",7),c.qZA(),c.TgZ(7,"div",8)(8,"p"),c._uU(9),c.qZA(),c.TgZ(10,"p"),c._uU(11),c.qZA(),c.TgZ(12,"p"),c._uU(13),c.qZA(),c.TgZ(14,"p"),c._uU(15),c.qZA(),c.TgZ(16,"button",9),c.NdJ("click",function(){c.CHM(a);const r=c.oxw();return c.KtG(r.addToCart(r.product))}),c._UZ(17,"span",10),c._uU(18," Ajouter au panier "),c.qZA()()()()}if(2&s){const a=c.oxw();c.xp6(3),c.Oqu(a.product.name),c.xp6(3),c.s9C("src",a.product.image,c.LSH),c.xp6(3),c.Oqu(a.product.description),c.xp6(2),c.hij("Cat\xe9gorie : ",a.product.category,""),c.xp6(2),c.hij("Prix : ",a.product.price," \u20ac"),c.xp6(2),c.Oqu(a.product.summary)}}let f7=(()=>{class s{constructor(a,e,r){this.route=a,this.catalogueService=e,this.store=r}ngOnInit(){this.catalogueService.getProducts().subscribe(a=>this.product=a.find(e=>e.id==this.route.snapshot.params.id))}addToCart(a){this.store.dispatch(new b2.R(a))}}return s.\u0275fac=function(a){return new(a||s)(c.Y36(S2.gz),c.Y36(P),c.Y36(w2.yh))},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-product-detail"]],decls:4,vars:1,consts:[[1,"container"],["class","panel panel-default",4,"ngIf"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],[1,"panel-body"],[1,"media-left"],["alt","...",1,"media-object",3,"src"],[1,"media-body"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"glyphicon","glyphicon-shopping-cart"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0)(1,"h1"),c._uU(2,"D\xe9tail du produit"),c.qZA(),c.YNc(3,r7,19,6,"div",1),c.qZA()),2&a&&(c.xp6(3),c.Q6J("ngIf",e.product))},dependencies:[A.O5],styles:["img[_ngcontent-%COMP%]{max-width:384px;max-height:384px}.panel-title[_ngcontent-%COMP%]{font-weight:700;font-size:large}.panel-body[_ngcontent-%COMP%]{font-size:medium}button[_ngcontent-%COMP%]{width:200px;height:35px}"]}),s})();var k2=l(4004),V0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]};let BS=(()=>{class s{constructor(){this.faSearch=V0,this.query="",this.search=new c.vpe,this.category=new c.vpe,this.reset=new c.vpe}onClickSearch(){this.search.emit(this.query)}clickCategory(a){alert("onClickCategory"),this.category.emit(a)}clickReset(){this.reset.emit()}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-search"]],outputs:{search:"search",category:"category",reset:"reset"},decls:12,vars:1,consts:[[1,"input-group"],[1,"search-bar"],["type","search","name","search","pattern",".*\\S.*","required","",3,"ngModel","ngModelChange"],["type","submit",1,"search-btn",3,"click"],["aria-hidden","true",1,"glyphicon","glyphicon-search"],[1,"category_filter"],[1,"btn","btn-secondary","btn-category",3,"click"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0)(1,"div",1)(2,"input",2),c.NdJ("ngModelChange",function(i){return e.query=i}),c.qZA(),c.TgZ(3,"button",3),c.NdJ("click",function(){return e.onClickSearch()}),c._UZ(4,"span",4),c.qZA()()(),c.TgZ(5,"div",5)(6,"button",6),c.NdJ("click",function(){return e.clickCategory("Livre")}),c._uU(7,"Livre"),c.qZA(),c.TgZ(8,"button",6),c.NdJ("click",function(){return e.clickCategory("Manga")}),c._uU(9,"Manga"),c.qZA(),c.TgZ(10,"button",6),c.NdJ("click",function(){return e.clickCategory("Jeu")}),c._uU(11,"Jeu"),c.qZA()()),2&a&&(c.xp6(2),c.Q6J("ngModel",e.query))},dependencies:[o.Fj,o.JJ,o.Q7,o.c5,o.On],styles:['*[_ngcontent-%COMP%]{border:0;box-sizing:border-box;margin:0;padding:0}[_ngcontent-%COMP%]:root{font-size:calc(16px + .005*(100vw - 320px))}body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font:1em Hind,sans-serif;line-height:1.5em}body[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{color:#171717}body[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]{display:flex}body[_ngcontent-%COMP%]{background:#757575;height:100vh}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after{transition:all .25s ease-out}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]{width:3em;height:3em}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid:not(:focus), .search-btn[_ngcontent-%COMP%]{cursor:pointer}.search-bar[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{width:100%}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus) + .search-btn[_ngcontent-%COMP%]:focus{outline:transparent}.search-bar[_ngcontent-%COMP%]{margin:auto;padding:1.5em;justify-content:center;max-width:30em}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border-radius:1.5em;box-shadow:0 0 0 .4em #171717 inset;padding:.75em;transform:translate(.5em,.5em) scale(.5);transform-origin:100% 0;-webkit-appearance:none;appearance:none}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{background:#fff;border-radius:.375em 0 0 .375em;box-shadow:0 0 0 .1em #d9d9d9 inset;transform:scale(1)}.search-btn[_ngcontent-%COMP%]{background:#171717;border-radius:0 .75em .75em 0/0 1.5em 1.5em 0;padding:.75em;position:relative;transform:translate(.25em,.25em) rotate(45deg) scale(.25,.125);transform-origin:0 50%}.search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after{content:"";display:block;opacity:0;position:absolute}.search-btn[_ngcontent-%COMP%]:before{border-radius:50%;box-shadow:0 0 0 .2em #757575 inset;top:.75em;left:.75em;width:1.2em;height:1.2em}.search-btn[_ngcontent-%COMP%]:after{background:#757575;border-radius:0 .25em .25em 0;top:51%;left:51%;width:.75em;height:.25em;transform:translate(.2em) rotate(45deg);transform-origin:0 50%}.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;width:1px;height:1px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]{background:#c5ffd2;border-radius:0 1em 1em 0;transform:scale(1)}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:after, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:after{opacity:1}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid:not(:focus) + .search-btn[_ngcontent-%COMP%]:focus{background:#a3bdff}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:active, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media screen and (prefers-color-scheme: dark){body[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{color:#757575}body[_ngcontent-%COMP%]{background:#171717}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:0 0 0 .4em #757575 inset}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{background:#EEEEEE;box-shadow:0 0 0 .1em #3d3d3d inset}.search-btn[_ngcontent-%COMP%]{background:#757575}}.category_filter[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:250px}.btn-category[_ngcontent-%COMP%]{margin-left:2em}']}),s})();function TS(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"div",5)(1,"div",6),c._UZ(2,"img",7),c.TgZ(3,"div")(4,"div",8),c._uU(5),c.qZA(),c.TgZ(6,"div",9)(7,"h5",10),c._uU(8),c.qZA(),c.TgZ(9,"h6",11),c._uU(10),c._UZ(11,"br"),c.TgZ(12,"strong"),c._uU(13," Prix :"),c.qZA(),c._uU(14),c.qZA(),c._UZ(15,"br"),c.TgZ(16,"button",12),c.NdJ("click",function(){const i=c.CHM(a).$implicit,qS=c.oxw();return c.KtG(qS.addToCart(i))}),c._uU(17,"Ajouter au panier"),c.qZA()()()()()}if(2&s){const a=f.$implicit;c.xp6(2),c.s9C("src",a.image,c.LSH),c.s9C("alt",a.image),c.xp6(3),c.Oqu(a.description),c.xp6(3),c.Oqu(a.name),c.xp6(2),c.hij(" ",a.category," "),c.xp6(4),c.hij(" ",a.price," \u20ac ")}}let FS=(()=>{class s{constructor(a,e){this.catalogueService=a,this.store=e,this.products=[],this.category=""}ngOnInit(){this.resetSearch()}resetSearch(){this.catalogueService.getProducts().subscribe(a=>this.products=a)}addToCart(a){this.store.dispatch(new b2.R(a))}onSearch(a){this.catalogueService.getProducts().pipe((0,k2.U)(e=>e.filter(r=>r.name.toLowerCase().includes(a.toLowerCase()))),(0,k2.U)(e=>e.filter(r=>!this.category||r.category===this.category))).subscribe(e=>this.products=e)}onCategoryChange(a){this.category=a}OnReset(){this.resetSearch()}}return s.\u0275fac=function(a){return new(a||s)(c.Y36(P),c.Y36(w2.yh))},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-catalogue"]],decls:7,vars:1,consts:[[1,"container"],[3,"reset","search","category"],[1,"container-fluid","mt-3"],[1,"row"],["class","col-md-12",4,"ngFor","ngForOf"],[1,"col-md-12"],[1,"card",2,"width","20rem"],[1,"rounded","center-block",3,"src","alt"],[1,"card-footer","text-muted","text-sm-center"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"btn","btn-success","center-block",3,"click"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0)(1,"h2"),c._uU(2,"Catalogue produits :"),c.qZA(),c.TgZ(3,"app-search",1),c.NdJ("reset",function(){return e.OnReset()})("search",function(i){return e.onSearch(i)})("category",function(i){return e.onCategoryChange(i)}),c.qZA(),c.TgZ(4,"div",2)(5,"div",3),c.YNc(6,TS,18,6,"div",4),c.qZA()()()),2&a&&(c.xp6(6),c.Q6J("ngForOf",e.products))},dependencies:[A.sg,BS],styles:["img[_ngcontent-%COMP%]{max-width:30em;max-height:30em}.card[_ngcontent-%COMP%]{float:none;margin:0 auto 10px}.center-block[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}"]}),s})();var DS=l(2366);const RS=[{path:"",component:FS},{path:"product/:id",component:f7}];let US=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({providers:[P,{provide:N2.TP,useClass:DS.O,multi:!0}],imports:[A.ez,S2.Bz.forChild(RS),o.u5]}),s})()}}]);