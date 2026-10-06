"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getServices } from "../lib/serviceApi";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await getServices();

        setServices(response.data || []);
      } catch (error) {
        console.error(
          "Failed to load services:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section
      id="services"
      className="bg-gray-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Services"
          description="Services I provide for businesses and projects."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading services...
          </p>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-500">
            No services available yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {service.icon ? (
                  <div className="mb-6">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl font-bold">
                    +
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;