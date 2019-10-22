package com.catdog.web.mappers;

import org.springframework.stereotype.Repository;


import com.catdog.web.domains.CustomerDTO;
@Repository
public interface CustomerMapper {
	public int countCustomer();
	public CustomerDTO selectCustomerId(CustomerDTO param);
	public void insertCustomer(CustomerDTO param);
}
