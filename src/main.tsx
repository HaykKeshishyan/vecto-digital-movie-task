import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient.ts";
import ErrorBoundary from "@/components/utils/ErrorBoundry.tsx";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary fallback={<div>Error</div>}>
      <App />
    </ErrorBoundary>
  </QueryClientProvider>,
);
