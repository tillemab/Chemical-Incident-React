import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitSignup } from '../actions/authActions';

export default function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const submit = () => {
        dispatch(submitSignup(values));
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" 
                onChange={(e) => handleChanges(e)} />

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter Username" name="username"
                onChange={(e) => handleChanges(e)} />

                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Enter Password" name="password"
                onChange={(e) => handleChanges(e)} />
            </form>
            <button onClick={submit} disabled={!values.email || !values.username || !values.password}>
                Create Account
            </button>
        </div>
    );

};