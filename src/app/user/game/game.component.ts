import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../service/store/store.service'
import {HttpService} from '../../connect/http.service'
import * as myGlobal from '../../global'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers:[HttpService]
})
export class GameComponent implements OnInit {
	hostphp = myGlobal.hostphp
  	constructor(private _http:HttpService,private _store:StoreService) { }
  	betList
  	getBet()
  	{
  		this._http.get_jsonheader(this.hostphp+'/userdeposit/listbet/'+this._store.getMemberid()).subscribe(data =>{
  			console.log(data);
  		})
  	}

  	ngOnInit() {
  	}

}
