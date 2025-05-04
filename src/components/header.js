import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { submitSignout } from '../actions/authActions';

export default function Header() {

    const dispatch = useDispatch();
    const signedIn = useSelector((state) => state.auth.loggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const signout = () => dispatch(submitSignout());

    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Chemical Incidents</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-options">
                    {<Nav.Link as={NavLink} to="/">Dashboard</Nav.Link>}
                    {signedIn && <Nav.Link as={NavLink} to="/report">Report an Incident</Nav.Link>}
                    {isAdmin && <Nav.Link as={NavLink} to="/admin">Verify an Incident</Nav.Link>}
                    {!signedIn && <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>}
                    {signedIn && <Nav.Link onClick={signout}>Sign Out</Nav.Link>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};