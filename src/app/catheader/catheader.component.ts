import { Component, OnInit ,ViewChild } from '@angular/core';
import { ContentComponent } from '../content/content.component'
@Component({
  selector: 'app-catheader',
  templateUrl: './catheader.component.html',
  styleUrls: ['./catheader.component.css']
})
export class CatheaderComponent implements OnInit {
	@ViewChild(ContentComponent) ContentComponent: ContentComponent
	

  ngOnInit() {
  	this.ContentComponent.fetchMatch(0,0,0,0)
  }

}
