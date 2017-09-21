import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class StoreService {

	private already = false;
	private storageMember;
	private memberEmail;
	getLogin()
	{
		return this.already	
	}
	getMemberid()
	{
		return this.storageMember
	}
	getMemberEmail()
	{
		return this.memberEmail
	}
	setStorage(id,email)
	{
		this.memberEmail = email
		this.storageMember = id
		this.already = true
	}
	logOut()
	{
		this.memberEmail = null
		this.storageMember = null
		this.already = false
	}
 	constructor() { }
}
