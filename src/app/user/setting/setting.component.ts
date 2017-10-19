import { Component, OnInit } from '@angular/core';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as myGlobal from '../../global'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
	hostphp = myGlobal.hostphp
	pattern ="^[0-9]+"
  	rFrom:FormGroup;
  	constructor(private fb:FormBuilder) { 
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
  		console.log('ok');
  	}
  ngOnInit() {
  }

}
