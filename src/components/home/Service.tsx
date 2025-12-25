import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Package, Shield, Zap } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Same-day delivery for urgent parcels within your city",
      gradient: "from-[#FF2056] to-[#FF4070]",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Reliable delivery to over 120 countries worldwide",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: Package,
      title: "Standard Delivery",
      description: "Cost-effective shipping for everyday parcels",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Insurance and tracking for high-value items",
      gradient: "from-emerald-500 to-emerald-700",
    },
  ];
  return (
    <div className="container mx-auto px-5 mt-24">
      <div className="text-center mb-16">
        <div className="text-center mb-5">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border border-primary/20 rounded-full"
          >
            Our Services
          </Badge>
        </div>
        <h2 className="text-4xl font-bold text-center mb-3">
          Delivery Solutions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          From express deliveries to international shipping, we've got you
          covered
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="group relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border-gray-200 dark:border-gray-700 hover:border-[#FF2056]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden shadow-none"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            ></div>
            <CardHeader className="relative">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform `}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Service;
