import {
  Truck,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const linkClass = "transition-colors hover:text-[#FF2056]";

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#FF2056] to-[#FF4070] rounded-full p-2">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Easy Parcel
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              Fast, reliable, and secure parcel delivery worldwide.
            </p>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="/about" className={linkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className={linkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className={linkClass}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {/* Phone */}
              <li>
                <a
                  href="tel:+88038751356"
                  className="flex items-center gap-2 transition-colors hover:text-[#FF2056]"
                >
                  <Phone size={16} />
                  <span>+88038751356</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:litonmia2k1@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-[#FF2056]"
                >
                  <Mail size={16} />
                  <span>litonmia2k1@gmail.com</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/+8801732907620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#FF2056]"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Support</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/liton2k1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#FF2056] hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/liton2k1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#FF2056] hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/liton-mia-3212522a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#FF2056] hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://x.com/liton2k1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#FF2056] hover:text-white transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-500">
          <p>{new Date().getFullYear()} Easy Parcel | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
