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
        ],
    },
];
