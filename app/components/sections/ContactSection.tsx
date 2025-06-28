"use client";

import { useState } from "react";
import { contactChannels } from "@/app/lib/data";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader, AlertTriangle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    callsign: "",
    email: "",
    briefing: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setStatus("sent");
        setMessage("Transmission successful! We'll be in touch soon.");
        setFormData({ callsign: "", email: "", briefing: "" });
      } else {
        setStatus("error");
        setMessage("Transmission failed. Please check the grid and try again.");
      }
    }, 2000);
  };

  const StatusDisplay = () => (
    <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
      {status === "sent" && (
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      )}
      {status === "error" && (
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
      )}
      <h3 className="text-xl font-bold mb-2">
        {status === "sent" ? "SUCCESS" : "ERROR"}
      </h3>
      <p className="opacity-80 mb-6">{message}</p>
      <button
        onClick={() => setStatus("idle")}
        className="px-6 py-2 bg-[var(--accent-color)] text-[var(--bg-color)] font-bold rounded-md flex items-center justify-center gap-2 transition-all hover:scale-105"
      >
        SEND ANOTHER MESSAGE
      </button>
    </div>
  );

  return (
    <motion.section
      id="contact"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-[var(--accent-color)]">ESTABLISH</span> CONNECTION
      </h2>
      <p className="text-center opacity-70 mb-12">
        Ready to team up for your next epic quest?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 font-mono tracking-wider">
            COMMS CHANNELS
          </h3>
          <p className="mb-6 opacity-80 text-sm">
            Choose your preferred communication protocol. Response guaranteed
            within 24 standard hours.
          </p>
          <div className="space-y-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-[var(--accent-color)]/10 transition-colors group"
              >
                <channel.icon className="w-7 h-7 text-[var(--accent-color)]/70 group-hover:text-[var(--accent-color)] transition-colors" />
                <div>
                  <p className="font-bold text-sm tracking-wide">
                    {channel.name}
                  </p>
                  <p className="text-xs opacity-70 font-mono">
                    {channel.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 p-8 border border-white/10 rounded-lg bg-black/20 dark:bg-white/5 backdrop-blur-sm">
          {status === "sent" || status === "error" ? (
            <StatusDisplay />
          ) : (
            <>
              <h3 className="text-xl font-bold mb-6 font-mono tracking-wider">
                NEW TRANSMISSION
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="callsign"
                    className="block text-xs font-bold font-mono tracking-widest mb-2 opacity-70"
                  >
                    CALLSIGN (NAME)
                  </label>
                  <input
                    type="text"
                    id="callsign"
                    name="callsign"
                    value={formData.callsign}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent p-2 border-b-2 border-[var(--accent-color)]/20 focus:border-[var(--accent-color)] transition-colors outline-none font-mono"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold font-mono tracking-widest mb-2 opacity-70"
                  >
                    EMAIL PROTOCOL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent p-2 border-b-2 border-[var(--accent-color)]/20 focus:border-[var(--accent-color)] transition-colors outline-none font-mono"
                  />
                </div>
                <div>
                  <label
                    htmlFor="briefing"
                    className="block text-xs font-bold font-mono tracking-widest mb-2 opacity-70"
                  >
                    MISSION BRIEFING
                  </label>
                  <textarea
                    id="briefing"
                    name="briefing"
                    rows={4}
                    value={formData.briefing}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent p-2 border-b-2 border-[var(--accent-color)]/20 focus:border-[var(--accent-color)] transition-colors outline-none font-mono"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-[var(--accent-color)] text-[var(--bg-color)] font-bold rounded-md flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[var(--shadow-neon)] disabled:opacity-60 disabled:scale-100 cursor-pointer"
                >
                  {status === "sending" && (
                    <Loader className="animate-spin" size={20} />
                  )}
                  {status !== "sending" && <Send size={20} />}
                  <span>
                    {status === "idle" && "SEND TRANSMISSION"}
                    {status === "sending" && "SENDING..."}
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
