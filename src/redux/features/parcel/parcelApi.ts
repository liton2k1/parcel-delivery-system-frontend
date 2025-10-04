import { baseApi } from "@/redux/api/baseApi";
import {
    IAnalyticsData,
    IParcel,
    IParcelParams,
    IParcelTrackData,
    IResponse,
} from "@/types";

export const parcelApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Sender
        createParcel: builder.mutation<IResponse<IParcel>, Partial<IParcel>>({
            query: (data) => ({
                url: "/parcels",
                method: "POST",
                data,
            }),
            invalidatesTags: ["SENDER", "RECEIVER", "PARCEL"],
        }),
        cancelParcel: builder.mutation<unknown, { id: string; note: string }>({
            query: ({ id, note }) => ({
                url: `/parcels/cancel/${id}`,
                method: "POST",
                data: { note },
            }),
            invalidatesTags: ["SENDER", "RECEIVER", "PARCEL"],
        }),
        deleteParcel: builder.mutation<unknown, string>({
            query: (id) => ({
                url: `/parcels/delete/${id}`,
                method: "POST",
            }),
            invalidatesTags: ["SENDER", "RECEIVER", "PARCEL"],
        }),
        getParcelStatusLog: builder.query<IResponse<IParcel>, string | undefined>({
            query: (id) => ({
                url: `/parcels/${id}/status-log`,
                method: "GET",
            }),
            providesTags: ["SENDER"],
        }),
        getSenderParcels: builder.query<IResponse<IParcel[]>, IParcelParams>({
            query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
                url: "/parcels/me",
                method: "GET",
                params: {
                    searchTerm: searchTerm,
                    page: page,
                    limit: limit,
                    sort: sort,
                    currentStatus: currentStatus,
                },
            }),
            providesTags: ["SENDER"],
        }),
        // Receiver
        getIncomingParcels: builder.query<IResponse<IParcel[]>, IParcelParams>({
            query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
                url: "/parcels/me/incoming",
                method: "GET",
                params: {
                    searchTerm: searchTerm,
                    page: page,
                    limit: limit,
                    sort: sort,
                    currentStatus: currentStatus,
                },
            }),
            providesTags: ["RECEIVER"],
        }),
        getReceiverParcelHistory: builder.query<
            IResponse<IParcel[]>,
            IParcelParams
        >({
            query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
                url: "/parcels/me/history",
                method: "GET",
                params: {
                    searchTerm: searchTerm,
                    page: page,
                    limit: limit,
                    sort: sort,
                    currentStatus: currentStatus,
                },
            }),
            providesTags: ["RECEIVER"],
        }),
        confirmParcelDelivery: builder.mutation<unknown, string>({
            query: (id) => ({
                url: `/parcels/confirm/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["RECEIVER", "PARCEL", "SENDER"],
        }),
        // admin
        getAllParcels: builder.query<IResponse<IParcel[]>, IParcelParams>({
            query: (params) => ({
                url: "/parcels",
                method: "GET",
                params,
            }),
            providesTags: ["PARCEL"],
        }),
        getParcelById: builder.query<IResponse<IParcel>, string | undefined>({
            query: (id) => ({
                url: `/parcels/${id}/details`,
                method: "GET",
            }),
            providesTags: ["PARCEL"],
        }),
        updateStatusAndPersonnel: builder.mutation<
            unknown,
            { id: string; data: Partial<IParcel> }
        >({
            query: ({ id, data }) => ({
                url: `/parcels/${id}/delivery-status`,
                method: "PATCH",
                data,
            }),
            invalidatesTags: ["PARCEL", "SENDER", "RECEIVER"],
        }),
        blockParcel: builder.mutation<
            unknown,
            { id: string; data: Partial<IParcel> }
        >({
            query: ({ id, data }) => ({
                url: `/parcels/${id}/block-status`,
                method: "PATCH",
                data,
            }),
            invalidatesTags: ["PARCEL", "SENDER", "RECEIVER"],
        }),
        adminCreateParcel: builder.mutation<IResponse<IParcel>, Partial<IParcel>>({
            query: (data) => ({
                url: "/parcels/create-parcel",
                method: "POST",
                data,
            }),
            invalidatesTags: ["PARCEL", "SENDER", "RECEIVER"],
        }),
        getParcelAnalytics: builder.query<IResponse<IAnalyticsData>, void>({
            query: () => ({
                url: "/stats/parcels",
                method: "GET",
            }),
            providesTags: ["PARCEL"],
        }),
        // public
        trackParcel: builder.query<IResponse<IParcelTrackData>, string>({
            query: (trackingId) => ({
                url: `/parcels/tracking/${trackingId}`,
                method: "GET",
            }),
            providesTags: ["PARCEL", "SENDER", "RECEIVER"],
        }),
    }),
});

export const {
    useCreateParcelMutation,
    useCancelParcelMutation,
    useDeleteParcelMutation,
    useGetSenderParcelsQuery,
    useGetParcelStatusLogQuery,
    useGetIncomingParcelsQuery,
    useGetReceiverParcelHistoryQuery,
    useTrackParcelQuery,
    useGetAllParcelsQuery,
    useAdminCreateParcelMutation,
    useGetParcelByIdQuery,
    useUpdateStatusAndPersonnelMutation,
    useBlockParcelMutation,
    useConfirmParcelDeliveryMutation,
    useGetParcelAnalyticsQuery,
} = parcelApi;
