import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container my-4">
      <div className="row gx-3 gy-4 justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
          >
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none text-dark w-100"
            >
              <div className="card product-card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
