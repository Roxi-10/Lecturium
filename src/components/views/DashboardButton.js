"use client";
import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

export const DashboardButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <Button variant={"outlined"} onClick={handleClick}>
      Go To Dashboard
    </Button>
  );
};
