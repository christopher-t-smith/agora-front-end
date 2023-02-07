import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "./Card"; // import the card component
import Grid from '@mui/material/Grid';

const HomePageFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make a GET request to the endpoint to retrieve the posts
    axios
      .get('http://localhost:8000/api/posts')
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.error(err));
  }, []); // run only once on component mount

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
          <ActionAreaCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePageFeed;