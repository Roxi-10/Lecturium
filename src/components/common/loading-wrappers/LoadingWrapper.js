export const LoadingWrapper = ({ isLoading, isError, children, data }) => {
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error {isError?.message}</div>;

  if (data) return children;
};
