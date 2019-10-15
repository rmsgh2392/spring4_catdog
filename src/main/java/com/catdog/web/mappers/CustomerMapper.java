package com.catdog.web.mappers;

import org.springframework.stereotype.Repository;
import com.catdog.web.domains.CustomerDTO;
@Repository
public interface CustomerMapper {
	public boolean insertEmployee(CustomerDTO param);
	public CustomerDTO selectByEmpnoEname(CustomerDTO param);
	public int countCustomer();
}
