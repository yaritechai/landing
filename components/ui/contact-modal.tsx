"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    revenueRange: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      revenueRange: "",
      businessType: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative w-full max-w-4xl max-h-[95vh] overflow-y-auto",
        "bg-white/90 dark:bg-black/90 backdrop-blur-sm",
        "border border-gray-200 dark:border-gray-700",
        "rounded-2xl shadow-2xl",
        "animate-in duration-200"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-black dark:text-white text-left">
            Schedule Your Technology Assessment
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6" dir="ltr">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Row 2: Company and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Company/Business Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Row 3: Revenue Range and Business Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Annual Revenue Range
              </label>
              <select
                name="revenueRange"
                value={formData.revenueRange}
                onChange={handleChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
              >
                <option value="">Select revenue range</option>
                <option value="under-100k">Under $100k</option>
                <option value="100k-500k">$100k - $500k</option>
                <option value="500k-1m">$500k - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m-plus">$10M+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
                Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-left",
                  "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                  "border border-gray-300 dark:border-gray-600",
                  "text-black dark:text-white",
                  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                  "transition-all duration-200"
                )}
              >
                <option value="">Select business type</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="professional-services">Professional Services</option>
                <option value="technology">Technology</option>
                <option value="financial">Financial Services</option>
                <option value="education">Education</option>
                <option value="non-profit">Non-Profit</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 text-left">
              How can we help you?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={cn(
                "w-full px-4 py-3 rounded-lg resize-none text-left",
                "bg-white/60 dark:bg-black/60 backdrop-blur-sm",
                "border border-gray-300 dark:border-gray-600",
                "text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
                "transition-all duration-200"
              )}
              placeholder="Tell us about your IT challenges or goals..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <StarBorder className="w-full" disabled={isSubmitting}>
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </span>
            </StarBorder>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            We'll respond within 24 hours. Your information is kept confidential.
          </p>
        </div>
      </div>
    </div>
  );
} 