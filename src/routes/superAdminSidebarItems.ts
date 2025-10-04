import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const superAdminSidebarItems: ISidebarItem[] = [
    {
        title: "Parcels",
        items: [
            {
                title: "Parcels Statistics",
                url: "analytics",
                component: Analytics,
            },
        ],
    },
];
