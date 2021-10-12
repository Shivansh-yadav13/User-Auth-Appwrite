import React, { useState } from 'react'
import api from '../../api/api';

import { useHistory, Link } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState();

    const userData = api.getAccount;
    try {
        setUserInfo(userData);
    } catch (event) {
        console.log(event.message);
    }

    const logUserOut = async (event) => {
        event.preventDefault();
        api.deleteCurrentSession();
        history.push('/login');
    };

    if (userInfo) {
        return (
            <>
            <p>USERNAME: {userInfo.name}</p>
            <p>EMAIL: {userInfo.email}</p>
            <button onClick={logUserOut}>Logout</button>
            </>
        );
    } else {
        return ( <h1>No User Logged In! <Link to="/login">Login</Link> </h1> );
    }
};

export default Home;