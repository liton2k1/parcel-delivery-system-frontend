import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const CTA = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Ready to Ship Smarter?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Join 2 million+ customers who trust us with their deliveries. Get
          started in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to="/register">
            <Button size="lg" className="cursor-pointer">
              Create Free Account
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button size="lg" variant="outline" className="cursor-pointer">
              Contact Us
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
