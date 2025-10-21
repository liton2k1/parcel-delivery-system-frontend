import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 mb-24">
      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF2056]/20 via-purple-600/10 to-transparent dark:from-[#FF2056]/30 dark:via-purple-600/20 dark:to-transparent"></div>

      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Ready to Ship Smarter?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Join 2 million+ customers who trust us with their deliveries. Get
          started in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to="/register">
            <Button
              size="lg"
              className="text-lg font-bold px-8 bg-gradient-to-r from-[#FF2056] to-[#FF4070] hover:from-[#FF4070] hover:to-[#FF2056] text-white border-0 shadow-xl shadow-[#FF2056]/30 cursor-pointer"
            >
              Create Free Account
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-bold px-8 bg-transparent border-2 border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              Contact Us
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
