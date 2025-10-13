'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Profile } from '@/lib/types/profile.types';
import Spotlight from './ui/Spotlight';
import HeroBG from './ui/HeroBG';
import ShimmerText from './ui/ShimmerText';
import SoftBadge from './ui/SoftBadge';

interface HeroProps {
  profile: Profile;
}

export const Hero = memo(({ profile }: HeroProps) => {
  return (
    <section className="relative">
      <Spotlight />
      <HeroBG />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight"
            >
              I'm <ShimmerText className="text-base-500">{profile.name}</ShimmerText>, a {profile.role}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300"
            >
              {profile.summary}
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={profile.links.email} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600">
                <Mail size={16} /> Contact me
              </a>
              <a href={profile.links.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.links.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin size={14} /> {profile.location} 
              <SoftBadge>Ready to relocate</SoftBadge>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/30 to-fuchsia-500/30 blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={profile.photo}
                  alt={`${profile.name} - ${profile.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-pink-500/20 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
})
