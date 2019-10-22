package com.catdog.web.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.catdog.web.domains.CustomerDTO;
import com.catdog.web.serviceimpls.CustomerServiceImpl;
import com.catdog.web.services.CustomerService;

@Controller
@RequestMapping("/customer/*")
//내부적으로 request를 가지고 있다. naver.com/customer를 의미
//4가지 mapping종류중에 제일 위에 있는 녀석 
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired CustomerServiceImpl customerService; //스프링컨테이너에 담아놓는다 (컨테이너와 연결)
	@Autowired CustomerDTO customer;
	
//	@GetMapping("/count")//자바스크립트와 먼저 xml이 먼저 송신하고 자바로 보낸다.
	//search와 관련된것을 매핑함
//	public String customer(Model model) {//model녀석이 request를 감싸고 있다. 들어있음 
//		model.addAttribute("count",customerService.countCustomer());
		//여기서 모델이 mapper가 된다.
//		return "index";
//	}

	
	
	@PostMapping("/join")
	public @ResponseBody CustomerDTO join(@RequestBody CustomerDTO param) {//<?,?> ?는 와일드 카드 
//		request.getparameter("cid")를 안해도 가져올수 있다.
//		Map<String,String> map = new HashMap<>();
		logger.info("ajax가 보낸 아이디와 비번입니다 {} ",param.getCid()+","+param.getPwd()+","+param.getPname());
//		map.put("pname",param.getPname());
//		map.put("cid",param.getCid());
//		map.put("pwd",param.getPwd());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
		customer.setPname(param.getPname());
	    customerService.join(param);
		System.out.println("customer");
		logger.info("customer에 담긴 사용자 정보 {} ",customer.getCid()+","+customer.getPwd()+","+customer.getPname());
		return customer;
	} 
	
	@PostMapping("/login")
	public @ResponseBody CustomerDTO login(@RequestBody CustomerDTO param){
		logger.info("ajax가 보낸 아이디와 비번입니다 {} ",param.getCid()+","+param.getPwd());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
//		customer.setSsn(param.getSsn());
//		customer.setCreditcard(param.getCreditcard());
//		customer.setPhone(param.getPhone());
//		customer.setPname(param.getPname());
//		customer.setEmail(param.getEmail());
//		customer.setAddress(param.getAddress());
		customer = customerService.login(param);
		logger.info("customer에 담긴 사용자정보 : {} ",customer.toString());
		return customer;
	
	}
}
