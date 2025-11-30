"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Star, Shield, Clock } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

const plans = [
  {
    name: "Essential",
    price: "$2,500",
    period: "project",
    description: "Perfect for startups and small business websites",
    features: [
      "5-8 custom pages",
      "Fully responsive design",
      "Performance optimization",
      "SEO foundation",
      "Contact integration",
      "30-day support",
      "2 revision rounds",
      "1-week delivery",
    ],
    popular: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "project",
    description: "Comprehensive solutions for established businesses",
    features: [
      "10-15 custom pages",
      "Advanced animations",
      "CMS integration",
      "E-commerce ready",
      "Analytics dashboard",
      "90-day support",
      "Priority revisions",
      "Security hardening",
      "2-week delivery",
    ],
    popular: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "engagement",
    description: "Tailored solutions for complex business needs",
    features: [
      "Unlimited pages & features",
      "Custom web applications",
      "API development",
      "Enterprise security",
      "Dedicated team",
      "6-month support",
      "24/7 priority support",
      "SLA guarantee",
      "Scalable architecture",
    ],
    popular: false,
    badge: "Premium",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSL, GDPR compliance, and security best practices"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Guanteed project completion within timeline"
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance process"
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-32 md:pt-40 pb-20"
    >
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5x2 font-bold mb-8 text-gradient">
              Pricing Plans
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              Choose the perfect plan for your{" "}
              <span className="text-cyber-green">next project</span>. All plans
              include high-quality code and dedicated support.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, rotateX: -5 }}
                className="group relative"
              >
                <div
                  className={`glass-card border rounded-2xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? "border-cyber-green cyber-glow scale-105"
                      : "border-border hover:border-cyber-green hover:cyber-glow"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className={`absolute top-0 right-0 px-4 py-1 text-xs font-bold rounded-bl-lg rounded-tr-2xl ${
                      plan.popular
                        ? "bg-cyber-green text-dark"
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-inverse mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-secondary text-sm font-light mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-cyber-green">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-secondary text-sm">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: index * 0.15 + featureIndex * 0.05 + 0.3,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-cyber-green/20 border border-cyber-green/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cyber-green" />
                        </div>
                        <span className="text-secondary text-sm font-light">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    className={`w-full px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 relative overflow-hidden group/btn transition-all ${
                      plan.popular
                        ? "bg-cyber-green text-dark"
                        : "border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-dark"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    {plan.popular && (
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                </div>

                {/* Background Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-cyber-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.div>
            ))}
          </div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {guarantees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-card border border-border rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-cyber-green" />
                </div>
                <div>
                  <h4 className="text-inverse font-semibold mb-1">{item.title}</h4>
                  <p className="text-secondary text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-lg text-secondary max-w-2xl mx-auto font-light mb-8">
              Need a custom solution? Let&apos;s discuss your specific requirements
              and create a tailored plan that fits your needs.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-cyber-green text-cyber-green font-semibold hover:bg-cyber-green hover:text-dark transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact for Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}