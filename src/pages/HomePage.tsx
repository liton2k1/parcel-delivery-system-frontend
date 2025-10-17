"use client";
import Hero from "@/components/modules/home/Hero";
import Service from "@/components/modules/home/Service";
import Stats from "@/components/modules/home/Stats";
import CTA from "@/components/modules/home/CTA";
import Testimonials from "@/components/modules/home/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;
