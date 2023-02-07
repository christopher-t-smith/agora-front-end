import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from "./screens/HomePage"
import Profile from "./screens/Profile"
import About from './screens/About';
import { Container } from '@mui/system';



function App() {
  return (
    <div>
      <Container>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      </Container>





    </div>
  );
}

export default App;
