import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  	constructor() { }
    hideRegis = true
  	regisTer()
  	{
  		  this.hideRegis = false
  	}

    closeRegis(e)
    {
        this.hideRegis = e
    }

  	ngOnInit() 
  	{
  	}

}
