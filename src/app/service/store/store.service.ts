import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class StoreService {

	private already = false;
	private storageMember
	getLogin()
	{
		return this.already	
	}
	getMemberid()
	{
		return this.storageMember
	}
	setStorage(id)
	{
		this.storageMember = id
		this.already = true
	}
 	constructor() { }
}
