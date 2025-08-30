'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center min-h-screen m-2">
      {/* Header card */}
      <div className="mx-auto px-4 ml-4 mr-4 mt-12 bg-rose-300 shadow-xl text-center rounded-xl ring-4 ring-rose-300 ring-offset-2 ring-offset-white">
        <h3 className="text-white mt-10 mb-6 text-3xl font-semibold font-dmserif">
          Get in Touch
        </h3>
        <p className="text-white mb-12 text-lg max-w-2xl mx-auto">
          Have a project, a question, or just want to say hi? Drop me a message below — I’ll get back to you as soon as I can.
        </p>
      </div>

      {/* Contact card */}
      <div className="w-full max-w-screen-xl py-10 px-4">
        <div className="w-full rounded-3xl p-8 md:p-10 bg-white backdrop-blur-xl shadow-xl text-zinc-800 mt-10 ring-4 ring-rose-300 ring-offset-2 ring-offset-white">
          {/* Two-column on lg+, stacked on sm/md */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Intro + direct links */}
            <div>
              <div className="border-b border-zinc-400/50 pb-4 mb-6">
                <h4 className="text-rose-400 mb-2 text-3xl font-semibold font-dmserif text-center lg:text-left">
                  Let’s work together
                </h4>
                <p className="text-gray-500 mt-4">
                  I’m currently open to opportunities and collaborations. I care a lot about accessibility, clean UI, and building helpful, human-centered products.
                </p>
                <ul className="list-disc list-outside pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Front‑end development (React, Next.js, Tailwind)</li>
                  <li>Back‑end (Django, Python)</li>
                  <li>UI/UX improvements &amp; accessibility</li>
                </ul>
              </div>

              <div className="grid gap-3 text-rose-400">
                <a
                  href="mailto:maevecrossan@gmail.com"
                  className="w-fit inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-2 ring-rose-300 ring-offset-2 ring-offset-white hover:bg-rose-50 transition"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-rose-400" />
                  <span className="font-medium">maevecrossan@gmail.com</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/maevecrossan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-2 ring-rose-300 ring-offset-2 ring-offset-white hover:bg-rose-50 transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-2 ring-rose-300 ring-offset-2 ring-offset-white hover:bg-rose-50 transition"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div>
              <form
                action="https://formspree.io/f/mnnbdvjv"
                method="POST"
                className="grid grid-cols-1 gap-4"
              >
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

                {/* Optional subject for Formspree inbox grouping */}
                <input type="hidden" name="_subject" value="Portfolio enquiry from maevecrossan.com" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-md font-dmserif font-medium text-rose-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-md font-medium font-dmserif text-rose-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-md font-medium font-dmserif text-rose-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-md font-medium font-dmserif text-rose-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    placeholder="Tell me a little about your project or question..."
                  />
                </div>

                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                <button
                  type="submit"
                  className="w-full bg-rose-900 hover:bg-rose-800 text-white font-semibold py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                  Send Message
                </button>

                <p className="text-xs text-rose-900/50 mt-2">
                  This form uses Formspree to securely forward messages to my inbox.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}