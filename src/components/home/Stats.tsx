import { CheckCircle, Clock, Globe, Package } from "lucide-react";

const Stats = () => {
  const stats = [
    { value: "50M+", label: "Parcels Delivered", icon: Package },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "2M+", label: "Customers", icon: CheckCircle },
    { value: "99.2%", label: "On-Time", icon: Clock },
  ];
  return (
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
  );
};

export default Stats;
