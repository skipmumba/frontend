import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {


	private storageMember
	getStorage()
	{
		console.log(this.storageMember)
	}
	setStorage(id)
	{
		this.storageMember = id
	}
 	constructor() { }
}
