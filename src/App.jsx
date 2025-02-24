import Navbar from './components/Navbar'  
import Footer from './components/Footer'  
import Home from './pages/Home'  
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Routes, Route} from 'react-router-dom'

function App() {  
    return (  
        <>  
            <Navbar />  
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer />  
        </>  
    )  
}  

export default App;