"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: 1,
    question: "What is Yari Tech and what services do you provide?",
    answer: "Yari Tech is a distinguished managed services provider with years of experience in the IT industry. We specialize in partnering with businesses to streamline day-to-day operations through our core services: managed IT services, network solutions, IT helpdesk services, support consulting, and custom software solutions including ERP systems. Our goal is to save you time and money while enhancing your overall return on investment (ROI)."
  },
  {
    id: 2,
    question: "I'm not an IT expert. Can you still help my business?",
    answer: "Absolutely! You don't need to be an IT expert – that's exactly why we're here. We have your back with innovative solutions and our team of seasoned professionals who are versed in IT best practices. We're here to partner with your business through our consulting services, making technology simple and accessible for you."
  },
  {
    id: 3,
    question: "How can Yari Tech help improve my business operations?",
    answer: "We understand that time is one of your most valuable resources, and businesses are always looking for ways to improve operations. By leveraging our expertise and innovative approach, we optimize your business operations to ensure maximum productivity and profitability. We streamline your day-to-day operations, allowing you to focus on what you do best – growing your business."
  },
  {
    id: 4,
    question: "What makes Yari Tech different from other IT service providers?",
    answer: "What sets us apart is our commitment to transparency and delivering exactly what you need. We don't believe in selling you solutions you don't need. Our core standards include transparency, and we provide tailored solutions designed to meet your specific needs and goals. We facilitate the whole process from start to finish, ensuring you get the right technology solutions for your business."
  },
  {
    id: 5,
    question: "Do you provide ERP systems and software solutions?",
    answer: "Yes! We help you unleash the power of software without getting sold on an enterprise resource planning (ERP) system that your organization doesn't need. At Yari Tech, you'll get exactly what you need because transparency is part of our core standards. We'll help you invest in the right ERP solution and facilitate the whole process – from start to finish."
  },
  {
    id: 6,
    question: "How experienced is your team?",
    answer: "Our team consists of seasoned professionals with years of experience under our belt in the IT industry. We have a proven track record and a commitment to innovation within the IT industry. Our expertise spans across various technology domains, ensuring we can handle your specific business needs with confidence."
  },
  {
    id: 7,
    question: "What kind of support can I expect?",
    answer: "We offer comprehensive support including IT helpdesk services, network solutions, and ongoing consulting. Our support consulting allows you to explore the realms of tech expertise at its finest. We're dedicated to being your trusted partner in navigating the complexities of technology, providing hassle-free tech solutions whenever you need them."
  },
  {
    id: 8,
    question: "How do I get started with Yari Tech?",
    answer: "Getting started is easy! Simply reach out to us for a free consultation. You can contact us at info@yaritech.com or call us at 713-302-7343. We'll discuss your specific needs and goals, and design a tailored solution that fits your business perfectly. We understand the importance of efficiency and cost-effectiveness in today's competitive landscape."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our managed services and how we can help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We'd love to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:info@yaritech.com"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              📧 info@yaritech.com
            </a>
            <a
              href="tel:713-302-7343"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              📞 713-302-7343
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 