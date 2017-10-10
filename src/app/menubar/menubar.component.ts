import { Component, OnInit ,EventEmitter,Output ,Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { StoreService } from '../service/store/store.service'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    constructor(private st:StoreService) {}

    @Output() showTopup = new EventEmitter<any>();

    hideRegis = true
    logIn = true

    callTopup()
    {
      this.showTopup.emit(true)
    }

  	regisTer()
  	{
  		  this.hideRegis = false
  	}
    showLogin()
    {
      this.logIn = false
    }
    closeLogin(e)
    {
      this.logIn = e // return true
    }

    closeRegis(e)
    {
        this.hideRegis = e //return true
    }

    logOut()
    {
        this.st.logOut()
    }

  	ngOnInit() 
  	{
  	}

}
