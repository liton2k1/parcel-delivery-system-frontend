import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusHexColor } from "@/utils/getStatusColor";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis, Tooltip } from "recharts";

interface AnalyticsData {
  totalParcelByStatus?: Array<{
    _id: string;
    count: number;
  }>;
}

interface DeliveryStatusBarChartProps {
  data?: AnalyticsData;
}

export default function DeliveryStatusBarChart({
  data,
}: DeliveryStatusBarChartProps) {
  const chartData = [
    { _id: "Requested", count: data?.totalParcelByStatus?.find(i => i._id === "Requested")?.count || 0 },
    { _id: "Approved", count: data?.totalParcelByStatus?.find(i => i._id === "Approved")?.count || 0 },
    { _id: "Picked", count: data?.totalParcelByStatus?.find(i => i._id === "Picked")?.count || 0 },
    { _id: "Dispatched", count: data?.totalParcelByStatus?.find(i => i._id === "Dispatched")?.count || 0 },
    { _id: "In-Transit", count: data?.totalParcelByStatus?.find(i => i._id === "In-Transit")?.count || 0 },
    { _id: "Rescheduled", count: data?.totalParcelByStatus?.find(i => i._id === "Rescheduled")?.count || 0 },
    { _id: "Delivered", count: data?.totalParcelByStatus?.find(i => i._id === "Delivered")?.count || 0 },
    { _id: "Returned", count: data?.totalParcelByStatus?.find(i => i._id === "Returned")?.count || 0 },
    { _id: "Cancelled", count: data?.totalParcelByStatus?.find(i => i._id === "Cancelled")?.count || 0 },
    { _id: "Blocked", count: data?.totalParcelByStatus?.find(i => i._id === "Blocked")?.count || 0 },
    { _id: "Flagged", count: data?.totalParcelByStatus?.find(i => i._id === "Flagged")?.count || 0 },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Delivery Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[320px] w-full">
          <BarChart
            width={600}
            height={320}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis
              dataKey="_id"
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={70}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count">
              {chartData.map((entry) => (
                <Cell key={entry._id} fill={getStatusHexColor(entry._id)} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
}
