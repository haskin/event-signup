import SIGN_UP from '../actions/actionTypes'

export const initialState = {
    firstName: '',
    lastName: '',
    email:'',
    date: ''
}

export function updateReducer(state = initialState, action){
    switch(action.type){
        case SIGN_UP.FIRST_NAME:
            return {
                ...state,
                firstName:action.input
            };
        case SIGN_UP.LAST_NAME:
            return {
                ...state,
                lastName:action.input
            };
        case SIGN_UP.EMAIL:
            return {
                ...state,
                email:action.input
            }
        case SIGN_UP.DATE:
            return {
                ...state,
                date:action.input
            }
        default:
            return state;    
    }
}