import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";

const GiphySearch = ({ handleSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.post("https://agora-agora1.herokuapp.com/api/giphy", {
        query,
      });
      setResults(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Typography variant="h5">Giphy Search:</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="giphy-search"
        label="Search for a Gif"
        name="giphy-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="giphy-search"
        autoFocus
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSearch}
      >
        Search
      </Button>
      {results && results.map((result) => (
        <img
          key={result.id}
          src={result.images.fixed_height.url}
          alt={result.title}
          onClick={() => {
            setSelectedGif(result.images.fixed_height.url);
            handleSelect(result.images.fixed_height.url);
          }}
          style={{
            border:
              selectedGif === result.images.fixed_height.url
                ? "3px solid blue"
                : "",
          }}
        />
      ))}
    </div>
  );
};

export default GiphySearch;
