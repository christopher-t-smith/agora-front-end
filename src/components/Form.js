import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import GiphySearch from "./GiphySearch";
import Dialog from "@mui/material/Dialog";

function Form() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [selectedGif, setSelectedGif] = useState(null);
  const [likes] = useState(0);
  const [open, setOpen] = useState(false);

  const handleGifSelect = (url) => {
    setSelectedGif(url);
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username,
      email,
      title,
      media: {
        gifSearch: selectedGif,
      },
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
      likes,
    };

    try {
      const res = await axios.post("http://localhost:8000/api/posts", newPost, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      // Reset Form Inputs
      setTitle("");
      setSelectedGif(null);
      setBody("");
      setTags("");
      window.location.replace(window.location.href);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Create a Post:</Typography>
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
          onClick={handleSubmit}
        >
          Submit Post
        </Button>
      </form>
    </div>
  );
}

export default Form;
