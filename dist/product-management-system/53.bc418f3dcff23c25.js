"use strict";(self.webpackChunkproduct_management_system=self.webpackChunkproduct_management_system||[]).push([[53],{3053:(F,p,d)=>{d.r(p),d.d(p,{ProductsModule:()=>O});var s=d(6814),a=d(9310),t=d(4946),i=d(95),h=d(9913),l=d(1594),f=d(9862);let m=(()=>{class e{constructor(o){this.httpClient=o,this.updateFlag=!1,this.productId="",this.baseUrl=`${l.N.target}/${l.N.apiVersion}/product/index.php`}getAllProducts(){return this.httpClient.post(this.baseUrl,{list_products:!0})}setUpdateFlag(o,r){this.updateFlag=o,this.productId=r}getUpdateFlag(){return this.updateFlag}getProductId(){return this.productId}addProduct(o){return this.httpClient.post(this.baseUrl,o)}updateProduct(o){return this.httpClient.put(this.baseUrl,o)}getProductDetails(o){return this.httpClient.post(this.baseUrl,o)}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(f.eN))};static#o=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function P(e,u){if(1&e&&(t.TgZ(0,"option",10),t._uU(1),t.qZA()),2&e){const o=u.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.label," ")}}function _(e,u){if(1&e){const o=t.EpF();t.TgZ(0,"div",13),t._UZ(1,"img",14),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p",15),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"button",16),t.NdJ("click",function(){const c=t.CHM(o).$implicit,Z=t.oxw(2);return t.KtG(Z.editProduct(c.product_id))}),t._uU(10," Edit "),t.qZA()()}if(2&e){const o=u.$implicit;t.xp6(1),t.Q6J("src",o.image,t.LSH),t.xp6(2),t.Oqu(o.product_name),t.xp6(2),t.Oqu(o.description),t.xp6(2),t.Oqu(t.lcZ(8,4,o.price))}}function b(e,u){if(1&e&&(t.TgZ(0,"div",11),t.YNc(1,_,11,6,"div",12),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.filteredProducts)}}let C=(()=>{class e{constructor(o,r,n,c){this.formBuilder=o,this.userService=r,this.router=n,this.productService=c,this.products=[],this.filteredProducts=[],this.sortOptions=[{value:"asc",label:"Price: Low to High"},{value:"desc",label:"Price: High to Low"}],this.logIn=!1,this.logIn=this.userService.getLogInStatus(),this.searchForm=this.formBuilder.group({search:[""],sort:[""]})}ngOnInit(){this.logIn||this.router.navigate(["./user/login"]),this.getAllProducts()}getAllProducts(){this.productService.getAllProducts().subscribe(o=>{this.products=o.products,this.filteredProducts=this.products,this.filterProducts()})}filterProducts(){const o=this.searchForm.get("search")?.value.toLowerCase(),r=this.searchForm.get("sort")?.value;this.filteredProducts=this.products.filter(n=>n.product_name.toLowerCase().includes(o)),"asc"===r?this.filteredProducts.sort((n,c)=>n.price-c.price):"desc"===r&&this.filteredProducts.sort((n,c)=>c.price-n.price)}addProduct(){this.router.navigate(["./products/add"])}editProduct(o){this.productService.setUpdateFlag(!0,o),this.router.navigate(["./products/edit"])}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(i.qu),t.Y36(h.c),t.Y36(a.F0),t.Y36(m))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-management-home"]],decls:14,vars:3,consts:[[1,"product-management"],[1,"header"],[1,"add-product-btn",3,"click"],[3,"formGroup"],[1,"filters"],["type","text","placeholder","Search by product name","formControlName","search",1,"search-input",3,"input"],["formControlName","sort",1,"price-filter",3,"change"],["value",""],["class","price-option",3,"value",4,"ngFor","ngForOf"],["class","product-list",4,"ngIf"],[1,"price-option",3,"value"],[1,"product-list"],["class","product-item",4,"ngFor","ngForOf"],[1,"product-item"],["alt","Product Image",3,"src"],[1,"price"],[1,"edit-btn",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Product Management System"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return n.addProduct()}),t._uU(5,"Add Product"),t.qZA()(),t.TgZ(6,"form",3)(7,"div",4)(8,"input",5),t.NdJ("input",function(){return n.filterProducts()}),t.qZA(),t.TgZ(9,"select",6),t.NdJ("change",function(){return n.filterProducts()}),t.TgZ(10,"option",7),t._uU(11,"Sort by price"),t.qZA(),t.YNc(12,P,2,2,"option",8),t.qZA()()(),t.YNc(13,b,2,1,"div",9),t.qZA()),2&r&&(t.xp6(6),t.Q6J("formGroup",n.searchForm),t.xp6(6),t.Q6J("ngForOf",n.sortOptions),t.xp6(1),t.Q6J("ngIf",n.filteredProducts.length))},dependencies:[s.sg,s.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,s.H9],styles:[".product-management[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;color:#333;opacity:0;animation:_ngcontent-%COMP%_fadeIn 1s ease forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.add-product-btn[_ngcontent-%COMP%]{background-color:#218838;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer}.add-product-btn[_ngcontent-%COMP%]:hover{background-color:#4e6a5a}.filters[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.search-input[_ngcontent-%COMP%]{flex:1;padding:10px;border:1px solid #ccc;border-radius:5px}.price-filter[_ngcontent-%COMP%]{margin-left:10px;padding:10px;border:1px solid #ccc;border-radius:5px}.product-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:20px}.product-item[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:5px;box-shadow:0 0 10px #0000001a}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:5px}.product-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}.product-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#666;margin-bottom:10px}.product-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#007bff}.edit-btn[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:#28a745;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s ease}.edit-btn[_ngcontent-%COMP%]:hover{background-color:#218838}.price-filter[_ngcontent-%COMP%]{padding:.66rem 1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s ease}.price-filter[_ngcontent-%COMP%]:hover{background-color:#0056b3}.price-option[_ngcontent-%COMP%]{background-color:#fff;color:#000}"]})}return e})();function v(e,u){if(1&e&&(t.TgZ(0,"div",13),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.notificationMessage," ")}}let g=(()=>{class e{constructor(o,r,n){this.formBuilder=o,this.router=r,this.productService=n,this.mode="add",this.notificationMessage="",this.productForm=this.formBuilder.group({productName:["",i.kI.required],productImage:["",i.kI.required],productDescription:[""],productPrice:["",[i.kI.required,i.kI.min(0)]]}),this.mode=this.productService.getUpdateFlag()?"edit":"add"}ngOnInit(){if("edit"===this.mode){const o={single_product:!0,product_id:this.productService.getProductId()};this.productService.getProductDetails(o).subscribe(r=>{this.product=r.products,this.productForm.patchValue({productName:this.product.product_name,productImage:this.product.image,productDescription:this.product.description,productPrice:this.product.price})}),this.productService.setUpdateFlag(!1,"")}else this.productForm.reset()}onSubmit(){this.productForm.valid&&("edit"===this.mode?this.productService.updateProduct({add_product:!0,product_name:this.productForm.value.productName,description:this.productForm.value.productDescription,image:this.productForm.value.productImage,price:this.productForm.value.productPrice}).subscribe({next:r=>{console.log("Successfully updated product details"),this.productForm.reset(),this.router.navigate(["./products/home"])},error:r=>{this.notificationMessage="An error occurred. Please Try again"}}):this.productService.addProduct({add_product:!0,product_name:this.productForm.value.productName,description:this.productForm.value.productDescription,image:this.productForm.value.productImage,price:this.productForm.value.productPrice}).subscribe({next:r=>{console.log("Successfully added"),this.productForm.reset(),this.router.navigate(["./products/home"])},error:r=>{this.notificationMessage="An error occurred. Please Try again"}}))}ngOnDestroy(){this.productForm.reset()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(i.qu),t.Y36(a.F0),t.Y36(m))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-edit-product"]],inputs:{mode:"mode",product:"product"},decls:23,vars:5,consts:[[1,"add-edit-product"],["class","notification",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","productName"],["type","text","id","productName","formControlName","productName"],["for","productImage"],["type","text","id","productImage","formControlName","productImage"],["for","productDescription"],["id","productDescription","formControlName","productDescription"],["for","productPrice"],["type","number","id","productPrice","formControlName","productPrice"],["type","submit",1,"submit-button",3,"disabled"],[1,"notification"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2),t.qZA(),t.YNc(3,v,2,1,"div",1),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Product Name"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",3)(10,"label",6),t._uU(11,"Image URL"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",3)(14,"label",8),t._uU(15,"Description"),t.qZA(),t._UZ(16,"textarea",9),t.qZA(),t.TgZ(17,"div",3)(18,"label",10),t._uU(19,"Price"),t.qZA(),t._UZ(20,"input",11),t.qZA(),t.TgZ(21,"button",12),t._uU(22),t.qZA()()()),2&r&&(t.xp6(2),t.Oqu("add"===n.mode?"Add Product":"Edit Product"),t.xp6(1),t.Q6J("ngIf",n.notificationMessage),t.xp6(1),t.Q6J("formGroup",n.productForm),t.xp6(17),t.Q6J("disabled",!n.productForm.valid),t.xp6(1),t.hij(" ","add"===n.mode?"Add":"Save"," "))},dependencies:[s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u],styles:[".add-edit-product[_ngcontent-%COMP%]{max-width:550px;margin:0 auto;background-color:#f9f9f9;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.add-edit-product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.add-edit-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.add-edit-product[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1rem}.add-edit-product[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.add-edit-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-edit-product[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:.5rem;font-size:1rem;border:1px solid #ccc;border-radius:4px;transition:border-color .3s ease}.add-edit-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .add-edit-product[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff}.add-edit-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s ease}.add-edit-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.notification[_ngcontent-%COMP%]{font-size:15px;color:#f21818}.submit-button[disabled][_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5}"]})}return e})();const x=[{path:"home",component:C},{path:"add",component:g},{path:"edit",component:g}];let M=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(x),a.Bz]})}return e})(),O=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[s.ez,M,i.UX]})}return e})()}}]);