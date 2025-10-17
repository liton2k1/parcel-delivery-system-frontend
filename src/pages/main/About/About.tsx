import {
  Package,
  Zap,
  Shield,
  Users,
  Clock,
  Globe,
  TrendingUp,
  Heart,
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary/80"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Trusted by millions worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delivering More Than Parcels
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We're on a mission to connect people and businesses across the
              globe with reliable, lightning-fast delivery services that you can
              trust.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-primary transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
          <Card>
            <CardContent className="p-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, our journey began with a simple observation:
                parcel delivery was stuck in the past. Long wait times, poor
                tracking, and inconsistent service were the norm. We knew there
                had to be a better way.
              </p>
              <p>
                Starting with a small fleet and big dreams, we leveraged
                cutting-edge technology and customer-first thinking to
                revolutionize the delivery experience. Today, we're proud to
                serve millions of customers across six continents, delivering
                everything from urgent documents to precious family heirlooms.
              </p>
              <p>
                Our success isn't measured just in parcels delivered, but in
                smiles created, businesses empowered, and connections
                strengthened. Every package tells a story, and we're honored to
                be part of yours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            What Drives Us
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our values aren't just words on a wall—they're the foundation of
            every delivery we make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all hover:border-primary"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
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

      {/* Team Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Meet Our Leadership
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The passionate team behind your seamless delivery experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-lg transition-all group hover:border-primary"
            >
              <CardContent className="p-6">
                <div className="bg-primary w-28 h-28 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust us with their most
            important deliveries.
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-lg">
            Start Shipping Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
