import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------------- FAQ DATA ---------------- */
const faqData = [
  {
    id: "1",
    question: "What is Easy Parcel?",
    answer:
      "Easy Parcel is a technology-driven logistics and courier service providing reliable parcel delivery solutions for individuals, SMEs, and enterprises.",
  },
  {
    id: "2",
    question: "What kind of services does Easy Parcel offer?",
    answer:
      "Easy Parcel offers parcel delivery, document courier services, bulk shipments, cash on delivery (COD), and enterprise logistics solutions.",
  },
  {
    id: "3",
    question: "What is the coverage area of Easy Parcel Delivery?",
    answer:
      "Easy Parcel delivers parcels nationwide, covering inside Dhaka, surrounding areas, and all districts across Bangladesh.",
  },
  {
    id: "4",
    question: "Want to know about your delivery and logistics charges?",
    answer:
      "Delivery charges start from Tk 69 per kg inside Dhaka, Tk 115 around Dhaka, and Tk 150 outside Dhaka. A 1% cash on delivery (COD) charge applies for applicable shipments.",
  },
  {
    id: "5",
    question: "What kind of products does Easy Parcel deliver?",
    answer:
      "Easy Parcel delivers all valid and portable products including documents, consumer goods, e-commerce items, and commercial parcels.",
  },
];

/* ---------------- OPEN SOURCE IMAGES ---------------- */
const images = {
  ship: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  bike: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5",
  truckNight: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  trucks: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
  plane: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
};

/* ---------------- COMPONENT ---------------- */
export default function FaqSection() {
  return (
    <section className="mt-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: IMAGE GALLERY */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <img
                src={images.ship}
                alt="Cargo ship delivery"
                className="rounded-xl object-cover w-full h-[200px]"
              />
              <img
                src={images.truckNight}
                alt="Truck delivery at night"
                className="rounded-xl object-cover w-full h-[320px]"
              />
            </div>

            <div className="space-y-4">
              <img
                src={images.bike}
                alt="Bike courier delivery"
                className="rounded-xl object-cover w-full h-[220px]"
              />
              <img
                src={images.trucks}
                alt="Logistics trucks"
                className="rounded-xl object-cover w-full h-[240px]"
              />
            </div>

            <div className="space-y-4">
              <img
                src={images.ship}
                alt="Freight shipment"
                className="rounded-xl object-cover w-full h-[420px]"
              />
              <img
                src={images.plane}
                alt="Air cargo delivery"
                className="rounded-xl object-cover w-full h-[220px]"
              />
            </div>
          </div>

          {/* RIGHT: FAQ ACCORDION */}
          <div>
            <h2 className="text-3xl font-extrabold uppercase mb-8">
              Most Commonly Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-xl border px-4"
                >
                  <AccordionTrigger className="font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
