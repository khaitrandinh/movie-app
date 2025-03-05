import { useState } from "react";
import { auth } from "../Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset lỗi trước khi đăng ký
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Chuyển hướng về trang chủ sau khi đăng ký thành công
    } catch (error) {
      setError("Signup failed: " + error.message);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">Create an Account</h2>

      {/* Hiển thị thông báo lỗi nếu có */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form className="w-50 border p-4 rounded shadow bg-light" onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🚀 Sign Up
        </button>
      </form>

      <p className="mt-3">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Signup;
