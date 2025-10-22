import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsData {
  parcelCreatedInLast7Days?: number;
  parcelCreatedInLast30Days?: number;
}

interface ShipmentComposedChartProps {
  data?: AnalyticsData;
}

export default function ShipmentComposedChart({ data }: ShipmentComposedChartProps) {
  const chartData = [
    {
      period: "Last 7 Days",
      created: data?.parcelCreatedInLast7Days || 0,
    },
    {
      period: "Last 30 Days",
      created: data?.parcelCreatedInLast30Days || 0,
    },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          Shipment Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip formatter={(value: number) => value.toLocaleString()} />
              <Legend />
              <Bar dataKey="created" barSize={40} fill="#10b981" radius={[6, 6, 0, 0]} />
              <Line type="monotone" dataKey="created" stroke="#047857" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
