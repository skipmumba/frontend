import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../global';
import { HttpService } from '../connect/http.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[HttpService]
})
export class NewsComponent implements OnInit {

  	constructor(private _http:HttpService) { }
  	listallnews:any
  	shownews = false
  	newsSub:any
  	newsText:any

  	listNews()
  	{
  		this._http.get_json(myGlobal.hostphp+'/news/listNews').subscribe(data =>{
  			this.listallnews = data
  		})
  	}

  	getnewId(id)
  	{
  		this._http.get_json(myGlobal.hostphp+'/news/getNews/'+id).subscribe(data =>{
  			this.newsSub = data[0].news_subject
  			this.shownews =true
  			this.newsText = data[0].news_textarea
  		})
  	}

  	closeNews()
  	{
  		this.shownews =false
  	}

  	ngOnInit() {
  		this.listNews()
  		console.log('ngonit');
  	}

}