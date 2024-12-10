import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products, loading, isError } = useContext(AppContext);

  // Find the specific product
  const product = products?.find((item) => item.id === parseInt(id));

  if (loading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container my-4" style={{ padding: "20px" }}>
      {product && (
        <>
          <h2>Product Details</h2>
          <div className="card" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">
                {product.description || "No description available"}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;
