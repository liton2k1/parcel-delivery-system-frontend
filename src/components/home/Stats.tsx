import { Globe, Package, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  const impactData = [
    {
      value: "2M+",
      label: "Parcels Delivered",
      description: "Successfully delivered with care",
      icon: Package,
      gradient: "from-blue-500 to-blue-600",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      value: "50K+",
      label: "Happy Customers",
      description: "Trust us for their deliveries",
      icon: Users,
      gradient: "from-green-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.3)",
    },
    {
      value: "200+",
      label: "Countries Served",
      description: "Global reach and coverage",
      icon: Globe,
      gradient: "from-purple-500 to-purple-600",
      glowColor: "rgba(168, 85, 247, 0.3)",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Customer happiness score",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600",
      glowColor: "rgba(249, 115, 22, 0.3)",
    },
  ];

  return (
    <section className="py-20 mt-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border border-primary/20 rounded-full mb-6 px-5 py-2 text-sm font-semibold"
          >
            ✦ Our Impact
          </Badge>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
            Delivering Excellence<br />Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands of customers to deliver parcels safely, quickly, and reliably across the globe.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {impactData.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: item.glowColor }}
              ></div>
              
              {/* Main Content */}
              <div className="relative bg-background/80 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value with animated counter effect */}
                <div className={`text-6xl font-black mb-3 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent leading-none`}>
                  {item.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient} opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-20 flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-full">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Real-time tracking enabled
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-full">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-muted-foreground">
              24/7 Customer support
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-full">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-semibold text-muted-foreground">
              Secure & Insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;