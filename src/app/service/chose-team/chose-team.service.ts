import { Injectable } from '@angular/core';

@Injectable()
export class ChoseTeamService {

  	constructor() { }
 	matchList = new Array()
 	selectTeam(alldata,xA)
 	{
 		var ran1 = Math.floor((Math.random() * 100) + 1)
 		var ran2 = Math.floor((Math.random() * 100) + 1)
 		var ran3 = Math.floor((Math.random() * 100) + 1)
 		this.matchList.push(ran1+''+ran2+''+ran3)
 		console.log(this.matchList);
  	}
  	getTeamSelect()
  	{

 	}

}
