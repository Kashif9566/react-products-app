import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context/AppContext";
import { queryClient } from "./utils/queryClient";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
