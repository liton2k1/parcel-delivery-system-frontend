import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#FF2056] to-[#FF4070] rounded-lg p-2 shadow-lg shadow-[#FF2056]/20">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Parcel.Com</span>
            </div>
            <p className="text-gray-500 text-sm">
              Fast, reliable, and secure parcel delivery worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Express Delivery
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                International Shipping
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Standard Delivery
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Business Solutions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Careers
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Press
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Track Parcel
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Shipping Rates
              </li>
              <li className="hover:text-[#FF2056] transition-colors cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 SwiftParcel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
