import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  CheckCircle,
  Truck,
  Clock,
  Banknote,
  AlertTriangle,
} from "lucide-react";
import { useGetSenderParcelsQuery } from "@/redux/features/parcel/parcelApi";
import { ParcelStatus } from "@/types/sender";

const Analytics = () => {
  const { data, isLoading, isError } = useGetSenderParcelsQuery({
    page: 1,
    limit: 1000,
  });

  if (isLoading) return <Loading message="Loading analytics..." />;
  if (isError) return <Error />;

  const parcels = data?.data || [];

  // Counters
  const total = parcels.length;
  const delivered = parcels.filter(
    (p) => p.currentStatus === ParcelStatus.DELIVERED
  ).length;
  const inTransit = parcels.filter(
    (p) =>
      p.currentStatus === ParcelStatus.IN_TRANSIT ||
      p.currentStatus === ParcelStatus.DISPATCHED
  ).length;
  const pending = parcels.filter((p) =>
    [
      ParcelStatus.REQUESTED,
      ParcelStatus.APPROVED,
      ParcelStatus.PICKED,
      ParcelStatus.RESCHEDULED,
    ].includes(p.currentStatus)
  ).length;
  const cancelled = parcels.filter(
    (p) => p.currentStatus === ParcelStatus.CANCELLED
  ).length;
  const problematic = parcels.filter((p) =>
    [ParcelStatus.BLOCKED, ParcelStatus.FLAGGED].includes(p.currentStatus)
  ).length;

  // Financial
  const totalRevenue = parcels
    .filter((p) => p.isPaid)
    .reduce((sum, p) => sum + p.fee, 0);
  const unpaidAmount = parcels
    .filter((p) => !p.isPaid)
    .reduce((sum, p) => sum + p.fee, 0);

  return (
    <div className="container mx-auto p-5 space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Sender Analytics</h1>
        <p className="text-muted-foreground">
          Overview of your parcel activity & performance
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Parcels"
          value={total}
          icon={Package}
          bg="bg-blue-100 dark:bg-blue-800"
          iconBg="bg-blue-500 dark:bg-blue-600"
        />
        <StatCard
          title="Delivered"
          value={delivered}
          icon={CheckCircle}
          bg="bg-green-100 dark:bg-green-800"
          iconBg="bg-green-500 dark:bg-green-600"
        />
        <StatCard
          title="In Transit"
          value={inTransit}
          icon={Truck}
          bg="bg-yellow-100 dark:bg-yellow-800"
          iconBg="bg-yellow-500 dark:bg-yellow-600"
        />
        <StatCard
          title="Pending"
          value={pending}
          icon={Clock}
          bg="bg-purple-100 dark:bg-purple-800"
          iconBg="bg-purple-500 dark:bg-purple-600"
        />
      </div>

      {/* Finance */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="shadow-none bg-green-100 dark:bg-green-800">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              {totalRevenue.toLocaleString()} BDT
            </span>
            <div className="bg-green-500 rounded-full p-2 dark:bg-green-600">
              <Banknote className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none bg-red-100 dark:bg-red-800">
          <CardHeader>
            <CardTitle>Unpaid Amount</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              {unpaidAmount.toLocaleString()} BDT
            </span>
            <div className="bg-red-500 rounded-full p-2 dark:bg-red-600">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Breakdown */}
      <Card className="shadow-none bg-gray-100 dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Badge
            variant="outline"
            className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200"
          >
            Pending: {pending}
          </Badge>
          <Badge
            variant="outline"
            className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200"
          >
            In Transit: {inTransit}
          </Badge>
          <Badge
            variant="outline"
            className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
          >
            Delivered: {delivered}
          </Badge>
          <Badge
            variant="outline"
            className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200"
          >
            Cancelled: {cancelled}
          </Badge>
          <Badge
            variant="outline"
            className="bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100"
          >
            Problematic: {problematic}
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

/* Reusable card */
function StatCard({
  title,
  value,
  icon: Icon,
  bg,
  iconBg,
}: {
  title: string;
  value: number;
  icon: React.ElementType;
  bg: string;
  iconBg: string;
}) {
  return (
    <Card className={`shadow-none ${bg}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`p-2 rounded-full ${iconBg}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

export default Analytics;
