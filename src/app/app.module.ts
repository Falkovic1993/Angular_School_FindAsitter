import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailedComponent } from './user-detailed/user-detailed.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterBabyComponent,
    RegisterSitterComponent,
    PageNotFoundComponent,
    UsersListComponent,
    UserDetailedComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
