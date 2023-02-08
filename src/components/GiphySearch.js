import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const GiphySearch = ({ open, handleClose, handleSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/giphy", {
        query,
      });
      setResults(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
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
      {results.map((result) => (
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