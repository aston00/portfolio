import * as actionTypes from '../actions/actionTypes';


let initialState = {
    auth: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG_OUT:
            return {
                ...state,
                auth: false
            };
        default: 
            return state;

    }
}

export default reducer;

