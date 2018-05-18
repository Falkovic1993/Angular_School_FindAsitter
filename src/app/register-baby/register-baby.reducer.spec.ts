import { registerReducer } from "./register-baby.reducer";
//import { RegisterActions } from "./register-baby.actions";
import * as types from './register-baby.actions';
import { deepFreeze } from "deep-freeze";

describe('register reducer', () => {
    // Should make a function that returns initial state instead defining it everytime. 

    it('Toggle isBaby or Sitter', () => {
        let state = { isBaby: undefined, babies: [], sitters: [] };
        deepFreeze(state);
    });
    
    it('Should add a new baby object to the babies array', ()=> {
        let initialState = { isBaby: undefined, babies: [], sitters: [] };
        deepFreeze(initialState);

        let baby = { 
            username:'testbaby',
            firstname: 'firstname',
            lastname: 'falk',
            birthDate: new Date(2018,0,1),
            area: 'copenhagen',
            rating: []
        }

        let afterState = { isBaby: undefined, babies: [baby], sitters: [] };

        let newState = registerReducer(initialState, {
            type: types.RegisterActions.CREATE_BABY,
            payload:baby
        });
        expect(newState).toEqual(1);
        expect(newState).toEqual(afterState);
    })
})