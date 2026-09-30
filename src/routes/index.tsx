import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2, Download, ExternalLink, Github, Linkedin, Mail, Menu, Phone, Send, Sparkles, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/sayan-portrait.png";
import resume from "@/assets/Sayan_Ghole_Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sayan Ghole — Full-Stack Software Developer" },
    { name: "description", content: "Sayan Ghole is a full-stack software developer specializing in the MERN stack, web applications, and freelance development." },
    { property: "og:title", content: "Sayan Ghole — Full-Stack Software Developer" },
    { property: "og:description", content: "Explore Sayan Ghole's full-stack development work, skills, and StrCod AI debugging project." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});

const nav = ["Home", "About", "Skills", "Services", "Projects", "Experience", "Education", "Contact"];
const skills = [
  { category: "01 / Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { category: "02 / Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  { category: "03 / Database", items: ["MongoDB"] },
  { category: "04 / Strengths", items: ["Full-Stack Development", "Problem Solving", "Quick Decision Making", "Fast Learning"] },
];
const services = [
  { n: "01", icon: Code2, title: "Web Development", description: "Modern, responsive websites that make every interaction feel effortless." },
  { n: "02", icon: Terminal, title: "Full-Stack Development", description: "Complete web applications, from thoughtful interfaces to APIs and databases." },
  { n: "03", icon: BriefcaseBusiness, title: "Freelance Development", description: "Tailored solutions for new ideas, improvements, and features that move projects forward." },
];

function SocialLinks({ dark = false }: { dark?: boolean }) {
  const cls = dark ? "text-ink hover:text-electric" : "text-night-muted hover:text-accent";
  return <div className="flex items-center gap-5">
    <a aria-label="GitHub" title="GitHub" className={`transition-colors ${cls}`} href="https://github.com/Sayan-Ghole" target="_blank" rel="noreferrer"><Github size={19} /></a>
    <a aria-label="LinkedIn" title="LinkedIn" className={`transition-colors ${cls}`} href="https://www.linkedin.com/in/sayan-ghole-aa80202b5/" target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
    <a aria-label="Email" title="Email" className={`transition-colors ${cls}`} href="mailto:sayanghole126@gmail.com"><Mail size={19} /></a>
  </div>;
}

function SectionHeading({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return <div className="mb-10 grid gap-5 border-b border-night-border pb-8 md:mb-14 md:grid-cols-[1fr_1fr] md:items-end">
    <div><span className="section-label">{eyebrow}</span><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-night-text md:text-5xl lg:text-6xl">{title}</h2></div>
    {aside && <p className="max-w-md text-base leading-relaxed text-night-muted md:justify-self-end">{aside}</p>}
  </div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, .2, .5] });
    document.querySelectorAll("section[id]").forEach(section => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  async function submitContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !subject || !message) { setFormError(true); setFormMessage("Please complete all fields before continuing."); return; }
    setSending(true); setFormError(false); setFormMessage("");
    try {
      await emailjs.send("service_oahddtk", "template_nhwtlef", {
        from_name: name, from_email: email, subject, message,
      }, { publicKey: "3giIJGNdxmo2sUvsH" });
      form.reset();
      setFormMessage("Message sent! I'll get back to you soon.");
    } catch {
      setFormError(true);
      setFormMessage("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  return <main className="overflow-hidden bg-night text-night-text">
    <section id="home" className="relative px-3 pt-3 sm:px-6 sm:pt-6 lg:px-10 lg:pt-10">
      <div className="absolute inset-0 page-grid" />
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-md bg-paper text-ink">
        <header className={`fixed left-3 right-3 top-3 z-30 mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-md px-5 py-4 transition-all duration-300 sm:left-6 sm:right-6 sm:top-6 sm:px-8 lg:left-10 lg:right-10 lg:top-10 lg:px-12 xl:grid-cols-[auto_1fr_auto] ${scrolled ? "surface-glass shadow-lg" : "bg-paper"}`}>
          <a href="#home" className="flex min-w-0 items-center gap-2.5 font-display text-lg font-bold" onClick={() => setMenuOpen(false)}><span className="grid size-8 shrink-0 place-items-center rounded-md bg-electric text-primary-foreground"><Code2 size={18} strokeWidth={2.5} /></span><span className="truncate">Sayan<span className="text-electric">.</span></span></a>
          <nav aria-label="Main navigation" className="hidden items-center justify-center gap-5 xl:flex">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-semibold transition-colors hover:text-electric ${active === item.toLowerCase() ? "text-electric" : "text-ink/65"}`}>{item}</a>)}</nav>
          <div className="hidden items-center gap-2 xl:flex"><Button asChild variant="portfolio" size="sm" className="rounded-full px-5"><a href="#contact">Let's talk <ArrowUpRight /></a></Button></div>
          <Button className="justify-self-end xl:hidden" variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          {menuOpen && <nav aria-label="Mobile navigation" className="absolute left-0 right-0 top-full grid grid-cols-2 gap-1 border-t border-ink/10 bg-paper p-4 shadow-xl xl:hidden">{nav.map(item => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className={`rounded-md px-4 py-3 text-sm font-semibold ${active === item.toLowerCase() ? "bg-electric text-primary-foreground" : "text-ink"}`}>{item}</a>)}</nav>}
        </header>

        <div className="relative min-h-[730px] overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:min-h-[720px] lg:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[105px] z-0 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(5.5rem,14vw,15rem)] font-bold leading-none hero-word">DEVELOPER</div>
          <div className="hero-arch absolute left-1/2 top-[104px] h-[310px] w-[260px] -translate-x-1/2 rounded-t-full sm:h-[500px] sm:w-[390px] lg:top-[95px] lg:h-[540px] lg:w-[430px]" />
          <div className="portrait-vignette pointer-events-none absolute left-1/2 top-[70px] z-[1] h-[560px] w-[600px] -translate-x-1/2" />
          <img className="float-slow absolute left-1/2 top-[112px] z-[2] h-[302px] w-auto max-w-none drop-shadow-[0_18px_30px_rgba(2,8,30,0.45)] sm:h-[484px] lg:top-[103px] lg:h-[524px]" src={portrait} width={713} height={1112} alt="Portrait of Sayan Ghole" />
          <span className="absolute left-[8%] top-[255px] z-10 hidden -rotate-12 rounded-full bg-night-text px-5 py-2 text-xs font-semibold shadow-md lg:block">React.js</span>
          <span className="absolute right-[12%] top-[175px] z-10 hidden rotate-12 rounded-full bg-night-text px-5 py-2 text-xs font-semibold shadow-md lg:block">MERN stack</span>
          <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[370px]" />
          <div className="relative z-10 flex h-[625px] flex-col justify-end gap-5 sm:h-[650px] lg:h-[615px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[690px] reveal">
              <p className="mb-3 font-display text-sm font-medium sm:text-base">Hey, I'm Sayan.</p>
              <h1 className="font-display text-[clamp(3.3rem,6.3vw,6.8rem)] font-bold leading-[.96]">Sayan Ghole<span className="text-electric">.</span></h1>
              <p className="mt-3 font-display text-lg font-semibold sm:text-2xl">Full-Stack Software Developer</p>
              <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-ink/70 sm:text-base">Building modern, scalable and user-focused web experiences with the MERN stack and modern web technologies.</p>
              <div className="mt-6 flex flex-wrap gap-2.5"><Button asChild variant="portfolio" className="h-11 rounded-full px-5"><a href="#projects">View Projects <ArrowUpRight /></a></Button><Button asChild variant="portfolioOutline" className="h-11 rounded-full px-5"><a href="#contact">Contact Me <ArrowRight /></a></Button><Button asChild variant="portfolioOutline" className="h-11 rounded-full px-5"><a href={resume.url} download="Sayan_Ghole_Resume.pdf" target="_blank" rel="noreferrer">Resume <Download /></a></Button></div>
            </div>
            <div className="flex items-center justify-between gap-5 lg:mb-1 lg:flex-col lg:items-end"><SocialLinks dark /><a href="#about" className="flex items-center gap-2 text-xs font-semibold uppercase text-ink/65 transition-colors hover:text-electric">Scroll to explore <ArrowDown size={16} /></a></div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-2 py-5 text-[11px] font-semibold uppercase text-night-muted sm:px-0"><span>Independent developer / Open to collaborations</span><span className="hidden sm:inline">Scroll to discover ↓</span></div>
    </section>

    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="01 / About me" title="Built to solve. Wired to learn." aside="The best digital work comes from curiosity, thoughtful decisions, and a willingness to keep evolving." /><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20"><div><p className="font-display text-xl leading-relaxed text-night-text sm:text-2xl">I'm a software developer focused on full-stack web development. My primary expertise is the MERN stack: MongoDB, Express.js, React.js, and Node.js.</p><p className="mt-6 max-w-2xl leading-relaxed text-night-muted">I also work with Tailwind CSS, Laravel, and PHP to build practical web applications. I enjoy solving development problems, learning new technologies, and turning ideas into functional digital products. As a fast learner and quick decision-maker, I adapt to new challenges with purpose.</p></div><dl className="border-t border-night-border">{[["Role", "Full-Stack Software Developer"], ["Specialization", "MERN Stack"], ["Experience", "Freelance Development"], ["Focus", "Web & Full-Stack Development"], ["Approach", "Fast Learner"]].map(([label, value]) => <div key={label} className="grid grid-cols-[100px_1fr] gap-4 border-b border-night-border py-4 text-sm"><dt className="text-night-muted">{label}</dt><dd className="font-medium text-night-text">{value}</dd></div>)}</dl></div></div></section>

    <section id="skills" className="scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="02 / Expertise" title="The tools behind the work." aside="A practical toolkit for building from first sketch to finished product." /><div className="grid gap-3 md:grid-cols-2">{skills.map(group => <div key={group.category} className="group min-h-48 rounded-md border border-night-border bg-night p-6 transition-colors hover:border-electric/70 sm:p-8"><span className="section-label">{group.category}</span><div className="mt-8 flex flex-wrap gap-2">{group.items.map(skill => <span key={skill} className="rounded-full border border-night-border px-3 py-1.5 text-sm text-night-text transition-colors group-hover:border-electric/40">{skill}</span>)}</div></div>)}</div></div></section>

    <section id="services" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="03 / What I do" title="Ideas into working products." aside="From polished websites to complete applications, built around real needs." /><div className="grid gap-4 md:grid-cols-3">{services.map(service => <div key={service.n} className="group flex min-h-[280px] flex-col rounded-md border border-night-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/65 hover:bg-night-raised"><div className="flex items-start justify-between"><service.icon size={30} strokeWidth={1.5} className="text-accent" /><span className="font-display text-xs text-night-muted">{service.n}</span></div><div className="mt-auto"><h3 className="font-display text-2xl font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-night-muted">{service.description}</p></div></div>)}</div></div></section>

    <section id="projects" className="scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="04 / Selected work" title="Projects that solve real problems." aside="A look at the ideas I've built, starting with a tool that makes debugging feel less daunting." /><article className="grid overflow-hidden rounded-md border border-night-border bg-night lg:grid-cols-2"><div className="project-screen relative flex min-h-[350px] items-center justify-center overflow-hidden border-b border-night-border p-6 sm:min-h-[440px] lg:border-b-0 lg:border-r"><div aria-hidden="true" className="absolute inset-0 page-grid"/><div className="relative w-full max-w-[460px] rotate-[-2deg] overflow-hidden rounded-md border border-night-border bg-night shadow-2xl transition-transform duration-500 hover:rotate-0"><div className="flex h-10 items-center gap-2 border-b border-night-border px-4"><span className="size-2 rounded-full bg-destructive"/><span className="size-2 rounded-full bg-accent"/><span className="size-2 rounded-full bg-electric"/><span className="ml-4 font-mono text-[10px] text-night-muted">strcod / debugging assistant</span></div><div className="p-6 sm:p-8"><div className="flex items-center gap-2 font-display text-xl font-bold"><span className="grid size-8 place-items-center rounded bg-electric text-primary-foreground"><Code2 size={18}/></span>StrCod<span className="text-accent">.</span></div><p className="mt-10 font-display text-xl font-semibold sm:text-2xl">Debug with clarity.</p><p className="mt-2 text-xs text-night-muted">Your error, explained in plain language.</p><div className="mt-7 rounded-md border border-night-border bg-night-raised p-4 font-mono text-[11px] leading-6 text-night-muted"><span className="text-destructive">Error:</span> Cannot read properties of undefined<br/><span className="text-accent">→</span> Understand the cause<br/><span className="text-accent">→</span> Follow actionable steps</div><div className="mt-4 flex items-center gap-2 text-[11px] text-accent"><Sparkles size={13}/> A clearer path to the fix</div></div></div></div><div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><span className="section-label">Featured project / AI-assisted development</span><h3 className="mt-5 font-display text-4xl font-bold sm:text-5xl">StrCod<span className="text-accent">.</span></h3><p className="mt-5 text-base leading-relaxed text-night-muted">A web-based debugging assistant for students and early-stage developers. Paste an error message and get a clear explanation with actionable solutions, without writing complex prompts.</p><div className="mt-7 grid gap-3 text-sm text-night-text"><span className="flex items-center gap-3"><Check size={16} className="shrink-0 text-accent"/>Clear, structured error explanations</span><span className="flex items-center gap-3"><Check size={16} className="shrink-0 text-accent"/>Beginner-friendly debugging guidance</span><span className="flex items-center gap-3"><Check size={16} className="shrink-0 text-accent"/>Fast, user-focused response flow</span></div><p className="mt-8 text-xs text-night-muted">AI-assisted debugging · Web application</p><a href="https://lnkd.in/giKPjBuK" target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-accent pb-2 text-sm font-semibold text-accent transition-colors hover:text-night-text">View project <ExternalLink size={16}/></a></div></article></div></section>

    <section id="experience" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="05 / Experience" title="Work shaped by real needs." /><div className="grid gap-5 border-l border-electric pl-7 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pl-10"><div><span className="section-label">Freelance Development</span><h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Freelance Software Developer</h3></div><p className="max-w-xl leading-relaxed text-night-muted">Developing websites and full-stack applications around client requirements. From frontend interactions to backend functionality, I build solutions that adapt to different technical challenges and practical goals.</p></div></div></section>

    <section id="education" className="scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="06 / Education" title="The foundation." /><div className="grid gap-4 md:grid-cols-2"><div className="rounded-md border border-night-border p-7"><span className="section-label">Higher education</span><h3 className="mt-8 font-display text-2xl font-semibold">Techno India University</h3><p className="mt-2 text-night-muted">BCA (Hons.)</p></div><div className="rounded-md border border-night-border p-7"><span className="section-label">Education</span><h3 className="mt-8 font-display text-2xl font-semibold">Makardah Bamasundari Institute</h3><p className="mt-2 text-night-muted">Grade A</p></div></div></div></section>

    <section id="contact" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="07 / Contact" title="Let's build something together." aside="Have a project idea or need a full-stack developer? Let's discuss how I can help turn your idea into a working digital product." /><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-sm text-night-muted">Reach out directly</p><a href="mailto:sayanghole126@gmail.com" className="mt-5 flex items-center gap-3 break-all font-display text-lg font-semibold transition-colors hover:text-accent sm:text-2xl"><Mail size={22} className="shrink-0 text-accent"/>sayanghole126@gmail.com</a><a href="tel:+917439897280" className="mt-6 flex items-center gap-3 font-display text-lg font-semibold transition-colors hover:text-accent sm:text-2xl"><Phone size={22} className="text-accent"/>+91 7439897280</a><div className="mt-10"><SocialLinks /></div></div><form onSubmit={submitContact} className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-semibold uppercase text-night-muted">Name<input name="name" required maxLength={100} placeholder="Your name" className="h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent" /></label><label className="grid gap-2 text-xs font-semibold uppercase text-night-muted">Email<input name="email" type="email" required maxLength={200} placeholder="you@example.com" className="h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent" /></label></div><label className="grid gap-2 text-xs font-semibold uppercase text-night-muted">Subject<input name="subject" required maxLength={180} placeholder="What are we working on?" className="h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent" /></label><label className="grid gap-2 text-xs font-semibold uppercase text-night-muted">Message<textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Tell me about your project..." className="resize-y rounded-md border border-night-border bg-night-raised px-4 py-3 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent" /></label><div className="flex flex-wrap items-center justify-between gap-3"><p className="max-w-xs text-xs text-night-muted">Your message goes straight to my inbox.</p><Button type="submit" disabled={sending} className="h-11 rounded-full px-6">{sending ? "Sending..." : "Send message"} <Send /></Button></div>{formMessage && <p role="status" className={`text-sm ${formError ? "text-destructive" : "text-accent"}`}>{formMessage}</p>}</form></div></div></section>

    <footer className="border-t border-night-border px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-night-muted"><span className="font-display text-base font-bold text-night-text">Sayan<span className="text-accent">.</span></span><a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-accent">Back to top <ChevronRight size={14} className="-rotate-90"/></a></div></footer>
  </main>;
}