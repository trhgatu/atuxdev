"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Project Manager",
    company: "Tech Solutions",
    content: "Working with Anh Tu was a pleasure. His attention to detail and ability to deliver high-quality work on time made our project a success.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO",
    company: "StartUp Inc",
    content: "Anh Tu's technical skills and problem-solving abilities are impressive. He quickly understood our requirements and delivered a solution that exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Lead Developer",
    company: "WebDev Agency",
    content: "I had the opportunity to collaborate with Anh Tu on a complex project. His coding standards and commitment to quality are exceptional. A true professional!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-16 relative">
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="flex max-w-5xl flex-col gap-10 mx-auto">
        <div className="w-full">
          <motion.p
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl"
          >
            Here's what people are saying about my work and collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border-gray-800 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.9333 5.53333 11.7333C6.33333 10.5333 7.46667 9.6 8.93333 8.93333L10.6667 11.0667C9.73333 11.4667 9 12 8.46667 12.6667C7.93333 13.3333 7.66667 14.0667 7.66667 14.8667C7.66667 15.1333 7.73333 15.3333 7.86667 15.4667C8 15.6 8.2 15.6667 8.46667 15.6667C9.13333 15.6667 9.73333 15.9333 10.2667 16.4667C10.8 17 11.0667 17.6 11.0667 18.2667C11.0667 18.9333 10.8 19.5333 10.2667 20.0667C9.73333 20.6 9.13333 21.3333 9.33333 21.3333ZM20 21.3333C18.5333 21.3333 17.3333 20.8 16.4 19.7333C15.4667 18.6667 15 17.3333 15 15.7333C15 14.2667 15.4 12.9333 16.2 11.7333C17 10.5333 18.1333 9.6 19.6 8.93333L21.3333 11.0667C20.4 11.4667 19.6667 12 19.1333 12.6667C18.6 13.3333 18.3333 14.0667 18.3333 14.8667C18.3333 15.1333 18.4 15.3333 18.5333 15.4667C18.6667 15.6 18.8667 15.6667 19.1333 15.6667C19.8 15.6667 20.4 15.9333 20.9333 16.4667C21.4667 17 21.7333 17.6 21.7333 18.2667C21.7333 18.9333 21.4667 19.5333 20.9333 20.0667C20.4 20.6 19.8 21.3333 20 21.3333Z" fill="url(#paint0_linear_testimonial)"/>
                      <defs>
                        <linearGradient id="paint0_linear_testimonial" x1="4.33333" y1="8.93333" x2="21.7333" y2="21.3333" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#EF4444" />
                          <stop offset="1" stopColor="#B91C1C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-1">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-800 flex items-center justify-center ring-2 ring-red-500/20">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                          unoptimized={true}
                        />
                      ) : (
                        <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;