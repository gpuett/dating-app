import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SwipeComponent } from './swipe/swipe.component';
import { DetailComponent } from './detail/detail.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwipeComponent,
    DetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
