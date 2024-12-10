import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/mockApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // React Query for fetching data
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Manage filters globally
  const [filters, setFilters] = React.useState({
    category: "",
    search: "",
    priceRange: { min: 0, max: Infinity },
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        loading: isLoading,
        filters,
        handleFilterChange,
        isError,
        refetch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
