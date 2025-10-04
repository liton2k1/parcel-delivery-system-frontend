import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BoxIcon, CheckCircle, Clock, Truck } from "lucide-react";

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
  // Extract counts from your API data
  const total = data?.totalParcel;

  const delivered =
    data?.totalParcelByStatus?.find(
      (item: StatusCount) => item._id === "Delivered"
    )?.count || 0;
  const inTransit =
    data?.totalParcelByStatus?.find(
      (item: StatusCount) => item._id === "In-Transit"
    )?.count || 0;
  const requested =
    data?.totalParcelByStatus?.find(
      (item: StatusCount) => item._id === "Requested"
    )?.count || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="@container/card hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-blue-50 via-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:via-blue-950/30 dark:to-blue-900/20 hover:scale-[1.02] hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900 dark:hover:to-blue-800">
        <CardHeader>
          <CardDescription className="text-sm font-medium ">
            Total Parcels
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {total}
          </CardTitle>
          <CardAction className="p-2 rounded-lg bg-blue-100/80 dark:bg-blue-800/50 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors">
            <BoxIcon />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of total parcels in the system{" "}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-green-50 via-green-50/50 to-green-100/30 dark:from-green-950/50 dark:via-green-950/30 dark:to-green-900/20 hover:scale-[1.02] hover:from-green-100 hover:to-green-200 dark:hover:from-green-900 dark:hover:to-green-800">
        <CardHeader>
          <CardDescription className="text-sm font-medium ">
            Delivered
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {delivered}
          </CardTitle>
          <CardAction className="p-2 rounded-lg bg-green-100/80 dark:bg-green-800/50 hover:bg-green-200 dark:hover:bg-green-700 transition-colors">
            <CheckCircle />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels delivered{" "}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-orange-50 via-orange-50/50 to-orange-100/30 dark:from-orange-950/50 dark:via-orange-950/30 dark:to-orange-900/20 hover:scale-[1.02] hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-900 dark:hover:to-orange-800">
        <CardHeader>
          <CardDescription className="text-sm font-medium ">
            In-Transit
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {inTransit}
          </CardTitle>
          <CardAction className="p-2 rounded-lg bg-orange-100/80 dark:bg-orange-800/50 hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors">
            <Truck />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels in transit
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-purple-50 via-purple-50/50 to-purple-100/30 dark:from-purple-950/50 dark:via-purple-950/30 dark:to-purple-900/20 hover:scale-[1.02] hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-900 dark:hover:to-purple-800">
        <CardHeader>
          <CardDescription className="text-sm font-medium ">
            Requested
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {requested}
          </CardTitle>
          <CardAction className="p-2 rounded-lg bg-purple-100/80 dark:bg-purple-800/50 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors">
            <Clock />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels requested
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OverviewCards;
