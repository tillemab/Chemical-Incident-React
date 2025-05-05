import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncident, verifyIncident, deleteIncident } from '../actions/adminActions';

export default function Incident() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { incidentID } = useParams();
    const selectedIncident = useSelector(state => state.incidents?.selectedIncident);

    useEffect(() => {
        dispatch(fetchIncident(incidentID));
    }, [dispatch, incidentID]);

    const verifyInc = () => {
        dispatch(verifyIncident(incidentID));
        navigate('/admin');
    }
    const deleteInc = () => {
        dispatch(deleteIncident(incidentID));
        navigate('/admin');
    }

    const getValueString = (value) => {
        if (value === true) {
            return "Yes"
        } else if (value === false) {
            return "No"
        } else if (value === null) {
            return "Not specified"
        } else {
            return value;
        }
    }

    return (
        <div class='container'>
            <h1>{selectedIncident && selectedIncident.companyName} Incident Report</h1>
            <p><i>Incident ID: {selectedIncident ? selectedIncident._id : "Pending"}</i></p>
            <div className="buttons">
                <button onClick={verifyInc} className="button" disabled={!selectedIncident}>
                    Verify
                </button>
                <button onClick={deleteInc} className="button" disabled={!selectedIncident}>
                    Delete
                </button>
            </div>
            <div class='incident-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedIncident && Object.entries(selectedIncident).map(([field, value]) => (
                            <tr>
                                <td>{field}</td>
                                <td>{getValueString(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};