import { Component, OnInit,EventEmitter,Output ,Input } from '@angular/core';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobal from '../global'



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers:[]
})
export class RegisterComponent implements OnInit {
    hostphp = myGlobal.hostphp
  	rFrom:FormGroup;
    pattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" //email
    patternPass ="^[a-zA-Z0-9_-]+"

	  @Output() emitCloseRegis = new EventEmitter<any>();
  	constructor(private http: Http,private fb:FormBuilder) 
  	{ 
  		this.rFrom = this.fb.group({
  			'email':[null, Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(this.pattern)]),this.check_sameuser.bind(this)],
        'pass':[null,Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(this.patternPass)])]
  		});
  	}


  	hideRegis()
  	{
  		this.emitCloseRegis.emit(true)
  	}

    check_sameuser(a)
    {
       
         return new Promise(resolve => {
           this.http.get(this.hostphp+'/backend/register/sameUser/'+a.value).map(res => res.json())
                .subscribe(data => {               
                    if(data.state == 1) {
                        resolve ({"sameuser": true})
                    }
                    else {resolve (null)}      
                })
          
        })
    }

    onRegis()
    {
        var dataUSer = this.rFrom.value
        
        this.http.post(this.hostphp+'/backend/register/regisTer',dataUSer).map(ress => ress.json()).subscribe( (datas) => {
            console.log(datas.regisStatus);
        })
    }


 	  ngOnInit() 
 	  {
       
  	}

}
