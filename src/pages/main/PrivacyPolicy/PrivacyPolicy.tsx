import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#FF2056]/5 to-secondary py-20">
        <div className="container mx-auto px-5 text-center">
          <Badge
            variant="secondary"
            className="mb-5 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 rounded-full"
          >
            Trusted • Secure • Private Deliveries
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We respect your privacy. Your personal and shipment information is
            securely processed and never shared without consent.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <NavLink to="/login">
              <Button size="lg" className="cursor-pointer">
                Start Shipping
              </Button>
            </NavLink>
            <NavLink to="/track-parcel">
              <Button size="lg" variant="outline" className="cursor-pointer">
                Track Parcel
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5 my-20">
        <Card className="shadow-none">
          <CardContent className="space-y-8 pt-6">
            {/* Intro */}
            <section>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Easy Parcel values your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we
                collect, use, and safeguard your data when you use our parcel
                delivery services and website.
              </p>
            </section>

            <Separator />

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Personal details such as name, phone number, and email</li>
                <li>Delivery and pickup addresses</li>
                <li>Parcel details for shipment processing</li>
                <li>Payment-related information</li>
                <li>Usage data and device information</li>
              </ul>
            </section>

            <Separator />

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We use your information to provide and improve our services,
                process deliveries, communicate updates, ensure security, and
                comply with legal obligations.
              </p>
            </section>

            <Separator />

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We do not sell or rent your personal data. Information may be
                shared with trusted partners such as payment providers,
                logistics partners, or legal authorities when required.
              </p>
            </section>

            <Separator />

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                4. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your data from unauthorized access, alteration, or
                loss.
              </p>
            </section>

            <Separator />

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                5. Cookies & Tracking
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Easy Parcel may use cookies and similar technologies to enhance
                user experience, analyze traffic, and improve website
                performance.
              </p>
            </section>

            <Separator />

            {/* User Rights */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                6. Your Rights
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Access, update, or delete your personal data</li>
                <li>Request information about data usage</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <Separator />

            {/* Changes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <Separator />

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                8. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:support@easyparcel.com"
                  className="text-[#FF2056] hover:underline"
                >
                  litonmia2k1@gmail.com
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
