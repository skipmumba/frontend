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
   
    setLogin(first,data)
    {
      if(first==0)
      {
        var time:any = Math.floor(Date.now() / 1000)+3600
        localStorage.setItem('time',time)
        this.storeService.setStorage(data.memberCode,data.email,data.price,data.phone)
        this.storeService.setJwt(data.token)
        this.loginFrom.reset()
        this.errorLogin = false
        this.emitCloseLogin.emit(true)
      }
      else 
      {
        var time:any = Math.floor(Date.now() / 1000)
        if(time>localStorage.getItem('time'))
         {
             console.log('expire');
             localStorage.clear();
         }
        else 
         {
           this.storeService.setStorage(localStorage.getItem('id'),localStorage.getItem('email'),localStorage.getItem('price'),localStorage.getItem('phone'))
            this.storeService.setJwt(localStorage.getItem('token'))
            this.loginFrom.reset()
            this.errorLogin = false
            this.emitCloseLogin.emit(true)
         }
      }
    }

  	checkLogin()
  	{
        
        this.hideSpin = false
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
      		  this._http.post(this.hostphp+'/login/memberlogin',this.loginFrom.value)
            .map(res => res.json())
        		.subscribe(
                (data) => 
                 {
          			  if(data.statusLogin)
                  {
                    this.setLogin(0,data)
                  }
                  else 
                  {
                    console.log('!!!!');
                    this.errorLogin = true
                  }
                  this.hideSpin = true
          		  },
                (error) =>{
                  console.log('pls relogin');
                }
            )
        },5000)
  	}

  	hideLogin()
  	{
  		this.emitCloseLogin.emit(true)
  	}

 	 ngOnInit() {
      this.setLogin(1,1)
  	}

}
