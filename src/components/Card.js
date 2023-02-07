import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ActionAreaCard = ({ post }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
          <Typography variant="body2" color="text.secondary">
              {`${post.username}:`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            { post.media.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.media.image}
                  alt="Image"
                />
              )
            }
            { post.body && (
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              )
            }
            { post.tags && (
                <Typography variant="body2" color="text.secondary">
                  {post.tags.join(', ')}
                </Typography>
              )
            }
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
export default ActionAreaCard;