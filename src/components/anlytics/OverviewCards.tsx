import { Box, CheckCircle, Clock, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatusCount {
  _id: string;
  count: number;
}

interface AnalyticsData {
  totalParcel?: number;
  totalParcelByStatus?: StatusCount[];
}

interface OverviewCardsProps {
  data?: AnalyticsData;
}

function OverviewCards({ data }: OverviewCardsProps) {
  const total = data?.totalParcel || 0;
  const delivered = data?.totalParcelByStatus?.find((item) => item._id === "Delivered")?.count || 0;
  const inTransit = data?.totalParcelByStatus?.find((item) => item._id === "In-Transit")?.count || 0;
  const requested = data?.totalParcelByStatus?.find((item) => item._id === "Requested")?.count || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Parcels */}
      <Card className="shadow-none bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-indigo-900 dark:text-indigo-100">
            Total Parcels
          </CardTitle>
          <div className="p-2 rounded-full bg-indigo-200 dark:bg-indigo-700">
            <Box className="h-5 w-5 text-indigo-600 dark:text-indigo-100" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-indigo-900 dark:text-indigo-100 tabular-nums">
            {total}
          </div>
          <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-2">
            Total parcels in system
          </p>
        </CardContent>
      </Card>

      {/* Delivered */}
      <Card className="shadow-none bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
            Delivered
          </CardTitle>
          <div className="p-2 rounded-full bg-emerald-200 dark:bg-emerald-700">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-100" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 tabular-nums">
            {delivered}
          </div>
          <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-2">
            Successfully delivered
          </p>
        </CardContent>
      </Card>

      {/* In-Transit */}
      <Card className="shadow-none bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-amber-900 dark:text-amber-100">
            In-Transit
          </CardTitle>
          <div className="p-2 rounded-full bg-amber-200 dark:bg-amber-700">
            <Truck className="h-5 w-5 text-amber-600 dark:text-amber-100" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-amber-900 dark:text-amber-100 tabular-nums">
            {inTransit}
          </div>
          <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
            Currently in transit
          </p>
        </CardContent>
      </Card>

      {/* Requested */}
      <Card className="shadow-none bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950 dark:to-rose-900 border-rose-200 dark:border-rose-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-rose-900 dark:text-rose-100">
            Requested
          </CardTitle>
          <div className="p-2 rounded-full bg-rose-200 dark:bg-rose-700">
            <Clock className="h-5 w-5 text-rose-600 dark:text-rose-100" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-rose-900 dark:text-rose-100 tabular-nums">
            {requested}
          </div>
          <p className="text-xs text-rose-700 dark:text-rose-300 mt-2">
            Pending requests
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default OverviewCards;