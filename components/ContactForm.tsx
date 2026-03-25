"use client";

import React, { useState, FormEvent, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    buildIdea: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (formData.message.length < 30) {
      setError("Please provide a more detailed message (minimum 30 characters).");
      setLoading(false);
      return;
    }

    if (parseInt(captchaAnswer) !== captchaNum1 + captchaNum2) {
      setError("Incorrect security answer Please try again.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageSource: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Your request has been submitted. We review every request carefully. Only serious inquiries will be responded to.");
        setFormData({ name: "", email: "", phone: "", buildIdea: "", message: "" });
        setCaptchaAnswer("");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-slate-950 p-6 text-white border-l-4 border-slate-500">
        <p className="font-bold text-lg uppercase tracking-widest mb-2">Important Notice</p>
        <p className="text-slate-300">We review every request carefully. Only serious inquiries will be responded to.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">Name</label>
          <input
            title="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">Work Email</label>
          <input
            title="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">What do you want to build?</label>
        <input
          title="What to build"
          type="text"
          name="buildIdea"
          value={formData.buildIdea}
          onChange={handleChange}
          required
          placeholder="e.g. A marketplace, an internal AI tool, an MVP..."
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">Phone Number</label>
        <input
          title="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="e.g. +91 9876543210"
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">Message (min 30 characters)</label>
        <textarea
          title="Message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          minLength={30}
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors resize-none"
          placeholder="Provide details about your project, goals, and timeline..."
        ></textarea>
        <div className="text-right text-xs text-slate-500 mt-2 font-medium">
          {formData.message.length} / 30 characters minimum
        </div>
      </div>

      {isMounted && (
        <div>
          <label className="block text-sm font-bold text-slate-950 mb-3 uppercase tracking-widest text-slate-500">Security Question: What is {captchaNum1} + {captchaNum2}?</label>
          <input
            title="Security Question Answer"
            type="number"
            name="captchaAnswer"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-950 focus:ring-1 focus:ring-slate-950 outline-none transition-colors max-w-[200px]"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-5 px-8 bg-slate-950 hover:bg-slate-800 text-white font-bold text-lg tracking-widest uppercase transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting Request..." : "Submit Inquiry"}
      </button>

      {success && (
        <div className="p-6 bg-green-50 border border-green-200 text-green-900 font-bold text-center">
          {success}
        </div>
      )}
      {error && (
        <div className="p-6 bg-red-50 border border-red-200 text-red-900 font-bold text-center">
          {error}
        </div>
      )}
    </form>
  );
}
