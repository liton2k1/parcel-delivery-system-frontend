import Analytics from "@/pages/sender/Analytics";
import Profile from "@/pages/sender/Profile";
import type { ISidebarItem } from "@/types";
import { BarChart3, Package, UserCircle } from "lucide-react";
import { lazy } from "react";

const MyParcels = lazy(() => import("@/pages/sender/MyParcels"));

export const senderSidebarItems: ISidebarItem[] = [
  {
    items: [
      {
        title: "Parcels Analytics",
        url: "analytics",
        component: Analytics,
        icon: BarChart3,
      },
      {
        title: "My Parcels",
        url: "me",
        component: MyParcels,
        icon: Package,
      },
      {
        title: "My Profile",
        url: "my-profile",
        component: Profile,
        icon: UserCircle,
      },
      // {
      //   title: "Status",
      //   url: ":id/status-log",
      //   component: ParcelStatus,
      // },
    ],
  },
];
