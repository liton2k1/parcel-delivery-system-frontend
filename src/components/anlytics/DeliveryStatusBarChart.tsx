import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatusHexColor } from "@/utils/getStatusColor";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

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
    {
      _id: "Requested",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Requested")?.count ||
        0,
    },
    {
      _id: "Approved",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Approved")?.count ||
        0,
    },
    {
      _id: "Picked",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Picked")?.count || 0,
    },
    {
      _id: "Dispatched",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Dispatched")?.count ||
        0,
    },
    {
      _id: "In-Transit",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "In-Transit")?.count ||
        0,
    },
    {
      _id: "Rescheduled",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Rescheduled")
          ?.count || 0,
    },
    {
      _id: "Delivered",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Delivered")?.count ||
        0,
    },
    {
      _id: "Returned",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Returned")?.count ||
        0,
    },
    {
      _id: "Cancelled",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Cancelled")?.count ||
        0,
    },
    {
      _id: "Blocked",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Blocked")?.count || 0,
    },
    {
      _id: "Flagged",
      count:
        data?.totalParcelByStatus?.find((i) => i._id === "Flagged")?.count || 0,
    },
  ];

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Delivery Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.3}
              />
              <XAxis
                dataKey="_id"
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                labelStyle={{
                  color: "hsl(var(--foreground))",
                }}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {chartData.map((entry) => (
                  <Cell key={entry._id} fill={getStatusHexColor(entry._id)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
