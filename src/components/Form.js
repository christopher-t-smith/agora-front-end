import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import axios from 'axios';

function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [gifSearch, setGifSearch] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title,
            media: {
                image,
                gifSearch
            },
            body,
            tags: tags.split(',').map(tag => tag.trim())
        };

        try {
            const res = await axios.post('http://localhost:8000/api/posts', newPost, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
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
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                    Submit Post
                </Button>
            </form>
        </div>
    );
}

export default Form;
