import actionTypes from '../constants/actionTypes';
const env = process.env;

function incidentsFetched(incidents) {
    return {
        type: actionTypes.FETCH_INCIDENTS,
        incidents: incidents
    }
}

export function fetchVerifiedIncidents(skip, limit) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/incidents?skip=${skip}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            dispatch(incidentsFetched(response.incidents));
        }).catch((error) => console.log('Error fetching incidents:', error));
    };
};

export function submitIncident(data) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/incidents`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            console.log(response.message);
        }).catch((error) => console.log('Error submitting incident:', error));
    };
};