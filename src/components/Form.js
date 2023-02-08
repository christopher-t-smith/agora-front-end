import React, { useState } from "react";
import { TextField, ButtonGroup, Button, Dialog } from "@mui/material";
import axios from "axios";
import GiphySearch from "./GiphySearch";

function Form() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [mediaOption, setMediaOption] = useState("image");
  const [mediaFile, setMediaFile] = useState(undefined);

  // Add a new state variable to control the open state of the Dialog component
  const [open, setOpen] = useState(false);

  // Handle the close event for the Dialog component
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mediaFile && mediaOption === "image") {
      return;
    }

    const newPost = {
      username,
      email,
      title,
      media: mediaOption === "giphy" ? { giphy: mediaFile } : { image: { filename: mediaFile.name, metadata: {} } },
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    const formData = new FormData();
    Object.keys(newPost).forEach((key) => {
      formData.append(key, newPost[key]);
    });

    console.log("formData: ", formData);

    try {
      const res = await axios.post("http://localhost:8000/api/posts", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      console.log(res.data);
      // Reset Form Inputs
      setTitle("");
      setBody("");
      setMediaFile("null");
      setTags("");
      window.location.replace(window.location.href);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMediaOptionChange = (e, value) => {
    setMediaOption(value);
    setMediaFile(undefined);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Feed Title"
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
          label="Feed Body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          autoComplete="body"
          autoFocus
        />
        <br />
        <ButtonGroup fullWidth>
          <Button
            variant={mediaOption === "image" ? "contained" : "outlined"}
            color="primary"
            value="image"
            onClick={(e) => handleMediaOptionChange(e, "image")}
          >
            Upload Image/GIF
          </Button>
          <Button
            variant={mediaOption === "giphy" ? "contained" : "outlined"}
            color="primary"
            value="giphy"
            onClick={(e) => handleMediaOptionChange(e, "giphy")}
          >
            Giphy Search
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <GiphySearch />
          </Dialog>
        </ButtonGroup>
        {mediaOption === "giphy" && <GiphySearch />}
        <input
          type="file"
          style={{ display: mediaOption === "image" ? "block" : "none" }}
          onChange={(e) => setMediaFile(e.target.files[0])}
        />
        <br />
        <TextField
          margin="normal"
          fullWidth
          id="tags"
          label="Tags (comma-separated)"
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
