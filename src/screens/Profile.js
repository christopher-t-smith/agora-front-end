import Form from "../components/Form";
import Geolocation from "../components/Geolocation";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePageFeed from "../components/ProfilePageFeed";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import React, { useState } from "react";
import ProfileLoginRequired from "../components/ProfileLoginRequired";
import profileFeed from "../assets/images/profileFeed.png";
import { Grid } from "@mui/material";

function Profile() {
  const [formOpen, setFormOpen] = useState(false);
  const { user, isLoading } = useAuth0();

  function AfterLoginRendering() {
    if (!isLoading && !user) {
      return <ProfileLoginRequired />;
    }
    return (
      <div>
        <br />
        <br />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className="profileHeader" item xs={5}>
            <br></br>
            <br></br>
            <div class="home-font5">ULTIMATE SPACE</div>
            <div class="home-font6">
              GOT SOMETHING TO SHARE? WANT TO EDIT YOUR POSTS? NEED TO DELETE
              ONE OF THEM?
            </div>
          </Grid>
          <Grid item xs={3}>
            <br></br>
            <br></br>
            <br></br>
            <img src={profileFeed} alt="CJ" width="240" height="180" />
          </Grid>
          <Grid item xs={4}>
            <Geolocation />
          </Grid>
        </Grid>
        <br /> <hr></hr> <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setFormOpen(true)}
        >
          {" "}
          Create New Post{" "}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={formOpen}
        onClose={() => setFormOpen(false)}
      >
        <Form />
      </Dialog>
      {AfterLoginRendering()}
      <ProfilePageFeed />
    </div>
  );
}

export default Profile;
