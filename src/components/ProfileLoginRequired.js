import React from "react";
import loginrequired from "../assets/images/loginrequired.png";

function ProfileLoginRequired() {
  return (
    <div>
      <br /> <hr></hr> <br />
      <br />
      <div class="home-font5">LOGIN OR SIGN-UP REQUIRED</div>{" "}
      <div class="home-font6">
        BEFORE YOU CAN CREATE, VIEW, AND MODIFY ALL YOUR PERSONAL FEEDS
      </div>
      <img className="loginFeedImg" src={loginrequired} alt="CJ" />
    </div>
  );
}

export default ProfileLoginRequired;
