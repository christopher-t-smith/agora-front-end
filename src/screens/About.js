import React from 'react'

import logo from '../assets/images/logo.png';
import agora from '../assets/images/agora.JPG';
import promisePic from '../assets/images/promise.png';
import { Grid } from '@mui/material';
import Footer from "../components/Footer"


function About() {
  return (
    <div>


      <div className="aboutTop">
 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <div class="home-font5">ABOUT PLATFORM</div> <div class="home-font6">NO DARAMAS, NO SOCIAL NETWORK FATIGUE</div>
   
          <p>Our mission is to welcome and cherish everyone to have fantastic moments sharing one’s creativities, but no negativities that can cause social network fatigue.</p>
                </Grid>
          <Grid item xs={6}>
            <img src={logo} alt="CJ" width="400" height="300" />
          </Grid>
        </Grid>
        <br/>  <hr></hr>   <br/><br/>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
          <img className="agoraPic" src={agora} alt="CJ" width="400" height="300" />
                </Grid>
          <Grid item xs={5}>
          <div class="home-font5">WHAT'S AGORA?</div> 
          <div class="home-font6">/ˈaɡərə/ a public open space used for assemblies and markets.</div>
          <p>The agora was a central public space in ancient Greek city-states. It is the best representation of a city-state's response to accommodate the social and political order of the polis. The literal meaning of the word "agora" is "gathering place" or "assembly".</p>
          </Grid>
        </Grid>
        <br/>  <hr></hr>   <br/><br/>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <div class="rule-font1">HOUSE RULES</div> 
          <div class="rule-font2">ONLY SHARE GOOD VIBES & CELEBERATE CREATIVITIES</div>
          <p>Cherish other people's good vibe. Spread Positivities. Not a place for keyboard worriers or haters. That's all! </p>
                </Grid>
          <Grid item xs={6}>
          <img className="promisePic" src={promisePic} alt="CJ" width="400" height="300" />
          </Grid>
        </Grid>





      </div>

    </div>



  );
}

export default About;
