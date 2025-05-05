import React, { useState } from 'react';
import Signin from './signin';
import Signup from './signup';

export default function Authentication() {

    const [activeTab, setActiveTab] = useState('signin');

    const selectSignin = () => setActiveTab('signin');
    const selectSignup = () => setActiveTab('signup');

    return (
        <div>
            <div class="buttons">
                <button onClick={selectSignin} disabled={activeTab==='signin'} className="button">
                    Sign In
                </button>
                <button onClick={selectSignup} disabled={activeTab==='signup'} className="button">
                    Sign Up
                </button>
            </div>
            {activeTab === 'signin' && <Signin />}
            {activeTab === 'signup' && <Signup />}
        </div>
    );
};