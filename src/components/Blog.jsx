"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { getBlogs } from "../lib/blogApi";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await getBlogs();

        const blogData = response.data || [];

        setBlogs(
          blogData.filter(
            (blog) => blog.status === "published"
          )
        );
      } catch (error) {
        console.error(
          "Failed to load blogs:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="bg-gray-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Latest Blog"
          description="Articles, tutorials and thoughts."
        />

        {loading ? (
          <p className="text-center text-gray-500">
            Loading blogs...
          </p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">
            No published blogs available yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-52 overflow-hidden bg-gray-100">
                  {blog.featured_image ? (
                    <img
                      src={blog.featured_image}
                      alt={blog.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {blog.published_at && (
                    <p className="text-sm text-gray-500">
                      {new Date(
                        blog.published_at
                      ).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        }
                      )}
                    </p>
                  )}

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {blog.title}
                  </h3>

                  {blog.excerpt && (
                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {blog.excerpt}
                    </p>
                  )}

                  {blog.author && (
                    <p className="mt-4 text-sm text-gray-500">
                      By {blog.author}
                    </p>
                  )}

                  <a
                    href={`/blog/${blog.slug}`}
                    className="mt-5 inline-block font-semibold text-gray-900 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;