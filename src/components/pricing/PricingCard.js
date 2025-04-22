import { Paper, Typography } from "@mui/material";

export const PricingCard = ({ priceItem }) => {
  return <Paper sx={{ flex: 1, p:1 }}>
    <Typography>{priceItem.title}</Typography>
    <Typography>{priceItem.price}{priceItem.currency}</Typography>
    <Typography>{priceItem.description}</Typography>
  </Paper>;
};
