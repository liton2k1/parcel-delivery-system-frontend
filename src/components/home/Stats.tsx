import { CheckCircle, Clock, Globe, Package } from "lucide-react";

const Stats = () => {
  const stats = [
    { value: "50M+", label: "Parcels Delivered", icon: Package },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "2M+", label: "Customers", icon: CheckCircle },
    { value: "99.2%", label: "On-Time", icon: Clock },
  ];

  return (
    <section className="py-20 mb-24 transition-colors bg-gradient-to-r from-[#FF2056]/10 via-purple-200/20 to-blue-200/10 dark:from-[#FF2056]/20 dark:via-purple-600/20 dark:to-blue-600/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl 
                              bg-gradient-to-br from-[#FF2056]/30 via-purple-400/30 to-blue-400/30 
                              dark:from-[#FF2056]/50 dark:via-purple-600/40 dark:to-blue-600/30 
                              mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white dark:text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
