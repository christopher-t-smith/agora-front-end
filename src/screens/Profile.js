import Form from '../components/Form';
import Footer from "../components/Footer"
import FeedLoginRequired from "../components/FeedLoginRequired"
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePageFeed from '../components/ProfilePageFeed';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material'
import React, {useState} from 'react'


function Profile() {

  const [formOpen, setFormOpen] = useState(false);
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  function AfterLoginRendering() {
    if (!isLoading && !user) {return <FeedLoginRequired/>;}
    return (<div>
      <Button variant="contained" color="primary" fullWidth onClick={()=>setFormOpen(true)}> Create New Post </Button>

    </div>);
  }
  
  
    return (
      <div>
        <h1>User profile page</h1>
          <Dialog fullWidth maxWidth='sm' open={formOpen} onClose={() => setFormOpen(false)}>
          <Form/>
          </Dialog>
        {AfterLoginRendering()}
        <ProfilePageFeed/>
        <Footer />

        </div>
    );
  }
  
  export default Profile;
  