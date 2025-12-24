import { CheckCircle, Clock, Globe, Package } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      value: "50M+",
      label: "Parcels Delivered",
      icon: Package,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      value: "120+",
      label: "Countries",
      icon: Globe,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      value: "2M+",
      label: "Customers",
      icon: CheckCircle,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      value: "99.2%",
      label: "On-Time",
      icon: Clock,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-20 mt-24 bg-primary">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${stat.bgColor}`}
              >
                <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
              </div>

              <div className="text-4xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-white font-medium">
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