import { Component, OnInit } from '@angular/core';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StoreService} from '../../service/store/store.service'
import {HttpService} from '../../connect/http.service'
import * as myGlobal from '../../global'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers:[HttpService]
})
export class SettingComponent implements OnInit {
	hostphp = myGlobal.hostphp
	pattern ="^[0-9]+"
  hideSubmit = false;
  	rFrom:FormGroup;
  	constructor(private fb:FormBuilder,private _http:HttpService,private _store:StoreService) { 
  		this.rFrom = this.fb.group({
  			'phone':[null, Validators.compose([Validators.required,Validators.minLength(9),Validators.pattern(this.pattern)])],
  			'phoneconfirm':[null, Validators.required],
  		},{
  			validator:this.confirmPass.bind(this)
  		});
  	}
  	confirmPass(rf)
  	{
  			// console.log(pass);
  			
  			// console.log(this.rFrom.controls.phoneconfirm.value);	
	  		if(rf.controls.phone.value != rf.controls.phoneconfirm.value)
	  		{
	  			console.log('not match');
	  			return ({"notmatch": true})
	  		}
	  		else 
	  		{
	  			console.log('match');
	  			return (null)
	  		}
  		
  	}

 
  	onRegis()
  	{
  		 this._http.get_jsonheader(this.hostphp+'/userdeposit/setting/'+this._store.getMemberid()+'/'+this.rFrom.controls.phone.value)
       .subscribe(data =>{
         if(data.status == 'ok')
         {
             this._store.setPhone = this.rFrom.controls.phone.value
             this.hideSubmit = true
         }
       })
  	}
  ngOnInit() {
  }

}
