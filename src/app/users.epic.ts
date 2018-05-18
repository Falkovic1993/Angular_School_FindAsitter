import { Injectable } from "@angular/core";
import { ActionsObservable } from "redux-observable";
import { Observable } from "rxjs/Observable";
import { RegisterActions } from "./register-baby/register-baby.actions";
import { DataService } from "./data.service";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UsersEpic {

  constructor(private dataService: DataService) {}
  
  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(RegisterActions.GET_USERS) // Listen for this action
      .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
          return this.dataService.getSitters()
            .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: RegisterActions.RECEIVED_USERS,
              payload: result.filter(x => x.firstname === 'emil') // Hack: Db contains all data, not just yours.
            }))
            .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
              type: RegisterActions.FAILED_RECEVIED_USERS,
              payload: error
          }));
    });
  }

  deleteUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(RegisterActions.DELETE_USER) 
      .mergeMap(({payload}) => { 
          return this.dataService.deleteUser(payload)
          .map((result: any) =>  ({ 
            type: RegisterActions.USER_DELETED,
            payload: payload
            }))
            .catch(error => Observable.of({ 
              type: RegisterActions.FAILED_DELETED_USERS,
              payload: error
          }));
    });
  }

  createUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(RegisterActions.CREATE_USER) 
      .mergeMap(({payload}) => { 
          return this.dataService.createUser(payload)
          .map((result: any) =>  ({
            type: RegisterActions.USER_CREATED,
            payload: payload
            }))
            .catch(error => Observable.of({ 
              type: RegisterActions.CREATE_USER_FAILED,
              payload: error
          }));
    });
  }

  updateUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(RegisterActions.UPDATE_USER) 
      .mergeMap(({payload}) => { 
          return this.dataService.updateUser(payload)
          .map((result: any) =>  ({
            type: RegisterActions.USER_UPDATED,
            payload: payload
            }))
            .catch(error => Observable.of({ 
              type: RegisterActions.UPDATE_USER_FAILED,
              payload: error
          }));
    });
  }
}