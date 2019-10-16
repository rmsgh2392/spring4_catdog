package com.catdog.web.controllers;

import java.text.DateFormat;

import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.catdog.web.mappers.CustomerMapper;
import com.catdog.web.serviceimpls.CustomerServiceImpl;
import com.catdog.web.services.CustomerService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired CustomerServiceImpl customerService; //스프링 컨테이너 안에 담겨 있다. 프레임워크가 돌아다니면서 객체로 만들어 컨테이너에 담아둠
	 //CustomerServiceImpl customerService 를 new 로 만들어서 호출 하는게 아니고 new는 이미 되있고 @으로 객체를 주입하는거다.
	//객체 주입은 context가 한다.
	
	@GetMapping("/")//이것이 @RequestMapping 의 축약형
	//handlermapping , adapt 패턴
	public String home(Locale locale, Model model) {
		logger.info("Welcome  {}.", "HomeController");
		
		return "index";
	}
}
	

	
	

