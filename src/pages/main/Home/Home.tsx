"use client";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import CTA from "@/components/home/CTA";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Area from "@/components/home/Area";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Categories />
      <Service />
      <About />
      <Area />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default Home;
