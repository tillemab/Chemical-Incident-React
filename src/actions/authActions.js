import actionTypes from '../constants/actionTypes';
const API_URL = process.env.REACT_APP_API_URL;

function userSignedIn(isAdmin) {
    return {
        type: actionTypes.USER_SIGNED_IN,
        isAdmin: isAdmin
    };
};

function userSignedOut() {
    return {
        type: actionTypes.USER_SIGNED_OUT,
    };
};

export function submitSignin(data) {
    return dispatch => {
        return fetch(`${API_URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('isAdmin', response.isAdmin);
            dispatch(userSignedIn(response.isAdmin));
        }).catch((error) => console.log('Error signing in user:', error));
    };
};

export function submitSignout() {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(userSignedOut());
    };
};

export function submitSignup(data) {
    return dispatch => {
        return fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            dispatch(submitSignin(data));
        }).catch((error) => console.log('Error registering user:', error));
    };
};