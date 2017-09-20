import { Component, OnInit } from '@angular/core';

import { StoreService } from '../service/store/store.service'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  	constructor(private st:StoreService) { }
    hideRegis = true
    logIn = true

  	regisTer()
  	{
  		  this.hideRegis = false
  	}
    showLogin()
    {
      this.st.getStorage()
      this.logIn = false
    }
    closeLogin(e)
    {
      this.logIn = e
    }

    closeRegis(e)
    {
        this.hideRegis = e
    }

  	ngOnInit() 
  	{
  	}

}
