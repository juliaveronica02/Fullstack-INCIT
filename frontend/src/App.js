import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard"
import Product from "./components/product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
