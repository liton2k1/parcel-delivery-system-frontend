import {
  CheckCircle,
  Clock,
  Globe,
  Headphones,
  Shield,
  Zap,
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
  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description:
        "Track your parcel every step of the way with live GPS updates",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Secure Delivery",
      description:
        "End-to-end insurance and signature confirmation for peace of mind",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Express Shipping",
      description: "Same-day and next-day delivery options available",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Deliver to over 200 countries worldwide",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="mt-24">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border border-primary/20 rounded-full mb-4 px-4 py-1"
          >
            Our Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for hassle-free deliveries
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div>
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop"
                alt="Parcel delivery service"
                className="rounded-2xl w-full lg:h-[500px] h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="shadow-none border bg-gradient-to-br from-background to-primary/5"
                >
                  <CardHeader className="space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Customer Support */}
          <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/5 rounded-xl border">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-bold mb-1">24/7</p>
            <p className="text-sm text-muted-foreground">Customer Support</p>
          </div>

          {/* On-Time Delivery */}
          <div className="text-center p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/10 dark:to-green-500/5 rounded-xl border">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-bold mb-1">99.8%</p>
            <p className="text-sm text-muted-foreground">On-Time Delivery</p>
          </div>

          {/* Global Partners */}
          <div className="text-center p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-500/10 dark:to-purple-500/5 rounded-xl border">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-bold mb-1">200+</p>
            <p className="text-sm text-muted-foreground">Global Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
