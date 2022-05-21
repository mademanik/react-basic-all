import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 111 },
    { id: 2, title: "Product 2", price: 222 },
    { id: 3, title: "Product 3", price: 333 },
    { id: 4, title: "Product 4", price: 444 },
    { id: 5, title: "Product 5", price: 555 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [name, setName] = useState("Manik");

  useEffect(() => {
    console.log("Use Effect is Running");
  }, [name]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} deleteProduct={deleteProduct} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
