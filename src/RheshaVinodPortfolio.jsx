import { useState, useEffect, useRef } from "react";

const data = {
  name: "Rhesha Vinod",
  role: "Software Engineer",
  tagline: "SDE Intern @ SprintRay | MSCS @ USC | Backend Systems · Agentic AI · Multimodal",
  location: "Los Angeles, CA",
  email: "rvinod@usc.edu",
  phone: "(213) 723-9993",
  linkedin: "linkedin.com/in/rheshavinod/",
  github: "github.com/RheshaVinod/",
  about:
    "MSCS student at USC (class of 2027) focused on ML systems and distributed backend engineering. Currently building an MCP server at SprintRay that lets LLM-based agents interact with the platform. Previously led a monolith-to-microservices migration across 10+ services at BT Group and built a patent-pending GenAI mobile app at Bosch. Open to SWE, ML Engineering, and Applied AI roles (full-time 2027).",
  stats: [
    { value: 10, suffix: "+", label: "Microservices delivered" },
    { value: 2, suffix: "+", label: "Years of experience" },
    { value: 5, suffix: "", label: "Featured projects" },
    { value: 5, suffix: "", label: "Awards & honors" },
  ],
  education: [
    {
      school: "University of Southern California",
      degree: "M.S. Computer Science",
      period: "Aug 2025 – May 2027",
    },
    {
      school: "PES University",
      degree: "B.Tech Computer Science",
      period: "Dec 2020 – Aug 2024",
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "SprintRay Inc.",
      period: "Jun 2026 – Present",
      bullets: [
        "Designing and building a Model Context Protocol (MCP) server in TypeScript that exposes SprintRay's platform capabilities as standardized tools, enabling any LLM-based agent to interact with the product.",
        "Deployed on AWS with a focus on scalability, reliability, and secure tool access.",
      ],
    },
    {
      role: "Software Engineer (Part-time)",
      company: "USC Information Technology Services",
      period: "Apr 2026 – Jun 2026",
      bullets: [
        "Designed and built a real-time computer vision service (YOLOv8, OpenCV, Python) with a REST inference API to detect and verify classroom equipment across campus infrastructure, deployed for automated monitoring at scale.",
        "Improved site performance and reliability through frontend/backend fixes and performance optimization.",
      ],
    },
    {
      role: "Developer",
      company: "USC Annenberg Media",
      period: "Feb 2026 – Apr 2026",
      bullets: [
        "Delivered features and resolved bugs and JIRA tickets for the Annenberg News platform using React and ArcXP within a Scrum-based Agile team.",
        "Leveraged Google Analytics and ML tools to support data-driven improvements.",
      ],
    },
    {
      role: "Software Engineer",
      company: "BT Group (Openreach)",
      period: "Jul 2024 – Jul 2025",
      bullets: [
        "Led the migration of a monolithic orchestration system (SOGEA) to a microservices architecture in Java and Spring Boot, delivering 10+ independently deployable services and improving scalability and deployment reliability.",
        "Owned a production microservice end-to-end and contributed to 10+ others; optimized inter-service messaging with IBM MQ and RabbitMQ to reduce message latency and increase system throughput.",
        "Drove a company-wide Java 11 upgrade, using OpenRewrite to automate 60%+ of complex code transformations across the codebase.",
        "Led a team at the AWS Q Developer hackathon, building workflow automations that improved process efficiency by 25%.",
      ],
    },
    {
      role: "Associate Engineer Intern",
      company: "BT Group (Openreach)",
      period: "Jan 2024 – Jul 2024",
      bullets: [
        "Automated workflow management using Camunda 7, improving deployment reliability by 30%.",
        "Delivered technical presentation on Spring Boot + Camunda BPM integration; improved process visibility by 40%.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Bosch Global Software Technologies",
      period: "Jun 2023 – Jul 2023",
      bullets: [
        "Co-developed a cross-platform mobile application ('GPT Manual') in React Native integrating a Generative AI backend, achieving 90% prediction accuracy in real time.",
        "Solution currently under Bosch's formal patent review process.",
      ],
    },
  ],
  projects: [
    {
      title: "Distributed Key-Value Store",
      kind: "Distributed Systems",
      tags: ["Java", "Consistent Hashing", "Replication", "Fault Tolerance"],
      desc: "Redis-inspired distributed key-value store in Java with TCP GET/SET/DELETE, concurrent client handling, write-ahead logging, leader–follower replication and consistent hashing. Benchmarked at ~43k GET ops/sec and ~6k SET ops/sec.",
      link: "https://github.com/RheshaVinod/distributed-key-value-storage-system",
    },
    {
      title: "Rocket Engine Anomaly Detection",
      kind: "ML Systems",
      tags: ["LSTM", "FastAPI", "Docker"],
      desc: "Production-grade anomaly detection on NASA CMAPSS jet engine telemetry using an LSTM model. F1-score 0.93 — an 87% improvement over classical baselines — shipped as a Dockerised FastAPI service with a real-time mission control dashboard.",
      link: "https://rheshavinod.github.io/rocket-mission-control/",
    },
    {
      title: "Cross-Modal Attribution for Medical VLMs",
      kind: "Explainability",
      tags: ["PyTorch", "CLIP", "ViT"],
      desc: "Explainability methods for CLIP-based ViT models, analyzing cross-attention and multimodal embeddings on medical image–text datasets.",
      link: null,
    },
    {
      title: "Surgical Knowledge Swapping in LLMs",
      kind: "Model Editing",
      tags: ["Qwen", "ROME", "MEMIT", "LoRA"],
      desc: "Targeted knowledge editing pipelines for LLMs, improving factual update precision while minimizing unintended model interference.",
      link: "https://github.com/aryanavi6802/CSCI-544-Surgical-Knowledge-Swapping",
    },
    {
      title: "Multimodal Deepfake Detection",
      kind: "Audio-Visual ML",
      tags: ["ResNet", "CNN/LSTM", "SyncNet"],
      desc: "Multimodal deepfake detector combining visual and audio streams, achieving 99.35% accuracy (ROC-AUC 0.99996) on the FakeAVCeleb dataset.",
      link: "https://github.com/JeevikaK/Deepfake-Detection",
    },
  ],
  skills: [
    {
      title: "Backend & Systems",
      desc: "Designing services that stay up. Spring Boot and FastAPI in production, message-driven architectures, and the migration work that turns a monolith into something a team can actually ship.",
      tags: ["Spring Boot", "Node.js", "FastAPI", "REST APIs", "Microservices", "IBM MQ", "RabbitMQ", "Camunda", "Distributed Systems"],
    },
    {
      title: "AI & Machine Learning",
      desc: "From transformer internals to shipped inference endpoints — LLM tooling, agentic systems, computer vision and the multimodal work in between.",
      tags: ["LLMs", "PyTorch", "HuggingFace", "Transformers", "OpenCV", "YOLOv8", "Deep Learning", "NLP", "Scikit-learn"],
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Containerised, deployed and observable. AWS-native services with CI/CD pipelines that make releases boring in the best way.",
      tags: ["AWS (Lambda, EC2, S3)", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
    {
      title: "Languages & Data",
      desc: "Comfortable across the stack — strongly typed backend work, Python for research and modelling, and the databases that sit underneath.",
      tags: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "MySQL", "MongoDB", "ChromaDB"],
    },
    {
      title: "Frontend",
      desc: "Interfaces that stay out of the way. React on the web, React Native on mobile, with an eye on performance and accessibility.",
      tags: ["React.js", "React Native", "Vite"],
    },
  ],
  publications: [
    {
      title: "Secure and Intelligent Crop Supply Chain System Using Distributed Ledger Technology and Deep Learning",
      venue: "IEEE Xplore",
      date: "May 2024",
      link: "https://ieeexplore.ieee.org/document/10544073/",
    },
  ],
  honors: [
    {
      head: "Top 10 — Google X Origin Weekend Impact Hackathon",
      body: "Selected in the top 10 at the TIE Hub / USC Viterbi hackathon for pitching an environmental solution to reduce tire wear particle pollution.",
    },
    {
      head: "Technical Excellence Award — BT Group",
      body: "Recognised for the large-scale monolith-to-microservices system migration across the SOGEA orchestration platform.",
    },
    {
      head: "Top 3 — Bosch Innovation Challenge",
      body: "Placed in the top three company-wide for a GenAI product concept that later became the patent-pending 'GPT Manual' application.",
    },
    {
      head: "Shortlisted — BugsandBytes Hackathon 2022",
      body: "Shortlisted from the open field at the BugsandBytes national hackathon.",
    },
    {
      head: "Prof. CNR & MRD Scholarship — 6× awardee",
      body: "Awarded six consecutive times for placing in the top 2% of the cohort, carrying a 50% tuition waiver.",
    },
  ],
};

/* ————————————————— tokens ————————————————— */

/* Light theme. Structure and type scale follow nyro.framer.website;
   its ink/pastel hues are kept, its dark ground is inverted. */
const paper = "#FAFAFA";        // page ground
const ink = "#0A0A0C";          // primary text
const muted = "rgba(10,10,12,0.62)";
const faint = "rgba(10,10,12,0.44)";
const surface = "#FFFFFF";      // elevated card ground
const sunken = "#F1F1F2";       // recessed chip inside a card
const onPastel = "#0A0A0C";     // text sitting on a pastel field
const hoverInk = "#2F2F2F";     // solid-pill hover
const line = "rgba(10,10,12,0.09)";
const lineStrong = "rgba(10,10,12,0.16)";
const glass = "rgba(255,255,255,0.72)";

const pastels = ["#CBD0FF", "#B5FFD7", "#F9E3FE", "#BDEAFF", "#F8FDDA", "#F2FFFF"];

const display = "'Manrope', system-ui, sans-serif";
const monoFont = "'Fragment Mono', ui-monospace, monospace";

const label = (color = faint) => ({
  fontFamily: monoFont,
  fontSize: "13px",
  letterSpacing: "0.02em",
  color,
  lineHeight: 1.6,
});

const headline = {
  fontFamily: display,
  fontWeight: 700,
  letterSpacing: "-0.04em",
  lineHeight: 0.9,
  margin: 0,
  color: ink,
};

const sectionTitle = {
  fontFamily: display,
  fontWeight: 600,
  fontSize: "clamp(26px, 3.4vw, 44px)",
  letterSpacing: "-0.03em",
  lineHeight: 1.12,
  margin: 0,
  color: ink,
};

const body = {
  fontFamily: display,
  fontWeight: 400,
  fontSize: "17px",
  lineHeight: 1.65,
  color: muted,
  letterSpacing: "-0.01em",
};

const pill = {
  fontFamily: display,
  fontWeight: 500,
  fontSize: "15px",
  letterSpacing: "-0.01em",
  borderRadius: "100px",
  padding: "13px 22px",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  transition: "background 0.3s ease, color 0.3s ease, transform 0.3s ease",
};

const pillDark = { ...pill, background: ink, color: paper };
const pillGhost = { ...pill, background: "transparent", color: ink, boxShadow: `inset 0 0 0 1px ${lineStrong}` };

/* ————————————————— hooks ————————————————— */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start = null;
    const tick = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ————————————————— pieces ————————————————— */

function Eyebrow({ children }) {
  return <span style={{ ...label(), textTransform: "lowercase" }}>{children}</span>;
}

function SectionHead({ tag, title, right }) {
  return (
    <div className="sec-head">
      <Eyebrow>{tag}</Eyebrow>
      <h2 style={sectionTitle}>{title}</h2>
      {right ? <div className="sec-head-right">{right}</div> : null}
    </div>
  );
}

function Tag({ children, tone }) {
  return (
    <span style={{
      fontFamily: monoFont,
      fontSize: "12px",
      letterSpacing: "0.01em",
      color: onPastel,
      background: tone,
      borderRadius: "100px",
      padding: "7px 13px",
      whiteSpace: "nowrap",
    }}>
      <span style={{ opacity: 0.4 }}>#</span> {children}
    </span>
  );
}

const navLinks = [
  { id: "about", text: "About" },
  { id: "experience", text: "Experience" },
  { id: "projects", text: "Projects" },
  { id: "skills", text: "Skills" },
  { id: "publications", text: "Publications" },
];

function Nav({ active, go }) {
  const links = navLinks;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" style={{ opacity: scrolled ? 0.96 : 1 }}>
      <div className="nav-left">
        <button onClick={() => go("top")} className="chip chip-brand">R_V</button>
        <div className="chip chip-links">
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} className="nav-link" style={{
              color: active === l.id ? ink : "rgba(10,10,12,0.40)",
            }}>{l.text}</button>
          ))}
        </div>
      </div>

      <a href={`mailto:${data.email}`} className="chip chip-cta"
        onMouseEnter={e => { e.currentTarget.style.background = hoverInk; }}
        onMouseLeave={e => { e.currentTarget.style.background = ink; }}>
        Contact me <span aria-hidden>→</span>
      </a>
    </nav>
  );
}

function RotatingBadge() {
  const text = "AVAILABLE FOR SWE / ML ROLES / FULL-TIME 2027 / ";
  return (
    <div className="badge">
      <svg viewBox="0 0 200 200" width="100%" height="100%" className="badge-spin" aria-hidden>
        <defs>
          <path id="ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text fontFamily={monoFont} fontSize="12.5" letterSpacing="3.1" fill={muted}>
          <textPath href="#ring" startOffset="0">{text}{text}</textPath>
        </text>
      </svg>
      <span className="badge-core" aria-hidden>↓</span>
    </div>
  );
}

function Hero({ go }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const rise = (d) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${d}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${d}s`,
  });

  return (
    <header className="hero" id="about">
      <div className="hero-stage">
        <div style={{ ...rise(0), marginBottom: "26px" }}>
          <span className="hero-eyebrow">Software Engineer · ML · Grad Student</span>
        </div>
        <h1 className="hero-name" style={rise(0.08)}>{data.name}</h1>
      </div>

      <div className="hero-foot">
        <div style={rise(0.24)}>
          <p style={{ ...body, maxWidth: "480px", margin: "0 0 28px" }}>{data.about}</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={`mailto:${data.email}`} style={pillDark}
              onMouseEnter={e => { e.currentTarget.style.background = hoverInk; }}
              onMouseLeave={e => { e.currentTarget.style.background = ink; }}>
              contact me <span aria-hidden>↗</span>
            </a>
            <button onClick={() => go("projects")} style={pillGhost}
              onMouseEnter={e => { e.currentTarget.style.background = surface; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              see my work
            </button>
          </div>
        </div>
        <div style={{ ...rise(0.36), display: "flex", justifyContent: "flex-end" }}>
          <RotatingBadge />
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const [ref, inView] = useInView(0.35);
  return (
    <section ref={ref} className="stats">
      {data.stats.map((s, i) => <Stat key={s.label} stat={s} active={inView} index={i} />)}
    </section>
  );
}

function Stat({ stat, active, index }) {
  const n = useCountUp(stat.value, active, 1200 + index * 180);
  return (
    <div className="stat">
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: "clamp(40px, 6vw, 68px)", letterSpacing: "-0.04em", lineHeight: 1, color: ink }}>
        {n}{stat.suffix}
      </div>
      <div style={{ ...label(muted), marginTop: "10px" }}>{stat.label}</div>
    </div>
  );
}

function Ticker() {
  const items = ["Backend Systems", "Agentic AI", "Distributed Systems", "Multimodal ML", "MCP & LLM Tooling", "Computer Vision", "Microservices"];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[0, 1].map(k => (
          <div key={k} aria-hidden={k === 1} style={{ display: "inline-flex" }}>
            {items.map(t => (
              <span key={t} style={{ ...label(muted), display: "inline-flex", alignItems: "center", fontSize: "14px" }}>
                {t}
                <span style={{ color: lineStrong, margin: "0 26px" }}>/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="projects" className="section">
      <SectionHead
        tag="selected work"
        title={<>Projects built to ship, not<br className="br-md" /> just to demo</>}
        right={
          <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" style={pillGhost}
            onMouseEnter={e => { e.currentTarget.style.background = surface; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
            see all works <span aria-hidden>↗</span>
          </a>
        }
      />
      <div className="work-grid">
        {data.projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} style={{ height: "100%" }}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  const tone = pastels[index % pastels.length];
  const clickable = Boolean(project.link);

  return (
    <article
      onClick={() => clickable && window.open(project.link, "_blank", "noopener,noreferrer")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        background: surface,
        border: `1px solid ${line}`,
        boxShadow: hover
          ? "0 6px 16px rgba(10,10,12,0.10), 0 22px 48px rgba(10,10,12,0.14)"
          : "0 1px 2px rgba(10,10,12,0.04), 0 10px 30px rgba(10,10,12,0.06)",
        borderRadius: "22px",
        padding: "10px",
        cursor: clickable ? "pointer" : "default",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
      }}
    >
      <div style={{
        borderRadius: "16px",
        background: tone,
        minHeight: "180px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ ...label(onPastel), opacity: 0.55 }}>{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden style={{
            fontFamily: display, fontSize: "20px", color: onPastel,
            transform: hover ? "translate(3px,-3px)" : "none",
            transition: "transform 0.35s ease",
            opacity: clickable ? 1 : 0.25,
          }}>↗</span>
        </div>
        <div style={{
          fontFamily: display, fontWeight: 700,
          fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.03em",
          lineHeight: 1.08, color: onPastel,
        }}>
          {project.title}
        </div>
      </div>

      <div style={{ padding: "22px 14px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ ...label(faint), marginBottom: "10px" }}>{project.kind}</span>
        <p style={{ ...body, fontSize: "15px", margin: "0 0 20px", flex: 1 }}>{project.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontFamily: monoFont, fontSize: "11.5px", color: muted,
              background: sunken, borderRadius: "100px", padding: "6px 12px",
              boxShadow: `inset 0 0 0 1px ${line}`, whiteSpace: "nowrap",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead tag="experience" title={<>Where I&rsquo;ve shipped<br className="br-md" /> production software</>} />
      <div>
        {data.experience.map((e, i) => (
          <Reveal key={`${e.company}-${e.period}`} delay={0.04}>
            <div className="row">
              <span style={label(faint)}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 style={{
                  fontFamily: display, fontWeight: 600,
                  fontSize: "clamp(21px, 2.6vw, 30px)", letterSpacing: "-0.03em",
                  lineHeight: 1.15, margin: "0 0 6px", color: ink,
                }}>{e.company}</h3>
                <div style={{ ...label(muted), marginBottom: "16px" }}>{e.role}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px", maxWidth: "760px" }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span aria-hidden style={{ color: lineStrong, lineHeight: 1.65, flexShrink: 0 }}>—</span>
                      <span style={{ ...body, fontSize: "15px" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="row-meta" style={label(faint)}>{e.period}</span>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="row">
            <span style={label(faint)}>{String(data.experience.length + 1).padStart(2, "0")}</span>
            <div>
              <h3 style={{
                fontFamily: display, fontWeight: 600,
                fontSize: "clamp(21px, 2.6vw, 30px)", letterSpacing: "-0.03em",
                lineHeight: 1.15, margin: "0 0 16px", color: ink,
              }}>Education</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {data.education.map(ed => (
                  <div key={ed.school} style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "baseline" }}>
                    <span style={{ fontFamily: display, fontWeight: 600, fontSize: "16px", letterSpacing: "-0.02em", color: ink }}>{ed.school}</span>
                    <span style={{ ...body, fontSize: "15px" }}>{ed.degree}</span>
                    <span style={label(faint)}>{ed.period}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="row-meta" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead tag="what i work with" title={<>The stack behind the<br className="br-md" /> things I build</>} />
      <div>
        {data.skills.map((s, i) => (
          <Reveal key={s.title} delay={0.04}>
            <div className="row">
              <span style={label(faint)}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 style={{
                  fontFamily: display, fontWeight: 600,
                  fontSize: "clamp(21px, 2.6vw, 30px)", letterSpacing: "-0.03em",
                  lineHeight: 1.15, margin: "0 0 10px", color: ink,
                }}>{s.title}</h3>
                <p style={{ ...body, fontSize: "15px", margin: "0 0 18px", maxWidth: "620px" }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.tags.map((t, j) => <Tag key={t} tone={pastels[(i + j) % pastels.length]}>{t}</Tag>)}
                </div>
              </div>
              <span className="row-meta" style={label(faint)}>{s.tags.length} tools</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: `1px solid ${line}` }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "24px 0", display: "flex", alignItems: "center", gap: "20px", textAlign: "left",
              }}
            >
              <span style={label(faint)}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{
                flex: 1, fontFamily: display, fontWeight: 600,
                fontSize: "clamp(16px, 1.9vw, 21px)", letterSpacing: "-0.02em",
                lineHeight: 1.35, color: ink,
              }}>{item.head}</span>
              <span aria-hidden style={{
                fontFamily: display, fontSize: "22px", color: muted, flexShrink: 0,
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}>+</span>
            </button>
            <div style={{
              display: "grid",
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              transition: "grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)",
            }}>
              <div style={{ overflow: "hidden" }}>
                <div style={{ ...body, fontSize: "15px", padding: "0 42px 26px 42px", maxWidth: "760px" }}>
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Research() {
  return (
    <section id="publications" className="section">
      <SectionHead tag="research & recognition" title={<>Published work and<br className="br-md" /> a few things I&rsquo;m proud of</>} />

      <div style={{ marginBottom: "56px" }}>
        {data.publications.map((p, i) => (
          <Reveal key={p.title}>
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
              <div className="row row-hover">
                <span style={label(faint)}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 style={{
                    fontFamily: display, fontWeight: 600,
                    fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.03em",
                    lineHeight: 1.25, margin: "0 0 10px", color: ink,
                  }}>{p.title}</h3>
                  <span style={label(muted)}>{p.venue} ↗</span>
                </div>
                <span className="row-meta" style={label(faint)}>{p.date}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Eyebrow>awards &amp; honors</Eyebrow>
        <div style={{ marginTop: "20px" }}>
          <Accordion items={data.honors} />
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer id="contact" className="footer">
      <Reveal>
        <div className="footer-top">
          <div>
            <Eyebrow>get in touch</Eyebrow>
            <h2 className="footer-type" style={headline}>
              Let&rsquo;s build<br />something solid
            </h2>
          </div>
          <div className="footer-actions">
            <a href={`mailto:${data.email}`} style={pillDark}
              onMouseEnter={e => { e.currentTarget.style.background = hoverInk; }}
              onMouseLeave={e => { e.currentTarget.style.background = ink; }}>
              {data.email} <span aria-hidden>↗</span>
            </a>
            <a href={`tel:${data.phone.replace(/[^\d+]/g, "")}`} style={pillGhost}
              onMouseEnter={e => { e.currentTarget.style.background = surface; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              {data.phone}
            </a>
          </div>
        </div>
      </Reveal>

      <div className="footer-grid">
        <div>
          <div style={{ ...label(faint), marginBottom: "14px" }}>elsewhere</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <a className="ul" href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="ul" href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="ul" href={`mailto:${data.email}`}>Email</a>
          </div>
        </div>
        <div>
          <div style={{ ...label(faint), marginBottom: "14px" }}>navigate</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            {navLinks.map(l => (
              <button key={l.id} className="ul" onClick={() => go(l.id)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>{l.text.toLowerCase()}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ ...label(faint), marginBottom: "14px" }}>status</div>
          <p style={{ ...body, fontSize: "15px", margin: 0, maxWidth: "300px" }}>
            Based in {data.location}. Open to SWE, ML Engineering and Applied AI roles — full-time 2027.
          </p>
        </div>
      </div>

      <div className="footer-name" aria-hidden>{data.name}</div>

      <div className="footer-bar">
        <span style={label(faint)}>© {data.name} 2026 — All rights reserved</span>
        <button onClick={() => go("top")} style={{ ...label(muted), background: "none", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <span aria-hidden>↑</span> back to top
        </button>
      </div>
    </footer>
  );
}

/* ————————————————— styles ————————————————— */

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fragment+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; background: ${paper}; color-scheme: light; }

  body {
    background: ${paper};
    color: ${ink};
    overflow-x: hidden;
    font-family: ${display};
    -webkit-font-smoothing: antialiased;
  }

  button { font: inherit; color: inherit; }

  ::selection { background: ${ink}; color: ${paper}; }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: ${paper}; }
  ::-webkit-scrollbar-thumb { background: rgba(10,10,12,0.22); border-radius: 100px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(10,10,12,0.38); }

  .shell { max-width: 1240px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }

  /* ——— aura: blurred mesh + grid + plus marks + grain, fading into the page ——— */
  .aura {
    position: absolute; top: 0; left: 0; right: 0;
    height: 104vh; min-height: 720px;
    overflow: hidden; pointer-events: none; z-index: 0;
  }
  .aura > * { position: absolute; inset: 0; }

  .aura-mesh {
    inset: -22%;
    opacity: 0.62;
    filter: blur(82px) saturate(112%);
    background:
      radial-gradient(54% 40% at 10% 98%,  #FFC9BC 0%, rgba(255,201,188,0) 62%),
      radial-gradient(50% 38% at 78% 104%, #FFD1E4 0%, rgba(255,209,228,0) 60%),
      radial-gradient(64% 24% at 55% 80%,  #FFF2C0 0%, rgba(255,242,192,0) 66%),
      radial-gradient(72% 44% at 32% 54%,  #E3D8FF 0%, rgba(227,216,255,0) 70%),
      radial-gradient(60% 40% at 88% 18%,  #C9EDFF 0%, rgba(201,237,255,0) 68%),
      radial-gradient(70% 44% at 14% 10%,  #CFF3E2 0%, rgba(207,243,226,0) 70%),
      ${paper};
    animation: drift 26s ease-in-out infinite alternate;
  }
  @keyframes drift {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(-2.5%, 1.8%, 0) scale(1.06); }
  }

  .aura-grid {
    background-image:
      linear-gradient(to right,  rgba(10,10,12,0.055) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(10,10,12,0.055) 1px, transparent 1px);
    background-size: 76px 76px;
    background-position: center top;
  }

  .aura-plus {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='228' height='228'%3E%3Cpath d='M114 105v18M105 114h18' stroke='%230a0a0c' stroke-opacity='0.26' stroke-width='1'/%3E%3C/svg%3E");
    background-size: 228px 228px;
    background-position: center top;
  }

  .aura-grain {
    opacity: 0.09;
    mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .aura-fade {
    background: linear-gradient(180deg, rgba(250,250,250,0) 46%, ${paper} 94%);
  }

  /* nav — floating glass pills */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 12px; padding: 16px 20px; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .nav-left { display: flex; gap: 12px; flex-wrap: wrap; pointer-events: auto; }

  .chip {
    background: ${glass};
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(10,10,12,0.07);
    box-shadow: 0 2px 6px rgba(10,10,12,0.05), 0 8px 24px rgba(10,10,12,0.06);
    border-radius: 999px; padding: 12px 18px;
    font-family: ${monoFont}; font-size: 12px; letter-spacing: 0.5px;
    text-transform: uppercase; color: ${ink};
    display: inline-flex; align-items: center; gap: 8px;
    text-decoration: none; cursor: pointer;
  }
  .chip-brand { font-family: ${display}; font-weight: 700; letter-spacing: 0.02em; }
  .chip-links { gap: 16px; flex-wrap: wrap; cursor: default; }
  .chip-cta {
    pointer-events: auto; background: ${ink}; color: ${paper};
    border: 1px solid ${ink}; transition: background 0.25s ease, color 0.25s ease;
  }
  .nav-link {
    background: none; border: none; padding: 0; cursor: pointer;
    font-family: ${monoFont}; font-size: 12px; letter-spacing: 0.5px;
    text-transform: uppercase; transition: color 0.2s ease;
  }
  .nav-link:hover { color: ${ink} !important; }

  /* hero */
  .hero { padding: 110px 0 40px; }
  .hero-stage {
    min-height: calc(100vh - 150px);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
  }
  .hero-eyebrow {
    font-family: ${monoFont}; font-size: 15px; letter-spacing: 1px;
    text-transform: uppercase; color: ${muted};
  }
  .hero-name {
    font-family: ${display}; font-weight: 800; text-transform: uppercase;
    font-size: min(11.6vw, 226px); line-height: 0.9; letter-spacing: -0.035em;
    margin: 0; color: ${ink}; white-space: nowrap;
  }

  .hero-foot {
    display: grid; grid-template-columns: 1fr auto; gap: 40px;
    align-items: end; padding: 64px 0 0;
  }

  .badge { position: relative; width: 178px; height: 178px; flex-shrink: 0; }
  .badge-spin { animation: spin 22s linear infinite; }
  .badge-core {
    position: absolute; inset: 0; margin: auto;
    width: 74px; height: 74px; border-radius: 100px;
    background: ${ink}; color: ${paper};
    display: flex; align-items: center; justify-content: center;
    font-family: ${display}; font-size: 22px;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* stats */
  .stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    padding: 80px 0; border-top: 1px solid ${line}; margin-top: 72px;
  }
  .stat + .stat { border-left: 1px solid ${line}; padding-left: 24px; }

  /* ticker */
  .ticker { overflow: hidden; white-space: nowrap; padding: 22px 0; border-top: 1px solid ${line}; border-bottom: 1px solid ${line}; }
  .ticker-track { display: inline-flex; animation: marquee 34s linear infinite; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* sections */
  .section { padding: 104px 0; }
  .sec-head {
    display: grid; grid-template-columns: 200px 1fr auto;
    gap: 32px; align-items: start; margin-bottom: 56px;
  }
  .sec-head-right { justify-self: end; }

  /* numbered rows */
  .row {
    display: grid; grid-template-columns: 64px 1fr 190px;
    gap: 24px; align-items: start;
    padding: 34px 0; border-top: 1px solid ${line};
  }
  .row-meta { justify-self: end; text-align: right; }
  .row-hover { transition: opacity 0.3s ease; }
  .row-hover:hover { opacity: 0.6; }

  /* work */
  .work-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

  /* footer */
  .footer { padding: 96px 0 28px; border-top: 1px solid ${line}; }
  .footer-top { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; flex-wrap: wrap; }
  .footer-type { font-size: clamp(38px, 6.4vw, 88px); margin-top: 16px; }
  .footer-actions { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
  .footer-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
    padding: 72px 0; margin-top: 72px; border-top: 1px solid ${line};
  }
  .footer-name {
    font-family: ${display}; font-weight: 800;
    font-size: clamp(46px, 15vw, 210px); letter-spacing: -0.05em; line-height: 0.85;
    color: ${ink}; opacity: 0.08; white-space: nowrap; user-select: none;
    padding-bottom: 24px; overflow: hidden;
  }
  .footer-bar {
    display: flex; justify-content: space-between; align-items: center;
    gap: 16px; flex-wrap: wrap; padding-top: 24px; border-top: 1px solid ${line};
  }

  .ul {
    font-family: ${display}; font-weight: 500; font-size: 16px; letter-spacing: -0.01em;
    color: ${muted}; text-decoration: none; position: relative; transition: color 0.25s ease;
  }
  .ul::after {
    content: ""; position: absolute; left: 0; bottom: -2px; height: 1px; width: 0;
    background: ${ink}; transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
  }
  .ul:hover { color: ${ink}; }
  .ul:hover::after { width: 100%; }

  @media (max-width: 1000px) {
    .sec-head { grid-template-columns: 1fr; gap: 16px; }
    .sec-head-right { justify-self: start; }
    .work-grid { grid-template-columns: 1fr; }
    .stats { grid-template-columns: repeat(2, 1fr); row-gap: 44px; }
    .stat:nth-child(3) { border-left: none; padding-left: 0; }
    .footer-grid { grid-template-columns: 1fr; gap: 40px; }
  }

  @media (max-width: 820px) {
    .nav { padding: 14px 16px; }
    .chip { padding: 10px 15px; font-size: 11px; }
    .chip-links { gap: 13px; }
    .shell { padding: 0 20px; }
    .hero { padding: 168px 0 20px; }
    .hero-stage { min-height: calc(100vh - 210px); }
    .hero-eyebrow { font-size: 12px; letter-spacing: 0.6px; }
    .hero-foot { grid-template-columns: 1fr; align-items: start; gap: 44px; }
    .hero-foot > div:last-child { justify-content: flex-start !important; }
    .row { grid-template-columns: 40px 1fr; }
    .row-meta { grid-column: 2; justify-self: start; text-align: left; margin-top: 4px; }
    .section { padding: 76px 0; }
    .br-md { display: none; }
  }

  @media (max-width: 520px) {
    .stats { grid-template-columns: 1fr; }
    .stat + .stat { border-left: none; padding-left: 0; }
    .badge { width: 148px; height: 148px; }
    .hero { padding: 196px 0 20px; }
    .hero-stage { min-height: calc(100vh - 240px); }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
  }
`;

/* ————————————————— root ————————————————— */

export default function Portfolio() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const keys = navLinks.map(l => l.id);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    keys.forEach(k => { const el = document.getElementById(k); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const go = (key) => {
    if (key === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(key);
    if (!el) return;
    // getBoundingClientRect, not offsetTop: `.shell` is positioned, so it is the offsetParent.
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className="aura" aria-hidden>
        <div className="aura-mesh" />
        <div className="aura-grid" />
        <div className="aura-plus" />
        <div className="aura-grain" />
        <div className="aura-fade" />
      </div>
      <Nav active={active} go={go} />
      <div className="shell">
        <Hero go={go} />
        <Stats />
      </div>
      <Ticker />
      <div className="shell">
        <Work />
        <Experience />
        <Skills />
        <Research />
        <Footer go={go} />
      </div>
    </div>
  );
}
