import DeliveryHistory from "@/pages/receiver/DeliveryHistory";
import IncomingParcels from "@/pages/receiver/IncomingParcels";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Parcels",
        items: [
            {
                title: "Incoming Parcels",
                url: "me/incoming",
                component: IncomingParcels,
            },
            {
                title: "Delivery History",
                url: "me/history",
                component: DeliveryHistory,
            },
        ],
    },
];
