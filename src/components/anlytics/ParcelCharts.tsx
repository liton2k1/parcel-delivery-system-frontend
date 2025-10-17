import { IAnalyticsData } from "@/types";
import DeliveryStatusBarChart from "./DeliveryStatusBarChart";
import ShipmentBarChart from "./ShipmentBarChart";
import TypePieChart from "./TypePieChart";
import ShippingTypeChart from "./ShippingTypeChart";

interface ParcelChartsProps {
  data?: IAnalyticsData;
}

function ParcelCharts({ data }: ParcelChartsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <DeliveryStatusBarChart data={data} />
      {/* Bar Chart: shipment */}
      <ShipmentBarChart data={data} />
      {/* Pie Chart: Parcel Type */}
      <TypePieChart data={data} />
      {/* Pie Chart: Shipping Type */}
      <ShippingTypeChart data={data} />
    </div>
  );
}

export default ParcelCharts;
