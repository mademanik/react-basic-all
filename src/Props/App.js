import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

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

  return (
    <>
      <Header />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </>
  );
}

export default App;
