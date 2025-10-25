"use client";

import {
  Package,
  Zap,
  Users,
  Clock,
  Globe,
  TrendingUp,
  Heart,
  Target,
//   Rocket,
  Truck,
  MapPin,
  PhoneCall,
  Lock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const stats = [
    { label: "Daily Deliveries", value: "100K+", icon: Package },
    { label: "Delivery Network", value: "150+", icon: Globe },
    { label: "Active Users", value: "5M+", icon: Users },
    { label: "Customer Satisfaction", value: "98.5%", icon: Heart },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description:
        "Track your parcel in real-time with live GPS updates, estimated delivery time, and instant notifications at every checkpoint.",
    },
    {
      icon: Truck,
      title: "Same-Day Delivery",
      description:
        "Need it urgently? Our express same-day delivery service ensures your parcel reaches its destination within hours.",
    },
    {
      icon: Lock,
      title: "Secure Packaging",
      description:
        "Every parcel is handled with care using tamper-proof packaging, insurance coverage, and signature confirmation.",
    },
    {
      icon: PhoneCall,
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available round the clock via chat, phone, and email to assist you.",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Book a pickup in seconds through our mobile app or website. Schedule now or later at your convenience.",
    },
    {
      icon: Target,
      title: "Nationwide Coverage",
      description:
        "We deliver to every corner of the country, from major cities to remote villages, ensuring no destination is out of reach.",
    },
    {
      icon: Clock,
      title: "Time-Slot Delivery",
      description:
        "Choose your preferred delivery time slot and we'll be there. No more waiting around all day for your parcel.",
    },
    {
      icon: TrendingUp,
      title: "Business Solutions",
      description:
        "Tailored services for businesses including bulk shipping discounts, API integration, and dedicated account managers.",
    },
    // {
    //   icon: Rocket,
    //   title: "Express International",
    //   description:
    //     "Send parcels across borders with our international shipping service, complete with customs clearance support.",
    // },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Gradient Background with Dark Mode Support */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2056] opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4070] opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF2056] opacity-5 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge
            variant="secondary"
            className="mb-6 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 hover:bg-[#FF2056]/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
          >
            Fast, Reliable & Secure Delivery
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Parcel Delivery Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience hassle-free parcel delivery with real-time tracking, flexible scheduling, and nationwide coverage at competitive prices.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-pink-600 transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything you need for a seamless parcel delivery experience, all in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all hover:border-pink-600"
              >
                <CardHeader>
                  <div className="bg-pink-50 dark:bg-pink-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;