"use client";
import { useGetDummyCall } from "@/api-client/dummy-service/useGetDummy";
import { LoadingWrapper } from "@/components/common/loading-wrappers/LoadingWrapper";
import { Paper, Typography } from "@mui/material";

export const DummyCard = () => {
  const { data, isLoading, error } = useGetDummyCall();
  return (
    <LoadingWrapper isLoading={isLoading} isError={error} data={data}>
      <DummyData data={data} />
    </LoadingWrapper>
  );
};
const DummyData = ({ data }) => {
  return (
    <Paper style={{ padding: 10 }} elevation={2}>
      <Typography>Name: {data.title}</Typography>
    </Paper>
  );
};
