"use strict"
var read = read || {};
read =(()=>{
	const WHERE_ERR = "READ가 뭔데?"
	let _,js;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		
	}
	let reading =()=>{
		init();
		$('#a_return').click(()=>{
			alert("복습복습");
		})
		
	}
	
	return{reading : reading}
	
})();