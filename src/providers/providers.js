"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/providers/react-query/getQueryClient";
import { MaterialUIProvider } from "@/providers/material-ui/MaterialUIProvider";
import { DashboardLayoutProvider } from "@/providers/dashboard-layout/DashboardLayoutProvider";

export default function Providers({ children }) {
  const queryClient = getQueryClient();

  return (
    <MaterialUIProvider>
      <QueryClientProvider client={queryClient}>
        <DashboardLayoutProvider> {children}</DashboardLayoutProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MaterialUIProvider>
  );
}
