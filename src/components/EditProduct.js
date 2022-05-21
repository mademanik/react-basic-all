import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async () => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary mr-3">
              Update
            </button>
            <Link to="/" className="button is-danger">
              Batal
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
