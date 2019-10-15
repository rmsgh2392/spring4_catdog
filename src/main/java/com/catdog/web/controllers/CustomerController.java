package com.catdog.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.catdog.web.serviceimpls.CustomerServiceImpl;
import com.catdog.web.services.CustomerService;

@Controller
@RequestMapping("/customer/*")
//내부적으로 request를 가지고 있다. naver.com/customer를 의미
//4가지 mapping종류중에 제일 위에 있는 녀석 
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired CustomerServiceImpl customerService; //스프링컨테이너에 담아놓는다 (컨테이너와 연결)
	
	@GetMapping("/count")
	//search와 관련된것을 매핑함
	public String customer(Model model) {//model녀석이 request를 감싸고 있다. 들어있음 
		
		model.addAttribute("count",customerService.countCustomer());
		//여기서 모델이 mapper가 된다.
		return "index";
	}
	@GetMapping("/search")
	public String findCustomerByCid(@RequestParam("cid") String cid,
			@RequestParam("pwd") String pwd) {
//		request.getparameter("cid")를 안해도 가져올수 있다.
		//test
		return "index";
	} 
}
