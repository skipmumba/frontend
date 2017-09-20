import { Component, OnInit,EventEmitter,Output ,Input  } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../service/store/store.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@Output() emitCloseLogin = new EventEmitter<any>();
	loginFrom:FormGroup
  headers = new Headers({
    'Content-Type': 'application/json'
  });
  	constructor(private _http:Http,private fb:FormBuilder,private storeService:StoreService) { 

  		this.loginFrom = this.fb.group({
  			  'email':[null, Validators.compose([Validators.required])],
	      	'pass':[null,Validators.compose([Validators.required])]
	  	});

  	}
    timeOut
    hideSpin = true
    errorLogin = false
  	checkLogin()
  	{
        this.hideSpin = false
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
      		  this._http.post('http://localhost/betgame/backend/login/memberlogin',this.loginFrom.value, this.headers)
            .map(res => res.json())
        		.subscribe((data) => {
        			  if(data.statusLogin)
                {
                  this.storeService.setStorage(data.memberCode)
                  this.loginFrom.reset()
                  this.errorLogin = false
                }
                else 
                {
                  console.log('no have');
                  this.errorLogin = true
                }
                this.hideSpin = true
        		})
        },5000)
  	}

  	hideLogin()
  	{
  		this.emitCloseLogin.emit(true)
  	}

 	 ngOnInit() {
  	}

}
