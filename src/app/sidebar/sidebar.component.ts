import { Component, OnInit } from '@angular/core';
import { ChoseTeamService } from '../service/chose-team/chose-team.service'
import { Observable} from 'rxjs/Observable';
import { StoreService } from '../service/store/store.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  	
  	constructor(private getChoose:ChoseTeamService,private _store:StoreService) { }

  	


  	ngOnInit() 
  	{
  		console.log(this._store.getLogin());
  	}

}
