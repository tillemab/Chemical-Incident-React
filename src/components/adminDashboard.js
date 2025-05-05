import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnverifiedIncidents, setLoading } from '../actions/adminActions';

export default function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incidents = useSelector(state => state.incidents.incidents);

    const memoizedIncidents = useMemo(() => {
        return incidents
    }, [incidents]);

    useEffect(() => {
        dispatch(fetchUnverifiedIncidents());
    }, [dispatch]);

    const viewIncident = (incidentID) => {
        dispatch(setLoading());
        navigate(`/admin/${incidentID}`);
    }

    return (
        <div>
            <table className='incident-table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Fatality</th>
                        <th>Serious Injury</th>
                        <th>Substantial Property Damage</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {memoizedIncidents.map((incident => (
                        <tr>
                            <td>{incident.date}</td>
                            <td>{incident.companyName}</td>
                            <td>{`${incident.facilityCity}, ${incident.facilityState}`}</td>
                            <td>{incident.wasFatality ? '✓' : 'X'}</td>
                            <td>{incident.wasSeriousInjury ? '✓' : 'X'}</td>
                            <td>{incident.wasSubstantialPropertyDamage ? '✓' : 'X'}</td>
                            <td><button onClick={() => viewIncident(incident._id)} className="button">View</button></td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );

};