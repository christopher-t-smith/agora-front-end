import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';


function Navbar() {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue)
    }

    return (

        <div>
            <div className="navbar">
            <Tabs 
                value={selectedMenu}
                onChange={handleChange} centered
                textColor="secondary"c
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab value="Feeds" label="Feeds" to='/' component={Link} />
                <Tab value="Profile" label="Profile" to='/Profile' component={Link} />
                <Tab value="About" label="About" to='/About' component={Link} />
                {!isLoading && !user && (
                <button className = "button" onClick={()=> loginWithRedirect()}> <b>LOGIN OR SIGN-UP</b></button>
              )}
              {!isLoading && user && (
                <button className="button" onClick={()=> logout()}> <b>LOG OUT</b></button>
              )}
                          </Tabs>

            </div>






        </div>
    );
}

export default Navbar;
