import constants from '../constants/actionTypes';

let initialState = {
    incidents: [],
    selectedIncident: null
}

const incidentsReducer = (state = initialState, action) => {
    var updated = Object.assign({}, state);
    switch(action.type) {
        case constants.FETCH_INCIDENTS:
            updated['incidents'] = action.incidents;
            return updated;
        case constants.FETCH_INCIDENT:
            updated['selectedIncident'] = action.incident;
            return updated;
        case constants.SET_INCIDENT:
            updated['selectedIncident'] = action.incident;
            return updated;
        default:
            return state;
    };
};

export default incidentsReducer;