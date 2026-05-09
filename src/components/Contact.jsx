import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SOCIAL_BTN =
  'group inline-flex items-center gap-3 border border-portfolio-primary bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-primary transition-[transform,background-color,color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-portfolio-primary hover:text-portfolio-tertiary hover:shadow-lg md:px-8 md:py-3.5 md:text-base motion-reduce:transition-none motion-reduce:hover:translate-y-0'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFeedback({
        tone: 'err',
        text: 'Configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable sends.',
      })
      return
    }

    const form = e.target
    const fd = new FormData(form)
    const user_name = String(fd.get('user_name') ?? '').trim()
    const user_email = String(fd.get('user_email') ?? '').trim()
    const project_type = String(fd.get('project_type') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    /** Shown as the email Subject in your inbox (matches project type picker). */
    const email_subject = project_type || 'Portfolio contact'

    setSending(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email_subject,
          user_name,
          user_email,
          project_type,
          message,
        },
        { publicKey: PUBLIC_KEY },
      )
      setFeedback({
        tone: 'ok',
        text: 'Thanks — I received your message. I reply personally from my inbox (no automated email is sent to you).',
      })
      form.reset()
    } catch {
      setFeedback({
        tone: 'err',
        text: 'Could not send—try emailing directly.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-16 md:text-[13px]"
        >
          08 — Let&apos;s Talk
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="contact-heading"
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-portfolio-primary"
            >
              Got a project in mind?
            </h2>
            <ul className="mt-12 space-y-6 text-lg text-portfolio-secondary md:text-xl md:leading-[1.65]">
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  Email
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="mailto:hammadahmed9110@gmail.com"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  hammadahmed9110@gmail.com
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  Phone
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="tel:+923045291947"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  +92 304-5291947
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  WhatsApp
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="https://wa.me/923045291947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  +92 304-5291947
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  LinkedIn
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="https://www.linkedin.com/in/hammadahmed911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  linkedin.com/in/hammadahmed911
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  GitHub
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="https://github.com/Hammad911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  github.com/Hammad911
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]">
                  Instagram
                </span>
                <br />
                <a
                  data-cursor-pointer
                  href="https://www.instagram.com/hammad9110_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-portfolio-primary underline-offset-2 hover:underline md:text-xl"
                >
                  @hammad9110_
                </a>
              </li>
            </ul>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                data-cursor-pointer
                href="https://www.linkedin.com/in/hammadahmed911"
                target="_blank"
                rel="noopener noreferrer"
                className={SOCIAL_BTN}
                aria-label="LinkedIn profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" className="shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <circle cx="4" cy="4" r="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v10h-4v-10a2 2 0 10-4 0v10h-4V10h4z" />
                </svg>
                LinkedIn
              </a>
              <a
                data-cursor-pointer
                href="https://github.com/Hammad911"
                target="_blank"
                rel="noopener noreferrer"
                className={SOCIAL_BTN}
                aria-label="GitHub profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  <path
                    stroke="none"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.391 2.834 8.098 6.759 9.406.491.089.659-.217.659-.478 0-.235-.017-1.018-.026-2.036-3.058.659-3.694-1.461-3.694-1.461-.495-1.248-1.208-1.581-1.208-1.581-.986-.673.074-.659.074-.659 1.091.076 1.665 1.116 1.665 1.116.967 1.657 2.539 1.179 3.157.903.097-.716.379-1.179.689-1.451-2.441-.276-5.009-2.239-5.009-5.038 0-1.115.389-2.029 1.031-2.743-.098-.279-.459-1.385.097-2.892 0 0 .849-.279 2.764 1.052.801-.229 1.662-.347 2.527-.348.867 0 1.734.117 2.527.348 1.911-1.331 2.761-1.052 2.761-1.052.557 1.507.206 2.613.099 2.892.642.714 1.027 1.628 1.027 2.743 0 2.802-2.576 5.761-5.036 6.036.379.337.734 1.003.734 2.036 0 1.478-.026 2.659-.026 3.036 0 .295.173.579.694.489C21.173 19.089 23 14.379 23 12c-.001-5.523-4.478-10-11-10"
                  />
                </svg>
                GitHub
              </a>
              <a
                data-cursor-pointer
                href="https://wa.me/923045291947"
                target="_blank"
                rel="noopener noreferrer"
                className={SOCIAL_BTN}
                aria-label="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                data-cursor-pointer
                href="https://www.instagram.com/hammad9110_/"
                target="_blank"
                rel="noopener noreferrer"
                className={SOCIAL_BTN}
                aria-label="Instagram profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
                Instagram
              </a>
            </div>

            <p className="mt-12 max-w-xl text-lg leading-relaxed text-portfolio-secondary md:mt-14 md:text-xl">
              Open to internships, freelance, and full-time roles
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="space-y-8 border border-portfolio-border bg-portfolio-tertiary p-10 transition-colors duration-300 hover:border-portfolio-muted md:p-12 lg:p-14"
          >
            <p className="text-sm leading-relaxed text-portfolio-secondary md:text-base">
              I read every submission myself. You will not get an auto-reply—I’ll write back when I can.
            </p>
            <div className="space-y-2">
              <label
                htmlFor="user_name"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]"
              >
                Name
              </label>
              <input
                required
                id="user_name"
                name="user_name"
                type="text"
                autoComplete="name"
                className="portfolio-field w-full border border-portfolio-border bg-portfolio-white px-5 py-4 text-lg text-portfolio-primary md:text-xl"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="user_email"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]"
              >
                Email
              </label>
              <input
                required
                id="user_email"
                name="user_email"
                type="email"
                autoComplete="email"
                className="portfolio-field w-full border border-portfolio-border bg-portfolio-white px-5 py-4 text-lg text-portfolio-primary md:text-xl"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="project_type"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]"
              >
                Project Type
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                defaultValue=""
                className="portfolio-field w-full border border-portfolio-border bg-portfolio-white px-5 py-4 text-lg text-portfolio-primary md:text-xl"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Full-Stack App">Full-Stack App</option>
                <option value="AI Integration">AI Integration</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Security Audit">Security Audit</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-secondary md:text-sm md:tracking-[0.22em]"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="portfolio-field w-full resize-y border border-portfolio-border bg-portfolio-white px-5 py-4 text-lg leading-relaxed text-portfolio-primary md:text-xl md:leading-relaxed"
              />
            </div>

            {feedback ? (
              <p
                className={`text-base md:text-lg ${
                  feedback.tone === 'ok' ? 'text-portfolio-primary' : 'text-portfolio-secondary'
                }`}
                role="status"
              >
                {feedback.text}
              </p>
            ) : null}

            <button
              type="submit"
              data-cursor-pointer
              disabled={sending}
              className="border border-portfolio-primary bg-portfolio-tertiary px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-primary transition-[background-color,opacity] duration-200 ease-out hover:bg-portfolio-white disabled:opacity-50 md:text-base"
            >
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
