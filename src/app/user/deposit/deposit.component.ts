import { Component, OnInit ,EventEmitter,Output ,Input } from '@angular/core';
import {StoreService} from '../../service/store/store.service'
import {HttpService} from '../../connect/http.service'
import * as myGlobal from '../../global'
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers:[HttpService]
})
export class DepositComponent implements OnInit {
  spin = false
	hostphp = myGlobal.hostphp
  	constructor(private _http:HttpService,private _store:StoreService) { }
  	// id = 1510171538
  	listDeposit:any = []
  	getDeposit(page=1)
  	{
      this.spin = true
  		console.log(this._store.getMemberid());
  		this._http.get_jsonheader(this.hostphp+'/userdeposit/listDeposit/'+this._store.getMemberid()+'/'+page).subscribe(data =>{
        this.spin = false
  			this.listDeposit = data
  		})
  	}

  	ngOnInit() {
  	}

}
