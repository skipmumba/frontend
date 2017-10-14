import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
	constructor(private http: Http) {

	}
	getDataJson : string
 	get_json(url)
	{
	 	return this.http.get(url).map(
	 		(response:Response) => response.json());
	}

	post_json(url,data)
	{
		let headers = new Headers();
        	headers.append('Content-Type', 'application/json');
        	let options = new RequestOptions({headers: headers});
		return this.http.post(url,data)
            .map(res => res.json())
	}
}
