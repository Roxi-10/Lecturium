"use client";
import { useGetDummyCall } from "@/api-client/dummy-service/useGetDummy";
import { LoadingWrapper } from "@/components/common/loading-wrappers/LoadingWrapper";

export const DummyCard = () => {
  const { data, isLoading, error } = useGetDummyCall();
  return (
    <LoadingWrapper isLoading={isLoading} isError={error} data={data}>
      <DummyData data={data} />
    </LoadingWrapper>
  );
};
const DummyData = ({ data }) => {
  return <div>Name: {data.name}</div>;
};
