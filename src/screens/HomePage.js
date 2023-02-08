import React from 'react'
import FeedLoginRequired from "../components/FeedLoginRequired"
import Footer from "../components/Footer"
import { useAuth0 } from "@auth0/auth0-react";
import HomePageFeed from '../components/HomePageFeed';
import welcome from '../assets/images/welcome.png';
import { Grid } from '@mui/material';

function HomePage() {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    function AfterLoginRendering() {
      if (!isLoading && !user) {return <FeedLoginRequired/>;}
      return (<div>

<br/><br/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <br/><br/><br/>
          <div class="home-font5">TODAY'S AWESOME FEEDS</div> 
          <div class="home-font6">AGORA IS ALL ABOUT SPREADING THE POSITIVITIES</div>
          </Grid>
          <Grid item xs={6}>
          <img src={welcome} alt="CJ" width="400" height="250" />
          </Grid>
        </Grid>
        <br/>  <hr></hr>   <br/><br/>

        <HomePageFeed />

      </div>);
    }
    


    return (

        <div>
            
            {AfterLoginRendering()}

        </div>
    );
}

export default HomePage;
