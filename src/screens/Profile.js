import Form from '../components/Form';
import Geolocation from '../components/Geolocation';

import { useAuth0 } from "@auth0/auth0-react";
import ProfilePageFeed from '../components/ProfilePageFeed';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material'
import React, {useState} from 'react'
import ProfileLoginRequired from '../components/ProfileLoginRequired';
import profileFeed from '../assets/images/profileFeed.png';
import { Grid } from '@mui/material';





function Profile() {

  const [formOpen, setFormOpen] = useState(false);
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  function AfterLoginRendering() {
    if (!isLoading && !user) {return <ProfileLoginRequired/>;}
    return (<div>
          <br/><br/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <br/><br/><br/>
          <div class="home-font5">ULTIMATE PERSONAL SPACE</div> 
          <div class="home-font6">GOT SOMETHING TO SHARE? WANT TO EDIT YOUR POSTS? NEED TO DELETE ONE OF THEM? ALL THINGS IS HAPPENING HERE!</div>
          </Grid>
          <Grid item xs={6}>
          <img src={profileFeed} alt="CJ" width="400" height="300" />
          </Grid>
        </Grid>
        <br/>  <hr></hr>   <br/><br/>


        
        <Grid container>
          <Grid item xs={10}>
          <Button variant="contained" color="primary" fullWidth onClick={()=>setFormOpen(true)}> Create New Post </Button>
          </Grid>
        </Grid>

     

    </div>);
  }
  
  
    return (
      <div>
              <Geolocation />


          <Dialog fullWidth maxWidth='sm' open={formOpen} onClose={() => setFormOpen(false)}>
          <Form/>
          </Dialog>
        {AfterLoginRendering()}
        <ProfilePageFeed/>

        </div>
    );
  }
  
  export default Profile;
  