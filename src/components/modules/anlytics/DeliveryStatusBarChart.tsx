import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getStatusHexColor } from "@/utils/getStatusColor";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--chart-5)",
  },
};

interface ChartDataItem {
  _id: string;
  count: number;
}

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
  const chartData: ChartDataItem[] = [
    {
      _id: "Requested",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Requested")
          ?.count || 0,
    },
    {
      _id: "Approved",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Approved")
          ?.count || 0,
    },
    {
      _id: "Picked",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Picked")
          ?.count || 0,
    },
    {
      _id: "Dispatched",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Dispatched")
          ?.count || 0,
    },
    {
      _id: "In-Transit",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "In-Transit")
          ?.count || 0,
    },
    {
      _id: "Rescheduled",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Rescheduled")
          ?.count || 0,
    },
    {
      _id: "Delivered",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Delivered")
          ?.count || 0,
    },
    {
      _id: "Returned",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Returned")
          ?.count || 0,
    },
    {
      _id: "Cancelled",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Cancelled")
          ?.count || 0,
    },
    {
      _id: "Blocked",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Blocked")
          ?.count || 0,
    },
    {
      _id: "Flagged",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Flagged")
          ?.count || 0,
    },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Delivery Status Distribution
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Parcel count by delivery status across all shipments
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -10,
              right: 20,
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              horizontal={false}
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.3}
            />
            <XAxis
              type="number"
              dataKey="count"
              hide
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="_id"
              type="category"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              width={120}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[0, 4, 4, 0]}
              barSize={20}
            >
              {chartData.map((entry) => (
                <Cell key={entry._id} fill={getStatusHexColor(entry._id)} />
              ))}
              <LabelList
                position="right"
                offset={12}
                className="fill-foreground font-medium"
                fontSize={12}
                formatter={(value: number) => value?.toLocaleString()}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
