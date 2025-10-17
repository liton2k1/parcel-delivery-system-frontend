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
  document: {
    label: "Document",
    color: "var(--chart-1)",
  },
  package: {
    label: "Package",
    color: "var(--chart-2)",
  },
  fragile: {
    label: "Fragile",
    color: "var(--chart-3)",
  },
  electronics: {
    label: "Electronics",
    color: "var(--chart-4)",
  },
};

// Parcel type colors using consistent color system
const PARCEL_TYPE_COLORS = {
  document: "#3b82f6", // blue-500
  package: "#10b981", // emerald-500
  fragile: "#f59e0b", // amber-500
  electronics: "#8b5cf6", // violet-500
};

interface ChartDataItem {
  _id: string;
  count: number;
  fill: string;
}

interface AnalyticsData {
  parcelPerType?: Array<{
    _id: string;
    count: number;
  }>;
}

interface TypePieChartProps {
  data?: AnalyticsData;
}

function TypePieChart({ data }: TypePieChartProps) {
  const chartData: ChartDataItem[] = [
    {
      _id: "document",
      count:
        data?.parcelPerType?.find((item) => item._id === "document")?.count ||
        0,
      fill: PARCEL_TYPE_COLORS.document,
    },
    {
      _id: "package",
      count:
        data?.parcelPerType?.find((item) => item._id === "package")?.count || 0,
      fill: PARCEL_TYPE_COLORS.package,
    },
    {
      _id: "fragile",
      count:
        data?.parcelPerType?.find((item) => item._id === "fragile")?.count || 0,
      fill: PARCEL_TYPE_COLORS.fragile,
    },
    {
      _id: "electronics",
      count:
        data?.parcelPerType?.find((item) => item._id === "electronics")
          ?.count || 0,
      fill: PARCEL_TYPE_COLORS.electronics,
    },
  ].filter((item) => item.count > 0);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Parcel Type Distribution
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Breakdown of parcels by type category
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

export default TypePieChart;
