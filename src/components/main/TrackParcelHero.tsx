import { Badge } from "@/components/ui/badge";
import TrackParcelForm from "./TrackParcelForm";

export interface ITrackParcelProps {
  isLoading: boolean;
}

const TrackParcelHero = ({ isLoading }: ITrackParcelProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background with Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2056] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4070] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6090] opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
          >
            Track Your Parcel
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Track Your
            <span className="block bg-gradient-to-r from-[#FF2056] via-[#FF4070] to-[#FF6090] bg-clip-text text-transparent">
              Parcel
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Enter your tracking number to get real-time updates on your parcel's
            journey
          </p>
        </div>
        <TrackParcelForm isLoading={isLoading} />
      </div>
    </section>
  );
}
export default TrackParcelHero;