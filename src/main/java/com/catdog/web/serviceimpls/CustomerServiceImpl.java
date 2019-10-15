package com.catdog.web.serviceimpls;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catdog.web.domains.CustomerDTO;
import com.catdog.web.mappers.CustomerMapper;
import com.catdog.web.services.CustomerService;
@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired CustomerMapper customerMapper;
	//스프링프레임워크 중에서도 context가 싱글톤 객체를 만들어준다.
	//컨트롤러 뺴고 다 만들어준다.
	//@controller는 mvc가 만들고 
	//conponent는 context가 만든다.

	@Override
	public int countCustomer() {
		return customerMapper.countCustomer();
	}

	@Override
	public CustomerDTO login(CustomerDTO param) {
		return null;
	}

}
