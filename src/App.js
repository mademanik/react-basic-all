import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductListJson";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
