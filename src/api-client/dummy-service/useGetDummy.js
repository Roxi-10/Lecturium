import { queryOptions, useQuery } from "@tanstack/react-query";

export const dummyCallOptions = queryOptions({
  queryKey: ["dummy-call"],
  queryFn: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    return response.json();
  },
});

export const useGetDummyCall = () => {
  return useQuery(dummyCallOptions);
};
