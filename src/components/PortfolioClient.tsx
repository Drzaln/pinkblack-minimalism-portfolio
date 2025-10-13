// components/PortfolioClient.tsx - CLIENT COMPONENT
"use client"

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Profile } from "@/lib/types/profile.types";
import { Experience as ExperienceType } from "@/lib/types/experience.types" ;
import { Education as EducationType} from "@/lib/types/education.types";
import { Hero } from "./Hero";
import Projects from "./Project";
import { Project } from "@/lib/types/project.types";
import { Post } from "@/lib/types/post.types";

interface PortfolioClientProps {
  data: {
    profile: Profile | null;
    experiences: ExperienceType[];
    educations: EducationType[];
    projects: Project[];
    posts: Post[];
  };
}

export default function PortfolioClient({ data }: PortfolioClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  if (!data.profile) {
    return (
      <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Profile not found</h1>
          <p className="text-zinc-500">Please run the seed script</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen">
      <Header profile={data.profile} />
      <Hero profile={data.profile} />
      <Skills skills={data.profile.skills || []} />
      <About />
      <Experience experiences={data.experiences || []} />
      <Education educations={data.educations || []} />
      <Projects projects={data.projects || []} />
      <Blog posts={data.posts || []} />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </main>
  );
}