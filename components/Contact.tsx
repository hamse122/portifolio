"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Github, Linkedin, MessageCircle, Mail, CheckCircle2, X } from "lucide-react";
import MorphingBlob from "./MorphingBlob";
import Fireworks from "./Fireworks";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show fireworks and popup
    setShowFireworks(true);
    setShowPopup(true);
    
    setFormData({ name: "", email: "", message: "" });
    setFocusedField(null);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowFireworks(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Fireworks Animation */}
      <Fireworks trigger={showFireworks} />
      
      {/* Success Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClosePopup}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative glass-card border border-cyber-green/50 rounded-2xl p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-text-inverse/60 hover:text-cyber-green transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
            >
              <CheckCircle2 className="w-20 h-20 text-cyber-green mx-auto mb-6" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-inverse mb-4"
            >
              Thank You!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-secondary mb-6"
            >
              Your message has been sent successfully. I&apos;ll get back to you as soon as possible!
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={handleClosePopup}
              className="px-6 py-3 bg-cyber-green text-dark font-semibold rounded-lg hover:bg-cyber-green/80 transition-colors"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <section
        id="contact"
        ref={ref}
        className="relative flex items-center justify-center overflow-hidden bg-dark pt-32 md:pt-40 pb-8 md:pb-12"
      >
        {/* Morphing 3D Blob Background */}
        <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gradient">
              Let&apos;s Connect
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              Ready to collaborate on your next{" "}
              <span className="text-cyber-green">big project</span>? Get in touch
              and let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card border border-border rounded-2xl p-8 md:p-12 space-y-6 mb-8"
          >
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-background-dark/50 border-b-2 border-border focus:border-cyber-green rounded-t-lg px-4 pt-6 pb-2 text-text-inverse focus:outline-none transition-colors peer"
                placeholder=" "
              />
              <motion.label
                htmlFor="name"
                className="absolute left-4 text-text-inverse/60 text-sm transition-all duration-300 pointer-events-none transform -translate-y-1/2 top-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:text-cyber-green peer-focus:bg-background-dark peer-focus:px-1 peer-valid:top-4 peer-valid:text-xs peer-valid:text-cyber-green peer-valid:bg-background-dark peer-valid:px-1"
                animate={{
                  top: formData.name || focusedField === "name" ? 16 : 24,
                  color:
                    formData.name || focusedField === "name"
                      ? "#00FF88"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Name
              </motion.label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyber-green"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: formData.name || focusedField === "name" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-background-dark/50 border-b-2 border-border focus:border-cyber-green rounded-t-lg px-4 pt-6 pb-2 text-text-inverse focus:outline-none transition-colors peer"
                placeholder=" "
              />
              <motion.label
                htmlFor="email"
                className="absolute left-4 text-text-inverse/60 text-sm transition-all duration-300 pointer-events-none transform -translate-y-1/2 top-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:text-cyber-green peer-focus:bg-background-dark peer-focus:px-1 peer-valid:top-4 peer-valid:text-xs peer-valid:text-cyber-green peer-valid:bg-background-dark peer-valid:px-1"
                animate={{
                  top: formData.email || focusedField === "email" ? 16 : 24,
                  color:
                    formData.email || focusedField === "email"
                      ? "#00FF88"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Email
              </motion.label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyber-green"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: formData.email || focusedField === "email" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Message Field */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full bg-background-dark/50 border-b-2 border-border focus:border-cyber-green rounded-t-lg px-4 pt-6 pb-2 text-text-inverse focus:outline-none transition-colors resize-none peer"
                placeholder=" "
              />
              <motion.label
                htmlFor="message"
                className="absolute left-4 text-text-inverse/60 text-sm transition-all duration-300 pointer-events-none transform -translate-y-1/2 top-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:text-cyber-green peer-focus:bg-background-dark peer-focus:px-1 peer-valid:top-4 peer-valid:text-xs peer-valid:text-cyber-green peer-valid:bg-background-dark peer-valid:px-1"
                animate={{
                  top: formData.message || focusedField === "message" ? 16 : 24,
                  color:
                    formData.message || focusedField === "message"
                      ? "#00FF88"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Message
              </motion.label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyber-green"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: formData.message || focusedField === "message" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-cyber-green text-dark font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mb-4"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: MessageCircle, href: "#", label: "WhatsApp" },
              { icon: Mail, href: "mailto:ihyaet@gmail.com", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center text-secondary hover:border-cyber-green hover:text-cyber-green transition-all"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
