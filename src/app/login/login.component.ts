import { Component, OnInit,EventEmitter,Output ,Input  } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../service/store/store.service'
import * as myGlobal from '../global'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hostphp = myGlobal.hostphp
	@Output() emitCloseLogin = new EventEmitter<any>();
	loginFrom:FormGroup


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
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        
        this.hideSpin = false
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
      		  this._http.post(this.hostphp+'/login/memberlogin',this.loginFrom.value,options)
            .map(res => res.json())
        		.subscribe((data) => {
        			  if(data.statusLogin)
                {
                  this.storeService.setStorage(data.memberCode,data.email,data.price)
                  this.loginFrom.reset()
                  this.errorLogin = false
                  this.emitCloseLogin.emit(true)
                }
                else 
                {
                  console.log('!!!!');
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
