import constants from '../constants/actionTypes';

let initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    isAdmin: localStorage.getItem('isAdmin') || false
}

const authReducer = (state = initialState, action) => {
    var updated = Object.assign({}, state);
    switch(action.type) {
        case constants.USER_SIGNED_IN:
            updated['loggedIn'] = true;
            updated['isAdmin'] = action.isAdmin;
            return updated;
        case constants.USER_SIGNED_OUT:
            updated['loggedIn'] = false;
            updated['isAdmin'] = false;
            return updated;
        default:
            return state;
    };
};

export default authReducer;