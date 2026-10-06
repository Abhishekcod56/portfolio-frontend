import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

async function getBlog(slug) {
  try {
    const response = await fetch(
      `${API_URL}/blogs/slug/${slug}`,
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.data || data.blog || null;
  } catch (error) {
    console.error("Failed to load blog:", error);
    return null;
  }
}

export default async function BlogDetailsPage({
  params
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Blog Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The blog post you are looking for does not
            exist.
          </p>

          <Link
            href="/#blog"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#blog"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Blog
        </Link>

        {blog.featured_image && (
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="h-auto max-h-[500px] w-full object-cover"
            />
          </div>
        )}

        <div className="mt-8">
          {blog.published_at && (
            <p className="text-sm text-gray-500">
              {new Date(
                blog.published_at
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </p>
          )}

          <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {blog.title}
          </h1>

          {blog.author && (
            <p className="mt-4 text-gray-500">
              By {blog.author}
            </p>
          )}

          {blog.excerpt && (
            <p className="mt-8 text-xl leading-8 text-gray-600">
              {blog.excerpt}
            </p>
          )}

          <div
            className="prose prose-lg mt-10 max-w-none leading-8 text-gray-700"
            dangerouslySetInnerHTML={{
              __html:
                blog.content ||
                blog.description ||
                ""
            }}
          />
        </div>
      </article>
    </main>
  );
}