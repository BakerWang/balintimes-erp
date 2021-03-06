package com.balintimes.erp.crm.service;

import java.util.List;

import com.balintimes.erp.crm.model.Customer;
import com.balintimes.erp.crm.model.CustomerFollowUp;
import com.balintimes.erp.util.tuples.TuplePage;

public interface CustomerService {
	TuplePage<List<Customer>, Integer> getCustomerList(String name,
			int currPage, int pageSize);

	Customer getCustomer(int uid);

	CustomerFollowUp getCustomerFollowUp(int uid);

	void updateCustomerFollowUp(CustomerFollowUp customerFollowUp);

	void createCustomerFollowUp(CustomerFollowUp customerFollowUp);
	
	void updateCustomerFollowUpByDel(int uid);
}
