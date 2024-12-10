import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const FilterSidebar = ({ categories }) => {
  const { filters, handleFilterChange } = useContext(AppContext);

  const handleCategoryChange = (e) => {
    handleFilterChange({ category: e.target.value });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const updatedPriceRange = {
      ...filters.priceRange,
      [name]: parseFloat(value),
    };
    handleFilterChange({ priceRange: updatedPriceRange });
  };

  return (
    <div className="d-flex justify-content-center justify-content-sm-start">
      <div
        className="border p-3 rounded shadow-sm"
        style={{ maxWidth: "300px" }}
      >
        <h5 className="mb-3 text-center">Filters</h5>

        {/* Category Filter */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-3">
          <label className="form-label">Min Price</label>
          <input
            type="number"
            name="min"
            className="form-control"
            value={filters.priceRange.min}
            onChange={handlePriceChange}
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Max Price</label>
          <input
            type="number"
            name="max"
            className="form-control"
            value={filters.priceRange.max}
            onChange={handlePriceChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
