"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Archedin",
    category: "Architecture Talent Platform",
    description:
      "A product that connects architecture students with firms through real projects, verified portfolios and a clearer path to opportunity.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    href: "https://architecture-talent-platform.vercel.app",
    status: "Live product",
  },
  {
    number: "02",
    title: "Afolaray Tracking",
    category: "Logistics & Shipment Experience",
    description:
      "A shipment-tracking experience that turns complex logistics updates into a simple, reassuring journey for customers.",
    stack: ["Next.js", "Supabase", "API integration"],
    href: "https://www.afolaray.com",
    status: "Client build",
  },
  {
    number: "03",
    title: "Teewhy Bellefood",
    category: "Food & Catering Website",
    description:
      "A warm, responsive catering website designed to showcase meals beautifully and turn browsing into direct WhatsApp orders.",
    stack: ["React", "Vite", "Responsive UI"],
    href: "https://teewhy-bellefood.vercel.app",
    status: "Live website",
  },
  {
    number: "04",
    title: "TLaw Automotive",
    category: "Automotive Dealership Website",
    description:
      "A polished automotive website that showcases available vehicles and gives prospective buyers a clear, direct path to enquire.",
    stack: ["React", "Responsive UI", "Lead generation"],
    href: "https://www.tlawautomotive.com",
    status: "Live website",
  },
  {
    number: "05",
    title: "Portfolio Pulse",
    category: "AI Product Experience",
    description:
      "A structured critique platform that helps designers and developers know what to improve before presenting their work.",
    stack: ["Product design", "React", "AI workflow"],
    href: null,
    status: "In development",
  },
];

const services = [
  {
    number: "01",
    title: "React.js Frontend Development",
    eyebrow: "Interfaces that feel effortless",
    description:
      "I build responsive, accessible React interfaces with clear component systems, thoughtful interactions and performance that holds up in production.",
    points: ["Reusable component architecture", "Responsive across devices", "Accessible, polished interactions"],
  },
  {
    number: "02",
    title: "Next.js & TypeScript Applications",
    eyebrow: "Strong foundations, built to scale",
    description:
      "From marketing websites to full product experiences, I use Next.js and TypeScript to create dependable applications that are easy to maintain.",
    points: ["Type-safe development", "SEO-conscious architecture", "Fast, maintainable delivery"],
  },
  {
    number: "03",
    title: "Product UI Implementation",
    eyebrow: "From design to the real product",
    description:
      "I translate product ideas and high-fidelity designs into precise, usable interfaces without losing the details that make the experience feel premium.",
    points: ["Pixel-aware implementation", "Interaction design", "Consistent design systems"],
  },
  {
    number: "04",
    title: "Backend & API Integration",
    eyebrow: "The experience behind the interface",
    description:
      "I connect products to Supabase, Firebase and third-party services so authentication, data, tracking and business workflows work together cleanly.",
    points: ["Supabase and Firebase", "REST API integration", "Real-time product workflows"],
  },
  {
    number: "05",
    title: "AI Automation",
    eyebrow: "Practical systems that save time",
    description:
      "I help businesses turn repetitive processes into useful AI-assisted workflows, keeping the solution practical, clear and aligned with the real job.",
    points: ["Workflow automation", "AI-assisted experiences", "Business process thinking"],
  },
  {
    number: "06",
    title: "Creative Digital Support",
    eyebrow: "One connected brand experience",
    description:
      "Beyond code, I bring design awareness, digital strategy and creative execution together so a brand communicates consistently across its website and content.",
    points: ["Website strategy", "Visual content direction", "Conversion-focused thinking"],
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose before pixels",
    text: "Every design decision should serve the user and the business—not decoration for its own sake.",
  },
  {
    number: "02",
    title: "Clarity in every layer",
    text: "Clean communication, structured code and simple user journeys make stronger digital products.",
  },
  {
    number: "03",
    title: "Finish with care",
    text: "Responsive behavior, accessibility and the small details matter as much as the first impression.",
  },
];

const stack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "Node.js",
  "Vite",
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Righteous Ogidan — home">
      <span className="brand-mark">R</span>
      <span className="brand-dot" />
      <span className="brand-mark">O</span>
      <span className="brand-label">PORTFOLIO</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 950);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const brief = `Hello Righteous,\n\nMy name is ${data.get("name")}.\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nHow I heard about you: ${data.get("source")}\n\n${data.get("message")}`;
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    window.location.href = `mailto:ogidanrighteous13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className={`loader ${loaded ? "loader--hidden" : ""}`} aria-hidden={loaded}>
        <div className="loader-mark">
          <span>R</span>
          <span className="loader-dot" />
          <span>O</span>
        </div>
        <p>PORTFOLIO</p>
        <div className="loader-line"><span /></div>
      </div>

      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          <p>Navigate</p>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="mobile-linkedin" href="https://ng.linkedin.com/in/righteous-ogidan-386b842b2" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb" aria-hidden="true">
            <span className="orb-ring orb-ring--one" />
            <span className="orb-ring orb-ring--two" />
            <span className="orb-core" />
          </div>

          <div className="hero-statement hero-statement--one" data-reveal>
            <h1>See Possibilities</h1>
            <p>I look beyond the brief to understand the real problem, the people involved and the opportunity worth building for.</p>
          </div>

          <div className="hero-statement hero-statement--two" data-reveal>
            <h2>Engineer Solutions</h2>
            <p>Thoughtful product decisions become responsive interfaces, reliable systems and digital experiences that simply work.</p>
          </div>

          <div className="hero-statement hero-statement--three" data-reveal>
            <h2>Create Impact</h2>
            <p>I build technology to move people and businesses forward—not just to add another website to the internet.</p>
          </div>

          <a className="hero-button" href="#projects" aria-label="Explore selected projects">
            <span>Explore my work</span>
            <ArrowDown size={18} />
          </a>
          <div className="hero-signature">Righteous Ogidan / Software Engineer</div>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="section-shell">
            <div className="section-kicker" data-reveal>
              <span>01</span>
              <p>How I approach the work</p>
            </div>
            <div className="principles-heading" data-reveal>
              <h2 id="principles-title">Good work starts<br />with clear thinking.</h2>
              <p>
                I&apos;m a software engineer and website developer focused on React, Next.js and TypeScript. I combine product thinking, clean execution and creative judgment to turn ideas into experiences people can use.
              </p>
            </div>

            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.number} data-reveal>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>

            <div className="stat-line" data-reveal>
              <div><strong>3+</strong><span>Years building</span></div>
              <div><strong>04</strong><span>Core product areas</span></div>
              <div><strong>NG → Global</strong><span>Ready to collaborate</span></div>
            </div>
          </div>
        </section>

        <div className="stack-marquee" aria-label="Technology stack">
          <div className="stack-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i /></span>
            ))}
          </div>
        </div>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="projects-title-wrap" data-reveal>
            <span className="projects-word projects-word--one">SELECTED</span>
            <h2 className="projects-word projects-word--two" id="projects-title">WORKS</h2>
            <span className="projects-watermark">RO</span>
          </div>

          <div className="section-shell project-layout">
            <div className="project-intro" data-reveal>
              <p className="mono-label">A few things I&apos;ve built</p>
              <p>From product platforms to client websites, each project begins with a real need and ends with a focused digital experience.</p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.title} data-reveal>
                  <span className="project-number">{project.number}</span>
                  <div className="project-main">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </div>
                  <div className="project-action">
                    <span>{project.status}</span>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="project-icon" aria-hidden="true"><Code2 /></span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="services-heading" data-reveal>
              <span className="section-kicker section-kicker--light"><span>02</span><p>What I do best</p></span>
              <h2 id="services-title">SERVICES</h2>
            </div>

            <div className="service-stage" data-reveal>
              <div className="service-tabs" role="tablist" aria-label="Services">
                {services.map((service, index) => (
                  <button
                    key={service.number}
                    type="button"
                    role="tab"
                    id={`service-tab-${index}`}
                    aria-selected={activeService === index}
                    aria-controls="service-panel"
                    className={activeService === index ? "active" : ""}
                    onClick={() => setActiveService(index)}
                  >
                    <span>{service.number}</span>
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>

              <article className="service-panel" id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${activeService}`}>
                <span className="service-index">{services[activeService].number}</span>
                <p className="service-eyebrow">{services[activeService].eyebrow}</p>
                <h3>{services[activeService].title}</h3>
                <p className="service-description">{services[activeService].description}</p>
                <ul>
                  {services[activeService].points.map((point) => (
                    <li key={point}><Check size={16} />{point}</li>
                  ))}
                </ul>
                <div className="service-code" aria-hidden="true">
                  <span>build()</span>
                  <span>withPurpose</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="impact" aria-labelledby="impact-title">
          <img src="/ideas-to-impact.png" alt="A luminous path rising through a deep-blue digital space" />
          <div className="impact-shade" />
          <div className="impact-content section-shell" data-reveal>
            <span className="mono-label">My philosophy</span>
            <h2 id="impact-title">Ideas become<br /><em>impact.</em></h2>
            <p>The best technology feels human, solves something real and leaves people better than it found them.</p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-shell">
            <div className="contact-heading" data-reveal>
              <span className="section-kicker section-kicker--light"><span>03</span><p>Have a project in mind?</p></span>
              <h2 id="contact-title"><span>Let&apos;s</span> Create</h2>
              <p>Something useful, thoughtful and built to last.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-intro" data-reveal>
                <Sparkles size={24} />
                <h3>Tell me what you&apos;re building.</h3>
                <a href="https://ng.linkedin.com/in/righteous-ogidan-386b842b2" target="_blank" rel="noreferrer">
                  <span className="linkedin-glyph">in</span> Connect on LinkedIn <ArrowUpRight size={18} />
                </a>
              </div>

              <form className="contact-form" onSubmit={sendMessage} data-reveal>
                <label>
                  <span>Your name</span>
                  <input name="name" type="text" placeholder="John Doe" autoComplete="name" required />
                </label>
                <label>
                  <span>Your email</span>
                  <input name="email" type="email" placeholder="john@example.com" autoComplete="email" required />
                </label>
                <label>
                  <span>Your number</span>
                  <input name="phone" type="tel" placeholder="+44 7700 900123" autoComplete="tel" required />
                </label>
                <label>
                  <span>How did you hear about me?</span>
                  <input name="source" type="text" placeholder="LinkedIn, Google, Referral..." required />
                </label>
                <label className="form-full">
                  <span>Your message</span>
                  <textarea name="message" placeholder="Tell me about your project..." required />
                </label>
                <button type="submit" className="form-submit">
                  Send Message
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>

            <footer>
              <BrandMark />
              <p>© 2026 Righteous Ogidan. All rights reserved.</p>
              <div>
                <a href="#home">Back to top</a>
                <a href="https://ng.linkedin.com/in/righteous-ogidan-386b842b2" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  IN <ExternalLink size={13} />
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
