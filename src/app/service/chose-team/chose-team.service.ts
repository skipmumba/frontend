import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { StoreService } from '../store/store.service'
@Injectable()
export class ChoseTeamService {

  	constructor(private _store:StoreService) { }
 	matchList:any = []
 	toggle:any = {}

 	  allFund:any = 0;
  	allReward:any = 0;
    eachMatchMoney:any ={}
  	eachReward:any = {}
  	eachPrevious:any = {}

 	calBet(money,id,oods)
  	{ 
  		oods = Number(oods)
  		this.allFund = Number(this.allFund)

  		if(money == '')
  		{
  			money = 0
  		}
  		money = Number(money)
  		if(this.eachPrevious[id] == null)
  		{
  			this.eachPrevious[id] = 0
  		}
  		if(this.eachReward[id] == null)
  		{
  			this.eachReward[id] = 0
  		}

  		this.eachPrevious[id] = Number(this.eachPrevious[id])

  		if(isNaN(this.allFund))
  		{
  			this.allFund = 0
  		}
  		if(isNaN(this.allReward))
  		{
  			this.allReward = 0
  		}
  		this.allFund -= this.eachPrevious[id]
  		this.allFund += money
  		
  		if(isNaN(this.allReward))
  		{
  			this.allReward = 0
  		}

  		this.allReward -= this.eachReward[id]
  		this.allReward += money*oods

  		this.eachPrevious[id] = money
  		this.eachReward[id] = money*oods
  		if(this.allReward <= 0)
  		{
  			this.allReward = 0
  		}
      this.eachMatchMoney[id] = money
  	}

  	removeChose(id)
 	{
 		this.matchList = this.matchList.filter(item => item.id !== id);
 		this.allFund -= Number(this.eachPrevious[id])
 		this.allReward -= Number(this.eachReward[id])
     delete this.eachPrevious[id]
     delete this.eachReward[id]
     delete this.eachMatchMoney[id] 
 		if(this.allFund <= 0)
 		{
 			this.allFund = Number(0)
 		}
 		if(this.allReward <= 0)
 		{
 			this.allReward = Number(+0)
 		}
    if(isNaN(this.allReward))
      {
        this.allReward = 0
      }
     if(isNaN(this.allFund))
      {
        this.allFund = 0
      }
 		
 	}	

 	selectTeam(alldata,xA)
 	{
     var removeAnother = (xA == 1 ?2:1)
     this.toggle[alldata.matchID+''+removeAnother] = true
     this.toggleClick(alldata.matchID,removeAnother)
   		var tid = alldata.matchID+''+xA
   		var team = (xA == 1 ?alldata.team1:alldata.team2)
   		var odds = (xA == 1 ?alldata.oddA:alldata.oddB)
   		this.matchList.push({
   			'matchId':alldata.matchID,
   			'id':tid,
   			'teamChoose':team,
   			'teamVSteam':alldata.team1+' vs '+alldata.team2,
   			'teamnum':xA,
   			'ood':odds,
   		})
   		return this.matchList
  	}
  	toggleClick(id,team)
  	{
  		if(this.toggle[id+''+team] == true) // already click 
  		{
  			this.removeChose(id+''+team)
  			delete this.toggle[id+''+team]; // if unclick remove object 
  		}
  		else // unready click 
  		{
  			this.toggle[id+''+team] = true;
  		}
  		// console.log(this.toggle);
  	}

  	isEmptyObject(obj) 
  	{ // no selected at all
	  return (obj && (Object.keys(obj).length === 0));
	}


}
