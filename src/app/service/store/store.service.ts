import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class StoreService {

	private already = false;
	private storageMember:any = 0;
	private memberPrice = 0;
	private memberEmail;
	private jwtToken = null
	userphone = null
	showSetting = true
	getLogin()
	{
		return this.already	
	}
	getJwt()
	{
		return this.jwtToken
	}
	setJwt(token)
	{
		this.jwtToken = token
		localStorage.setItem('token',token)
	}
	getMemberid()
	{
		return this.storageMember
	}
	getMemberEmail()
	{
		return this.memberEmail
	}
	getPrice()
	{
		return this.memberPrice
	}
	setnewPrice(price)
	{
		this.memberPrice = price
		localStorage.setItem('price',price)
	}
	setPhone(data)
	{
		this.userphone =  data
		localStorage.setItem('phone',data)
	}
	setStorage(id,email,price,phone)
	{
		this.memberEmail = email
		this.storageMember = id
		this.userphone = phone
		this.memberPrice = price
		this.already = true
		localStorage.setItem('email',email)
		localStorage.setItem('id',id)
		localStorage.setItem('phone',phone)
		localStorage.setItem('price',price)
	}
	logOut()
	{
		this.memberEmail = null
		this.storageMember = null
		this.already = false
		this.jwtToken = null
		this.userphone = null
		localStorage.clear();
	}
 	constructor() { }
}
