"use client"

import React, { useState } from "react";
import { Mail, FileText, Github, Linkedin, MapPin } from "lucide-react";
import { Profile } from "@/lib/types/profile.types";


interface ContactProps {
  profile: Profile;
}

const cardClass =
  "rounded-2xl border bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 backdrop-blur p-5 md:p-6";

export default function Contact({ profile }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: '✅ Message sent successfully! I\'ll get back to you soon.',
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: data.error || '❌ Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '❌ Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Contact</h2>
      <div className={cardClass}>
        <p className="text-zinc-600 dark:text-zinc-300">
          If you have any questions or opportunities, feel free to reach out.
        </p>

        {status.type && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400'
            }`}
          >
            {status.message}
          </div>
        )}

        <form className="mt-6 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            className="sm:col-span-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            disabled={isSubmitting}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="sm:col-span-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="sm:col-span-2 min-h-32 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            disabled={isSubmitting}
          />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              <Mail size={16} /> 
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <FileText size={16} /> Get Resume
            </a>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <div className="inline-flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}