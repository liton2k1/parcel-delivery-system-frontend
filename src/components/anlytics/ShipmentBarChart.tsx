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
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  created: {
    label: "Created",
    color: "#10b981",
  },
};

interface ChartDataItem {
  days: string;
  created: number;
}

interface AnalyticsData {
  parcelCreatedInLast7Days?: number;
  parcelCreatedInLast30Days?: number;
}

interface ShipmentBarChartProps {
  data?: AnalyticsData;
}

function ShipmentBarChart({ data }: ShipmentBarChartProps) {
  const chartData: ChartDataItem[] = [
    {
      days: "Last 7 Days",
      created: data?.parcelCreatedInLast7Days || 0,
    },
    {
      days: "Last 30 Days",
      created: data?.parcelCreatedInLast30Days || 0,
    },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Shipment Volume Trends
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Parcel creation comparison between recent and monthly periods
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.3}
            />
            <XAxis
              dataKey="days"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <YAxis
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="created"
              fill="var(--color-created)"
              radius={[4, 4, 0, 0]}
              barSize={40}
            >
              <LabelList
                position="top"
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

export default ShipmentBarChart;
