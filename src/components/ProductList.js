import React from "react";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button className="button is-danger"
              onClick={() => {
                deleteProduct(product.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
