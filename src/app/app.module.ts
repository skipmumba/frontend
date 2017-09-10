import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlideComponent } from './slide/slide.component';
import { CatheaderComponent } from './catheader/catheader.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ContentComponent,
    SidebarComponent,
    SlideComponent,
    CatheaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
