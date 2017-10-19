import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { StoreService } from '../service/store/store.service'
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
	constructor(private http: Http,private _store:StoreService) {

	}
	random = Math.floor(Math.random() * 500) + 1  
	getDataJson : string
 	get_json(url)
	{
	 	return this.http.get(url+'?nocache='+this.random).map(
	 		(response:Response) => response.json());
	}

	get_jsonheader(url)
	{
		return this.http.get(url+'?nocache='+this.random,this.setHeader()).map(
	 		(response:Response) => response.json());
	}

	post_json(url,data)
	{
		return this.http.post(url+'?nocache='+this.random,data,this.setHeader())
            .map(res => res.json())
	}
	setHeader()
  	{
  		let headers = new Headers()
  		headers.append('Content-Type', 'application/json');
  		headers.append('Authorization',this._store.getJwt());
  		return new RequestOptions({headers: headers});
 	}
}
