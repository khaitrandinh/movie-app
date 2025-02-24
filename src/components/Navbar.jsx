import { Link } from "react-router-dom";  

const Navbar = ({ isDarkMode, toggleTheme }) => {  
    return (  
        <nav className={`navbar ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} p-3 d-flex justify-content-between`}>  
            <h1 className="navbar-brand">  
                <Link to="/" className={`text-decoration-none ${isDarkMode ? "text-light" : "text-dark"}`}>MovieApp</Link>  
            </h1>  
            <button className="btn btn-outline-secondary" onClick={toggleTheme}>  
                {isDarkMode ? "Light Mode" : "Dark Mode"}  
            </button>  
        </nav>  
    );  
};  

export default Navbar;