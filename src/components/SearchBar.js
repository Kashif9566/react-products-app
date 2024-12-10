import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { handleFilterChange } = useContext(AppContext);

  const handleSearch = (e) => {
    handleFilterChange({ search: e.target.value });
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a product..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
