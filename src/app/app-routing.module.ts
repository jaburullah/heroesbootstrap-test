import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {AppartementComponent, CreateAppartementComponent, ManageAppartementComponent} from './appartement/appartement.component';
import {CreateUserComponent, ManageUserComponent, UserComponent} from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'user', component: UserComponent,
        children: [
          {path: '', redirectTo: 'manage', pathMatch: 'full'},
          {path: 'manage', component: ManageUserComponent},
          {path: 'create', component: CreateUserComponent}
        ]
      },
      {
        path: 'appartement', component: AppartementComponent,
        children: [
          {path: '', redirectTo: 'manage', pathMatch: 'full'},
          {path: 'manage', component: ManageAppartementComponent},
          {path: 'create', component: CreateAppartementComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
