import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center min-h-screen m-6">
      <div className="mx-auto px-6 py-10 mt-10 bg-white shadow-xl text-center rounded-xl ring-4 ring-white ring-offset-2 ring-offset-rose-300">
        <h1 className="text-rose-400 text-3xl font-semibold font-dmserif mb-4">
          404 — Page Not Found
        </h1>
        <p className="text-zinc-600 text-lg max-w-xl">
          Hmm... the page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="btn font-dmserif mt-6 inline-block rounded-xl bg-rose-100/90 text-rose-400 shadow-md hover:bg-rose-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 border border-rose-100 px-4 py-2"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

