"use client";
import {
  Package,
  Shield,
  Clock,
  CheckCircle,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/modules/home/Hero";
import Service from "@/components/modules/home/Service";

const Home = () => {
  const stats = [
    { value: "50M+", label: "Parcels Delivered", icon: Package },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "2M+", label: "Customers", icon: CheckCircle },
    { value: "99.2%", label: "On-Time", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      role: "Small Business Owner",
      content:
        "Switched to this service 6 months ago. My customers love the fast delivery and tracking!",
      rating: 5,
      avatar: "JL",
    },
    {
      name: "Michael Torres",
      role: "E-commerce Manager",
      content:
        "The tracking system is phenomenal. We always know exactly where our shipments are.",
      rating: 5,
      avatar: "MT",
    },
    {
      name: "Sarah Williams",
      role: "Individual Customer",
      content:
        "Best delivery service I've used. Professional, fast, and my packages always arrive safely.",
      rating: 5,
      avatar: "SW",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Stats Section */}
      <section className="bg-[#FF2056]/5 dark:bg-[#FF2056]/10 py-20 mb-24 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-4">
                  <stat.icon className="w-8 h-8 text-[#FF2056]" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Loved by Customers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border-gray-200 dark:border-gray-700 hover:border-[#FF2056]/50 transition-all"
            >
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF2056] text-[#FF2056]"
                    />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2056] to-[#FF4070] flex items-center justify-center text-white font-bold shadow-lg shadow-[#FF2056]/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 mb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2056]/10 via-purple-600/10 to-blue-600/10 dark:from-[#FF2056]/20 dark:via-purple-600/20 dark:to-blue-600/20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Ready to Ship Smarter?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Join 2 million+ customers who trust us with their deliveries. Get
            started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg font-bold px-8 bg-gradient-to-r from-[#FF2056] to-[#FF4070] hover:from-[#FF4070] hover:to-[#FF2056] text-white border-0 shadow-xl shadow-[#FF2056]/30"
            >
              Create Free Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-bold px-8 bg-transparent border-2 border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
