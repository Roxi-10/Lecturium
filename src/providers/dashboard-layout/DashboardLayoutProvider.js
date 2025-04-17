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
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "dummy-page",
        title: "Dummy Page",
      },
    ],
  },
  {
    segment: "page-2/page4",
    title: "Another page, will throw 404",
    icon: <TimelineIcon />,
  },
];

export const DashboardLayoutProvider = ({ children }) => {
  return (
    <NextAppProvider
      theme={demoTheme}
      navigation={Navigation}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "MUI",
        homeUrl: "/dashboard",
      }}
    >
      {...children}
    </NextAppProvider>
  );
};
