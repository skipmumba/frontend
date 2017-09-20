import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  	constructor() { }
    hideRegis = true
    logIn = true
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
