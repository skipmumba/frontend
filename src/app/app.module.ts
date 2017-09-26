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
import { LoginComponent } from './login/login.component';

import { StoreService } from './service/store/store.service'
import { ChoseTeamService } from './service/chose-team/chose-team.service'

import { KeypipePipe } from './pipe/keypipe.pipe';
import { OnlynumberDirective } from './onlynumber.directive'

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ContentComponent,
    SidebarComponent,
    SlideComponent,
    CatheaderComponent,
    RegisterComponent,
    LoginComponent,
    KeypipePipe,
    OnlynumberDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [StoreService,ChoseTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
