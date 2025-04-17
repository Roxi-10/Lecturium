import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import { NextAppProvider } from "@toolpad/core/nextjs";

const demoTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Navigation = [
  {
    kind: "header",
    title: "Main items"
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    segment: "page-2/page4",
    title: "Page 2",
    icon: <TimelineIcon />
  }
];

export const DashboardLayoutProvider = ({ children }) => {
  return (
    <NextAppProvider theme={demoTheme} navigation={Navigation} branding={{
      logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
      title: "MUI",
      homeUrl: "/toolpad/core/introduction"
    }}>
      {...children}
    </NextAppProvider>
  );
};
