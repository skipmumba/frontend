import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../service/store/store.service'
import {HttpService} from '../../connect/http.service'
import * as myGlobal from '../../global'
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  providers:[HttpService]
})
export class WithdrawComponent implements OnInit {

  	hostphp = myGlobal.hostphp
  	constructor(private _http:HttpService,private _store:StoreService) { }
  	listWithdraw:any = []
  	getWithdraw()
  	{
  		console.log(this._store.getMemberid());
  		this._http.get_jsonheader(this.hostphp+'/userdeposit/listWithdraw/'+this._store.getMemberid()).subscribe(data =>{
  			this.listWithdraw = data
  		})
  	}

  	ngOnInit() {
 	 }

}
