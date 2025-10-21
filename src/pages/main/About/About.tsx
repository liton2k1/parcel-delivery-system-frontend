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
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  const team = [
    { name: "Sarah Chen", role: "CEO & Founder", image: "👩‍💼" },
    { name: "Marcus Johnson", role: "Head of Operations", image: "👨‍💼" },
    { name: "Aisha Patel", role: "CTO", image: "👩‍💻" },
    { name: "David Kim", role: "Customer Success", image: "👨‍🏫" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ✅ Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* ✨ Gradient Background with Dark Mode Support */}
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
            Trusted by millions worldwide
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Delivering More Than Parcels
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to connect people and businesses across the globe
            with reliable, lightning-fast delivery services that you can trust.
          </p>

          {/* <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF2056] to-[#FF4070] hover:from-[#FF4070] hover:to-[#FF2056] text-white font-semibold shadow-lg shadow-[#FF2056]/30 border-0"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold bg-transparent border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
            >
              Learn More
            </Button>
          </div> */}
        </div>
      </section>

      {/* ✅ Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-[#FF2056] transition-all transform hover:-translate-y-1"
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

      {/* ✅ Service Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our values aren't just words on a wall—they're the foundation of
            every delivery we make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all hover:border-[#FF2056]"
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

      {/* ✅ Mission Section */}
      <section className="container mx-auto px-4 my-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            To revolutionize global parcel delivery by making it faster, safer,
            and more sustainable. We’re not just moving packages — we’re
            connecting people, businesses, and dreams across the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all">
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

            <Card className="hover:shadow-lg transition-all">
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

      {/* ✅ Team Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The passionate team behind your seamless delivery experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-lg transition-all group hover:border-[#FF2056]"
            >
              <CardContent className="p-6">
                <div className="bg-[#FF2056] w-28 h-28 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
