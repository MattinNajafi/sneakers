(this.webpackJsonpsneakers=this.webpackJsonpsneakers||[]).push([[0],{54:function(e,t,a){e.exports=a.p+"static/media/air-force-1-07-qs.d2f95448.jpg"},70:function(e,t,a){e.exports=a(89)},80:function(e,t,a){e.exports=a.p+"static/media/sweet-liberty.0b1842cc.png"},81:function(e,t,a){e.exports=a.p+"static/media/miror.7c98aac5.png"},82:function(e,t,a){e.exports=a.p+"static/media/converse-pro-leather-og-ox.8af8beb5.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/adidas-lxcon-x-wm.484ebaa3.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/nike-gts-return-premium.62c32cc2.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/vans-og-old-skool-lx.800f52a4.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/nike-air-wildwood-acg.f3b90589.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/nike-air-max-720-ispa.d8270ad7.jpg"},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),i=a.n(l),c=a(12),o=a(30),s=a(8),m=a(7),u=a(9),d=a(10),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement("div",{style:h},n.createElement("div",{style:E},n.createElement(c.b,{to:"/products"},n.createElement("button",{className:"buttonStyled"},"SHOP NOW"))))}}]),a}(n.Component),h={width:"100%",height:"100%",background:"white",display:"flex",justifyContent:"center",alignItems:"center"},E={width:"99%",height:"98%",backgroundImage:"url("+a(80)+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"},v=p,g=n.createContext({getName:function(){},getCity:function(){},getCountry:function(){},getAdress:function(){},getCardNr:function(){},getEmail:function(){},getExpireDay:function(){},fullname:"",mail:"",country:"",city:"",adress:"",expireDay:"",cardNr:""}),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getCardNr=function(e){var t=e.target.value.substr(12);n.setState({cardNr:t})},n.getExpireDay=function(e){var t=e.target.value;n.setState({expireDay:t})},n.getName=function(e){var t=e.target.value;n.setState({fullname:t})},n.getCity=function(e){var t=e.target.value;n.setState({city:t})},n.getEmail=function(e){var t=e.target.value;n.setState({mail:t})},n.getCountry=function(e){var t=e.target.value;n.setState({country:t})},n.getAdress=function(e){var t=e.target.value;n.setState({adress:t})},n.state={fullname:"",country:"",city:"",adress:"",expireDay:"",cardNr:"",mail:"",getEmail:n.getEmail,getName:n.getName,getCountry:n.getCountry,getCity:n.getCity,getAdress:n.getAdress,getExpireDay:n.getExpireDay,getCardNr:n.getCardNr},n}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),b=g.Consumer,y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(b,null,(function(e){return""===e.mail?n.createElement(n.Fragment,null):n.createElement("div",{className:"confirmed"},n.createElement("h2",null,"Thanks for your order."),n.createElement("h2",null,"Your ordernumber is: 1239087"),n.createElement("h2",null,"Confirmation of your order is sent to:"),n.createElement("h2",null,e.mail))}))}}]),a}(n.Component),C=a(19),k=a(49),N=n.createContext({addToCart:function(){},shoppingCart:[],removeCartRow:function(){},shipping:function(){return 0},totalAmount:function(){return 0},expressChecked:function(){return!1},regularChecked:function(){return!1},freeChecked:function(){return!1},shippingAmount:0,date:0,radio:"",isDateTrue:!1}),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).expressChecked=function(){return"Express"===n.state.radio},n.regularChecked=function(){return"Regular"===n.state.radio},n.freeChecked=function(){return"Free"===n.state.radio},n.shipping=function(e,t){var a=new Date,r=a.getFullYear(),l=a.getMonth(),i=a.getDate(),c="".concat(r,"-").concat(l<=10?"0".concat(l+1):l+1,"-").concat(i<8||i>29?"0".concat(i+2):i+2),o="".concat(r,"-").concat(l<=10?"0".concat(l+1):l+1,"-").concat(i<5||i>26?"0".concat(i+5):i+5),s="".concat(r,"-").concat(l<=10?"0".concat(l+1):l+1,"-").concat(i<2||i>23?"0".concat(i+8):i+8);l<10&&(console.log(0+l),l=Number("zero"+l)),i<10&&(i=Number("zero"+l)),"Free"===e.target.value?(n.setState({radio:"Free"}),n.setState({isDateTrue:!0}),n.setState({date:s}),n.setState({shippingAmount:0})):"Regular"===e.target.value?(n.setState({radio:"Regular"}),n.setState({isDateTrue:!0}),n.setState({shippingAmount:"19"}),n.setState({date:o})):"Express"===e.target.value&&(n.setState({radio:"Express"}),n.setState({isDateTrue:!0}),n.setState({date:c}),n.setState({shippingAmount:"29"}))},n.totalAmount=function(){var e,t=0,a=Object(k.a)(n.state.shoppingCart);try{for(a.s();!(e=a.n()).done;){var r=e.value;t+=r.product.price*r.count}}catch(l){a.e(l)}finally{a.f()}return t},n.removeCartRow=function(e,t){var a,r=Object.assign([],n.state.shoppingCart),l=Object(k.a)(r);try{for(l.s();!(a=l.n()).done;){var i=a.value;if(e===i.product.id&&i.count>1)return i.count--,void n.setState({shoppingCart:r})}}catch(c){l.e(c)}finally{l.f()}n.setState({shoppingCart:r.filter((function(t){return t.product.id!==e}))})},n.addToCart=function(e,t){var a=Object.assign([],n.state.shoppingCart),r=a.find((function(a){if(a.product.id===e.id&&a.size===Number(t))return!0}));r?(r.count++,n.setState({shoppingCart:a})):(r={product:e,size:t,count:1},n.setState({shoppingCart:[].concat(Object(C.a)(n.state.shoppingCart),[r])}))},n.state={addToCart:n.addToCart,shoppingCart:[],removeCartRow:n.removeCartRow,totalAmount:n.totalAmount,expressChecked:n.expressChecked,regularChecked:n.regularChecked,freeChecked:n.freeChecked,isDateTrue:!1,date:0,radio:"",shipping:n.shipping,shippingAmount:0},n}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),x=N.Consumer,j=a(121),S=a(125),w=a(124),A=a(123),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(x,null,(function(e){return 0===e.shoppingCart.length?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,n.createElement("div",{className:"header-total"},n.createElement("h3",null,"Total")),n.createElement("div",{className:"subheader-total"},n.createElement("p",null,"Sub-total:"),n.createElement("p",null,0===e.totalAmount()?0:e.totalAmount()-Number(e.shippingAmount)+Number(e.shippingAmount),"$")),n.createElement("div",{className:"subheader-total"},n.createElement("p",null,"Shipping:"),n.createElement("p",null,0===e.shippingAmount?"Free":"".concat(e.shippingAmount,"$"))),0==e.isDateTrue?n.createElement(n.Fragment,null):n.createElement("div",{className:"subheader-total"},n.createElement("p",null,"Delivery:"),n.createElement("p",{className:"date"},e.date)),n.createElement("div",{className:"delivery-radio"},n.createElement(S.a,{onChange:e.shipping,style:P},n.createElement(w.a,{value:"Express",control:n.createElement(A.a,{color:"primary"}),label:"Express",labelPlacement:"end"}),n.createElement(w.a,{value:"Regular",control:n.createElement(A.a,{color:"primary"}),label:"Regular",labelPlacement:"end"}),n.createElement(w.a,{value:"Free",control:n.createElement(A.a,{color:"primary"}),label:"Free",labelPlacement:"end"}))),n.createElement("div",{className:"total-total"},n.createElement("p",null,"Total:"),n.createElement("p",null,e.totalAmount()+Number(e.shippingAmount),"$")),n.createElement("div",{className:"paymentbutton"},n.createElement(c.b,{to:"/payment",style:{textDecoration:"none"}},n.createElement(j.a,{id:"next-button"},"TO PAYMENT"))))}))}}]),a}(n.Component),P={display:"flex",flexDirection:"row"},T=D,R=a(43),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(x,null,(function(t){return n.createElement(n.Fragment,null,n.createElement("div",{className:"cart-img-info-div"},n.createElement("div",{className:"cart-imgdiv"},n.createElement("img",{src:e.props.item.product.img,alt:"img"})),n.createElement("div",{className:"cart-qty-size-price-div"},n.createElement("div",{className:"flex-cart-info"},n.createElement("div",null,n.createElement("p",{className:"modeldiv"},e.props.item.product.brand),n.createElement("p",{className:"modeldiv"},e.props.item.product.model)),n.createElement("div",{className:"pricediv"},n.createElement("p",null,e.props.item.product.price*e.props.item.count,"$"))),n.createElement("div",{className:"flex-cart-info"},n.createElement("div",null,n.createElement("p",{className:"qtydiv"},"QTY: ",e.props.item.count),n.createElement("p",{className:"qtydiv"},"SIZE: ",e.props.item.size)),n.createElement("div",{className:"icondiv"},n.createElement(R.a,{onClick:function(){return t.removeCartRow(e.props.item.product.id,e.props.item.count)},id:"icon"}))))))}))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(x,null,(function(e){return 0===e.shoppingCart.length?n.createElement("div",{style:L},n.createElement("div",{style:I},n.createElement(R.b,{id:"shoppingbasket"}),n.createElement("h2",null,"Your cart is currently empty"),n.createElement(c.b,{to:"/products",style:{textDecoration:"none"}},n.createElement(j.a,{id:"next-button",variant:"contained",color:"primary"},"PRODUCTS")))):n.createElement("div",{className:"flex-cart"},n.createElement("div",{className:"box-for-flex"},n.createElement(x,null,(function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"cart-img-info-div-header"},n.createElement("h3",null,"Shopping Cart")),e.shoppingCart.map((function(e){return n.createElement(M,{item:e})})))}))),n.createElement("div",{className:"totalDiv"},n.createElement(T,null)))}))}}]),a}(n.Component),I={display:"flex",height:"100%",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",letterSpacing:"1px",lineHeight:"2.5rem"},L={height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},G=F,X=[{id:0,brand:"Nike Sportswear",model:"AIR MAX TRIAX 96 SP",price:149,description:"Debuted in the late \u201990s as a running sneaker alternative to the already pretty stacked Nike running catalog, the Nike Air Max Triax 96 SP returns in a full camo look for the inner-city camouflage-fit finish. Constructed with a lightweight mesh and synthetic upper, boasting a large-volume visible Air unit, the Safari Camo Nike Air Max Triax 96 is more than just a camo sneaker, it\u2019s the cherry on the ice of all camo sneakers.",inCart:!1,img:a(81)},{id:1,brand:"Converse",model:"PRO LEATHER OG OX",price:99,description:"Converse nods to its extensive basketball history in the \u201870s and \u201880s with the \u201cRaise Your Game\u201d pack. The homage to vintage basketball shoes includes the Converse Pro Leather OG, kept in a subtle cream/white, boasting a gold foil \u201cPro Leather\u201d logo as well as the signature Chevron logo. Made from premium leather and featuring luxe leather lining, this blast from the past celebrates the rich history of Converse basketball and is round off by an American flag sockliner.",inCart:!1,img:a(82)},{id:2,brand:"Adidas Originals",model:"LXCON x WM",price:219,description:"Long-time adidas partner and Japanese brand White Mountaineering reimagine one of adidas\u2019 bold sneakers that reappeared over the previous months. The adidas LXCON, a reinterpretation of the adidas Lexicon comes equipped with a futuristic retro look featuring a unique piping construction that flips the lacing system into buckles.",inCart:!1,img:a(83)},{id:3,brand:"Nike SB",model:"GTS RETURN PREMIUM",price:85,description:"Nike\u2019s latest skateboarding shoe, the Nike SB GTS Return offers a classic look, namely the colorway of the OG Air Max 1. Dressed in red and white, as the original retro runner, the premium skate show reinterprets a classic Nike skate shoe with a cupsole for a more flexible and lightweight construction for daily on and off the deck wear.",inCart:!1,img:a(84)},{id:4,brand:"Vans",model:"YEEZOG OLD SKOOL LX",price:75,description:"Premium versions of classic shoes are well-seen item (at least here in our office), this Vans Old Skool looks to the original design but utilizes a luce update, featuring an all-suede upper and vulcanized off-white midsole for a great contrast. The leather Vans sidestripe rounds off a staple that shouldn\u2019t be missing your rotation.",inCart:!1,img:a(85)},{id:5,brand:"Nike ACG",model:"AIR WILDWOOD ACG",price:109,description:"Sending you straight back to 1989 with these Nike Air Wildwood ACGs. The perfect mix of sneaker and outdoor shoe, made with a leather upper, the Nike Air Wildwood ACG is the truth, like Paul Pierce. Get the latest drop now.",inCart:!1,img:a(86)},{id:6,brand:"Nike Sportswear",model:"AIR MAX 720 ISPA",price:210,description:"The Nike ISPA Air Max 720 combines Nike innovation and a futuristic Ninja-themed feeling. The technical sneaker from Nike\u2019s improvise, scavenge, protect and adapt thinktank is inspired by the Zoom Turf 96, featuring Nike\u2019s biggest heel Air boasting \u201cContains High Pressure Nitrogen\u201d lettering, to cushion every step of yours like a cloud. The eye-catching rubber outsole comes with rubber pods to provide a grippy stand.",inCart:!1,img:a(87)},{id:7,brand:"Nike Sportswear",model:"AIR FORCE 1 '07 QS",price:130,description:"Mid-February is the time for most of the NBA to relax and take a quick break if you weren\u2019t selected to participate in the NBA All-Star Game. This year the exhibition and all-around fun game will be held in Chicago, and if you know your sneakers, you know that Nike brings out the big guns for the event. The Nike Air Force 1 \xb407 \u201cCity of Dreams\u201d is part of the extensive ASG line-up and features a multicolored upper highlighting the diversity of Chi-Town, which is locked-down through a unique heel tap embroidered reading \u201cNIKE CHI.\u201d 3M reflective detailing as well as mismatching gum rubber midsole offering a great finish.",inCart:!1,img:a(54)}],z=[{id:7,brand:"Nike Sportswear",model:"Air Force 1 '07 QS",price:130,description:"Mid-February is the time for most of the NBA to relax and take a quick break if you weren\u2019t selected to participate in the NBA All-Star Game. This year the exhibition and all-around fun game will be held in Chicago, and if you know your sneakers, you know that Nike brings out the big guns for the event. The Nike Air Force 1 \xb407 \u201cCity of Dreams\u201d is part of the extensive ASG line-up and features a multicolored upper highlighting the diversity of Chi-Town, which is locked-down through a unique heel tap embroidered reading \u201cNIKE CHI.\u201d 3M reflective detailing as well as mismatching gum rubber midsole offering a great finish.",inCart:!1,img:a(54)}],H=a(59),Y={products:[],handleClick:function(){},detail:z,addToCart:function(){},shoppingCart:[]},K=n.createContext(Y),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClickForDetail=function(e){n.setState({detail:[n.state.products[e]]})},n.copyProducts=function(){var e=[];X.forEach((function(t){var a=Object(H.a)({},t);e=[].concat(Object(C.a)(e),[a])})),n.setState((function(){return{products:e}}))},n.state={products:[],handleClick:n.handleClickForDetail,detail:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.copyProducts()}},{key:"render",value:function(){return n.createElement(K.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),q=K.Consumer,V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(q,null,(function(t){return n.createElement("div",{className:"flex-child"},n.createElement("div",{className:"img-div"},n.createElement(c.b,{to:"item".concat(e.props.sneaker.id)},n.createElement("img",{onClick:function(){return t.handleClick(e.props.sneaker.id)},src:window.location.origin+e.props.sneaker.img,alt:"img"}))),n.createElement("div",{className:"brand-model-div"},n.createElement("div",null,n.createElement("p",null,e.props.sneaker.brand),n.createElement("p",null,e.props.sneaker.model)),n.createElement("div",{className:"price-div"},n.createElement("p",null,e.props.sneaker.price,"$"))))}))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={products:X,property:0},n}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(q,null,(function(e){return n.createElement("div",{className:"sneaker-slider"},n.createElement("div",{className:"sneaker-wrapper"},e.products.map((function(e){return n.createElement(V,{key:e.id,sneaker:e})}))))}))}}]),a}(n.Component),$=a(60),U=a(61),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).burgerMenuClicked=function(){!1===n.state.burgerMenuIsClicked?n.setState({burgerMenuIsClicked:!0}):n.setState({burgerMenuIsClicked:!1})},n.state={burgerMenuIsClicked:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"nav"},n.createElement("div",{className:"nav-shoppingcart-burgerbar-product"},n.createElement("div",{className:"nav-onlyshoppingcart-burgerbar"},n.createElement(c.b,{className:"navbar",to:"/cart"},n.createElement($.a,null)),n.createElement(U.a,{onClick:this.burgerMenuClicked})),this.state.burgerMenuIsClicked?n.createElement("div",{className:"nav-product"},n.createElement(c.b,{className:"navbar",to:"/products"},n.createElement("h6",{className:"products"},"PRODUCTS"))):n.createElement(n.Fragment,null)),n.createElement("div",{className:"nav-header"},n.createElement(c.b,{className:"navbar",to:"/"},n.createElement("h4",null,"GUM"))))}}]),a}(n.Component),Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeSize=function(e){n.setState({size:e.target.value})},n.state={size:"30"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(x,null,(function(t){return n.createElement(n.Fragment,{key:e.props.item.id},n.createElement("div",{className:"item-img-div"},n.createElement("img",{src:e.props.item.img,alt:"img"})),n.createElement("div",{className:"restOfDetails"},n.createElement("div",{className:"info-item-div"},n.createElement("div",{className:"shoename"},n.createElement("h1",null,e.props.item.brand),n.createElement("h5",null,e.props.item.model)),n.createElement("div",{className:"shoeprice"},n.createElement("h1",null,e.props.item.price,"$"))),n.createElement("div",{className:"description"},n.createElement("p",null,e.props.item.description)),n.createElement("div",{className:"dropdown"},n.createElement("div",null,n.createElement("label",{htmlFor:"size"},"Choose size:"),n.createElement("select",{onChange:e.changeSize,name:"size",id:"size"},n.createElement("option",{value:30},"30"),n.createElement("option",{value:31},"31"),n.createElement("option",{value:32},"32"),n.createElement("option",{value:33},"33"),n.createElement("option",{value:34},"34"),n.createElement("option",{value:35},"35"),n.createElement("option",{value:36},"36"),n.createElement("option",{value:37},"37"),n.createElement("option",{value:38},"38"),n.createElement("option",{value:39},"39"),n.createElement("option",{value:40},"40"),n.createElement("option",{value:41},"41"),n.createElement("option",{value:42},"42"),n.createElement("option",{value:43},"43"),n.createElement("option",{value:44},"44"),n.createElement("option",{value:45},"45"),n.createElement("option",{value:46},"46"),n.createElement("option",{value:47},"47"),n.createElement("option",{value:48},"48"),n.createElement("option",{value:49},"49"),n.createElement("option",{value:50},"50"),n.createElement("option",{value:51},"51")))),n.createElement("div",{className:"buttondiv"},n.createElement("button",{onClick:function(){return t.addToCart(e.props.item,Number(e.state.size))},className:"addtocart"},"Add to cart")),n.createElement("div",{className:"secondButtondiv"},n.createElement(c.b,{className:"link",to:"/cart"},n.createElement("div",{className:"basket"},n.createElement("p",null,"view basket"))),n.createElement(c.b,{className:"link",to:"/products"},n.createElement("div",{className:"cart"},n.createElement("p",null,"continue shopping"))))))}))}}]),a}(n.Component),Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(q,null,(function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"item-flex"},0===e.detail.length?n.createElement("div",{style:_},n.createElement("h1",null,"NO PRODUCT CHOSEN, GO BACK TO"," ",n.createElement(c.b,{className:"styleNav",to:"/products"},"products"))):e.detail.map((function(e){return n.createElement(Q,{key:e.id,item:e})}))))}))}}]),a}(n.Component),_={width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},ee=Z,te=function(){return n.createElement("h4",null,"Page not found!")},ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).delayConfirmation=function(e){setTimeout((function(){n.setState({confirmation:!0})}),1e3)},n.state={confirmation:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return!0===this.state.confirmation?n.createElement(y,null):n.createElement(x,null,(function(t){return 0===t.shoppingCart.length?n.createElement("div",{style:ne},n.createElement("h1",null,"Nothing in your summary, go back to"," ",n.createElement(c.b,{to:"/products"},"Products"))):n.createElement("div",{className:"checkout-flex"},n.createElement("h3",null,"Order summary"),n.createElement(x,null,(function(e){return e.shoppingCart.map((function(e){return n.createElement("div",{className:"checkout-products"},n.createElement("div",{className:"checkout-products-brandmodel"},n.createElement("h4",null,e.product.brand),n.createElement("h5",null,e.product.model)),n.createElement("h5",null,e.product.price,"$"))}))})),n.createElement(x,null,(function(e){return n.createElement("div",{className:"checkout-shipping-total-wrapper"},n.createElement("div",{className:"checkout-shipping"},n.createElement("h5",null,"Shipping"),n.createElement("div",{className:"checkout-shipping-date"},n.createElement("h5",null," ",e.shippingAmount,"$"),n.createElement("h5",null," ",e.date))),n.createElement("div",{className:"checkout-total"},n.createElement("h5",null,"Total"),n.createElement("h5",null,e.totalAmount()+Number(e.shippingAmount),"$")))})),n.createElement(b,null,(function(e){return n.createElement("div",{className:"checkout-delivery-payment-wrapper"},n.createElement("div",{className:"checkout-delivery"},n.createElement("h5",null,"Delivery"),n.createElement("h5",null,e.fullname),n.createElement("h5",null,e.adress),n.createElement("h5",null,e.city,", ",e.country)),n.createElement("div",{className:"checkout-payment"},n.createElement("h5",null,"Payment details"),n.createElement("h5",null,e.fullname),4!==e.cardNr.length?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,n.createElement("h5",null,"XXXX-XXXX-XXXX-",e.cardNr),n.createElement("h5",null,e.expireDay))))})),n.createElement("button",{style:re,onClick:e.delayConfirmation,id:"next-button"},"CONFIRM ORDER"))}))}}]),a}(n.Component),ne={display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%"},re={padding:"1rem",border:"none"},le=ae,ie=(a(88),a(122)),ce=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(b,null,(function(e){return n.createElement("div",{className:"delivery-details"},n.createElement("h5",{className:"headers"},"DELIVERY ADRESS"),n.createElement(ie.a,{id:"field",inputProps:{minLength:2},type:"name",name:"firstname",label:"First Name"}),n.createElement(ie.a,{id:"field",inputProps:{minLength:2},type:"name",name:"lastName",label:"Last Name"}),n.createElement(ie.a,{id:"field",onChange:e.getAdress,type:"name",name:"Adress",label:"Adress"}),n.createElement(ie.a,{id:"field",onChange:e.getEmail,type:"email",name:"Email",label:"Email"}),n.createElement(ie.a,{id:"field",onChange:e.getCountry,inputProps:{minLength:4},type:"text",name:"Country",label:"Country"}),n.createElement(ie.a,{id:"field",onChange:e.getCity,inputProps:{minLength:2},type:"text",name:"City",label:"City"}),"\xa0")}))}}]),a}(n.Component),oe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(b,null,(function(t){return n.createElement("div",{className:"adress-Recap"},n.createElement("div",{className:"payment-details"},n.createElement("h5",{className:"headers"},"CARD DETAILS:"),n.createElement(ie.a,{type:"name",name:"Fullname",label:"Full name",onChange:t.getName}),n.createElement(ie.a,{type:"tel",name:"cardNumber",label:"Card Number",onKeyDown:e.props.onlyNumber,inputProps:{maxLength:16},onChange:t.getCardNr}),n.createElement(ie.a,{type:"tel",name:"Valid Date",label:"Valid(MM/YY)",inputProps:{maxLength:5},onKeyDown:e.props.onlyNumber,onChange:t.getExpireDay}),n.createElement(ie.a,{type:"tel",name:"ccv",inputProps:{maxLength:3},label:"CCV",onKeyDown:e.props.onlyNumber})),n.createElement("div",{className:"buttonDiv"},n.createElement(c.b,{to:"/checkout",style:{textDecoration:"none"}},n.createElement(j.a,{id:"next-button",variant:"contained",color:"primary"},"CHECKOUT"))))}))}}]),a}(n.Component),se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement(b,null,(function(e){return n.createElement("div",{className:"adress-Recap"},n.createElement("div",{className:"payment-details"},n.createElement("h5",{className:"headers"},"PRESENTCARD DETAILS:"),n.createElement(ie.a,{type:"name",name:"Fullname",label:"Full name",onChange:e.getName}),n.createElement(ie.a,{type:"tel",name:"PresentCard",label:"Present Card",inputProps:{maxLength:15}})),n.createElement("div",{className:"buttonDiv"},n.createElement(j.a,{id:"next-button",variant:"contained",color:"primary",href:"checkout"},"CHECKOUT")))}))}}]),a}(n.Component),me=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(b,null,(function(t){return n.createElement("div",{className:"adress-Recap"},n.createElement("div",{className:"payment-details"},n.createElement("h5",{className:"headers"},"SWISH DETAILS:"),n.createElement(ie.a,{type:"name",name:"Fullname",label:"Full name",onChange:t.getName}),n.createElement(ie.a,{type:"tel",name:"PhoneNumber",label:"Phone Number",onKeyDown:e.props.onlyNumber,inputProps:{maxLength:10}})),n.createElement("div",{className:"buttonDiv"},n.createElement(c.b,{to:"/checkout",style:{textDecoration:"none"}},n.createElement(j.a,{id:"next-button",variant:"contained",color:"primary"},"CHECK out"))))}))}}]),a}(n.Component),ue=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"payment-Solution"},n.createElement("h5",{className:"headers"},"PAYMENT METHOD"),n.createElement(S.a,{onChange:this.props.checkPayment,style:de},n.createElement(w.a,{value:"CreditCard",control:n.createElement(A.a,{color:"primary"}),label:"Credit Card",labelPlacement:"end"}),n.createElement(w.a,{control:n.createElement(A.a,{color:"primary"}),value:"Swish",label:"Swish",labelPlacement:"end"}),n.createElement(w.a,{value:"PresentCard",control:n.createElement(A.a,{color:"primary"}),label:"Present Card",labelPlacement:"end"})))}}]),a}(n.Component),de={display:"flex",flexDirection:"row"},pe=ue,he=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(x,null,(function(t){return"Free"!==t.radio&&"Regular"!==t.radio&&"Express"!==t.radio?n.createElement("div",{className:"payment-delivery-method"},n.createElement("div",{className:"delivery-Solution"},n.createElement("h5",{className:"headers"},"GO ",n.createElement(c.b,{to:"/cart"},"BACK")," AND CHOOSE DELIVERY METHOD"),n.createElement(S.a,{onChange:e.props.checkDelivery,style:Ee},n.createElement(w.a,{value:"Express",control:n.createElement(A.a,{color:"primary"}),label:"Express",labelPlacement:"end",checked:t.expressChecked(),disabled:t.expressChecked()}),n.createElement(w.a,{value:"Regular",control:n.createElement(A.a,{color:"primary"}),label:"Regular",labelPlacement:"end",checked:t.regularChecked(),disabled:t.regularChecked()}),n.createElement(w.a,{value:"Free",control:n.createElement(A.a,{color:"primary"}),label:"Free",labelPlacement:"end",checked:t.freeChecked(),disabled:t.freeChecked()})))):n.createElement("div",{className:"payment-delivery-method"},n.createElement("div",{className:"delivery-Solution"},n.createElement("h5",{className:"headers"},"DELIVERY"),n.createElement(S.a,{onChange:e.props.checkDelivery,style:Ee},n.createElement(w.a,{value:"Express",control:n.createElement(A.a,{color:"primary"}),label:"Express",labelPlacement:"end",checked:t.expressChecked(),disabled:t.expressChecked()}),n.createElement(w.a,{value:"Regular",control:n.createElement(A.a,{color:"primary"}),label:"Regular",labelPlacement:"end",checked:t.regularChecked(),disabled:t.regularChecked()}),n.createElement(w.a,{value:"Free",control:n.createElement(A.a,{color:"primary"}),label:"Free",labelPlacement:"end",checked:t.freeChecked(),disabled:t.freeChecked()}))))}))}}]),a}(n.Component),Ee={display:"flex",flexDirection:"row"},ve=he,ge=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).validDateValidation=function(e){e.target.value.indexOf("/")},n.onlyLetter=function(e){var t=e.which||e.keyCode;return!(t>=45&&t<=57||t>=96&&t<=105)||(e.preventDefault(),!1)},n.onlyNumber=function(e){var t=e.which||e.keyCode;return t>=65&&t<=90?(e.preventDefault(),"false"):"true"},n.deliveryMethod=function(e,t){"Free"!==e.target.value&&"Regular"!==e.target.value&&"Express"!==e.target.value||n.setState({delivery:!0})},n.paymentMethod=function(e,t){"CreditCard"===e.target.value?(n.setState({creditCard:!0}),n.setState({swish:!1}),n.setState({presentCard:!1})):"Swish"===e.target.value?(n.setState({swish:!0}),n.setState({creditCard:!1}),n.setState({presentCard:!1})):"PresentCard"===e.target.value&&(n.setState({presentCard:!0}),n.setState({creditCard:!1}),n.setState({swish:!1}))},n.state={creditCard:!1,swish:!1,presentCard:!1,delivery:!1,ccv:!1,validMonth:!1,validDay:!1,name:!1,city:!1,country:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return!0!==this.state.swish&&!0!==this.state.presentCard?n.createElement("div",{className:"payment-layout"},n.createElement("div",{className:"delivery-box"},n.createElement(ve,{checkDelivery:this.deliveryMethod}),n.createElement(ce,{checkDelivery:this.deliveryMethod})),n.createElement("div",{className:"payment-box"},n.createElement(pe,{checkPayment:this.paymentMethod}),n.createElement(oe,{onlyNumber:this.onlyNumber}))):!0===this.state.swish?n.createElement("div",{className:"payment-layout"},n.createElement("div",{className:"delivery-box"},n.createElement(ve,{checkDelivery:this.deliveryMethod}),n.createElement(ce,{checkDelivery:this.deliveryMethod})),n.createElement("div",{className:"payment-box"},n.createElement(pe,{checkPayment:this.paymentMethod}),n.createElement(me,{onlyNumber:this.onlyNumber}))):!0===this.state.presentCard?n.createElement("div",{className:"payment-layout"},n.createElement("div",{className:"delivery-box"},n.createElement(ve,{checkDelivery:this.deliveryMethod}),n.createElement(ce,{checkDelivery:this.deliveryMethod})),n.createElement("div",{className:"payment-box"},n.createElement(pe,{checkPayment:this.paymentMethod}),n.createElement(se,null))):void 0}}]),a}(n.Component);var fe=function(){return r.a.createElement(c.a,{basename:"/sneakers"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"layout-navbar-flex"},r.a.createElement(J,null)),r.a.createElement("div",{className:"layout-only-for-flex"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:v}),r.a.createElement(o.a,{path:"/products",component:W}),r.a.createElement(o.a,{path:"/cart",component:G}),r.a.createElement(o.a,{path:"/checkout",component:le}),r.a.createElement(o.a,{path:"/payment",component:ge}),r.a.createElement(o.a,{path:"/confirmation",component:y}),r.a.createElement(o.a,{path:"/:item",component:ee}),r.a.createElement(o.a,{component:te})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null,r.a.createElement(O,null,r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement(fe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.41e4f0b5.chunk.js.map