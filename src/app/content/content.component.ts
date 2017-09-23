import { Component, OnInit } from '@angular/core';
import {getMatchService} from '../service/getmatch/getmatch.service'
import { ChoseTeamService } from '../service/chose-team/chose-team.service'
import * as myGlobal from '../global'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[getMatchService]
})
export class ContentComponent implements OnInit {

  	constructor(private getmatch:getMatchService,private _chose:ChoseTeamService) { }
    listMatch;
    monthThai = this.monthTh()
  	fetchMatch(d,m,y)
    {
        this.getmatch.get_json(myGlobal.hostphp+'/getmatch/getlistMatch/'+d+'/'+m+'/'+y+'?nocache='+this.getmatch.noCache()).subscribe
        ( data => 
            {
              this.listMatch = data
              console.log(this.listMatch);           
            }
        )  
    }

    choosThis(all,each)
    {
      console.log(each);
    }


    checkFirstTimeMatch(percentA,percentB)
    {
      if(percentA == 0 && percentB ==0)
      {
        return ' - '
      }
      else 
      {
        return percentA+'% vs '+percentB+'%'
      }
    }
    monthTh()
    {
        var month = {
            1 : "ม.ค",
            2 : "ก.พ",
            3 : "มี.ค",
            4 : "เม.ย",
            5 : "พ.ค",
            6 : "มิ.ย",
            7 : "ก.ค",
            8 : "ส.ค",
            9 : "ก.ย",
            10 : "ต.ค",
            11 : "พ.ย",
            12 : "ธ.ค",

        }
        return month
    }
	ngOnInit() 
	{
		var a = this.getmatch.noCache()
		this.fetchMatch(0,0,0)
	}

}
