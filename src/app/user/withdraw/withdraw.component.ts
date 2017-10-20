import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../service/store/store.service'
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpService} from '../../connect/http.service'
import * as myGlobal from '../../global'
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  providers:[HttpService]
})
export class WithdrawComponent implements OnInit {
    rFrom:FormGroup;
    spin = false
    hostphp = myGlobal.hostphp
    showSuc = false
    notE = false
    pattern ="^[0-9]+"
  	listWithdraw:any = []
    constructor(private fb:FormBuilder,private _http:HttpService,private _store:StoreService) { 
      this.rFrom = this.fb.group({
        'money':[null, Validators.compose([Validators.required,Validators.minLength(1),Validators.pattern(this.pattern)])]
      },{
        validator:this.miniMoney.bind(this)
      });
    }

    miniMoney(m)
    {
      if(m.controls.money.value < 200)
      {
        return ({"notmatch": true})
      }
      else
       {
         return (null)
       }
    }

    onSends()
    {
      this.notE = false
      this._http.get_jsonheader(this.hostphp+'/userdeposit/outWithdraw/'+this._store.getMemberid()+'/'+this.rFrom.controls.money.value)
       .subscribe(data =>{
         if(data.out == 'ok')
         {
             let newPrice = this._store.getPrice() - this.rFrom.controls.money.value
             this._store.setnewPrice(newPrice)
             this.showSuc = true
             this.getWithdraw()
             setTimeout(()=>{
               this.showSuc = false
             },3000)
         }
         if(data.notenough == 'yes')
         {
             this.notE = true
         }
       })
    }

  	getWithdraw()
  	{
      this.spin = true
  		this._http.get_jsonheader(this.hostphp+'/userdeposit/listWithdraw/'+this._store.getMemberid()).subscribe(data =>{
        this.spin = false
  			this.listWithdraw = data
  		})
  	}

  	ngOnInit() {
 	 }

}
