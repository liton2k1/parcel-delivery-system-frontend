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
import { Cell, Pie, PieChart } from "recharts";

const chartConfig = {
  count: {
    label: "Count",
  },
  standard: {
    label: "Standard",
    color: "var(--chart-1)",
  },
  express: {
    label: "Express",
    color: "var(--chart-2)",
  },
  same_day: {
    label: "Same Day",
    color: "var(--chart-3)",
  },
  overnight: {
    label: "Overnight",
    color: "var(--chart-4)",
  },
};

// Shipping type colors using consistent color system
const SHIPPING_TYPE_COLORS = {
  standard: "#64748b", // slate-500 - neutral
  express: "#3b82f6", // blue-500 - fast
  same_day: "#f59e0b", // amber-500 - urgent
  overnight: "#8b5cf6", // violet-500 - premium
};

interface ChartDataItem {
  _id: string;
  count: number;
  fill: string;
}

interface AnalyticsData {
  parcelPerShippingType?: Array<{
    _id: string;
    count: number;
  }>;
}

interface ShippingTypeChartProps {
  data?: AnalyticsData;
}

function ShippingTypeChart({ data }: ShippingTypeChartProps) {
  const chartData: ChartDataItem[] = [
    {
      _id: "standard",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "standard")
          ?.count || 0,
      fill: SHIPPING_TYPE_COLORS.standard,
    },
    {
      _id: "express",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "express")
          ?.count || 0,
      fill: SHIPPING_TYPE_COLORS.express,
    },
    {
      _id: "same_day",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "same_day")
          ?.count || 0,
      fill: SHIPPING_TYPE_COLORS.same_day,
    },
    {
      _id: "overnight",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "overnight")
          ?.count || 0,
      fill: SHIPPING_TYPE_COLORS.overnight,
    },
  ].filter((item) => item.count > 0);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Shipping Method Distribution
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Breakdown of parcels by shipping service type
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="_id"
              label
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={40}
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ShippingTypeChart;
