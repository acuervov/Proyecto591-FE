import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Views/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* para añadir nuevas rutas seguir modelo de arriba, en rutas solo se debe llamar a las views, no a componentes */}
    </Routes>
  );
}
