import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const myroute:Routes=[
  {
    path:'add',
    component:EmployeeAddComponent
  },
  {
    path:'',
    component:AdminLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
