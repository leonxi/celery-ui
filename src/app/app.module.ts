import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProjectCostComponent } from './pages/project-cost/project-cost.component';
import {LoginComponent} from "./pages/login/login.component";
import {Code404Component} from "./pages/public/code404/code404.component";
import {AllboxComponent} from "./pages/public/allbox/allbox.component";
import {HeaderComponent} from "./pages/public/header/header.component";
import {MenuComponent} from "./pages/public/menu/menu.component";
import {AttendComponent} from "./pages/attend/attend.component";
import { ProjectCostDetailComponent } from './pages/project-cost-detail/project-cost-detail.component';
import { AttendDetailComponent } from './pages/attend-detail/attend-detail.component';
// import {HttpModule} from "@angular/http";
import { IndexComponent } from './pages/index/index.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Code404Component,
    AllboxComponent,
    HeaderComponent,
    MenuComponent,
    AttendComponent,
    ProjectCostComponent,
    ProjectCostDetailComponent,
    AttendDetailComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
