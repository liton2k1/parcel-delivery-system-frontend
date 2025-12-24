import DeliveryHistory from "@/pages/receiver/DeliveryHistory";
import IncomingParcels from "@/pages/receiver/IncomingParcels";
import Profile from "@/pages/receiver/Profile";
import type { ISidebarItem } from "@/types";
import { Package, UserCircle, History } from "lucide-react";

export const receiverSidebarItems: ISidebarItem[] = [
    {
        items: [
            {
                title: "Incoming Parcels",
                url: "me/incoming",
                component: IncomingParcels,
                icon: Package,
            },
            {
                title: "Delivery History",
                url: "me/history",
                component: DeliveryHistory,
                icon: History,
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
