import { SET_ITEM } from '../actions';
const defaultState = {
    itemDetail: [],
}


export default function (state = defaultState, action) {
    switch(action.type){
        case SET_ITEM:
            return {
                ...state,
                itemDetail: action.payload
            }
        default:
            return state
    } 
}


