import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AllboxComponent} from "./pages/public/allbox/allbox.component";
import {IndexComponent} from "./pages/index/index.component";
import {ProjectCostComponent} from "./pages/project-cost/project-cost.component";
import {AttendComponent} from "./pages/attend/attend.component";
import {Code404Component} from "./pages/public/code404/code404.component";
import {ProjectCostDetailComponent} from "./pages/project-cost-detail/project-cost-detail.component";
import {AttendDetailComponent} from "./pages/attend-detail/attend-detail.component";


const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'allbox',component:AllboxComponent,
    children:[
      {path:'index',component:IndexComponent },
      {path:'projectCost',component:ProjectCostComponent },
      {path:'attend',component: AttendComponent},
      {path:'projectCostDetail',component: ProjectCostDetailComponent},
      {path:'attendDetail',component: AttendDetailComponent},
    ]
  },
  {path:'**',component:Code404Component},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
