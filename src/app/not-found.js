import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center min-h-screen m-6">
      <div className="mx-auto px-6 py-10 mt-10 bg-white shadow-xl text-center rounded-xl ring-4 ring-white ring-offset-2 ring-offset-leaf/40 animate-drop-in" style={{ ['--delay']: '0ms' }}>
        <h1 className="text-mulberry text-3xl font-semibold font-nunito mb-4">
          404 — Page Not Found
        </h1>
        <p className="text-evergreen/80 text-lg max-w-xl">
          Hmm... the page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="btn font-nunito mt-6 inline-block rounded-xl bg-moss/30 text-mulberry shadow-md hover:bg-moss/40 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-leaf/40 border border-leaf/20 px-4 py-2"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
