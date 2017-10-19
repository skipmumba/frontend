import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class StoreService {

	private already = false;
	private storageMember:any = 0;
	private memberPrice = 0;
	private memberEmail;
	private jwtToken = null

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
	}
	setStorage(id,email,price)
	{
		this.memberEmail = email
		this.storageMember = id
		this.memberPrice = price
		this.already = true
	}
	logOut()
	{
		this.memberEmail = null
		this.storageMember = null
		this.already = false
		this.jwtToken = null
	}
 	constructor() { }
}
