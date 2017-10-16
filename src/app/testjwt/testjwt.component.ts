import { Component, OnInit } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { HeaderService } from '../service/header/header.service'
@Component({
  selector: 'app-testjwt',
  templateUrl: './testjwt.component.html',
  styleUrls: ['./testjwt.component.css'],
  providers:[HeaderService]
})
export class TestjwtComponent implements OnInit {

  constructor(private http: Http,private _header:HeaderService) { }
  gettoken()
  {
  	let headers = new Headers();
  		let to = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNoYXJlZWYiLCJhZG1pbiI6dHJ1ZX0.gJjlmHel4UhPFO4v42dXKUP-KkCN6P8ymoBr1cAyuGc'
        	headers.append('Authorization',to);
        	let random = new Date().getTime()+new Date().getMilliseconds()
		  return this.http.post('http://localhost/betgame/login/jwttoken?date='+random,{name:'แฟฟหก'},this._header.setHeader())
            .subscribe((data:Response) =>{
            	console.log(data);
            },(error)=>{
              console.log('got error');
            })
  } 
  gottoken()
  {
  	console.log(123);
  }
  ngOnInit() {
  }

}
