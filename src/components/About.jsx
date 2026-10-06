"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getAbout } from "../lib/aboutApi";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await getAbout();

        setAbout(
          response.data || response.about || null
        );
      } catch (error) {
        console.error("Failed to load about:", error);
      }
    };

    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="About Me"
          description="A little information about me."
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="flex h-80 w-full max-w-md items-center justify-center rounded-2xl bg-gray-100">
              {about?.profile_image ? (
                <img
                  src={about.profile_image}
                  alt={about.title || "Profile"}
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <span className="text-gray-500">
                  Profile Image
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {about?.title || "About Me"}
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              {about?.description ||
                "About information will appear here once it is added from the CMS."}
            </p>

            <div className="mt-8 space-y-3 text-gray-700">
              {about?.email && (
                <p>
                  <strong>Email:</strong>{" "}
                  {about.email}
                </p>
              )}

              {about?.phone && (
                <p>
                  <strong>Phone:</strong>{" "}
                  {about.phone}
                </p>
              )}

              {about?.location && (
                <p>
                  <strong>Location:</strong>{" "}
                  {about.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;