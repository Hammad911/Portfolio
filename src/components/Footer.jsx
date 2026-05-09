import { Link } from 'react-router-dom'

const QUICK = [
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-tertiary py-[4.5rem] md:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1720px] gap-16 px-4 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-12 md:px-6 lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">
        <div className="md:col-span-1">
          <Link
            data-cursor-pointer
            to="/"
            aria-label="Home"
            className="group inline-flex border border-portfolio-border p-4 transition-[border-color,background-color] duration-300 ease-out hover:border-portfolio-primary md:p-5"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
            >
              <rect width="38" height="38" className="fill-portfolio-tertiary" x="1" y="1" />
              <text
                x="20"
                y="26"
                className="fill-portfolio-primary"
                fontFamily="Playfair Display, Georgia, serif"
                fontSize="13"
                fontWeight="700"
                textAnchor="middle"
              >
                HA
              </text>
            </svg>
          </Link>
          <p className="mt-8 max-w-sm text-xl font-normal leading-snug tracking-wide text-portfolio-secondary md:mt-9 md:text-2xl md:leading-[1.45]">
            Full-stack engineer focused on correctness, tempo, and systems that survive real traffic.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-portfolio-muted md:text-xs md:tracking-[0.32em]">
            Navigate
          </p>
          <ul className="mt-10 space-y-4 text-[1.0625rem] md:mt-11 md:space-y-4 md:text-lg">
            {QUICK.map((l) => (
              <li key={l.to}>
                <Link
                  data-cursor-pointer
                  to={l.to}
                  className="text-portfolio-primary transition-colors duration-200 ease-out hover:text-portfolio-muted"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start gap-8 md:items-end md:justify-self-end">
          <div className="flex w-full flex-col gap-4 text-left md:max-w-xs md:items-end md:text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-portfolio-muted md:text-xs md:tracking-[0.32em]">
              Connect
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <a
                href="https://github.com/Hammad911"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="text-[1.0625rem] font-medium text-portfolio-primary transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-portfolio-muted md:text-lg motion-reduce:hover:translate-y-0"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/923045291947"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="text-[1.0625rem] font-medium text-portfolio-primary transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-portfolio-muted md:text-lg motion-reduce:hover:translate-y-0"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/hammad9110_/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="text-[1.0625rem] font-medium text-portfolio-primary transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-portfolio-muted md:text-lg motion-reduce:hover:translate-y-0"
              >
                Instagram
              </a>
            </div>
          </div>
          <button
            type="button"
            data-cursor-pointer
            onClick={scrollTop}
            className="border border-portfolio-primary px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-portfolio-primary transition-[background-color,color] duration-200 ease-out hover:bg-portfolio-white md:px-8 md:text-xs md:tracking-[0.26em]"
          >
            Back to top ↑
          </button>
          <p className="text-[11px] font-medium tracking-wide text-portfolio-muted md:text-right md:text-xs">
            Hammad Ahmed · 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
