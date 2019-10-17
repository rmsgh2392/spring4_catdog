//권한을 부여하는 자바스크립트 파일
"use strict";
var auth = auth || {};//객체가 딱 하나 만들어진다 .언제? index.jsp에서 cdn방식으로 한번 만들어진다 (싱글턴 객체)!! 
auth =(()=>{
	let _,js;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
	}
	let onCreate =()=>{
		init();
		$('#a_join').on('click',()=>{//dom객체
			alert('회원가입하쉴?')
			$('head')
			.html('<head>'+
	                '    <meta charset="utf-8">'+
	                '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
	                '    <meta name="description" content="">'+
	                '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
	                '    <meta name="generator" content="Jekyll v3.8.5">'+
	                '    <title>Checkout example · Bootstrap</title>'+
	                '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
	                '    <!-- Bootstrap core CSS -->'+
	                '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
	                '    <style>'+
	                '      .bd-placeholder-img {'+
	                '        font-size: 1.125rem;'+
	                '        text-anchor: middle;'+
	                '        -webkit-user-select: none;'+
	                '        -moz-user-select: none;'+
	                '        -ms-user-select: none;'+
	                '        user-select: none;'+
	                '      }'+
	                '      @media (min-width: 768px) {'+
	                '        .bd-placeholder-img-lg {'+
	                '          font-size: 3.5rem;'+
	                '        }'+
	                '      }'+
	                '    </style>'+
	                '    <!-- Custom styles for this template -->'+
	                '    <link href="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
	                '  </head>')
	            $('body')
	        .html(
	                '<div class="container" >'+
	                '  <div class="py-5 text-center">'+
	                '    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">'+
	                '    <h2>Checkout form</h2>'+
	                '  </div>'+
	                '  <div class="row">'+
	                '    <div class="col-md-4 order-md-2 mb-4">'+
	                '      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
	                '        <span class="text-muted">Your cart</span>'+
	                '        <span class="badge badge-secondary badge-pill">3</span>'+
	                '      </h4>'+
	                '      <ul class="list-group mb-3">'+
	                '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
	                '          <div>'+
	                '            <h6 class="my-0">Product name</h6>'+
	                '            <small class="text-muted">Brief description</small>'+
	                '          </div>'+
	                '          <span class="text-muted">$12</span>'+
	                '        </li>'+
	                '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
	                '          <div>'+
	                '            <h6 class="my-0">Second product</h6>'+
	                '            <small class="text-muted">Brief description</small>'+
	                '          </div>'+
	                '          <span class="text-muted">$8</span>'+
	                '        </li>'+
	                '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
	                '          <div>'+
	                '            <h6 class="my-0">Third item</h6>'+
	                '            <small class="text-muted">Brief description</small>'+
	                '          </div>'+
	                '          <span class="text-muted">$5</span>'+
	                '        </li>'+
	                '        <li class="list-group-item d-flex justify-content-between bg-light">'+
	                '          <div class="text-success">'+
	                '            <h6 class="my-0">Promo code</h6>'+
	                '            <small>EXAMPLECODE</small>'+
	                '          </div>'+
	                '          <span class="text-success">-$5</span>'+
	                '        </li>'+
	                '        <li class="list-group-item d-flex justify-content-between">'+
	                '          <span>Total (USD)</span>'+
	                '          <strong>$20</strong>'+
	                '        </li>'+
	                '      </ul>'+
	                '      <form class="card p-2">'+
	                '        <div class="input-group">'+
	                '          <input type="text" class="form-control" placeholder="Promo code">'+
	                '          <div class="input-group-append">'+
	                '            <button type="submit" class="btn btn-secondary">Redeem</button>'+
	                '          </div>'+
	                '        </div>'+
	                '      </form>'+
	                '    </div>'+
	                '    <div class="col-md-8 order-md-1">'+
	                '      <h4 class="mb-3">Billing address</h4>'+
	                '      <form class="needs-validation" novalidate="">'+
	                '        <div class="row">'+
	                '          <div class="col-md-6 mb-3">'+
	                '            <label for="userid">USERID</label>'+
	                '            <input type="text" class="form-control" id="userid" placeholder="" value="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Valid first name is required.'+
	                '            </div>'+
	                '          </div>'+
	                '          <div class="col-md-6 mb-3">'+
	                '            <label for="password">PASSWORD</label>'+
	                '            <input type="text" class="form-control" id="password" placeholder="" value="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Valid last name is required.'+
	                '            </div>'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="mb-3">'+
	                '          <label for="username">Username</label>'+
	                '          <div class="input-group">'+
	                '            <div class="input-group-prepend">'+
	                '              <span class="input-group-text">@</span>'+
	                '            </div>'+
	                '            <input type="text" class="form-control" id="username" placeholder="Username" required="">'+
	                '            <div class="invalid-feedback" style="width: 100%;">'+
	                '              Your username is required.'+
	                '            </div>'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="mb-3">'+
	                '          <label for="email">Email <span class="text-muted">(Optional)</span></label>'+
	                '          <input type="email" class="form-control" id="email" placeholder="you@example.com">'+
	                '          <div class="invalid-feedback">'+
	                '            Please enter a valid email address for shipping updates.'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="mb-3">'+
	                '          <label for="address">Address</label>'+
	                '          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'+
	                '          <div class="invalid-feedback">'+
	                '            Please enter your shipping address.'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="mb-3">'+
	                '          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'+
	                '          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'+
	                '        </div>'+
	                '        <div class="row">'+
	                '          <div class="col-md-5 mb-3">'+
	                '            <label for="country">Country</label>'+
	                '            <select class="custom-select d-block w-100" id="country" required="">'+
	                '              <option value="">Choose...</option>'+
	                '              <option>United States</option>'+
	                '            </select>'+
	                '            <div class="invalid-feedback">'+
	                '              Please select a valid country.'+
	                '            </div>'+
	                '          </div>'+
	                '          <div class="col-md-4 mb-3">'+
	                '            <label for="state">State</label>'+
	                '            <select class="custom-select d-block w-100" id="state" required="">'+
	                '              <option value="">Choose...</option>'+
	                '              <option>California</option>'+
	                '            </select>'+
	                '            <div class="invalid-feedback">'+
	                '              Please provide a valid state.'+
	                '            </div>'+
	                '          </div>'+
	                '          <div class="col-md-3 mb-3">'+
	                '            <label for="zip">Zip</label>'+
	                '            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Zip code required.'+
	                '            </div>'+
	                '          </div>'+
	                '        </div>'+
	                '        <hr class="mb-4">'+
	                '        <div class="custom-control custom-checkbox">'+
	                '          <input type="checkbox" class="custom-control-input" id="same-address">'+
	                '          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
	                '        </div>'+
	                '        <div class="custom-control custom-checkbox">'+
	                '          <input type="checkbox" class="custom-control-input" id="save-info">'+
	                '          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
	                '        </div>'+
	                '        <hr class="mb-4">'+
	                '        <h4 class="mb-3">Payment</h4>'+
	                '       <div class="d-block my-3">'+
	                '          <div class="custom-control custom-radio">'+
	                '            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
	                '            <label class="custom-control-label" for="credit">Credit card</label>'+
	                '          </div>'+
	                '          <div class="custom-control custom-radio">'+
	                '            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
	                '            <label class="custom-control-label" for="debit">Debit card</label>'+
	                '          </div>'+
	                '          <div class="custom-control custom-radio">'+
	                '            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
	                '            <label class="custom-control-label" for="paypal">PayPal</label>'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="row">'+
	                '          <div class="col-md-6 mb-3">'+
	                '            <label for="cc-name">Name on card</label>'+
	                '            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
	                '            <small class="text-muted">Full name as displayed on card</small>'+
	                '            <div class="invalid-feedback">'+
	                '              Name on card is required'+
	                '            </div>'+
	                '          </div>'+
	                '          <div class="col-md-6 mb-3">'+
	                '            <label for="cc-number">Credit card number</label>'+
	                '            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Credit card number is required'+
	                '            </div>'+
	                '          </div>'+
	                '        </div>'+
	                '        <div class="row">'+
	                '          <div class="col-md-3 mb-3">'+
	                '            <label for="cc-expiration">Expiration</label>'+
	                '            <input id="join_1" type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Expiration date required'+
	                '            </div>'+
	                '          </div>'+
	                '          <div class="col-md-3 mb-3">'+
	                '            <label for="cc-cvv">CVV</label>'+
	                '            <input id="join_2" type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
	                '            <div class="invalid-feedback">'+
	                '              Security code required'+
	                '            </div>'+
	                '          </div>'+
	                '        </div>'+
	                '        <hr class="mb-4">'+
	                '        <div id="btn_join">'+
	                '      </form>'+
	                '    </div>'+
	                '  </div>'+
	                '  <footer class="my-5 pt-5 text-muted text-center text-small">'+
	                '    <p class="mb-1">© 2017-2019 Company Name</p>'+
	                '    <ul class="list-inline">'+
	                '      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
	                '      <li class="list-inline-item"><a href="#">Terms</a></li>'+
	                '      <li class="list-inline-item"><a href="#">Support</a></li>'+
	                '    </ul>'+
	                '  </footer>'+
	                '</div>')
//	               $('#join_btn').click(()=>{
//	            	   if($('#join_1').val || $('#join_2').val){
//	            		   alert('필수 값이 없음')
//	            	   }else{
//	            		   alert('회원가입성공')
//	            	   }
//	            	   
//	               })
	               
			
			$('<button>',{
				text:'회원가입',//text에 값이 있으면 setter
				href:'#',
				click : e=>{
					e.preventDefault()//위에 화면에는 form태그방식으로 되있어서 이거는 ajax방식이 아니고 옛날 방식이다 
					//그러므로 e.preventDefault()를 써주면 form태그로 되는것을 막아준다. 그래야 컨트롤러에 @requestMapping방식이 먹는다
					let data = {
						cid : $('#userid').val(),//자바 (컨트롤러)이름과 맞춰져야함
						pwd : $('#password').val()//text()파라미터에 값이 없으면 getter
					
					}
					alert('userid :'+ data.cid)
						
				//id가 없는 상태(anonymous 무명객체 이름이 없다)에서 클릭을 하는순간 $를 점유하는게 아님 액션은 하긴하는데(event가 걸림) 공간이 없다 이름이 없다는것은 주소가 없다는것이다.<--고스트 상태
				//여기에 ajax를 걸어서 비동기화식으로 만든다. 그냥 url에다가 쭉 보내버림 저쪽에 있던 없던간에 에러가 없고 보내고 나서 나중에 답을 받음
					$.ajax({//리턴을 제이슨으로 한다. 다 패턴이다 익숙해져라 
						url : _+'/customer/join',
						type : 'POST',//crud 4개중 하나
						dataType : 'json',
						data : JSON.stringify(data),//상대방의 받는녀석의 기준이되서 타입을 맞춰준다.
						contentType : 'application/json',
						success : d => {
							alert('AJAX 성공입니당 아이디:'+d.cid+',성공비번 :'+d.pwd)
						},
						error : e => {
							alert('AJAX 실패입니당')
						}//콜백함수를 두개를 검
					})
					//<--이게 제이쿼리 객체 기본형인데 ajax는 앞에 스트링값이 없다
				}
			})
			.addClass("btn btn-primary btn-lg btn-block")
			.appendTo('#btn_join')
			
//			$('#form_join').append('<h1 id="temp">추가된 노드객체</br>'
//					+'<a id="a_node" href="#">추가된 a노드객체</a></h1>')//<--동적 ui 작업  그리고 이어지는 것이  ajax 어렵 두개 사이에 IO가 일어남
			
//			$('<h1 id="temp">추가된 노드객체</br>'
//					+'<a id="a_node" href="#">추가된 a노드객체</a></h1>')
//					.appendTo('#form_join')
//					
//			$('<a href="#">추가된 a노드객체</a>'
//					+'<h1>추가된 노드객체</br></h1>')//아이디 주면 안됨 람다방식 
//			.appendTo('<h1>추가된 노드객체</br></h1>')
//			.appendTo('#form_join')
//			.click(()=>{
//				prompt('Ghost 무엇을 하고 싶나여?','동적ui클릭')
//			})
		});
	}
	return{onCreate : onCreate}
	
})();
