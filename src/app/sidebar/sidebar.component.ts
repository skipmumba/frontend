import { Component, OnInit } from '@angular/core';
import { ChoseTeamService } from '../service/chose-team/chose-team.service'
import { Observable} from 'rxjs/Observable';
import { StoreService } from '../service/store/store.service';
import { HttpService } from '../connect/http.service'
import * as myGlobal from '../global'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[HttpService]
})
export class SidebarComponent implements OnInit {

  	hostphp = myGlobal.hostphp
  	constructor(private getChoose:ChoseTeamService,private _store:StoreService,private http:HttpService) { }
    gameArr = []
  	insertSuc = false
    spinload = false
    notEnough = false
    letplay()
    {  
      this.spinload = true
      let codeuser = this._store.getMemberid();
        this.http.post_json(this.hostphp+'/sendbet/index',{matchinfo:this.getChoose.matchList,money:this.getChoose.eachMatchMoney,codeuser:codeuser})
        .subscribe(data => {
           this.spinload = false
          if(data.betsuc == 'ok')
           {
            this.insertSuc = true
              let newprice = this._store.getPrice()-data.betmoney
              this._store.setnewPrice(newprice)
            setTimeout(()=>{
              this.insertSuc = false
            },4000)
           }
           else if(data.betsuc == 'notenough')
            {
              this.notEnough = true
              setTimeout(()=>{
              this.notEnough = false
              },4000)
            }
            else 
             {
               console.log('err');
             }
        })
        
       
     
      
    }
  	ngOnInit() 
  	{
  		console.log(this._store.getLogin());
  	}

}
