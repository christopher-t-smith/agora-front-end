import React from 'react'
import { TextField } from '@mui/material';
import {Button} from '@mui/material'

function Form() {
    return (
        <div>

            <form>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Feed Title"
                    name="title"
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
                    autoComplete="imgURL"
                    autoFocus
                />
                <br />

                <Button variant="contained" color="primary" fullWidth>
                    Submit Post
                </Button>
            </form>

        </div>
    );
}

export default Form;
