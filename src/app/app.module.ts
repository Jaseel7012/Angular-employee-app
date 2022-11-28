import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmpviewComponent } from './empview/empview.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { NavbarComponent } from './navbar/navbar.component';

const myroute:Routes=[
  {
    path:'add',
    component:EmployeeAddComponent
  },
  {
    path:'',
    component:AdminLoginComponent
  },
  {
    path:'view',
    component:EmpviewComponent
  },
  {
    path:'edit',
    component:EmployeeEditComponent
  },
  {
    path:'delete',
    component:EmployeeDeleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    AdminLoginComponent,
    EmpviewComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    NavbarComponent
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
