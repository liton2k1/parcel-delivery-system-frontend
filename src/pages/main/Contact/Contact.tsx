"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/lib/emailjs";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router";

interface EmailJSTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  source: string;
  to_name: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
}

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  source: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      source: "",
    },
  });

  const [loading, setLoading] = useState(false);

  async function onSubmit(values: ContactFormValues) {
    setLoading(true);
    try {
      const templateParams: EmailJSTemplateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        source: values.source || "Contact Form",
        to_name: "Support Team",
      };

      const response = await sendEmail(templateParams);

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    {
      title: "Call Us",
      primary: "+880 1700-123456",
      secondary: "Available Sat–Thu, 9:00 AM – 8:00 PM",
      icon: Phone,
      link: "tel:+8801700123456",
    },
    {
      title: "Email Support",
      primary: "support@yourcompany.com",
      secondary: "We usually reply within 24 hours",
      icon: Mail,
      link: "mailto:support@yourcompany.com",
    },
    {
      title: "Office Address",
      primary: "Banani, Dhaka",
      secondary: "Road 12, House 34, Dhaka 1213",
      icon: MapPin,
    },
    {
      title: "Support Hours",
      primary: "9:00 AM – 8:00 PM",
      secondary: "Saturday to Thursday",
      icon: Clock,
    },
  ];

  const departments = [
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Get help with tracking, delivery issues, or general inquiries.",
      email: "support@parceldelivery.com",
    },
    {
      icon: FileText,
      title: "Business Inquiries",
      description:
        "Partnership opportunities, bulk shipping, and corporate accounts.",
      email: "business@parceldelivery.com",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your experience and help us improve our services.",
      email: "feedback@parceldelivery.com",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#FF2056]/5 to-secondary py-20">
        <div className="container mx-auto px-5 text-center">
          <Badge
            variant="secondary"
            className="mb-5 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 rounded-full"
          >
            We're Here to Help
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team and we'll
            respond as soon as possible.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <NavLink to="/login">
              <Button size="lg" className="cursor-pointer">
                Start Shipping
              </Button>
            </NavLink>
            <NavLink to="/track-parcel">
              <Button size="lg" variant="outline" className="cursor-pointer">
                Track Parcel
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-5 mt-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Need Assistance ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us through any of
            the channels below—we’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((info, idx) => (
            <Card
              key={idx}
              className="hover:border-[#FF2056] transition-all transform hover:-translate-y-1 shadow-none"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#FF2056]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#FF2056]" />
                </div>

                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>

                <p className="text-[#FF2056] font-medium mb-1">
                  {info.primary}
                </p>

                <p className="text-sm text-muted-foreground">
                  {info.secondary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Form + Departments */}
      <section className="container mx-auto px-4 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        {...form.register("name")}
                        disabled={loading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...form.register("email")}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      {...form.register("subject")}
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      {...form.register("message")}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      className="cursor-pointer"
                      disabled={loading}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Departments */}
          <div className="space-y-6">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Contact Departments</CardTitle>
                <CardDescription>
                  Choose the right team for your inquiry
                </CardDescription>
              </CardHeader>
            </Card>
            {departments.map((dept, idx) => (
              <Card
                key={idx}
                className="shadow-none transition-all hover:border-[#FF2056]"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF2056]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-6 h-6 text-[#FF2056]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {dept.description}
                      </p>
                      <p className="text-sm text-[#FF2056]">{dept.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
