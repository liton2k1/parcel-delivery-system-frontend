"use client";

import { useState } from "react";
import {
  ChevronDown,
  Package,
  CreditCard,
  MapPin,
  HelpCircle,
  Shield,
  LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FAQCategory {
  icon: LucideIcon;
  title: string;
  color: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

interface GroupedFAQs {
  [key: string]: FAQItem[];
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories: FAQCategory[] = [
    {
      icon: Package,
      title: "Shipping & Delivery",
      color: "pink",
    },
    {
      icon: CreditCard,
      title: "Pricing & Payment",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Tracking & Updates",
      color: "green",
    },
    {
      icon: Shield,
      title: "Safety & Security",
      color: "purple",
    },
  ];

  const faqs: FAQItem[] = [
    {
      category: "Shipping & Delivery",
      question: "What are your delivery time options?",
      answer:
        "We offer multiple delivery options: Same-Day (3-6 hours), Express (next day), Standard (2-3 days), and Economy (4-7 days). Delivery times may vary based on destination and service availability.",
    },
    {
      category: "Shipping & Delivery",
      question: "Do you deliver on weekends and holidays?",
      answer:
        "Yes! We provide 7-day delivery service including weekends. However, holiday deliveries may have limited availability. Same-day and express services operate on most public holidays.",
    },
    {
      category: "Shipping & Delivery",
      question: "What size and weight restrictions do you have?",
      answer:
        "Standard parcels can weigh up to 30kg and measure max 120cm (length + width + height). For larger or heavier items, we offer freight services. Contact our support team for custom shipping solutions.",
    },
    {
      category: "Shipping & Delivery",
      question: "Can I change the delivery address after booking?",
      answer:
        "Yes, you can modify the delivery address before the parcel is out for delivery. Simply go to 'My Bookings' in the app, select your shipment, and update the address. Additional charges may apply for significant route changes.",
    },
    {
      category: "Pricing & Payment",
      question: "How is the shipping cost calculated?",
      answer:
        "Shipping costs are based on parcel weight, dimensions, delivery distance, and service type (same-day, express, standard). You can get an instant quote on our website or app by entering your parcel details.",
    },
    {
      category: "Pricing & Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including credit/debit cards, digital wallets (Apple Pay, Google Pay), bank transfers, and cash on delivery (COD). Business accounts can also use invoicing.",
    },
    {
      category: "Pricing & Payment",
      question: "Do you offer discounts for bulk shipping?",
      answer:
        "Yes! Business customers and frequent shippers can enjoy volume discounts ranging from 10-30% off. Sign up for our Business Account to access special rates and dedicated support.",
    },
    {
      category: "Pricing & Payment",
      question: "What is your refund policy?",
      answer:
        "If we fail to deliver within the promised timeframe, you're eligible for a full refund. Cancellations made before pickup are fully refundable. For cancellations after pickup, charges apply based on distance covered.",
    },
    {
      category: "Tracking & Updates",
      question: "How can I track my parcel?",
      answer:
        "Track your parcel in real-time using our mobile app or website. Enter your tracking number to see live GPS location, delivery status, and estimated arrival time. You'll also receive SMS and push notifications at each checkpoint.",
    },
    {
      category: "Tracking & Updates",
      question: "Why hasn't my tracking information updated?",
      answer:
        "Tracking updates may take 15-30 minutes to reflect. If there's no update for over 2 hours, your parcel might be in transit between checkpoints. Contact our support team if tracking hasn't updated for more than 6 hours.",
    },
    {
      category: "Tracking & Updates",
      question: "Can I get delivery notifications?",
      answer:
        "Absolutely! You'll receive automatic notifications via SMS, email, and push notifications for pickup confirmation, in-transit updates, out-for-delivery alerts, and successful delivery confirmation.",
    },
    {
      category: "Tracking & Updates",
      question: "What if no one is home during delivery?",
      answer:
        "Our driver will attempt delivery and leave a notification. You can reschedule delivery for another time, redirect to a neighbor, or pick up from the nearest partner location using your tracking number.",
    },
    {
      category: "Safety & Security",
      question: "What items are prohibited from shipping?",
      answer:
        "Prohibited items include hazardous materials, flammable liquids, weapons, illegal substances, perishable foods without proper packaging, and live animals. Check our full list of restricted items on the website.",
    },
    {
      category: "Safety & Security",
      question: "How do you ensure parcel safety?",
      answer:
        "We use tamper-proof packaging, GPS tracking, signature confirmation, and background-checked drivers. All warehouses have 24/7 security surveillance and climate-controlled storage for sensitive items.",
    },
    {
      category: "Safety & Security",
      question: "What happens if my parcel is damaged or lost?",
      answer:
        "Report damaged or lost parcels within 24 hours of expected delivery. We'll investigate immediately. If confirmed, you'll receive full compensation based on your insurance coverage within 5-7 business days.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const groupedFAQs: GroupedFAQs = faqs.reduce((acc: GroupedFAQs, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600 opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 opacity-5 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge
            variant="secondary"
            className="mb-6 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 hover:bg-[#FF2056]/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
          >
            <HelpCircle className="w-4 h-4 inline mr-2" />
            We're Here to Help
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our parcel delivery services,
            pricing, tracking, and more.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategories.map((category, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-pink-600 transition-all transform hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                const element = document.getElementById(category.title);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <CardContent className="p-6 text-center">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <div className="text-xl font-bold">{category.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {Object.keys(groupedFAQs).map((category, categoryIdx) => (
            <div key={categoryIdx} id={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                {faqCategories.find((cat) => cat.title === category)?.icon && (
                  <span className="mr-3">
                    {(() => {
                      const Icon = faqCategories.find(
                        (cat) => cat.title === category
                      )?.icon;
                      return Icon ? (
                        <Icon className="w-8 h-8 text-pink-600" />
                      ) : null;
                    })()}
                  </span>
                )}
                {category}
              </h2>

              <div className="space-y-4">
                {groupedFAQs[category].map((faq, faqIdx) => {
                  const globalIndex = faqs.findIndex((f) => f === faq);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card
                      key={faqIdx}
                      className={`cursor-pointer transition-all ${
                        isOpen
                          ? "border-pink-600 shadow-lg"
                          : "hover:border-gray-300"
                      }`}
                      onClick={() => toggleFAQ(globalIndex)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex-1 pr-4">
                            {faq.question}
                          </CardTitle>
                          <ChevronDown
                            className={`w-5 h-5 text-pink-600 transition-transform flex-shrink-0 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </CardDescription>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
