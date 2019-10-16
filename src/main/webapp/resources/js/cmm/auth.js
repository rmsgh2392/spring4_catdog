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
		$('#a_join').on('click',()=>{
			alert('회원가입하쉴?');
		});
	}
	return{onCreate : onCreate}
	
})();
