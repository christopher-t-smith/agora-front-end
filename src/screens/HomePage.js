import React from 'react'
import FeedLoginRequired from "../components/FeedLoginRequired"
import Footer from "../components/Footer"
import { useAuth0 } from "@auth0/auth0-react";
import HomePageFeed from '../components/HomePageFeed';

function HomePage() {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    function AfterLoginRendering() {
      if (!isLoading && !user) {return <FeedLoginRequired/>;}
      return (<div>

        <h2>After login succeeded & rendering other users' feeds</h2>
        <HomePageFeed />

      </div>);
    }
    


    return (

        <div>
            
            <h1>Welcome to Agora main homepage / feedpage!</h1>
            <h1>Some ads or public feeds from admin without logging in</h1>

            {AfterLoginRendering()}
        <Footer />
        </div>
    );
}

export default HomePage;
