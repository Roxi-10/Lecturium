import { queryOptions, useQuery } from "@tanstack/react-query";
import { GET_PRICING } from "@/api-client/api-hosts";

export const getPricingOptions = queryOptions({
  queryKey: ["pricing-get"],
  queryFn: async () => {
    const response = await fetch(
      GET_PRICING,
    );

    return response.json();
  },
});

export const useGetPricing = () => {
  return useQuery(getPricingOptions);
};
