import Analytics from "@/pages/admin/Analytics";
import Users from "@/pages/admin/Users";
import ViewParcels from "@/pages/admin/ViewParcels";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
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
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "Manage Users",
        url: "all-users",
        component: Users,
      },
    ],
  },
];
