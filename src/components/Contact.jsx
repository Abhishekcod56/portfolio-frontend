"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { sendContactMessage } from "../lib/contactApi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await sendContactMessage(form);

      setSuccess(
        "Your message has been sent successfully."
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setError(
        error.message ||
          "Failed to send your message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Contact Me"
          description="Have a project or question? Send me a message."
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Project inquiry"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Write your message..."
            />
          </div>

          {success && (
            <p className="mt-5 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
              {success}
            </p>
          )}

          {error && (
            <p className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;