package com.balintimes.erp.center.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.balintimes.erp.center.annotation.CustomerTransactional;
import com.balintimes.erp.center.dao.ApplicationTypeDao;
import com.balintimes.erp.center.model.ApplicationType;
import com.balintimes.erp.center.service.ApplicationTypeService;

@Service("applicationTypeService")
public class ApplicationTypeServiceImp implements ApplicationTypeService {

	@Resource
	private ApplicationTypeDao applicationTypeDao;
	
	public List<ApplicationType> getApplicationTypeList(String name) {
		// TODO Auto-generated method stub
		return this.applicationTypeDao.getApplicationTypeList(name);
	}
	
	public ApplicationType getApplicationType(String uid){
		return this.applicationTypeDao.getApplicationType(uid);
	}

	@CustomerTransactional
	public void createApplicationType(ApplicationType applicationType) {
		// TODO Auto-generated method stub
		this.applicationTypeDao.createApplicationType(applicationType);
	}

	@CustomerTransactional
	public void updateApplicationType(ApplicationType applicationType) {
		// TODO Auto-generated method stub
		this.applicationTypeDao.updateApplicationType(applicationType);
	}

	@CustomerTransactional
	public void deleteApplicationType(String uid) {
		// TODO Auto-generated method stub
		this.applicationTypeDao.deleteApplicationType(uid);
	}
}
