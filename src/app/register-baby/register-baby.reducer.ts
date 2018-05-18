import { RegisterActions } from './register-baby.actions';
import { RegisterState } from '../store/store';
import { tassign } from 'tassign';


const INITIAL_STATE: RegisterState = {isBaby: undefined, babies: [], sitters: [] }

export function registerReducer(state: RegisterState = INITIAL_STATE, action:any) {
    switch (action.type) {

        // DELETE CASES 
        case RegisterActions.DELETE_USER:
        return state;
        
        case RegisterActions.USER_DELETED:
        let remainingUsers = state.babies.filter(baby => {return baby._id !== action.payload})
        return tassign(state, {babies: remainingUsers});
        
        case RegisterActions.FAILED_DELETED_USERS:
        //react to failed users case. 
        return state;

        // UPDATE USER
        case RegisterActions.UPDATE_USER: //TODO:: MANGLER DER NOGET INFO HER?
        console.log('action',action.payload);
        //let editedBaby = state.babies.map(baby => { return baby === action.payload })
          //  console.log(editedBaby);
      //  return tassign(state, {})



        // CREATE USER 
        case RegisterActions.CREATE_USER:
        return state;

        case RegisterActions.USER_CREATED:
        let newBabyArray = [...state.babies, action.payload]
        return tassign(state, {babies:newBabyArray} )

        case RegisterActions.CREATE_USER_FAILED:
        return state;

        // GET USERS CASES
        case RegisterActions.FAILED_RECEVIED_USERS:
        //react to failed users case. 
        return state;

        case RegisterActions.RECEIVED_USERS:
        //action.payload is array of users 
        // I could set loading flag to false. 
        return tassign(state, {babies: action.payload})

        case RegisterActions.GET_USERS:
        // set loading flag to true
        return state;


        //OLD
/*
        case RegisterActions.SET_TYPE:
        console.log('in the reducer', action.payload)
        return tassign(state, { isBaby: action.payload });

        case RegisterActions.CREATE_BABY: // Action.payload is a babyobject to add
        // add the baby to the array without chaing the excisting array.
        // The spread operator (...) will create a new array based on state.babies and add the object action.payload
        let newBabyArray = [...state.babies, action.payload]
        return tassign(state, {babies:newBabyArray} )

        case RegisterActions.DELETE_BABY:
        let newDeletedBabies = state.babies.filter(baby => {
        return baby.username !== action.payload.username })
        return tassign(state, {babies:newDeletedBabies})

        case RegisterActions.EDIT_BABY:
        let editedBaby = state.babies.map(baby => {
            console.log(baby)
            return baby === action.payload })
            console.log(editedBaby);
        return tassign(state, {})

        case RegisterActions.RATE_SITTER:

*/


        default:
        return state;
    }
}
