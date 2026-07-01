"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB_3_FORM_KEY, // <-- Paste your Web3Forms key here
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };


  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="relative py-20 border-t border-card-border/60">
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className=" space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-blue-light uppercase">
            Connection
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Get In Touch
          </h2>
          <p className="max-w-2xl text-muted  text-sm sm:text-base leading-relaxed">
            Have an open role, an application challenge, or a mentorship opportunity? Drop a line and let&apos;s build together.
          </p>
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl border border-card-border bg-card/30 p-8 backdrop-blur-sm relative"
        >
          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 space-y-4"
            >
              <CheckCircle2 size={48} className="text-accent-blue-light" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">Message Dispatched</h3>
                <p className="text-sm text-muted">
                  Thank you! Your inquiry was successfully simulated. I will reach out shortly.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-mono text-accent-blue-light hover:text-foreground transition-colors duration-200"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3 ">
                  <label htmlFor="name" className="font-sans text-xs font-semibold tracking-wider text-muted/80 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-card-border bg-card/40 py-4 px-5 text-sm sm:text-base text-foreground placeholder:text-muted/40 outline-none focus:outline-none focus:ring-0 focus:border-accent-blue-light/60 transition-colors duration-200 disabled:opacity-50 font-sans"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="font-sans text-xs font-semibold tracking-wider text-muted/80 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-card-border bg-card/40 py-4 px-5 text-sm sm:text-base text-foreground placeholder:text-muted/40 outline-none focus:outline-none focus:ring-0 focus:border-accent-blue-light/60 transition-colors duration-200 disabled:opacity-50 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="font-sans text-xs font-semibold tracking-wider text-muted/80 uppercase">
                  Message Detail
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  placeholder="What systems are we designing today?"
                  className="w-full rounded-lg border border-card-border bg-card/40 py-4 px-5 text-sm sm:text-base text-foreground placeholder:text-muted/40 outline-none focus:outline-none focus:ring-0 focus:border-accent-blue-light/60 transition-colors duration-200 disabled:opacity-50 resize-none font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-foreground px-6 font-medium text-background hover:bg-accent-blue-light hover:text-white disabled:opacity-50 transition-all duration-300 cursor-pointer border border-transparent hover:shadow-[0_0_20px_rgba(0,112,243,0.25)] font-sans text-sm"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-500 font-sans mt-3">
                  Transmission failed. Please email abdulla.walidi11@gmail.com directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
