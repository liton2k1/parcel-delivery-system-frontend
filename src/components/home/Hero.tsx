"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Badge,
  Package,
  Truck,
  CheckCircle,
  CalendarX,
} from "lucide-react";
import { NavLink } from "react-router";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b to-secondary py-20">
      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#FF2056] opacity-10 dark:opacity-20 blur-3xl rounded-full"></div>
        {/* <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600 opacity-10 dark:opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600 opacity-5 dark:opacity-10 blur-3xl rounded-full"></div> */}
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <Badge className="text-[#FF2056] border-[#FF2056]/20 mx-auto lg:mx-0">
              ⚡ Trusted by 2M+ Customers Worldwide
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Lightning Fast
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2056] via-[#FF4070] to-[#FF6090] bg-clip-text text-transparent">
                Global Delivery
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Send parcels anywhere, anytime with real-time tracking and
              industry-leading delivery speeds. Your trust, our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink to="/login">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                  Start Shipping
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <NavLink to="/track-parcel">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  Track Parcel
                </Button>
              </NavLink>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-gray-800 dark:text-white">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">50M+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Deliveries
                </div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">120+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Countries
                </div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">99.2%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  On-Time
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Delivery Process */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2056]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                How Delivery Works 🚚
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF2056] to-[#FF4070] text-white shadow-lg shrink-0">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                      Requested → Approved → Picked
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your parcel request is placed, verified, and picked up
                      from your location.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shrink-0">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                      Dispatched → In-Transit → Rescheduled
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The parcel moves through our secure logistics network.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg shrink-0">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                      Delivered
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your parcel is delivered successfully with proof of
                      delivery.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-lg shrink-0">
                    <CalendarX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                      Returned / Cancelled / Flagged
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      In rare cases, parcels may be returned, cancelled, or
                      flagged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
