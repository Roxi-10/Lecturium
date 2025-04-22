import { Button, Paper, Typography } from "@mui/material";
import { usePurchase } from "@/api-client/pricing-service/usePurchase";

export const PricingCard = ({ priceItem }) => {
  return (
    <Paper sx={{ flex: 1, p: 1 }}>
      <Typography>{priceItem.title}</Typography>
      <Typography>
        {priceItem.price}
        {priceItem.currency}
      </Typography>
      <Typography>{priceItem.description}</Typography>
      <BuyNowButton priceItem={priceItem} />
    </Paper>
  );
};

const BuyNowButton = ({ priceItem }) => {
  const { mutate, isPending, isSuccess } = usePurchase();
  const buyNowHandler = () => {
    mutate(priceItem.id);
  };

  const LoadingButton = () => {
    if (isPending) {
      return <div>loading</div>;
    }
    return (
      <Button onClick={buyNowHandler} variant={"outlined"}>
        Buy now
      </Button>
    );
  };

  return <LoadingButton />;
};
