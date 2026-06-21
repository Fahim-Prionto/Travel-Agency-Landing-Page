import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Plane,
  FileCheck2,
  Building2,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Star,
  ArrowRight,
  Globe2,
  Users,
  Award,
  Compass,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Camera,
} from "lucide-react";
import hero from "@/assets/hero-travel.jpg";
import imgTicket from "@/assets/service-airticket.jpg";
import imgVisa from "@/assets/service-visa.jpg";
import imgUmrah from "@/assets/service-umrah.jpg";
import imgHotel from "@/assets/service-hotel.jpg";
import imgStudent from "@/assets/service-student.jpg";
import imgWork from "@/assets/service-work.jpg";
import chairman from "@/assets/Chairman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tajin International" },
      {
        name: "description",
        content:
          "Book air tickets, visas, Hajj & Umrah packages and hotels with Bangladesh's trusted travel partner. A gateway of a dream.",
      },
      { property: "og:title", content: "Tajin International Air Travels & Tours" },
      { property: "og:description", content: "A gateway of a dream — air tickets, visas, Umrah, hotels." },
    ],
  }),
  component: Home,
});

const tabs = [
  { id: "ticket", label: "Air Ticket", icon: Plane },
  { id: "work", label: "Work Visa", icon: Briefcase },
  { id: "visit", label: "Visit Visa", icon: Camera },
  { id: "student", label: "Student Visa", icon: GraduationCap },
  { id: "umrah", label: "Umrah", icon: Compass },
] as const;

type TabId = (typeof tabs)[number]["id"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

function Home() {
  const [tab, setTab] = useState<TabId>("ticket");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-card py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-sunset)] text-white shadow-glow">
              <Plane className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">Tajin International</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Air Travels & Tours
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Services", "Hajj", "Gallery", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
              >
                {l}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[image:var(--gradient-sunset)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="tel:+8801925556099"
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-sunset)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> 01925556099
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="mx-5 mt-3 rounded-2xl glass p-4 md:hidden animate-fade-in">
            {["Home", "About", "Services", "Hajj", "Gallery", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate min-h-[100vh] pt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Tropical island view from airplane"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        {/* floating shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-coral/30 blur-3xl animate-float" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-ocean/40 blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-float" />
          <Plane className="absolute left-0 top-1/3 h-16 w-16 text-white/80 drop-shadow-lg animate-plane" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white animate-fade-in">
            <Star className="h-3.5 w-3.5 text-accent" /> · Trusted Worldwide
          </span>
          <h1
            className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Journey,
            <br />
            <span className="bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent [background-size:200%_200%] animate-gradient">
              A Gateway of a Dream
            </span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Air tickets, visas, Umrah & luxury stays — crafted by Bangladesh's most
            dedicated travel team for over two decades.
          </p>

          {/* Booking widget */}
          <div
            className="mx-auto mt-12 max-w-5xl rounded-3xl glass p-2 shadow-elegant animate-scale-in text-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-wrap gap-2 rounded-2xl bg-secondary/50 p-2">
              {tabs.map(({ id, label, icon: Icon }) => {
                const active = tab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`relative flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      active
                        ? "bg-[image:var(--gradient-sunset)] text-white shadow-glow scale-[1.02]"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/60"
                    }`}
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                );
              })}
            </div>

            <form className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3 lg:grid-cols-4">
              {tab === "ticket" && (
                <>
                  <Field label="From">
                    <select className="field-input">
                      <option>DAC — Dhaka</option>
                      <option>CXB — Chattogram</option>
                    </select>
                  </Field>
                  <Field label="To">
                    <select className="field-input">
                      <option>DXB — Dubai</option>
                      <option>SIN — Singapore</option>
                      <option>KUL — Kuala Lumpur</option>
                      <option>JED — Jeddah</option>
                    </select>
                  </Field>
                  <Field label="Departure">
                    <input type="date" className="field-input" />
                  </Field>
                  <Field label="Passengers">
                    <input type="number" min={1} defaultValue={1} className="field-input" />
                  </Field>
                  <Field label="Mobile">
                    <input placeholder="017xxxxxxxx" className="field-input" />
                  </Field>
                  <Field label="Email" className="md:col-span-2">
                    <input placeholder="you@email.com" className="field-input" />
                  </Field>
                  <SubmitButton />
                </>
              )}
              {tab === "work" && (
                <>
                  <Field label="Full Name" className="md:col-span-2">
                    <input placeholder="As per passport" className="field-input" />
                  </Field>
                  <Field label="Destination Country">
                    <select className="field-input">
                      <option>Saudi Arabia</option>
                      <option>United Arab Emirates</option>
                      <option>Qatar</option>
                      <option>Oman</option>
                      <option>Malaysia</option>
                      <option>Romania</option>
                    </select>
                  </Field>
                  <Field label="Profession">
                    <input placeholder="e.g. Driver, Engineer" className="field-input" />
                  </Field>
                  <Field label="Mobile">
                    <input placeholder="017xxxxxxxx" className="field-input" />
                  </Field>
                  <Field label="Email" className="md:col-span-2">
                    <input placeholder="you@email.com" className="field-input" />
                  </Field>
                  <SubmitButton />
                </>
              )}
              {tab === "visit" && (
                <>
                  <Field label="Full Name" className="md:col-span-2">
                    <input placeholder="Your full name" className="field-input" />
                  </Field>
                  <Field label="Country">
                    <select className="field-input">
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Thailand</option>
                      <option>UAE</option>
                      <option>Schengen (Europe)</option>
                      <option>United Kingdom</option>
                    </select>
                  </Field>
                  <Field label="Travel Date">
                    <input type="date" className="field-input" />
                  </Field>
                  <Field label="Mobile">
                    <input placeholder="017xxxxxxxx" className="field-input" />
                  </Field>
                  <Field label="Travelers">
                    <input type="number" min={1} defaultValue={1} className="field-input" />
                  </Field>
                  <SubmitButton />
                </>
              )}
              {tab === "student" && (
                <>
                  <Field label="Full Name" className="md:col-span-2">
                    <input placeholder="As per passport" className="field-input" />
                  </Field>
                  <Field label="Study Destination">
                    <select className="field-input">
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>Germany</option>
                      <option>Malaysia</option>
                    </select>
                  </Field>
                  <Field label="Course Level">
                    <select className="field-input">
                      <option>Foundation</option>
                      <option>Undergraduate</option>
                      <option>Masters</option>
                      <option>PhD</option>
                    </select>
                  </Field>
                  <Field label="Mobile">
                    <input placeholder="017xxxxxxxx" className="field-input" />
                  </Field>
                  <Field label="Email" className="md:col-span-2">
                    <input placeholder="you@email.com" className="field-input" />
                  </Field>
                  <SubmitButton />
                </>
              )}
              {tab === "umrah" && (
                <>
                  <Field label="Full Name" className="md:col-span-2">
                    <input placeholder="Pilgrim name" className="field-input" />
                  </Field>
                  <Field label="Duration">
                    <select className="field-input">
                      <option>5 Days</option>
                      <option>7 Days</option>
                      <option>10 Days</option>
                      <option>14 Days</option>
                    </select>
                  </Field>
                  <Field label="Departure">
                    <input type="date" className="field-input" />
                  </Field>
                  <Field label="Mobile">
                    <input placeholder="017xxxxxxxx" className="field-input" />
                  </Field>
                  <SubmitButton className="lg:col-span-4" />
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-secondary/40 py-4 overflow-hidden">
        <div className="flex w-max gap-12 animate-marquee whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {[
                "Emirates",
                "Qatar Airways",
                "Singapore Airlines",
                "Turkish Airlines",
                "Etihad",
                "Saudia",
                "Biman Bangladesh",
                "Malaysia Airlines",
              ].map((b) => (
                <span key={b} className="flex items-center gap-3">
                  <Plane className="h-4 w-4 text-coral" />
                  {b}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">
              Our Services
            </span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Everywhere you want to <span className="gradient-text">go</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a quick getaway to a once-in-a-lifetime pilgrimage — we handle
              every detail so you can just travel.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { title: "Air Ticket", img: imgTicket, desc: "Best fares on 100+ airlines worldwide.", tag: "Domestic & International" },
              { title: "Work Visa", img: imgWork, desc: "Career abroad — KSA, UAE, Qatar, Malaysia & more.", tag: "Employer-backed" },
              { title: "Visit Visa", img: imgVisa, desc: "Tourist & family visit visas for 40+ countries.", tag: "Fast Processing" },
              { title: "Student Visa", img: imgStudent, desc: "Study in UK, Canada, Australia, USA & Germany.", tag: "Admission Support" },
              { title: "Umrah", img: imgUmrah, desc: "Curated spiritual packages with full care.", tag: "5 / 7 / 10 / 14 Days" },
            ].map((s, i) => (
              <article
                key={s.title}
                data-reveal
                style={{ animationDelay: `${i * 0.1}s` }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {s.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                      Enquire <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-sunset)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] [background-size:200%_200%] animate-gradient" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 text-center text-white md:grid-cols-4">
          {[
            { n: 350, s: "+", l: "Trusted Agencies", icon: Award },
            { n: 4, s: "", l: "Visa Countries", icon: Globe2 },
            { n: 600, s: "+", l: "Hajj Pilgrims / Year", icon: Compass },
            { n: 80, s: "", l: "Team Members", icon: Users },
          ].map((stat, i) => (
            <div
              key={stat.l}
              data-reveal
              style={{ animationDelay: `${i * 0.1}s` }}
              className="rounded-2xl glass-dark p-6"
            >
              <stat.icon className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-4 text-4xl font-bold md:text-5xl">
                <Counter to={stat.n} suffix={stat.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/80">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">
                Kind Words
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                What our <span className="gradient-text">travelers</span> say
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-secondary"
            >
              View all reviews <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                q: "One of the largest travel agencies in the country. Skilled workforce and excellent after-sales service.",
                n: "Bayazid Yaqub Durbar",
              },
              {
                q: "Professional service in competitive cost. Highly recommend for any travel arrangement.",
                n: "Sumon T. B.",
              },
              {
                q: "Got my Singapore visa within 2 business days. Super smooth process, brilliant team.",
                n: "Sabrul Alam",
              },
              {
                q: "Very good advisors who know exactly what to do and what to say. Top service.",
                n: "Md. Maruf",
              },
            ].map((t, i) => (
              <figure
                key={t.n}
                data-reveal
                style={{ animationDelay: `${i * 0.08}s` }}
                className="group relative rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-coral/50 hover:shadow-elegant"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-sunset)] text-sm font-bold text-white">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">Verified traveler</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MD MESSAGE */}
      <section id="about" className="relative overflow-hidden py-24">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-ocean/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="relative" data-reveal>
            <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-sunset)] opacity-30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary shadow-elegant">
              <img src={chairman} alt="Chairman" className="h-full w-full object-cover" />
            </div>
            <div className="mt-5 text-center">
              <div className="text-2xl font-bold">MD TOUHIDUL ISLAM UJJAL</div>
              <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Chairman</div>
            </div>
          </div>
          <div data-reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">
              From the Desk of MD
            </span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Travel, <span className="gradient-text">reimagined</span> for the modern dreamer.
            </h2>
            <p className="mt-6 text-muted-foreground">
              It gives me immense pleasure to introduce Valencia Air Travels & Tours
              Limited — a leading travel services company powered by modern technology
              and a passion for hospitality. In a world where information moves at the
              speed of light, we are committed to delivering travel experiences that
              are efficient, personal, and deeply respectful of every traveler's dignity.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team of 80+ specialists, advanced booking tools, and decades of
              trusted partnerships allow us to provide consistent, fairly priced
              services across air tickets, visas, Hajj & Umrah, and corporate travel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-sunset)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
              >
                Start Planning <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-10 md:p-16">
          <div className="absolute inset-0 bg-[image:var(--gradient-sunset)] [background-size:200%_200%] animate-gradient" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_60%,white_0,transparent_40%)]" />
          <div className="relative grid gap-10 text-white md:grid-cols-2 md:items-center">
            <div data-reveal>
              <h2 className="text-4xl font-bold md:text-5xl">
                Ready for your next adventure?
              </h2>
              <p className="mt-4 max-w-md text-white/90">
                Talk to our travel experts today. We respond within minutes — and we
                love a good travel story.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+8801925556099" className="flex items-center gap-3 group">
                  <span className="grid h-10 w-10 place-items-center rounded-full glass-dark animate-pulse-glow">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="group-hover:underline">+880 1925 556099</span>
                </a>
                <a href="mailto:tajinir2025@gmail.com" className="flex items-center gap-3 group">
                  <span className="grid h-10 w-10 place-items-center rounded-full glass-dark">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="group-hover:underline">tajinir2025@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full glass-dark">
                    <MapPin className="h-4 w-4" />
                  </span>
                  56, Mohakhali Plaza, (5th Floor), Mohakhali, Dhaka-1212
                </div>
              </div>
            </div>
            <form
               data-reveal
              className="rounded-3xl glass-dark p-6 md:p-8 space-y-4"
            >
              <Field label="Name" tone="dark">
                <input className="field-input-dark" placeholder="Your name" />
              </Field>
              <Field label="Email" tone="dark">
                <input className="field-input-dark" placeholder="you@email.com" />
              </Field>
              <Field label="How can we help?" tone="dark">
                <textarea
                  rows={4}
                  className="field-input-dark resize-none"
                  placeholder="Tell us about your dream trip..."
                />
              </Field>
              <button
                type="button"
                className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-foreground transition hover:scale-[1.02] hover:shadow-elegant"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-sunset)] text-white">
                <Plane className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-bold">Tajin International</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A gateway of a dream — crafting unforgettable journeys.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:scale-110 hover:border-coral hover:text-coral"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { t: "Explore", l: ["Air Ticket", "Hotel Booking", "Hajj & Umrah", "About Us", "Contact"] },
            { t: "Support", l: ["Refund Policy", "Terms", "Privacy", "FAQ"] },
            { t: "Contact", l: ["+8801925556099", "tajinir2025@gmail.com", "56, Mohakhali Plaza, (5th Follor), Shaheed Tajuddin Ahmed Sharani, Rasulbag, Mohakhali, Dhaka-1212"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="font-semibold">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-coral transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 Tajin International.✦ Developed By Softobro.
        </div>
      </footer>

      <style>{`
        .field-input {
          width: 100%;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          transition: all .2s;
          outline: none;
        }
        .field-input:focus {
          border-color: var(--color-coral);
          box-shadow: 0 0 0 3px color-mix(in oklch, var(--color-coral) 18%, transparent);
        }
        .field-input-dark {
          width: 100%;
          background: color-mix(in oklch, white 12%, transparent);
          border: 1px solid color-mix(in oklch, white 22%, transparent);
          border-radius: 0.75rem;
          padding: 0.75rem 0.9rem;
          font-size: 0.9rem;
          color: white;
          outline: none;
          transition: all .2s;
        }
        .field-input-dark::placeholder { color: color-mix(in oklch, white 60%, transparent); }
        .field-input-dark:focus {
          border-color: white;
          background: color-mix(in oklch, white 20%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
  tone = "light",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <label className={`block text-left ${className}`}>
      <span
        className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${
          tone === "dark" ? "text-white/80" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function SubmitButton({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end ${className}`}>
      <button
        type="button"
        className="group relative w-full overflow-hidden rounded-xl bg-[image:var(--gradient-sunset)] px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02]"
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          Request to Contact <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </div>
  );
}
