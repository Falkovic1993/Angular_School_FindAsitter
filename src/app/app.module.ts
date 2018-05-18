import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatSidenavModule, MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent, LoginDialogComponent } from './login/login.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailedComponent } from './user-detailed/user-detailed.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BabyListComponent } from './baby-list/baby-list.component';
import { BabyComponent } from './baby/baby.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { RegisterActions } from './register-baby/register-baby.actions';
import { UserDeleteActions } from './users-list/users-list.action';
import { RatingComponent } from './rating/rating.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { UsersEpic } from './users.epic';
import { createLogger } from 'redux-logger';
//const createLogger = require('redux-logger');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterBabyComponent,
    RegisterSitterComponent,
    PageNotFoundComponent,
    UsersListComponent,
    UserDetailedComponent,
    AdminComponent,
    BabyListComponent,
    BabyComponent,
    LoginDialogComponent,
    RatingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  entryComponents: [LoginDialogComponent],
  providers: [DataService, AuthGuard, AuthService, RegisterActions, UserDeleteActions, UsersEpic ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,
    private usersEpic: UsersEpic) {

      const rootEpic = combineEpics(
        this.usersEpic.getUsers,
        this.usersEpic.deleteUser,
        this.usersEpic.createUser,
        this.usersEpic.updateUser
        // Each epic is referenced here.
           );
        // Middleware
           // http://redux.js.org/docs/advanced/Middleware.html
           // https://github.com/angular-redux/store/blob/master/articles/epics.md
           // const epicMiddleware = createEpicMiddleware(rootEpic);
           const middleware = [
             createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
           ];
           this.ngRedux.configureStore(
            rootReducer,
            {}, middleware, [ devTool.isEnabled() ? devTool.enhancer() : f => f]);
        
    
   // this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
      ngReduxRouter.initialize(/* args */);   
  }
 }
