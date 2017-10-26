import { Component, OnInit ,EventEmitter,Output ,Input,ViewChild} from '@angular/core';
import { DepositComponent } from './deposit/deposit.component'
import { WithdrawComponent } from './withdraw/withdraw.component'
import { GameComponent } from './game/game.component'
import { StoreService } from '../service/store/store.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	@ViewChild(DepositComponent) childDeposit: DepositComponent
  @ViewChild(WithdrawComponent) childWithdraw: WithdrawComponent
	@ViewChild(GameComponent) childGame: GameComponent
  constructor(private _st:StoreService) { }
  tabActive = 1
  //1 deposit
  //2  withdraw
  //3 settting
  closeSetting()
  {
  	this._st.showSetting = true
  }
  clickTab(tab)
  {
    if(this._st.userphone == null || this._st.userphone == 'null')
       {
         this._st.userphone =null
       }
  	if(tab == 1)
  	{
  		this.childDeposit.getDeposit()		
  	}
  	if(tab == 2)
  	{
  		this.childWithdraw.getWithdraw()
  	}
    if(tab == 4)
    {
      this.childGame.getBet()
    }
  	this.tabActive = tab
  }
  ngOnInit() {
  	
  }

}
