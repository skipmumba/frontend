import { Component, OnInit ,ViewChild } from '@angular/core';
import { ContentComponent } from '../content/content.component'
import { NewsComponent } from '../news/news.component'
import { StoreService} from '../service/store/store.service'
@Component({
  selector: 'app-catheader',
  templateUrl: './catheader.component.html',
  styleUrls: ['./catheader.component.css']
})
export class CatheaderComponent implements OnInit {
	constructor(private st:StoreService){}
	@ViewChild(ContentComponent) ContentComponent: ContentComponent
	

  ngOnInit() {
  	this.ContentComponent.fetchMatch(0,0,0,0)
  }

}