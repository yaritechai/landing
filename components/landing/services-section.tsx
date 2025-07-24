"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import { ContactModal } from "@/components/ui/contact-modal";
import { cn } from "@/lib/utils";
import { Cloud, Brain, Shield, ArrowRight, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: <Zap className="h-8 w-8" />,
    title: "AI Solutions & Workflow Integration",
    description: "Transform your business operations with cutting-edge AI technologies. We help Houston companies seamlessly integrate artificial intelligence into their workflows to boost productivity, automate processes, and drive innovation.",
    features: [
      "Custom AI solution development and implementation for business processes",
      "Workflow automation using machine learning and intelligent systems",
      "AI-powered data analysis and business intelligence solutions",
      "Staff training and change management for AI adoption"
    ]
  },
  {
    id: 2,
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Computing & ERP Systems Houston",
    description: "Strategic cloud transformation and enterprise resource planning implementation for Houston businesses. We provide comprehensive cloud architecture design and ERP system integration services.",
    features: [
      "Cloud migration strategy and implementation with zero-downtime deployment",
      "ERP system analysis, selection, and customization for business requirements",
      "Cloud infrastructure optimization and cost management strategies",
      "Custom application development and legacy system modernization",
      "Enterprise system integration and API development services"
    ]
  },
  {
    id: 3,
    icon: <Brain className="h-8 w-8" />,
    title: "IT Support & Consulting Houston",
    description: "Strategic technology consulting and expert technical support services from certified Houston IT professionals. We provide comprehensive technology assessments and strategic planning to drive business growth.",
    features: [
      "IT strategy development and technology roadmap planning for business alignment",
      "Technical consulting services with industry-certified professionals",
      "Business process optimization and workflow automation implementation",
      "Comprehensive staff training and change management programs",
      "Full-service project management with dedicated technical project managers"
    ]
  }
];

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
            Comprehensive IT Solutions for Houston Enterprises
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver enterprise-grade managed IT services, cloud infrastructure, and strategic technology consulting to Houston and Texas businesses. Our proven methodologies ensure operational excellence and business continuity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group",
                "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg"
              )}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg text-gray-800 dark:text-gray-200">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-black dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
                      <StarBorder onClick={() => setIsModalOpen(true)}>
            <span className="flex items-center gap-2 font-semibold">
              Schedule Strategic IT Consultation
              <ArrowRight className="h-4 w-4" />
            </span>
          </StarBorder>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
} 