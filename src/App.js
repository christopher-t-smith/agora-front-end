import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from "./screens/HomePage"
import Profile from "./screens/Profile"
import About from './screens/About';
import { Container } from '@mui/system';
import Header from "./components/Header"
import Geolocation from "./components/Geolocation"
import ChatGPT from './components/ChatGPT';
import React, { useState } from 'react'
import SimpleDialog from '@mui/material/Dialog';



function App() {

  //Use state for ChatGPT
  const [dialogOpen, setDialogOpen] = useState(false);

  // Clear local storage on window close
  window.onbeforeunload = function () {
    localStorage.clear();
  }


  return (
    <div>
      <Header />

      <div class="bounce">
        <img className="chatImag" src="https://cdn-icons-png.flaticon.com/512/4233/4233813.png" alt="CJ" width="100" height="100" onClick={() => setDialogOpen(true)} />
      </div>
      <SimpleDialog fullWidth maxWidth='sm' open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <ChatGPT />
      </SimpleDialog>

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>

    {/* Background Animation */}
      <div class="area" >
        <ul class="circles">
          <li></li> <li></li> <li></li><li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
        </ul>
      </div >

    </div>
  );
}

export default App;
