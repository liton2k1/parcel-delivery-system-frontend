"use client";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Area from "@/components/home/Area";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Area />
      <FaqSection />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
