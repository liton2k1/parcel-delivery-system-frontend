import Analytics from "@/pages/admin/Analytics";
import Users from "@/pages/admin/Users";
import ViewParcels from "@/pages/admin/Parcels";
import type { ISidebarItem } from "@/types";
import Profile from "@/pages/admin/Profile";
import DeliveredParcel from "@/pages/admin/DeliveredParcel";
import CancelledParcel from "@/pages/admin/CancelledParcel";

export const adminSidebarItems: ISidebarItem[] = [
  {
    items: [
      {
        title: "Parcels Analytics",
        url: "analytics",
        component: Analytics,
      },
      {
        title: "Manage Parcels",
        url: "parcels",
        component: ViewParcels,
      },
      {
        title: "Delivered Parcels",
        url: "delivered-parcel",
        component: DeliveredParcel,
      },
      {
        title: "Cancelled Parcels",
        url: "cancelled-parcels",
        component: CancelledParcel,
      },
      {
        title: "Manage Users",
        url: "all-users",
        component: Users,
      },
      {
        title: "My Profile",
        url: "profile",
        component: Profile,
      },
    ],
  },
];
