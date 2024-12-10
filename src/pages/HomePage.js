import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductList from "../components/ProductList";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const { filters, products, loading, isError } = useContext(AppContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  if (loading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  const filteredProducts = products.filter(
    (product) =>
      (!filters.category || product.category === filters.category) &&
      (!filters.search ||
        product.title.toLowerCase().includes(filters.search.toLowerCase())) &&
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
  );

  return (
    <div className="container my-4">
      <div className="row gx-3 gy-3">
        <div className="col-12 col-sm-4 col-md-3">
          <FilterSidebar categories={categories} />
        </div>
        <div className="col-12 col-sm-8 col-md-9">
          <SearchBar />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
