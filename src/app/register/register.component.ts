import { Component, OnInit,EventEmitter,Output ,Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	@Output() emitCloseRegis = new EventEmitter<any>();
  	constructor() { }

  	hideRegis()
  	{
  		this.emitCloseRegis.emit(true)
  	}

 	ngOnInit() 
 	{
  	
  	}

}
