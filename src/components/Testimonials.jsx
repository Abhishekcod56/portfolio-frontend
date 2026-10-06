"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getTestimonials } from "../lib/testimonialApi";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const response = await getTestimonials();

        const testimonialData = response.data || [];

        setTestimonials(
          testimonialData.filter(
            (testimonial) =>
              testimonial.status !== "draft"
          )
        );
      } catch (error) {
        console.error(
          "Failed to load testimonials:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  return (
    <section
      id="testimonials"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Testimonials"
          description="What people say about my work."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading testimonials...
          </p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-500">
            No testimonials available yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-600">
                      {testimonial.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>

                    {(testimonial.position ||
                      testimonial.company) && (
                      <p className="text-sm text-gray-500">
                        {testimonial.position}

                        {testimonial.position &&
                          testimonial.company &&
                          " · "}

                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-sm tracking-wide">
                    {"★".repeat(
                      Math.min(
                        Math.max(
                          Number(
                            testimonial.rating
                          ) || 5,
                          0
                        ),
                        5
                      )
                    )}
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    &quot;{testimonial.message}&quot;
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;