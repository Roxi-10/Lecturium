import { DashboardButton } from "@/components/views/DashboardButton";
import { RenderPricing } from "@/components/pricing/RenderPricing";

export default function Home() {
  return (
    <div>
      <DashboardButton />
      <RenderPricing />
    </div>
  );
}
