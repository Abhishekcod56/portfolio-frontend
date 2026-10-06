"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getSkills } from "../lib/skillApi";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await getSkills();

        setSkills(response.data || []);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="My Skills"
          description="Technologies and skills I work with."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading skills...
          </p>
        ) : skills.length === 0 ? (
          <p className="text-center text-gray-500">
            No skills available yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skill.name}
                  </h3>

                  {skill.proficiency !== undefined && (
                    <span className="text-sm text-gray-500">
                      {skill.proficiency}%
                    </span>
                  )}
                </div>

                {skill.category && (
                  <p className="mt-2 text-sm text-gray-500">
                    {skill.category}
                  </p>
                )}

                {skill.description && (
                  <p className="mt-4 text-gray-600">
                    {skill.description}
                  </p>
                )}

                {skill.proficiency !== undefined && (
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-black"
                      style={{
                        width: `${Math.min(
                          Math.max(
                            Number(skill.proficiency) || 0,
                            0
                          ),
                          100
                        )}%`
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;