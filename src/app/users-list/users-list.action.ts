import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Injectable()

export class UserDeleteActions {
 constructor (
   private ngRedux: NgRedux<IAppState>) {}

   static SET_TYPE: string = 'SET_TYPE';

   setType(isDeleted: boolean): void {
    console.log('in Action', isDeleted)
     this.ngRedux.dispatch({
       type: UserDeleteActions.SET_TYPE,
       payload: isDeleted
     })
   }
}
