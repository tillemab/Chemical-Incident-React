import actionTypes from '../constants/actionTypes';
const env = process.env;

function incidentsFetched(incidents) {
    return {
        type: actionTypes.FETCH_INCIDENTS,
        incidents: incidents
    };
};

function incidentFetched(incident) {
    return {
        type: actionTypes.FETCH_INCIDENT,
        incident: incident
    };
};

export function fetchUnverifiedIncidents() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/admin/incidents`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            console.log(response);
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            dispatch(incidentsFetched(response.incidents));
        }).catch((error) => console.log('Error fetching incidents:', error));
    };
};

export function fetchIncident(incidentID) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/admin/incidents/${incidentID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            dispatch(incidentFetched(response.incident));
        }).catch((error) => console.log('Error fetching incidents:', error));
    };
};

export function verifyIncident(incidentID, data) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/admin/incidents/${incidentID}`, {
            method: 'PUT',
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

export function deleteIncident(incidentID) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/admin/incidents/${incidentID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((response) => {
            console.log(response.message);
        }).catch((error) => console.log('Error submitting incident:', error));
    };
};