import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnverifiedIncidents } from '../actions/adminActions';

export default function AdminDashboard() {

    const dispatch = useDispatch();
    const incidents = useSelector(state => state.incidents.incidents);

    const memoizedIncidents = useMemo(() => {
        return incidents
    }, [incidents]);

    useEffect(() => {
        dispatch(fetchUnverifiedIncidents());
    }, [dispatch]);

    const viewIncident = () => {

    }

    return (
        <div className='incidents-table'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Fatality</th>
                        <th>Serious Injury</th>
                        <th>Substantial Property Damage</th>
                        <th>Report</th>
                    </tr>
                </thead>
                <tbody>
                    {memoizedIncidents.map((incident => (
                        <tr onClick={viewIncident}>
                            <td>{incident.date}</td>
                            <td>{incident.companyName}</td>
                            <td>{`${incident.facilityCity}, ${incident.facilityState}`}</td>
                            <td>{incident.wasFatality ? 'Y' : 'N'}</td>
                            <td>{incident.wasSeriousInjury ? 'Y' : 'N'}</td>
                            <td>{incident.wasSubstantialPropertyDamage ? 'Y' : 'N'}</td>
                            {incident.reportURL && <td><a href={incident.reportURL}>Investigation</a></td>}
                            {!incident.reportURL && <td></td>}
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );

};