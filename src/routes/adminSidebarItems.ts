import Analytics from "@/pages/admin/Analytics";
import Users from "@/pages/admin/Users";
import ViewParcels from "@/pages/admin/Parcels";
import Profile from "@/pages/admin/Profile";
import DeliveredParcel from "@/pages/admin/DeliveredParcel";
import CancelledParcel from "@/pages/admin/CancelledParcel";
import type { ISidebarItem } from "@/types";
import {
  BarChart3,
  Package,
  PackageCheck,
  PackageX,
  Users as UsersIcon,
  UserCircle,
} from "lucide-react";

export const adminSidebarItems: ISidebarItem[] = [
  {
    items: [
      {
        title: "Parcels Analytics",
        url: "analytics",
        component: Analytics,
        icon: BarChart3,
      },
      {
        title: "Manage Parcels",
        url: "parcels",
        component: ViewParcels,
        icon: Package,
      },
      {
        title: "Delivered Parcels",
        url: "delivered-parcel",
        component: DeliveredParcel,
        icon: PackageCheck,
      },
      {
        title: "Cancelled Parcels",
        url: "cancelled-parcel",
        component: CancelledParcel,
        icon: PackageX,
      },
      {
        title: "Manage Users",
        url: "all-users",
        component: Users,
        icon: UsersIcon,
      },
      {
        title: "My Profile",
        url: "profile",
        component: Profile,
        icon: UserCircle,
      },
    ],
  },
];