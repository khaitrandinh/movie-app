import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        {/* Logo thương hiệu */}
        <Link className="navbar-brand fw-bold" to="/">
          🎬 Movie App
        </Link>

        {/* Button Toggle Menu (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu chính */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">🏠 Home</Link>
            </li>

            {user ? (
              // Nếu đã đăng nhập, hiển thị dropdown menu
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  👤 {user.displayName || user.email}
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><Link className="dropdown-item" to="/profile">👤 Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              // Nếu chưa đăng nhập, hiển thị nút Login & Register
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/login">🔑 Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary" to="/signup">📝 Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
