import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'


function Navbar() {
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue)
    }

    return (

        <div>
            <Tabs
                value={selectedMenu}
                onChange={handleChange} centered
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab value="feeds" label="Feeds" to='/' component={Link} />
                <Tab value="profile" label="profile" to='/Profile' component={Link} />
                <Tab value="about" label="About" to='/About' component={Link} />
            </Tabs>

        </div>
    );
}

export default Navbar;
