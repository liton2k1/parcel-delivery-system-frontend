import { Box, CheckCircle, Clock, Truck } from "lucide-react";

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

  const delivered =
    data?.totalParcelByStatus?.find((item) => item._id === "Delivered")?.count ||
    0;
  const inTransit =
    data?.totalParcelByStatus?.find((item) => item._id === "In-Transit")
      ?.count || 0;
  const requested =
    data?.totalParcelByStatus?.find((item) => item._id === "Requested")
      ?.count || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Parcels */}
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Total Parcels
              </p>
              <h3 className="text-3xl font-bold text-foreground tabular-nums">
                {total}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <Box className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t pt-4 border-border/50">
            Total parcels in system
          </p>
        </div>
      </div>

      {/* Delivered */}
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Delivered
              </p>
              <h3 className="text-3xl font-bold text-foreground tabular-nums">
                {delivered}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t pt-4 border-border/50">
            Successfully delivered
          </p>
        </div>
      </div>

      {/* In-Transit */}
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                In-Transit
              </p>
              <h3 className="text-3xl font-bold text-foreground tabular-nums">
                {inTransit}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t pt-4 border-border/50">
            Currently in transit
          </p>
        </div>
      </div>

      {/* Requested */}
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Requested
              </p>
              <h3 className="text-3xl font-bold text-foreground tabular-nums">
                {requested}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t pt-4 border-border/50">
            Pending requests
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCards;
