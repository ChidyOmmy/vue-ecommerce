(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a16d9b72"],{5652:function(t,e,a){"use strict";var s=a("d9b4"),r=a.n(s);r.a},d9b4:function(t,e,a){},da3a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"CheckOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.submit,expression:"!submit"}],staticClass:"row p-2"},[t.authenticated?a("div",{staticClass:"col-md-5"},[a("img",{staticClass:"avatar",attrs:{src:t.user.avatar}}),a("h3",[t._v(t._s(t.user.username))]),a("button",{staticClass:"btn btn-success",on:{click:t.checkoutUser}},[t._v(" Checkout as "+t._s(t.user.username)+" ")]),a("h5",[t._v("Or")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#fillform"}},[t._v(" Fill Form ")]),a("div",{staticClass:"modal fade",attrs:{id:"fillform",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form-group form-group-control p-2"},[a("label",{attrs:{for:"fullname"}},[t._v("Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.fullname,expression:"order.fullname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"full name"},domProps:{value:t.order.fullname},on:{input:function(e){e.target.composing||t.$set(t.order,"fullname",e.target.value)}}}),a("label",{attrs:{for:"address"}},[t._v("Address")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.order.address,expression:"order.address"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.order,"address",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Kinondoni"}},[t._v("Kinondoni")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Temeke")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Ilala")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Kigamboni")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Ubungo")])]),a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.email,expression:"order.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.order.email},on:{input:function(e){e.target.composing||t.$set(t.order,"email",e.target.value)}}}),a("button",{staticClass:"btn-success",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.check}},[t._v("Complete Order")])])]),t._m(1)])])])]):a("div",{staticClass:"col-md-5"},[a("form",{staticClass:"form-group form-group-control p-2"},[a("label",{attrs:{for:"fullname"}},[t._v("Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.fullname,expression:"order.fullname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"full name"},domProps:{value:t.order.fullname},on:{input:function(e){e.target.composing||t.$set(t.order,"fullname",e.target.value)}}}),a("label",{attrs:{for:"address"}},[t._v("Address")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.order.address,expression:"order.address"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.order,"address",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Kinondoni"}},[t._v("Kinondoni")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Temeke")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Ilala")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Kigamboni")]),a("option",{attrs:{value:"Kinondoni"}},[t._v("Ubungo")])]),a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.email,expression:"order.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.order.email},on:{input:function(e){e.target.composing||t.$set(t.order,"email",e.target.value)}}}),a("button",{staticClass:"btn-success",attrs:{type:"button"},on:{click:t.check}},[t._v("Complete Order")])])]),a("div",{staticClass:"col-md-6 m-2"},[a("h3",{staticClass:"diaplay-3"},[t._v("Order Summary")]),a("p",{staticClass:"lead"},[t._v(" You can edit some items and check the total paycheck before you place your order ")]),a("table",{staticClass:"table table-responsive table-dark"},[t._m(2),a("tbody",[t._l(t.cart,(function(e){return a("tr",[a("td",[a("img",{staticClass:"w-100",attrs:{src:e.source}})]),a("td",[a("i",{staticClass:"fas fa-sort-up",on:{click:function(a){return t.addToCart(e)}}}),a("i",{staticClass:"fas fa-sort-down",on:{click:function(a){return t.removeFromCart(e)}}})]),a("td",[t._v(t._s(e.quantity))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v("$"+t._s(e.price))]),a("td",[t._v("$"+t._s(e.price*e.quantity))])])})),a("tr",[a("td",[t._v("Total")]),a("td",{attrs:{colspan:"4"}}),a("td",[t._v("$"+t._s(t.totalPrice))])])],2)])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"container"},[a("div",{staticClass:"jumbotron"},[a("h4",{staticClass:"display-4"},[t._v("Order Completed")]),t._m(3),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"btn btn-primary"},[t._v("Make New Order")])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th"),a("th"),a("th",[t._v("Quantity")]),a("th",[t._v("Item")]),a("th",[t._v("Price")]),a("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"lead"},[t._v(" You will receive a notification in "),a("span",{staticClass:"text-success"},[t._v("24 hours")])])}],o=a("5530"),i=a("2f62"),l={name:"CheckOut",data:function(){return{submit:!1,order:{fullname:"John Doe",address:"Kinondoni",email:"johndoe@outlook.com",totalPrice:0,completed:!1,cart:[]}}},computed:Object(i["c"])(["cart","totalPrice","authenticated","user"]),methods:Object(o["a"])({checkoutUser:function(){this.authenticated&&(this.order.fullname=this.user.username,this.order.address=this.user.address,this.order.email=this.user.email),this.check()},check:function(){this.order.totalPrice=this.totalPrice,this.order.cart=JSON.parse(JSON.stringify(this.cart)),this.checkOut(this.order),this.clearCart(),this.submit=!this.submit}},Object(i["b"])(["addToCart","removeFromCart","checkOut","clearCart"]))},n=l,d=(a("5652"),a("2877")),c=Object(d["a"])(n,s,r,!1,null,"41daf54c",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-a16d9b72.7bb6c24c.js.map