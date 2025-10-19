import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#FF2056] to-[#FF4070] rounded-lg p-2 shadow-lg shadow-[#FF2056]/20">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Parcel.Com
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              Fast, reliable, and secure parcel delivery worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Express Delivery",
                "International Shipping",
                "Standard Delivery",
                "Business Solutions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FF2056] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {["About Us", "Careers", "Press", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FF2056] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Help Center",
                "Track Parcel",
                "Shipping Rates",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FF2056] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-500">
          <p>© 2025 Parcel.Com | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
