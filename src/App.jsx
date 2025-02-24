import Navbar from './components/Navbar'  
import Footer from './components/Footer'  
import Home from './pages/Home'  
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import MovieDetail from './pages/MovieDetail';

function App() {  
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode)=> !prevMode);
  };

    return (  
        <div className={isDarkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>  
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode}/>}/>
              <Route path="/movie/:id" element={<MovieDetail/>}/>
            </Routes>
            <Footer />  
        </div>
            
        
    )  
}  

export default App;