"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getExperience } from "../lib/experienceApi";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const response = await getExperience();

        setExperiences(response.data || []);
      } catch (error) {
        console.error(
          "Failed to load experience:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadExperience();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        year: "numeric"
      }
    );
  };

  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Experience"
          description="My professional experience and career journey."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading experience...
          </p>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-500">
            No experience available yet.
          </p>
        ) : (
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative md:flex md:items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 top-6 z-10 h-7 w-7 rounded-full border-4 border-white bg-black md:left-1/2 md:-translate-x-1/2" />

                  <div
                    className={`ml-12 w-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    {experience.company_logo && (
                      <img
                        src={experience.company_logo}
                        alt={experience.company}
                        className="mb-4 h-12 w-12 rounded-lg object-cover"
                      />
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.position}
                        </h3>

                        <p className="mt-1 font-medium text-gray-700">
                          {experience.company}
                        </p>
                      </div>

                      {experience.is_current && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          Current
                        </span>
                      )}
                    </div>

                    {experience.location && (
                      <p className="mt-3 text-sm text-gray-500">
                        {experience.location}
                      </p>
                    )}

                    <p className="mt-2 text-sm text-gray-500">
                      {formatDate(
                        experience.start_date
                      )}
                      {" - "}
                      {experience.is_current
                        ? "Present"
                        : formatDate(
                            experience.end_date
                          )}
                    </p>

                    {experience.description && (
                      <p className="mt-5 leading-7 text-gray-600">
                        {experience.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;