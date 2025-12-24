import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
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
    <section className="container mx-auto px-5 mt-24">
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
            className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border-gray-200 dark:border-gray-700 hover:border-[#FF2056]/50 transition-all shadow-none"
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2056] to-[#FF4070] flex items-center justify-center text-white font-bold">
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
  );
};

export default Testimonials;
