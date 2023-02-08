import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "./Card";
import Grid from '@mui/material/Grid';
import { CardContent, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';



const ProfilePageFeed = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const email = localStorage.getItem("email");
  // const [showForm, setShowForm] = useState(false);

  const username = localStorage.getItem('username');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [gifSearch, setGifSearch] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/posts')
      .then((res) => {
        const filteredPosts = res.data.posts.filter((post) => post.email === email);
        setPosts(filteredPosts);
      })
      .catch((err) => console.error(err));
  }, [email]);


  const handleEdit = (id) => {
    console.log(title)
    console.log(id)

    axios
      .put(`http://localhost:8000/api/posts/${id}`, {
        title: title,
        body: body,
        image: image,
        tags: tags
      })
      .then((res) => {
        setPosts({ title, body, image, tags })
        window.location.replace(window.location.href)
      })
      .catch((err) => console.log(err))
  };


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/posts/${id}`)
      .then((res) => {
        console.log("Feed deleted successfully")
        window.location.reload(true)
      });
  };


  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>

            <ActionAreaCard post={post} />
            <Button variant="contained" color="primary" fullWidth onClick={() => setFormOpen(true)}> Edit Post </Button>
            <Button id="#update-button" variant="contained" color="secondary" fullWidth onClick={() => handleDelete(post._id)}>  Delete Post   </Button>

            <Dialog fullWidth maxWidth='sm' open={formOpen} onClose={() => setFormOpen(false)}>
              <form onSubmit={() => handleEdit(post._id)}>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Feed Title"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  autoComplete="Title"
                  autoFocus
                />
                <br />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="body"
                  label="Feed Body"
                  name="body"
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  autoComplete="body"
                  autoFocus
                />
                <br />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="imgURL"
                  label="GIF/IMG URL"
                  name="imgURL"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  autoComplete="imgURL"
                  autoFocus
                />
                <br />
                <TextField
                  margin="normal"
                  fullWidth
                  id="tags"
                  label="Tags (comma-separated)"
                  name="tags"
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                  autoComplete="tags"
                  autoFocus
                />
                <br />
                <Button variant="contained" color="primary" fullWidth onClick={() => handleEdit(post._id)}>
                  Submit Post
                </Button>
              </form>
            </Dialog>



          </CardContent>


        </Grid>
      ))}

    </Grid>


  );
};

export default ProfilePageFeed;