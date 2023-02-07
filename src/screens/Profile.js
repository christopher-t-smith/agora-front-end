import React from 'react'

import Form from '../components/Form';
import Footer from "../components/Footer"
import FeedLoginRequired from "../components/FeedLoginRequired"
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {

  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  function AfterLoginRendering() {
    if (!isLoading && !user) {return <FeedLoginRequired/>;}
    return (<div>
      <Form/>
    </div>);
  }
  
  
    return (
      <div>
        <h1>User profile page</h1>

        {AfterLoginRendering()}

        <Footer />

        </div>
    );
  }
  
  export default Profile;
  