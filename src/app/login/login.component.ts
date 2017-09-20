import { Component, OnInit,EventEmitter,Output ,Input  } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@Output() emitCloseLogin = new EventEmitter<any>();
	loginFrom:FormGroup
  	constructor(private _http:Http,private fb:FormBuilder) { 

  		this.loginFrom = this.fb.group({
  			'email':[null, Validators.compose([Validators.required])],
	      	'pass':[null,Validators.compose([Validators.required])]
	  	});

  	}

  	checkLogin()
  	{
  		this._http.get('http://localhost/betgame/backend/login/memberlogin')
  		.map(res => res.json()).subscribe((data) => {
  			console.log(data);
  		})
  	}

  	hideLogin()
  	{
  		this.emitCloseLogin.emit(true)
  	}

 	 ngOnInit() {
  	}

}
