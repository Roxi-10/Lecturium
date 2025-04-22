"use client";
import { useGetPricing } from "@/api-client/pricing-service/useGetPricing";
import { PricingCard } from "@/components/pricing/PricingCard";
import { LoadingWrapper } from "@/components/common/loading-wrappers/LoadingWrapper";
import { Stack } from "@mui/material";

export const RenderPricing = ()=>{
  const { data, isLoading, error } = useGetPricing();

  return (
    <LoadingWrapper data={data} isLoading={isLoading} isError={error}>
      <PricingList data={data} />
    </LoadingWrapper>
  );
}


const PricingList = ({ data }) => {
  return (
    <Stack  direction={{ xs: 'row', sm: 'column' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
      {data.map((priceItem) => (
        <PricingCard key={priceItem.id} priceItem={priceItem} />
      ))}
    </Stack>
  );
};
