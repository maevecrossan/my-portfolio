'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  const handleCvDownload = (event) => {
    event.preventDefault();

    const link = document.createElement('a');
    link.href = '/MaeveCrossan.pdf';
    link.download = 'MaeveCrossan.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <main className="flex flex-col items-center min-h-screen m-2">
      {/* Header card */}
      <div className="mx-auto px-4 ml-4 mr-4 mt-12 bg-heather shadow-xl text-center rounded-xl ring-4 ring-leaf ring-offset-2 ring-offset-white animate-drop-in" style={{ ['--delay']: '0ms' }}>
        <h3 className="text-white mt-10 mb-6 text-3xl font-semibold font-nunito">
          Get in Touch
        </h3>
        <p className="text-white mb-12 text-lg max-w-2xl mx-auto">
          Have a project idea, a question, or just want to say hi? Drop me a message below - I’ll get back to you as soon as I can.
        </p>
      </div>

      {/* Contact card */}
      <div className="w-full max-w-screen-xl py-10 px-4 animate-drop-in" style={{ ['--delay']: '140ms' }}>
        <div className="relative w-full rounded-3xl mt-10">
          <div className="absolute inset-0 rounded-3xl bg-white/50 pointer-events-none" />
          <div className="relative w-full rounded-3xl p-8 md:p-10 bg-heather/50 backdrop-blur-xl shadow-xl text-evergreen ring-4 ring-leaf ring-offset-2 ring-offset-white">
            {/* Two-column on lg+, stacked on sm/md */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* LEFT: Intro + direct links */}
              <div>
                <div className="border-b border-evergreen/40 pb-4 mb-6">
                  <h4 className="text-mulberry mb-2 text-3xl font-bold font-nunito text-center lg:text-left">
                    Let’s work together
                  </h4>
                  <p className="text-white/90 mt-4">
                    I’m currently open to opportunities and collaborations. I care a lot about accessibility, clean UI, and building helpful, human-centered products.
                  </p>
                </div>

                <div className="grid gap-3 text-mulberry">

                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/maevecrossan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-heather/60 gap-2 px-3 py-2 rounded-xl ring-2 ring-mulberry hover:bg-heather/50 transition"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maeve-crossan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-heather/60 gap-2 px-3 py-2 rounded-xl ring-2 ring-mulberry hover:bg-heather/50 transition"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="/MaeveCrossan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-heather/60 gap-2 px-3 py-2 rounded-xl ring-2 ring-mulberry hover:bg-heather/50 transition"
                      onClick={handleCvDownload}
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} />
                      <span className="font-medium">View CV</span>
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
                <input
                  type="text"
                  name="_gotcha"
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                  aria-label="If you are human, leave this field blank"
                />

                  {/* Optional subject for Formspree inbox grouping */}
                  <input type="hidden" name="_subject" value="Portfolio enquiry from maevecrossan.com" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-md font-nunito font-medium text-mulberry mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-md font-medium font-nunito text-mulberry mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-md font-medium font-nunito text-mulberry mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
                      placeholder="How can I help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-md font-medium font-nunito text-mulberry mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
                      placeholder="Tell me a little about your project or question..."
                    />
                  </div>

                  <input type="hidden" name="_next" value="https://maevecrossan.com/thank-you" />

                  <button
                    type="submit"
                    className="w-full bg-mulberry hover:bg-mulberry/90 text-white font-semibold py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                    Send Message
                  </button>

                  <p className="text-xs text-mulberry/50 mt-2">
                    This form uses Formspree to securely forward messages to my inbox.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
