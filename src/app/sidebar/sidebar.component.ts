import { Component, OnInit } from '@angular/core';
import { ChoseTeamService } from '../service/chose-team/chose-team.service'
import { Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  	
  	constructor(private getChoose:ChoseTeamService) { }

  	


  	ngOnInit() 
  	{
  	}

}
