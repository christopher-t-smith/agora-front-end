import React from 'react'

import logo from '../assets/images/logo.png';
import { Grid } from '@mui/material';
import Footer from "../components/Footer"

function About() {
  return (
    <div>


      <div className="aboutTop">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <h1>About the Agora Page</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Grid>
          <Grid item xs={5}>
            <img src={logo} alt="CJ" width="500" height="400" />
          </Grid>
        </Grid>
      </div>


    <Footer /> 



    </div>



  );
}

export default About;
