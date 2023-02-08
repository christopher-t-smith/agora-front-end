import React from 'react'
import logo from '../assets/images/logo.png';
import loginrequired from '../assets/images/loginrequired.png'

function FeedLoginRequired() {
    return (
      <div>

        <br/>  <hr></hr>   <br/><br/>

        <div class="home-font5">HELLO THERE!</div> <div class="home-font6">WOULD YOU LIKE TO SEE MORE AWESOME FEEDS? PLEASE LOGIN OR SIGN-UP VIA BUTTON AT THE TOP</div> 

      <img className = "loginFeedImg" src={loginrequired} alt="CJ"/>


      </div>
    );
  }
  
  export default FeedLoginRequired;