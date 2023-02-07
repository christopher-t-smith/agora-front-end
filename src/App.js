import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from "./screens/HomePage"
import Profile from "./screens/Profile"
import About from './screens/About';
import { Container } from '@mui/system';
import Header from "./components/Header"



function App() {
  return (
    <div>
      <Header />
      <Container>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/About" element={<About />}/>
      </Routes>


      
      </Container>

      
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >










    </div>
  );
}

export default App;
