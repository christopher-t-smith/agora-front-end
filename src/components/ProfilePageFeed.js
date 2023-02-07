import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "./Card";
import Grid from '@mui/material/Grid';

const ProfilePageFeed = () => {
  const [posts, setPosts] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/posts')
      .then((res) => {
        const filteredPosts = res.data.posts.filter((post) => post.email === email);
        setPosts(filteredPosts);
      })
      .catch((err) => console.error(err));
  }, [email]);

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

export default ProfilePageFeed;