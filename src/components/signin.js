import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitSignin } from '../actions/authActions';

export default function Signin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const submit = () => {
        dispatch(submitSignin(values));
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Sign In</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" onChange={(e) => handleChanges(e)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" onChange={(e) => handleChanges(e)} />
            </form>
            <button onClick={submit} disabled={!values.email || !values.password}>
                Sign In
            </button>
        </div>
    );

};