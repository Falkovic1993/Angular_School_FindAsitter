import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Baby } from '../entities/baby';
import { filter } from 'rxjs/operators';


@Injectable()
export class RegisterActions {

 constructor (
   private ngRedux: NgRedux<IAppState>) {}


   // Avaiable actions
   static SET_TYPE: string = 'SET_TYPE';
   static CREATE_BABY: string = 'CREATE_BABY';
   static DELETE_BABY: string = 'DELETE_BABY';
   static RATE_SITTER: string = 'RATE_SITTER';
   static EDIT_BABY: string = 'EDIT_BABY';

   // New stuff

   // GET USERS
   static GET_USERS: string = 'GET_USERS';
   static RECEIVED_USERS: string = 'RECEIVED_USERS';
   static FAILED_RECEVIED_USERS: string = 'FAILED_RECEVIED_USERS';

   // DELETE USERS
   static DELETE_USER: string = 'DELETE_USER';
   static USER_DELETED: string = 'USER_DELETED';
   static FAILED_DELETED_USERS: string = 'FAILED_DELETED_USERS';

   // CREATE USERS
   static CREATE_USER: string = 'CREATE_USER';
   static USER_CREATED: string = 'USER_CREATED';
   static CREATE_USER_FAILED: string = 'CREATE_USER_FAILED';

   // UPDATE USERS
   static UPDATE_USER: string = 'UPDATE_USER';
   static USER_UPDATED: string = 'USER_UPDATED';
   static UPDATE_USER_FAILED: string = 'UPDATE_USER_FAILED';

   updateUser(baby: Baby):void {
    this.ngRedux.dispatch({
      type:RegisterActions.UPDATE_USER,
      payload: baby
    })
   }

   getUsers() {
     this.ngRedux.dispatch({
       type: RegisterActions.GET_USERS
     })
   }

   deleteUser(id: number): void {
     this.ngRedux.dispatch({
       type: RegisterActions.DELETE_USER,
       payload: id
     })
   }

   createUser(baby:Baby): void {
     this.ngRedux.dispatch({
       type:RegisterActions.CREATE_USER,
       payload: baby
     })
   }

/*
   rateSitter(sittersUsername: string, rating: number): void {
    this.ngRedux.dispatch({
      type:RegisterActions.RATE_SITTER,
      payload: {rating, sittersUsername}
    })
   }

   deleteBaby(username: string): void {
     this.ngRedux.dispatch({
       type: RegisterActions.DELETE_BABY,
       payload: {username}
     });
   }
   

   createBaby(baby: Baby): void {
    this.ngRedux.dispatch({
      type: RegisterActions.CREATE_BABY,
      payload: baby
    });
   }

   setType(isBaby: boolean): void {
     console.log('in Action', isBaby)
     this.ngRedux.dispatch({
       type: RegisterActions.SET_TYPE,
       payload: isBaby
     });
   }*/
   
}
