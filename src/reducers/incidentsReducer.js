import constants from '../constants/actionTypes';

let initialState = {
    incidents: [],
    selectedIncident: null,
    loading: false
}

const incidentsReducer = (state = initialState, action) => {
    var updated = Object.assign({}, state);
    switch(action.type) {
        case constants.FETCH_INCIDENTS:
            updated['incidents'] = action.incidents;
            updated['loading'] = false;
            return updated;
        case constants.FETCH_INCIDENT:
            updated['selectedIncident'] = action.incident;
            updated['loading'] = false;
            return updated;
        case constants.SET_LOADING:
            updated['loading'] = true;
            return updated;
        default:
            return state;
    };
};

export default incidentsReducer;