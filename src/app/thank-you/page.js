export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center min-h-screen m-10">
      <div className="mx-auto px-6 py-10 bg-heather shadow-xl text-center rounded-xl ring-4 ring-leaf ring-offset-2 ring-offset-white animate-drop-in" style={{ ['--delay']: '0ms' }}>
        <h1 className="text-white text-5xl font-semibold font-nunito mb-4">
          Thank You!
        </h1>
        <p className="text-white text-lg max-w-xl">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>
      </div>
    </main>
  );
}
