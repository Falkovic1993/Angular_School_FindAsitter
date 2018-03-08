import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service'

import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailedComponent } from './user-detailed/user-detailed.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register-baby', component: RegisterBabyComponent },
  { path: 'register-sitter', component: RegisterSitterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'users-list', component: UsersListComponent },
  { path: 'view/user-detail/:username', component: UserDetailedComponent},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], children: [
    {path: 'users', component: UsersListComponent}
  ] },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //For debugging
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
