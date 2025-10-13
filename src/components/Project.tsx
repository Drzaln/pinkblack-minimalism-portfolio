import { Project } from "@/lib/types/project.types";
import React from "react";
import BentoCard from "./ui/BentoCard";

interface ProjectsProps {
  projects: Project[];
}


export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <BentoCard
            key={project._id}
            title={project.name}
            desc={project.description}
            footer={project.role}
            href={project.demo}
          />
        ))}
      </div>
    </section>
  );
}