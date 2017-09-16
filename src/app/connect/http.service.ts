import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
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
}
