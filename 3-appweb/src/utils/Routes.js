import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { Context } from '../context/Context';
import Login from '../components/User/Login';
import Error from '../components/Layouts/Error';
import Home from '../components/Home/Home';

const Routes = () => {
    const { checkUser } = useContext(Context);
    return (
        <Router>
        {(checkUser().userId) !== null ? 
            <Home path="/" user={checkUser().userId}></Home>
            :
            <Login path="/" />
        }
        <Error default/>
    </Router>
    );
};

export default Routes;
