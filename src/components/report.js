import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitIncident } from '../actions/incidentActions';

export default function Report() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({})

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const submit = () => {
        dispatch(submitIncident(values));
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Reporter an Incident</h1>
            <h2>Owner/Operator Information</h2>
            <form>
                <label htmlFor="companyName">Company Name*</label>
                <input type="text" name="companyName" onChange={(e) => handleChanges(e)} />

                <label htmlFor="companyContactName">Company Contact Name</label>
                <input type="text" name="companyContactName" onChange={(e) => handleChanges(e)} />

                <label htmlFor="companyContactTitle">Company Contact Title</label>
                <input type="text" name="companyContactTitle" onChange={(e) => handleChanges(e)} />

                <label htmlFor="companyContactMobilePhone">Company Contact Mobile Phone</label>
                <input type="text" name="companyContactMobilePhone" onChange={(e) => handleChanges(e)} />

                <label htmlFor="companyContactOfficePhone">Company Contact Mobile Phone</label>
                <input type="text" name="companyContactOfficePhone" onChange={(e) => handleChanges(e)} />

                <label htmlFor="companyContactEmail">Company Contact Email</label>
                <input type="text" name="companyContactEmail" onChange={(e) => handleChanges(e)} />
            </form>
            <h2>Reporter Information</h2>
            <form>
                <label htmlFor="reporterTitle">Reporter Title</label>
                <input type="text" name="reporterTitle" onChange={(e) => handleChanges(e)} />

                <label htmlFor="reporterMobilePhone">Company Contact Mobile Phone</label>
                <input type="text" name="reporterMobilePhone" onChange={(e) => handleChanges(e)} />

                <label htmlFor="reporterOfficePhone">Company Contact Mobile Phone</label>
                <input type="text" name="reporterOfficePhone" onChange={(e) => handleChanges(e)} />
            </form>
            <h2>Facility Information</h2>
            <form>
                <label htmlFor="facilityName">Facility Name</label>
                <input type="text" name="facilityName" onChange={(e) => handleChanges(e)} />

                <label htmlFor="facilityStreetAddress">Facility Street Address</label>
                <input type="text" name="facilityStreetAddress" onChange={(e) => handleChanges(e)} />

                <label htmlFor="facilityCity">Facility City*</label>
                <input type="text" name="facilityCity" onChange={(e) => handleChanges(e)} />

                <label htmlFor="facilityZIP">Facility ZIP</label>
                <input type="text" name="facilityZIP" onChange={(e) => handleChanges(e)} />

                <label htmlFor="facilityState">Facility State*</label>
                <input type="text" name="facilityState" onChange={(e) => handleChanges(e)} />
            </form>
            <h2>Incident Information</h2>
            <form>
                <label htmlFor="date">Date*</label>
                <input type="date" name="date" onChange={(e) => handleChanges(e)} />

                <label htmlFor="time">Time</label>
                <input type="time" name="time" onChange={(e) => handleChanges(e)} />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasExplosion">Was there an explosion?</label>
                <input type="checkbox" name="wasExplosion" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasFire">Was there a fire?</label>
                <input type="checkbox" name="wasFire" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasFatality">Was there a fatality?</label>
                <input type="checkbox" name="wasFatality" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasSeriousInjury">Was there a serious injury?</label>
                <input type="checkbox" name="wasSeriousInjury" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasSubstantialPropertyDamage">Was there substantial property damage?</label>
                <input type="checkbox" name="wasSubstantialPropertyDamage" onChange={(e) => handleChanges(e)} />

                <label htmlFor="totalFatalities">How many fatalities were there?</label>
                <input type="number" name="totalFatalities" onChange={(e) => handleChanges(e)} />

                <label htmlFor="totalSeriousInjuries">How many serious injuries were there?</label>
                <input type="number" name="totalSeriousInjuries" onChange={(e) => handleChanges(e)} />

                <label htmlFor="estimatedPropertyDamage">What is the estimated property damage cost?</label>
                <input type="number" name="estimatedPropertyDamage" onChange={(e) => handleChanges(e)} />
            </form>
            <h2>Evacuation Information</h2>
            <form>
                <label htmlFor="wasEvacuationOrdered">Was an evacuation ordered?</label>
                <input type="checkbox" name="wasEvacuationOrdered" onChange={(e) => handleChanges(e)} />

                <label htmlFor="totalPeopleEvacuated">How many people were evacuated?</label>
                <input type="number" name="totalPeopleEvacuated" onChange={(e) => handleChanges(e)} />

                <label htmlFor="evacuationRadiusMeteres">What was the radius of the evacuation zone (in meters)?</label>
                <input type="number" name="evacuationRadiusMeteres" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wereEmployeesEvacuated">Were employees evacuated?</label>
                <input type="checkbox" name="wereEmployeesEvacuated" onChange={(e) => handleChanges(e)} />

                <label htmlFor="wasPublicEvacuated">Was the general public evacuated?</label>
                <input type="checkbox" name="wasPublicEvacuated" onChange={(e) => handleChanges(e)} />
            </form>
            <h2>Investigation Information</h2>
            <form>
                <label htmlFor="reportURL">Link to Investigation Report</label>
                <input type="url" name="reportURL" onChange={(e) => handleChanges(e)} />
            </form>
            <button onClick={submit} disabled={
                !values.companyName || !values.facilityCity || !values.facilityState || 
                !values.wasFatality || !values.wasSeriousInjury || !values.wasSubstantialPropertyDamage
            }>
                Submit Report
            </button>
        </div>
    );

};