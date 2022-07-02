import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./Components/homepage/Homepage";
import Info from "./Components/info/Info";
import Login from './Components/Login/Login';
import Map from "./Components/Map/Map";
import Nearby from "./Components/nearby/Nearby";
import Past from "./Components/past/Homepage";
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/info" element={<Info />} />
        <Route path="/map" element={<Map />} />
        <Route path="/past" element={<Past />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
