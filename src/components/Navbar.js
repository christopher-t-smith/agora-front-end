import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';
import logo from '../assets/images/logo-black.png';


function Navbar() {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue)
    }

    // Store Username and Email in local storage
    if (!isLoading && user) {
        localStorage.setItem("username", user.name);
        localStorage.setItem("email", user.email);
      }

    return (

        <div>
            <div className="navbar">

            <Tabs 
                value={selectedMenu}
                onChange={handleChange} centered
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <img className="navLogo" src={logo} alt="CJ" width="70" height="50" /> 
                <Tab value="Feeds" label="Feeds" to='/' component={Link} />

                <Tab value="About" label="About" to='/About' component={Link} />
                {!isLoading && !user && (
                <button className = "button" onClick={()=> loginWithRedirect()}> <b>LOGIN OR SIGN-UP</b></button>
              )}
              {!isLoading && user && (
                <button className="button" onClick={()=> logout()}> <b>LOG OUT</b></button>
              )}

            <Tab value="Profile" label="Profile" to='/Profile' component={Link} />
                          </Tabs>

            </div>






        </div>
    );
}

export default Navbar;
