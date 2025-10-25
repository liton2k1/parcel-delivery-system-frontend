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
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri, 8am-8pm EST",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "support@parceldelivery.com",
      secondary: "We reply within 24 hours",
      link: "mailto:support@parceldelivery.com",
    },
    {
      icon: MapPin,
      title: "Head Office",
      primary: "123 Logistics Drive",
      secondary: "New York, NY 10001, USA",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Friday: 8am - 8pm",
      secondary: "Saturday: 9am - 5pm EST",
      link: null,
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2056] opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4070] opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF2056] opacity-5 blur-3xl rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge
            variant="secondary"
            className="mb-6 text-sm bg-[#FF2056]/10 text-[#FF2056] border-[#FF2056]/20 hover:bg-[#FF2056]/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
          >
            We're Here to Help
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our team and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-[#FF2056] transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#FF2056]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#FF2056]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-[#FF2056] hover:underline font-medium block mb-1"
                  >
                    {info.primary}
                  </a>
                ) : (
                  <p className="font-medium mb-1">{info.primary}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {info.secondary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Form + Departments */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
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
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-[#FF2056] to-[#FF4070] hover:from-[#FF4070] hover:to-[#FF2056] text-white font-semibold shadow-lg shadow-[#FF2056]/30"
                    disabled={loading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Departments */}
          <div className="space-y-6">
            <Card>
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
                className="hover:shadow-lg transition-all hover:border-[#FF2056]"
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
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-[#FF2056] hover:underline"
                      >
                        {dept.email}
                      </a>
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
