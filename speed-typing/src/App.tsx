import React from "react";
import Navbar from "./components/Navbar";
import Solo from "./pages/Solo";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLobby from "./pages/MainLobby";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
      <Routes>
          <Route path="/solo" element={<Solo />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/lobby" element={<MainLobby />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
