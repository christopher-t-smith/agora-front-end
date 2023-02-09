import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "./Card";
import Grid from "@mui/material/Grid";
import { CardContent, Typography, TextField, Button } from "@mui/material";
import GiphySearch from "./GiphySearch";
import Dialog from "@mui/material/Dialog";

const ProfilePageFeed = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const email = localStorage.getItem("email");
  // const [showForm, setShowForm] = useState(false);

  localStorage.getItem("username");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const gifSearch = useState("");
  const [tags, setTags] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [open, setOpen] = useState(false);

  const handleGifSelect = (url) => {
    setSelectedGif(url);
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://agora-agora1.herokuapp.com/api/posts/")
      .then((res) => {
        const filteredPosts = res.data.posts.filter(
          (post) => post.email === email
        );
        setPosts(filteredPosts);
      })
      .catch((err) => console.error(err));
  }, [email]);

  const handleEdit = (id) => {
    console.log(title);
    console.log(id);

    axios
      .put(`https://agora-agora1.herokuapp.com/api/posts/${id}/`, {
        title: title,
        body: body,
        media: {
          gifSearch: selectedGif,
        },
        tags: tags.split(",").map((tag) => tag.trim()),
      })
      .then((res) => {
        setPosts({ title, body, gifSearch, tags });
        window.location.replace(window.location.href);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`https://agora-agora1.herokuapp.com/api/posts/${id}/`).then((res) => {
      console.log("Feed deleted successfully");
      window.location.reload(true);
    });
  };

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
          <CardContent>
            <ActionAreaCard post={post} />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setFormOpen(true)}
            >
              {" "}
              Edit Post{" "}
            </Button>
            <Button
              id="#update-button"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleDelete(post._id)}
            >
              {" "}
              Delete Post{" "}
            </Button>

            <Dialog
              fullWidth
              maxWidth="sm"
              open={formOpen}
              onClose={() => setFormOpen(false)}
            >
              <form onSubmit={() => handleEdit(post._id)}>
                <Typography variant="h4">Edit Post:</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoComplete="Title"
                  autoFocus
                />
                <br />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="body"
                  label="Body"
                  name="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  autoComplete="body"
                  autoFocus
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setOpen(true)}
                >
                  Find a Gif
                </Button>
                {selectedGif && (
                  <div>
                    <br />
                    Selected Gif URL: {selectedGif}
                  </div>
                )}
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <GiphySearch handleSelect={handleGifSelect} />
                </Dialog>

                <br />
                <TextField
                  margin="normal"
                  fullWidth
                  id="tags"
                  label="Tags (comma-separated)*"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  autoComplete="tags"
                  autoFocus
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleEdit(post._id)}
                >
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
