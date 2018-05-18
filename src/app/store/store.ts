import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { registerReducer } from './../register-baby/register-baby.reducer';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';

export class RegisterState {
 isBaby: boolean;
 babies: Baby[];
 sitters: Sitter[];
}


export class IAppState {
 register?: RegisterState;
}

export const rootReducer = combineReducers<IAppState>({
 register: registerReducer,

 router: routerReducer
});
