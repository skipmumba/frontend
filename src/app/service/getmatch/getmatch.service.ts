import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class getMatchService {

  constructor(private http:Http) {}
  	get_json(url)
	{
	 	return this.http.get(url).map(
	 		(response:Response) => response.json()
	 		
	 	);	 	
	}
	noCache()
	{
		var random = new Date().getTime()+new Date().getMilliseconds()
		return random
	}

}