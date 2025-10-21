import ParcelDetails from "@/components/main/ParcelDetails";
import TrackParcelHero from "@/components/main/TrackParcelHero";
import { parcelApi } from "@/redux/features/parcel/parcelApi";
import { useAppDispatch } from "@/redux/hooks";
import { IParcelTrackData, IResponse } from "@/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

function TrackParcel() {
  const [searchParams] = useSearchParams();

  const trackingId = searchParams.get("trackingId") || undefined;
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IResponse<IParcelTrackData> | null>(null);

  const [fetchState, setFetchState] = useState<{
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }>({
    isLoading: false,
    isError: false,
    errorMessage: "",
  });

  useEffect(() => {
    if (!trackingId) {
      setFetchState({ isLoading: false, isError: false, errorMessage: "" });
      setData(null);
      return;
    }
    setFetchState({ isLoading: true, isError: false, errorMessage: "" });
    const result = dispatch(
      parcelApi.endpoints.trackParcel.initiate(trackingId)
    ).unwrap();
    result
      .then((res) => {
        setFetchState({ isLoading: false, isError: false, errorMessage: "" });
        setData(res);
        setTimeout(() => {
          const parcelDetailsElement =
            document.getElementById("parcel-details");
          if (parcelDetailsElement) {
            parcelDetailsElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      })
      .catch((err) => {
        setFetchState({
          isLoading: false,
          isError: true,
          errorMessage: err.data.message,
        });
        toast.error(err.data.message || "Something went wrong");
      })
      .finally(() => {
        setFetchState({ isLoading: false, isError: false, errorMessage: "" });
      });
  }, [trackingId, dispatch]);

  return (
    <>
      <TrackParcelHero isLoading={fetchState.isLoading} />

      {!fetchState.isLoading && !fetchState.isError && data && (
        <ParcelDetails data={data} />
      )}
    </>
  );
}

export default TrackParcel;
