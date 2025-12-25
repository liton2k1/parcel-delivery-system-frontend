import { Package, Rocket, Zap } from "lucide-react";
import img1 from "../../assets/parcel/parcel (1).jpg";
import img2 from "../../assets/parcel/parcel (2).jpg";
import img3 from "../../assets/parcel/parcel (3).jpg";
import img4 from "../../assets/parcel/parcel (4).jpg";
import img5 from "../../assets/parcel/parcel (5).jpg";
import img6 from "../../assets/parcel/parcel (6).jpg";
import { Badge } from "../ui/badge";

const images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
};

export default function About() {
  return (
    <div className="mt-24 py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <img
                src={images.img1}
                alt="Cargo ship delivery"
                className="rounded-xl object-cover w-full h-[200px] shadow-lg"
              />
              <img
                src={images.img2}
                alt="Truck delivery at night"
                className="rounded-xl object-cover w-full h-[320px] shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <img
                src={images.img3}
                alt="Bike courier delivery"
                className="rounded-xl object-cover w-full h-[220px] shadow-lg"
              />
              <img
                src={images.img4}
                alt="Logistics trucks"
                className="rounded-xl object-cover w-full h-[240px] shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <img
                src={images.img5}
                alt="Freight shipment"
                className="rounded-xl object-cover w-full h-[420px] shadow-lg"
              />
              <img
                src={images.img6}
                alt="Air cargo delivery"
                className="rounded-xl object-cover w-full h-[220px] shadow-lg"
              />
            </div>
          </div>

          <div>
            <div className="text-center mb-5">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border border-primary/20 rounded-full"
              >
                About Us
              </Badge>
            </div>
            <h2 className="text-4xl font-bold text-center mb-5">
              About Easy Parcel
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Easy Parcel is a technology-driven logistics and courier service
                providing reliable parcel delivery solutions for individuals,
                SMEs, and enterprises across Bangladesh.
              </p>

              <p>
                We specialize in parcel delivery, document courier services,
                bulk shipments, cash on delivery (COD), and enterprise logistics
                solutions with a commitment to speed, security, and customer
                satisfaction.
              </p>

              <p>
                Our nationwide coverage extends throughout Dhaka, surrounding
                areas, and all districts across Bangladesh, ensuring your
                parcels reach their destination safely and on time.
              </p>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Our Services
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Nationwide parcel delivery covering all districts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Document courier services for urgent deliveries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Bulk shipments for businesses and e-commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Cash on delivery (COD) with only 1% service charge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Enterprise logistics solutions tailored to your needs
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/5 rounded-lg border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">Regular</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/10 dark:to-green-500/5 rounded-lg border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">Express</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-500/10 dark:to-purple-500/5 rounded-lg border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">Super express</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
