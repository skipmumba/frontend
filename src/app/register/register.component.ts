import { Component, OnInit,EventEmitter,Output ,Input } from '@angular/core';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  	rFrom:FormGroup;
	  @Output() emitCloseRegis = new EventEmitter<any>();
  	constructor(private fb:FormBuilder) 
  	{ 
  		this.rFrom = this.fb.group({
  			'email':[null, Validators.compose([Validators.required,this.test])],
  			'pass':[null, Validators.required ],
  		});
  	}

    test(a)
    {
      if(a.value != 'reef')
      {
        return {'email':true}
      }

    }
  	hideRegis()
  	{
  		this.emitCloseRegis.emit(true)
  	}

    onSubmit()
    {
      console.log(132);
    }


 	  ngOnInit() 
 	  {
  	}

}
