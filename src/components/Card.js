import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

const ActionAreaCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const email = localStorage.getItem("email");

  useEffect(() => {
    // Get the state of the button from local storage
    const liked = JSON.parse(
      localStorage.getItem(`isLiked-${post._id}-${email}`) || "false"
    );
    setIsLiked(liked);
  }, [post._id, email]);

  const handleLike = (id) => {
    setIsLiked(!isLiked);
    // Set the state of the button in local storage
    localStorage.setItem(`isLiked-${id}-${email}`, JSON.stringify(!isLiked));

    axios
      .put(`http://localhost:8000/api/posts/${id}`, {
        likes: isLiked ? likes - 1 : likes + 1,
        email: post.email,
      })
      .then((res) => {
        setLikes(isLiked ? likes - 1 : likes + 1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {`${post.username}:`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          {post.media && post.media.gifSearch && (
            <CardMedia
              component="img"
              height="140"
              image={post.media.gifSearch}
              alt="GIF"
            />
          )}
          {post.body && (
            <Typography variant="body1" color="text.secondary">
              {post.body}
            </Typography>
          )}
          {post.tags && (
            <Typography variant="body2" color="text.secondary">
              {post.tags.join(", ")}
            </Typography>
          )}
          <div>
            <button onClick={() => handleLike(post._id)}>
              {isLiked ? "❤️" : "♡"} {likes}
            </button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ActionAreaCard;
