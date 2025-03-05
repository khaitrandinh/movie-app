// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Genre from "./pages/Genre";
// import Favorites from "./pages/Favorites";
// import MovieDetail from "./pages/MovieDetail";
// import Test3 from "./pages/Test3";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp"
// import { AuthProvider } from "./context/AuthContext";

// const App = () => {
//   return (
//     <div>
//       <AuthProvider>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/search" element={<Home />} />  
//         <Route path="/genre" element={<Genre />} />
//         <Route path="/test3" element={<Test3 />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//         <Route path="/favorites" element={<Favorites />} />s
//       </Routes>
//       <Footer />
//     </AuthProvider>
      
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MovieDetail";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/SignUp"
import Favorite from "./pages/Favorites";
import PrivateRoute from "./components/PrivateRoute"

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favorite" element={<PrivateRoute><Favorite /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
