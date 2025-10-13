// app/page.tsx
"use client"

import React, { useEffect } from "react";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorState from "@/components/ui/ErrorState";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experiences from "@/components/Experience";
import Educations from "@/components/Education";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export default function PortfolioPage() {
  const { data, loading, error } = usePortfolioData();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  if (loading) {
    return (
      <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </main>
    );
  }

  if (error || !data.profile) {
    return (
      <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen flex items-center justify-center">
        <ErrorState message={error || "Failed to load portfolio data"} />
      </main>
    );
  }

  return (
    <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen">
      <Header profile={data.profile} />
      <Hero profile={data.profile} />
      <Skills skills={data.profile.skills} />
      <About />
      <Experiences experiences={data.experiences} />
      <Educations educations={data.educations} />
      <Projects projects={data.projects} />
      <Blog posts={data.posts} />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </main>
  );
}