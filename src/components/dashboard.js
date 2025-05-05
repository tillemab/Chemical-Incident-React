import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVerifiedIncidents } from '../actions/incidentActions';

export default function Dashboard() {

    const dispatch = useDispatch();
    const incidents = useSelector(state => state.incidents.incidents);
    const [currentPage, setCurrentPage] = useState(1);

    const memoizedIncidents = useMemo(() => {
        return incidents
    }, [incidents]);

    useEffect(() => {
        dispatch(fetchVerifiedIncidents((currentPage - 1) * 20, 20));
    }, [dispatch, currentPage]);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const lastPage = () => setCurrentPage(currentPage - 1);

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
                        <th>Report</th>
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
                            {incident.reportURL && <td><a href={incident.reportURL}>Investigation</a></td>}
                            {!incident.reportURL && <td>N/A</td>}
                        </tr>
                    )))}
                </tbody>
            </table>
            <div className="buttons">
                <button onClick={lastPage} disabled={currentPage === 1} className="button">
                    Previous
                </button>
                <p>{`Page ${currentPage}`}</p>
                <button onClick={nextPage} disabled={incidents.length !== 20} className="button">
                    Next
                </button>
            </div>
        </div>
    );

};