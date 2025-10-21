import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectSeparator } from "@/components/ui/select";
import { IParcelTrackData, IResponse } from "@/types";
import { getStatusColor } from "@/utils/getStatusColor";
import { format } from "date-fns";
import { Package } from "lucide-react";
import TimeLine from "./TimeLine";

const ParcelDetails = ({ data }: { data: IResponse<IParcelTrackData> }) => {
  const {
    trackingId,
    currentStatus,
    estimatedDelivery,
    deliveredAt,
    pickupAddress,
    deliveryAddress,
    statusLog,
  } = data.data || {};

  return (
    <section className="py-20 relative" id="parcel-details">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Parcel Details
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Tracking Information
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Parcel Info Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary" />
                  Parcel Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Tracking ID</p>
                  <p className="font-mono font-bold text-md">{trackingId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(currentStatus)}>
                    {currentStatus}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery
                  </p>
                  <p className="font-semibold">
                    {format(
                      new Date(estimatedDelivery).toLocaleDateString(),
                      "PP"
                    )}
                  </p>
                </div>
                {deliveredAt && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Delivered At
                    </p>
                    <p className="font-semibold">
                      {format(new Date(deliveredAt).toLocaleDateString(), "PP")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-card to-card/50 mt-6 text-sm">
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pickup Address
                  </p>
                  <p className="font-semibold">{pickupAddress}</p>
                </div>
                <SelectSeparator />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Delivery Address
                  </p>
                  <p className="font-semibold">{deliveryAddress}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <TimeLine statusLog={statusLog} />
        </div>
      </div>
    </section>
  );
};

export default ParcelDetails;
