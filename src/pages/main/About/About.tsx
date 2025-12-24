"use client";

import {
  Package,
  Zap,
  Shield,
  Users,
  Clock,
  Globe,
  TrendingUp,
  Heart,
  Target,
  Rocket,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router";

const About = () => {
  const stats = [
    { label: "Parcels Delivered", value: "50M+", icon: Package },
    { label: "Countries Served", value: "120+", icon: Globe },
    { label: "Happy Customers", value: "2M+", icon: Users },
    { label: "On-Time Delivery", value: "99.2%", icon: Clock },
  ];

  const values = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Lightning-fast deliveries with optimized routing technology that gets your parcels where they need to be, faster than ever.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Your packages are protected with real-time tracking, insurance options, and secure handling protocols at every step.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "24/7 support team dedicated to ensuring your delivery experience is smooth, reliable, and stress-free.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Cutting-edge technology including AI routing, eco-friendly vehicles, and smart locker systems for your convenience.",
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
            Trusted by millions worldwide
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Delivering More Than Parcels
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to connect people and businesses across the globe
            with reliable, lightning-fast delivery services that you can trust.
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
          <h2 className="text-3xl font-bold mb-3">Trusted Worldwide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering reliable logistics solutions with proven performance and
            global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="hover:border-[#FF2056] transition-all transform hover:-translate-y-1 shadow-none"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#FF2056]" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section className="bg-muted/50 py-20 mt-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our values aren't just words on a wall—they're the foundation of
            every delivery we make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="shadow-none transition-all hover:border-[#FF2056]"
              >
                <CardHeader>
                  <div className="bg-[#FF2056]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-[#FF2056]" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-5 my-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            To revolutionize global parcel delivery by making it faster, safer,
            and more sustainable. We’re not just moving packages — we’re
            connecting people, businesses, and dreams across the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-none">
              <CardHeader>
                <div className="bg-[#FF2056]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-7 h-7 text-[#FF2056]" />
                </div>
                <CardTitle className="text-xl text-center">
                  Empower Global Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center leading-relaxed">
                  We aim to make the world feel smaller by bridging distances
                  with speed, trust, and technology.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardHeader>
                <div className="bg-[#FF2056]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-7 h-7 text-[#FF2056]" />
                </div>
                <CardTitle className="text-xl text-center">
                  Deliver With Purpose
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center leading-relaxed">
                  Every package we deliver carries trust, emotion, and purpose —
                  we make sure it arrives on time, every time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
