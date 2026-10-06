import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for does not
          exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}