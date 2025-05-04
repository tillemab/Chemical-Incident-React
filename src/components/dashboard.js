import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVerifiedIncidents } from '../actions/incidentActions';

export default function Dashboard() {

    const dispatch = useDispatch();
    const incidents = useSelector(state => state.incidents.incidents);
    let [currentPage, setCurrentPage] = useState(1);

    const memoizedIncidents = useMemo(() => {
        return incidents
    }, [incidents]);

    useEffect(() => {
        dispatch(fetchVerifiedIncidents((currentPage - 1) * 25, 25));
    }, [dispatch, currentPage]);

    const nextPage = () => setCurrentPage(currentPage++);
    const lastPage = () => setCurrentPage(currentPage--);

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
                        <tr>
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
            <button onClick={lastPage} disabled={currentPage === 1}>
                Previous
            </button>
            <p>{`Page ${currentPage}`}</p>
            <button onClick={nextPage} disabled={incidents.length !== 25}>
                Next
            </button>
        </div>
    );

};