package com.balintimes.erp.center.service.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.balintimes.erp.center.annotation.CustomerTransactional;
import com.balintimes.erp.center.dao.UserRolesDao;
import com.balintimes.erp.center.model.UserRoles;
import com.balintimes.erp.center.service.UserRolesService;

@Service
public class UserRolesServiceImpl implements UserRolesService {

	@Resource
	private UserRolesDao userRolesDao;

	public List<UserRoles> GetUserRolesListByUser(String userUid) {
		// TODO Auto-generated method stub
		return this.userRolesDao.GetUserRolesListByUser(userUid);
	}

	@CustomerTransactional
	public void SaveUserRoles(String userUid, String roleUid, boolean checked) {
		// TODO Auto-generated method stub
		if (checked == true) {
			UserRoles ur = new UserRoles();
			ur.setUid(UUID.randomUUID().toString());
			ur.setUserUid(userUid);
			ur.setRoleUid(roleUid);

			this.userRolesDao.CreateUserRoles(ur);
		} else {
			this.userRolesDao.DeleteUserRoleByUserAndRole(userUid, roleUid);
		}
	}

	@CustomerTransactional
	public void CleanUserRoles(String userUid) {
		// TODO Auto-generated method stub
		this.userRolesDao.DeleteUserRoleByUser(userUid);
	}

}
