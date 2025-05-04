import React, { useState } from 'react';
import Signin from './signin';
import Signup from './signup';

export default function Authentication() {

    const [activeTab, setActiveTab] = useState('signin');

    const selectSignin = () => setActiveTab('signin');
    const selectSignup = () => setActiveTab('signup');

    return (
        <div>
            <button onClick={selectSignin} disabled={activeTab==='signin'}>
                Sign In As Existing User
            </button>
            <button onClick={selectSignup} disabled={activeTab==='signup'}>
                Create an Account
            </button>
            {activeTab === 'signin' && <Signin />}
            {activeTab === 'signup' && <Signup />}
        </div>
    );
};