import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Auth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hàm đăng nhập bằng Email & Password
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  // Hàm đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError("Google login failed. Please try again.");
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Login to Movie App</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      {/* Form đăng nhập bằng Email & Password */}
      <form className="w-25" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          🔑 Login
        </button>
      </form>
      <p>OR</p>

      {/* Nút đăng nhập bằng Google */}
      <button onClick={handleGoogleLogin} className="btn btn-danger w-25">
         Login with Google
      </button>
    </div>
  );
};

export default Login;
