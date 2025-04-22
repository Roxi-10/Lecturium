import { useMutation } from "@tanstack/react-query";
import { GET_PRICING } from "@/api-client/api-hosts";

// export const getPurchaseOptions = mutationOptions({
//   mutationFn: async ({ reqBody }) => {
//     const response = await fetch(GET_PRICING, {
//       method: "POST",
//       body: JSON.stringify(reqBody),
//     });
//
//     return response.json();
//   },
// });

export const usePurchase = () => {
  return useMutation({
    mutationFn: async ({ reqBody }) => {
      const response = await fetch(GET_PRICING, {
        method: "POST",
        body: JSON.stringify(reqBody),
      });

      return response.json();
    },
    mutationKey: ["purchase"],
  });
};
