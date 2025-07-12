"use client";

import { StarBorder } from "@/components/ui/star-border";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const demoPrices = [
  {
    id: "price_1",
    name: "Essential",
    description: "Perfect for small businesses getting started",
    features: [
      "24/7 IT helpdesk support",
      "Basic cloud backup",
      "Network monitoring",
      "Monthly system updates",
      "Email support",
    ],
    monthlyPrice: 15000,
    yearlyPrice: 150000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Professional",
    description: "Ideal for growing businesses with complex needs",
    features: [
      "Everything in Essential",
      "Cloud computing solutions",
      "AI-powered automation",
      "Priority phone support",
      "Custom integrations",
      "Cybersecurity monitoring",
    ],
    monthlyPrice: 29900,
    yearlyPrice: 299000,
    isMostPopular: true,
  },
  {
    id: "price_5",
    name: "Enterprise",
    description: "Comprehensive solutions for large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom AI solutions",
      "Advanced security protocols",
      "Compliance management",
      "24/7 on-site support",
    ],
    monthlyPrice: 59900,
    yearlyPrice: 599000,
    isMostPopular: false,
  },
  {
    id: "price_6",
    name: "Custom",
    description: "Tailored solutions for unique business requirements",
    features: [
      "Fully customized IT strategy",
      "Dedicated technical team",
      "Bespoke AI development",
      "White-glove implementation",
      "Unlimited support",
      "Strategic IT consulting",
    ],
    monthlyPrice: 99900,
    yearlyPrice: 999000,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            IT Support Plans
          </h4>

          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Solutions that fit your business.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose a <strong>managed services plan</strong> that&apos;s designed
            to optimize your operations, enhance productivity, and deliver
            maximum ROI for your business.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "year"
                    ? toHumanPrice(price.yearlyPrice, 0)
                    : toHumanPrice(price.monthlyPrice, 0)}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>

              <StarBorder
                className={cn(
                  "group relative w-full cursor-pointer",
                  isLoading && "opacity-50 pointer-events-none"
                )}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="flex items-center justify-center gap-2 text-lg font-semibold tracking-tighter">
                  {(!isLoading || (isLoading && id !== price.id)) && (
                    <span>Subscribe</span>
                  )}
                  {isLoading && id === price.id && (
                    <>
                      <Loader className="h-4 w-4 animate-spin" />
                      <span>Subscribing</span>
                    </>
                  )}
                </span>
              </StarBorder>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
