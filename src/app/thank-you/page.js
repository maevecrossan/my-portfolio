export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center min-h-screen m-6">
      <div className="mx-auto px-6 py-10 bg-rose-300 shadow-xl text-center rounded-xl ring-4 ring-rose-300 ring-offset-2 ring-offset-white">
        <h1 className="text-white text-3xl font-semibold font-dmserif mb-4">
          Thank You!
        </h1>
        <p className="text-white text-lg max-w-xl">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>
      </div>
    </main>
  );
}