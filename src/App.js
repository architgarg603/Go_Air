import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Info from "./Components/info/Info";
import Login from './Components/Login/Login';
import Map from "./Components/Map/Map";
import Nearby from "./Components/nearby/Nearby";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
