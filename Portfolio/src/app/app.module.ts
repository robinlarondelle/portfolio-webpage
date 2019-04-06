import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrwHvtSvrComponent } from './brw-hvt-svr/brw-hvt-svr.component';
import { BrwHvtPageComponent } from './brw-hvt-page/brw-hvt-page.component';
import { CineappComponent } from './cineapp/cineapp.component';
import { TicketstoreComponent } from './ticketstore/ticketstore.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BrwHvtSvrComponent,
    BrwHvtPageComponent,
    CineappComponent,
    TicketstoreComponent,
    ProjectItemComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
