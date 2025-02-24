import { Link } from "react-router-dom";  

const Navbar = () => {  
    return (  
        <nav className="navbar navbar-dark bg-dark p-3 d-flex justify-content-between">  
            <h1 className="navbar-brand">  
                <Link to="/" className="text-decoration-none text-light">MovieApp</Link>  
            </h1>  
            <div>  
                <Link className="btn btn-outline-light" to="/favorites">Favorites</Link>  
            </div>  
        </nav>  
    );  
};  

export default Navbar;