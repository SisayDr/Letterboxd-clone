import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Films from "./pages/Films";
import Film from "./pages/Film";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="films/(:id)" element={<Films />} />
        <Route path="film/:title" Component={Film} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
