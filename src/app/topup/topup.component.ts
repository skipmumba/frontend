import { Component, OnInit } from '@angular/core';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../connect/http.service';
import * as myGlobal from '../global'
import { StoreService } from '../service/store/store.service'

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css'],
  providers:[HttpService]
})
export class TopupComponent implements OnInit {
	rFrom:FormGroup;
  showTopup = false
  loadSpin = false ;
  foundCode = true ; 
  showDia = false;
  alreadyUserCode = false;
	patternTopup ="^[0-9]{1,30}"
  random = new Date().getTime()+new Date().getMilliseconds()
  	constructor(private fb:FormBuilder,private _http:HttpService,private _store:StoreService) { 
  		this.rFrom = this.fb.group({
        'topup':[null,Validators.compose([Validators.required,Validators.pattern(this.patternTopup)])],        
  			'phone':[null,Validators.compose([Validators.required,Validators.pattern(this.patternTopup)])],	      
		  	});
  	}

  	checkTopUp()
  	{

  		  this.loadSpin = true
        this._http.get_json('http://sirgod.com/bet/wallet/topup/checktop/'+this.rFrom.value.phone+'/'+this.rFrom.value.topup+'/'+this._store.getMemberid()+'?nocache='+this.random).subscribe(data => {
         
          this.loadSpin = false
          this.showDia = true
          if(data.status == 'ok')
          {
            this._store.setnewPrice(data.newprice)
            this.alreadyUserCode = false
            this.foundCode = true
          }
          else if(data.status == 'already')
          {
            this.alreadyUserCode = true
            this.foundCode = false
          }
          else 
          {
            this.alreadyUserCode = false
            this.foundCode = false
          }
          setTimeout(()=>{
            this.showDia = false
            if(this.foundCode)
             {
               this.showTopup = false
             }
          },2000)
        })

        this.rFrom.reset()
  	}
  	showTopupDiv(e)
  	{
    	this.showTopup = true
  	}
    closeTopup()
    {
      this.showTopup = false
    }
  	ngOnInit() 
  	{
  	}

}
