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
import { OnlynumberDirective } from './onlynumber.directive';
import { TopupComponent } from './topup/topup.component';
import { UserComponent } from './user/user.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { SettingComponent } from './user/setting/setting.component';
import { GameComponent } from './user/game/game.component';
import { NotifywithdrawComponent } from './user/notifywithdraw/notifywithdraw.component';
import { NewsComponent } from './news/news.component';

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
    TopupComponent,
    UserComponent,
    WithdrawComponent,
    DepositComponent,
    SettingComponent,
    GameComponent,
    NotifywithdrawComponent,
    NewsComponent,

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
