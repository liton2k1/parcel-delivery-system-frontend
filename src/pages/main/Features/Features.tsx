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
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

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
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#FF2056]/5 to-secondary py-20">
        <div className="container mx-auto px-5 text-center">
          <Badge
            variant="secondary"
            className="mb-5 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 rounded-full"
          >
            Fast, Reliable & Secure Delivery
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Parcel Delivery Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience hassle-free parcel delivery with real-time tracking,
            flexible scheduling, and nationwide coverage at competitive prices.
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

      {/* Stats Section */}
      <section className="container mx-auto px-5 mt-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Our Performance at a Glance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Measurable results that reflect our commitment to speed,
            reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="hover:border-primary transition-all transform hover:-translate-y-1 shadow-none"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
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
      <section>
        <div className="container mx-auto px-5 my-20">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything you need for a seamless parcel delivery experience, all
            in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="shadow-none transition-all hover:border-primary"
              >
                <CardHeader>
                  <div className="bg-pink-50 dark:bg-pink-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
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
