import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  

  {"path":"users",component:UserComponent},
  {"path":"form",component:FormComponent},
  {"path":"admin",component:AdminLoginComponent},
  {"path":"user",component:UserLoginComponent},
  {"path":"userdash",component:UserDashboardComponent},
  {"path":"",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }