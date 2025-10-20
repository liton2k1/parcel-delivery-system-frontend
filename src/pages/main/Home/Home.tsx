"use client";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div>
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
