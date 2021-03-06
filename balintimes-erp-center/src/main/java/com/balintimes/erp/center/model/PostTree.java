package com.balintimes.erp.center.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PostTree extends Post implements Serializable {
	private List<PostTree> children;
	private boolean checked;
	private List<User> users;
	
	public PostTree(Post post)
	{
		this.setUid(post.getUid());
		this.setName(post.getName());
		this.setParentuid(post.getParentuid());
		//this.setParentName(post.getParentName());
		this.setOrganizationuid(post.getOrganizationuid());
		this.setOrganizationname(post.getOrganizationname());
		this.setComment(post.getComment());
		this.setCreateby(post.getCreateby());
		this.setCreatetime(post.getCreatetime());
		this.setEditby(post.getEditby());
		this.setEdittime(post.getEdittime());
		this.setChecked(post.getChecked());
		
		this.setChildren(new ArrayList<PostTree>());
		this.setUsers(post.getUsers());
	}
	
	public void setChildren(List<PostTree> value) {
		this.children=value;		
	}
	
	public List<PostTree> getChildren() {
		return children;
	}
	
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	
	public boolean getChecked() {
		return this.checked;
	}
	
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public List<User> getUsers() {
		return users;
	}
}
