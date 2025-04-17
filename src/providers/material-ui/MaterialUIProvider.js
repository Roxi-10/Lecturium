import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline } from "@mui/material";

export const MaterialUIProvider = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <CssBaseline />
        {children}
    </AppRouterCacheProvider>
  );
};
