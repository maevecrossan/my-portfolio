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
    <main className="flex flex-col items-center min-h-screen w-full px-4 py-10 md:px-10 md:py-16 gap-12 bg-gradient-to-b from-mulberry/10 via-heather/5 to-leaf/10">
      {/* Header card */}
      <section
        className="relative w-full max-w-4xl overflow-hidden rounded-[3rem] bg-heather/90 px-6 py-10 md:px-12 md:py-14 shadow-2xl border border-white/15 ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/20 animate-drop-in"
        style={{ ['--delay']: '0ms' }}
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
        <div className="relative text-center flex flex-col items-center gap-6">
          <h3 id="contact-heading" className="text-white text-4xl md:text-5xl font-melodrama">
            Get in Touch
          </h3>
          <p className="text-white/85 text-base md:text-lg max-w-2xl font-nunito">
            Have a project idea, a question, or just want to say hi? Drop me a message below - I’ll get back to you as soon as I can.
          </p>
        </div>
      </section>

      {/* Contact card */}
      <section className="w-full max-w-6xl animate-drop-in" style={{ ['--delay']: '140ms' }}>
        <div className="relative w-full rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none rounded-[3rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
          <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/25 bg-white/12 backdrop-blur-2xl shadow-2xl ring-4 ring-white/20 ring-offset-4 ring-offset-mulberry/15">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(104,76,96,0.45),rgba(103,114,92,0.35))]" aria-hidden />
            <div className="relative p-8 md:p-12 text-evergreen">
            {/* Two-column on lg+, stacked on sm/md */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* LEFT: Intro + direct links */}
              <div>
                <div className="border-b border-evergreen pb-4 mb-6">
                  <h4 className="text-white/80 mb-2 text-3xl font-bold font-nunito text-center 
                  lg:text-left">
                    Let’s work together
                  </h4>
                  <p className="text-white/90 mt-4">
                    I’m currently open to opportunities and collaborations. I care a lot about accessibility, 
                    clean UI, and building helpful, human-centered products.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-white">
                  <a
                    href="https://github.com/maevecrossan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 font-nunito text-sm text-white/90 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather/40"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maeve-crossan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 font-nunito text-sm text-white/90 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather/40"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="/MaeveCrossan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 font-nunito text-sm text-white/90 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather/40"
                    onClick={handleCvDownload}
                  >
                    <FontAwesomeIcon icon={faFileArrowDown} />
                    <span className="font-medium">View CV</span>
                  </a>
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
                        className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm 
                        focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
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
                        className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm 
                        focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
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
                      className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm 
                      focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
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
                      className="w-full bg-white/90 px-4 py-3 border border-evergreen/30 rounded-xl shadow-sm 
                      focus:outline-none focus:ring-2 focus:ring-mulberry focus:border-mulberry"
                      placeholder="Tell me a little about your project or question..."
                    />
                  </div>

                  <input type="hidden" name="_next" value="https://maevecrossan.com/thank-you" />

                  <button
                    type="submit"
                    className="w-full bg-mulberry hover:bg-mulberry/90 text-white font-semibold py-3 rounded-xl 
                    transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                    Send Message
                  </button>

                  <p className="text-xs text-mulberry mt-2">
                    This form uses Formspree to securely forward messages to my inbox.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
