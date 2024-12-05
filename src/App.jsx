import React from "react";
import BlogPosts from "./Pages/Blogs/BlogPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/NavbarMenu";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPosts />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
