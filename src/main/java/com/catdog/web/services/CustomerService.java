package com.catdog.web.services;

import org.springframework.stereotype.Component;


import com.catdog.web.domains.CustomerDTO;
@Component
public interface CustomerService {
	public int countCustomer ();
	public CustomerDTO login(CustomerDTO param);
}
