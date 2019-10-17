package com.catdog.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;
@Data @Component
public class CustomerDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private String cid,pwd,ssn,creditCard,pname,phone,address,email;
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
}
