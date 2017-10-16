import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { StoreService } from '../store/store.service'
@Injectable()
export class HeaderService {

  	constructor(private _store:StoreService) { }
  	setHeader()
  	{
  		let headers = new Headers()
  		headers.append('Content-Type', 'application/json');
  		headers.append('Authorization',this._store.getJwt());
  		return new RequestOptions({headers: headers});
 	}
}
