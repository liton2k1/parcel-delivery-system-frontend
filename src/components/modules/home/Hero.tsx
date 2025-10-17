import { Button } from "@/components/ui/button";
import { ArrowRight, Badge, CheckCircle, Clock, Package } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2056] opacity-10 dark:opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 opacity-10 dark:opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 opacity-5 dark:opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 hover:bg-[#FF2056]/20">
              ⚡ Trusted by 2M+ Customers Worldwide
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Lightning Fast
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2056] via-[#FF4070] to-[#FF6090] bg-clip-text text-transparent">
                Global Delivery
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Send parcels anywhere, anytime with real-time tracking and
              industry-leading delivery speeds. Your trust, our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF2056] to-[#FF4070] hover:from-[#FF4070] hover:to-[#FF2056] text-white text-lg font-semibold shadow-xl shadow-[#FF2056]/30 border-0"
              >
                Start Shipping
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold bg-transparent border-2 border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                Track Package
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 text-gray-800 dark:text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">50M+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Deliveries
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">120+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Countries
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.2%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  On-Time
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2056]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#FF2056] to-[#FF4070] rounded-2xl p-6 shadow-lg text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm opacity-80 mb-1">Tracking ID</div>
                      <div className="text-2xl font-bold">SW987654321</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2">
                      <Package className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 opacity-80" />
                    <span className="text-sm opacity-90">
                      Arriving Today, 3:00 PM
                    </span>
                  </div>
                </div>

                <div className="space-y-4 py-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Out for Delivery</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Today, 1:23 PM • Local Facility
                      </div>
                    </div>
                  </div>

                  {[
                    "At Distribution Center",
                    "In Transit",
                    "Package Picked Up",
                  ].map((label, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 ml-5 ${
                        i !== 2 ? "border-l-2" : ""
                      } border-gray-200 dark:border-gray-700 pl-4`}
                    >
                      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                      <div className="flex-1">
                        <div className="text-gray-600 dark:text-gray-400">
                          {label}
                        </div>
                        <div className="text-sm text-gray-400 dark:text-gray-600">
                          {i === 0
                            ? "Today, 9:15 AM"
                            : i === 1
                            ? "Yesterday, 6:42 PM"
                            : "Yesterday, 2:10 PM"}
                        </div>
                      </div>
                    </div>
                  ))}
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
