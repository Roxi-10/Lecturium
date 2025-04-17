import { CircularProgress, Typography } from "@mui/material";

export const LoadingWrapper = ({ isLoading, isError, children, data }) => {
  if (isLoading) return <CircularProgress/>;

  if (isError) return <Typography>Error {isError?.message}</Typography>;

  if (data) return children;
};
