import { Badge } from "@/components/ui/badge";
import TrackParcelForm from "./TrackParcelForm";

export interface ITrackParcelProps {
  isLoading: boolean;
}

const TrackParcelHero = ({ isLoading }: ITrackParcelProps) => {
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-[#FF2056]/5 to-secondary py-20">
        <div className="relative mx-auto px-5">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 rounded-full px-5 py-1"
            >
              Track Your Parcel
            </Badge>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
              Track Your <span className="text-[#FF2056]">Parcel</span>{" "}
              Instantly
            </h1>

            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enter your tracking number to get{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                real-time updates
              </span>{" "}
              on your parcel’s journey across Bangladesh.
            </p>
            <div>
              <TrackParcelForm isLoading={isLoading} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackParcelHero;
