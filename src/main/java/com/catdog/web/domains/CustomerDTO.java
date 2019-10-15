package com.catdog.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;
@Data @Component
public class CustomerDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private String cid,pwd,job,mgr,hireDate,sal,comm,deptNo;
}
