import { Component, OnInit ,EventEmitter,Output ,Input,ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { StoreService } from '../service/store/store.service'
import {UserComponent} from '../user/user.component'
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    constructor(private st:StoreService) {}
    @ViewChild(UserComponent) childeUser: UserComponent
    @Output() showTopup = new EventEmitter<any>();

    hideRegis = true
    logIn = true

    callTopup()
    {
      this.showTopup.emit(true)
    }
    showSetting()
    {
      this.childeUser.clickTab(1)
      this.st.showSetting = false
    }

    showNews()
    {      
        this.st.setShownew()
    }
   
    homePage(event)
    {
      this.st.showNews = false
        event.preventDefault()
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