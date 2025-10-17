import React, { useState } from "react";
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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl opacity-90">
              Have questions? We're here to help. Reach out to our team and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 -mt-8 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-all hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary hover:underline font-medium block mb-1"
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

      {/* Main Content - Form and Departments */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
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
                {submitted && (
                  <Alert className="mb-6 bg-primary/10 border-primary">
                    <Send className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-primary">
                      Thank you for contacting us! We'll respond to your message
                      soon.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Departments Sidebar */}
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
                className="hover:shadow-lg transition-all hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {dept.description}
                      </p>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-primary hover:underline"
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

      {/* FAQ Quick Links */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our FAQ section for instant answers to common questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg">
                Track a Package
              </Button>
              <Button variant="outline" size="lg">
                Pricing & Services
              </Button>
              <Button variant="outline" size="lg">
                Shipping Guidelines
              </Button>
              <Button variant="outline" size="lg">
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="container mx-auto px-6 py-20">
        <Card className="overflow-hidden">
          <div className="bg-muted h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">
                Visit Our Head Office
              </p>
              <p className="text-muted-foreground">
                123 Logistics Drive, New York, NY 10001
              </p>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
