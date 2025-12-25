import { Clock, Package, Shield, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Categories = () => {
  const categories = [
    {
      name: "Documents",
      icon: Package,
      count: "1,000+ daily",
      gradient: "from-cyan-500 to-cyan-600",
      lightGradient: "from-cyan-50 to-cyan-100",
      description: "Fast & secure document delivery",
    },
    {
      name: "E-commerce",
      icon: Truck,
      count: "5,000+ daily",
      gradient: "from-pink-500 to-pink-600",
      lightGradient: "from-pink-50 to-pink-100",
      description: "Reliable shipping for online stores",
    },
    {
      name: "Food & Perishables",
      icon: Clock,
      count: "500+ daily",
      gradient: "from-amber-500 to-amber-600",
      lightGradient: "from-amber-50 to-amber-100",
      description: "Temperature-controlled delivery",
    },
    {
      name: "Heavy Cargo",
      icon: Shield,
      count: "200+ daily",
      gradient: "from-indigo-500 to-indigo-600",
      lightGradient: "from-indigo-50 to-indigo-100",
      description: "Safe handling of large items",
    },
  ];

  return (
    <div className="mt-24 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border border-primary/20 rounded-full mb-4 px-4 py-1"
          >
            Our Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Delivery Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle all types of parcels with care
          </p>
        </div>

        {/* Categories Grid with Unique Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="relative bg-background border rounded-xl p-8 text-center">
                {/* Icon with Orbit Animation */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Rotating Ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-dashed bg-gradient-to-r ${category.gradient} opacity-20 animate-spin`}
                    style={{ animationDuration: "8s" }}
                  ></div>

                  {/* Icon Container */}
                  <div
                    className={`absolute inset-2 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Count Badge with Pulse */}
                <div>
                  <Badge
                    variant="secondary"
                    className={`bg-gradient-to-r ${category.lightGradient} text-black border-none rounded-full px-4 py-1 font-semibold`}
                  >
                    {category.count}
                  </Badge>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`mt-6 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${category.gradient} opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 p-5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-muted-foreground">
                All categories tracked in real-time
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
