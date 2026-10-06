"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getProjects } from "../lib/projectApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getProjects();

        const projectData = response.data || [];

        setProjects(
          projectData.filter(
            (project) => project.status !== "draft"
          )
        );
      } catch (error) {
        console.error(
          "Failed to load projects:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="My Projects"
          description="Some of the projects I have worked on."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">
            No projects available yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden bg-gray-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies
                        .split(",")
                        .map((technology, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {technology.trim()}
                          </span>
                        ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;