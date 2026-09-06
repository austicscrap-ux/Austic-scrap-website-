"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Recycle, MapPin, ShieldCheck } from "lucide-react";

interface CounterItem {
  id: string;
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: CounterItem[] = [
  {
    id: "clients",
    icon: Building2,
    value: 5000,
    suffix: "+",
    label: "Corporate Clients",
    description: "MNCs, banks & IT facilities served across India",
  },
  {
    id: "recycled",
    icon: Recycle,
    value: 25000,
    suffix: "+ Tons",
    label: "Scrap & E-Waste Recycled",
    description: "Safely diverted from landfills with zero environmental harm",
  },
  {
    id: "cities",
    icon: MapPin,
    value: 7,
    suffix: " Metro Hubs",
    label: "Pan-India Logistics",
    description: "Kolkata, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai & Pune",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "CPCB Compliant Network",
    description: "Channelized via authorized recyclers with green disposal & destruction certificates",
  },
];

const AnimatedNumber: React.FC<{ target: number; suffix: string; isInView: boolean }> = ({
  target,
  suffix,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo
      const progress = frame === totalFrames ? 1 : 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = Math.round(start + (target - start) * progress);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Enterprise Impact and Statistics"
      className="relative py-14 md:py-18 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-[86px] relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3.5 rounded-full bg-[#127749]/10 border border-[#127749]/20 text-[#127749] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Proven Track Record Since 2003
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary tracking-tight text-neutral-900"
          >
            Empowering India's Circular Economy with Measurable Impact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="group relative p-6 md:p-7 rounded-2xl bg-white hover:bg-neutral-50/50 border border-neutral-200/80 hover:border-[#127749]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#127749]/10 text-[#127749] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#127749] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-3xl md:text-4xl font-extrabold font-primary text-neutral-900 tracking-tight mb-1">
                    <AnimatedNumber target={item.value} suffix={item.suffix} isInView={isInView} />
                  </div>

                  <h3 className="text-base font-semibold text-neutral-800 font-primary mb-2">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-neutral-600 font-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
