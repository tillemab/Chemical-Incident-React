import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitSignout } from '../actions/authActions';

export default function Header() {

    const dispatch = useDispatch();
    const signedIn = useSelector((state) => state.auth.loggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const signout = () => dispatch(submitSignout());

    return (
        <div className="navbar">
            <a href="/#/" className="navbar-title">Chemical Incidents</a>
            <div className="navbar-options">
                {<a href="/#/" className="navbar-option">Dashboard</a>}
                {signedIn && <a href="/#/report" className="navbar-option">Report an Incident</a>}
                {isAdmin && <a href="/#/admin" className="navbar-option">Verify an Incident</a>}
                {!signedIn && <a href="/#/signin" className="navbar-option">Sign In</a>}
                {signedIn && <a onClick={signout} href="/#/signin" className="navbar-option">Sign Out</a>}
            </div>
        </div>
    );
};