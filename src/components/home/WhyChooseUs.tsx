import { Clock, MapPin, Headphones } from "lucide-react";
import img from "../../assets/parcel/parcel (6).jpg";
import { Badge } from "../ui/badge";

const features = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We ensure fast and reliable parcel delivery across the country.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your parcel anytime with accurate real-time updates.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our support team is always available to assist you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" mt-24">
      <div className="container mx-auto px-5">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-center mb-5">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              Why Easy Parcel
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why You Choose Us
          </h2>
          <p className="text-muted-foreground">
            Trusted by businesses and individuals for fast, secure, and reliable
            courier services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={img}
              alt="Courier delivery"
              className="rounded-xl w-full"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-background p-5 rounded-lg border"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-pink-100 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
