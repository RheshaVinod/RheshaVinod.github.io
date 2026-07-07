import { useState, useEffect, useRef } from "react";

const data = {
  name: "Rhesha Vinod",
  tagline: "SDE Intern @ SprintRay | MSCS @ USC | Backend Systems · Agentic AI · Multimodal",
  location: "Los Angeles, CA",
  email: "rvinod@usc.edu",
  phone: "(213) 723-9993",
  linkedin: "linkedin.com/in/rheshavinod/",
  github: "github.com/RheshaVinod/",
  about:
    "MSCS student at USC (class of 2027) focused on ML systems and distributed backend engineering. Currently building an MCP server at SprintRay that lets LLM-based agents interact with the platform. Previously led a monolith-to-microservices migration across 10+ services at BT Group and built a patent-pending GenAI mobile app at Bosch. Open to SWE, ML Engineering, and Applied AI roles (full-time 2027).",
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
      tags: ["Distributed Systems", "Java", "Consistent Hashing", "Fault Tolerance","Replication","Threads"],
      desc: "Built a Redis-inspired distributed key-value store in Java with TCP-based GET/SET/DELETE operations and concurrent client handling. Implemented write-ahead logging for persistence, leader–follower replication, and consistent hashing for sharding. Achieved ~43k GET ops/sec and ~6k SET ops/sec in benchmarks.",
      link: "https://github.com/RheshaVinod/distributed-key-value-storage-system",
    },
    {
      title: "Rocket Engine Anomaly Detection: An End-to-End ML System",
      tags: ["LSTM", "FastAPI", "Docker"],
      desc: "Built a production-grade anomaly detection system on NASA CMAPSS jet engine telemetry using an LSTM model. Achieved F1-score 0.93, improving performance by 87% over classical baselines. Deployed as a FastAPI REST service with Docker containerization and a real-time mission control dashboard for predictive maintenance monitoring.",
      link: "https://rheshavinod.github.io/rocket-mission-control/",
    },
    {
      title: "Cross-Modal Attribution for Medical VLMs",
      tags: ["PyTorch", "CLIP", "ViT", "Explainability"],
      desc: "Implemented explainability methods for CLIP-based ViT models, analyzing cross-attention and multimodal embeddings on medical image–text datasets.",
      link: null,
    },
    {
      title: "Surgical Knowledge Swapping in LLMs",
      tags: ["Qwen", "ROME", "MEMIT", "LoRA"],
      desc: "Designed targeted knowledge editing pipelines for LLMs, improving factual update precision while minimizing unintended model interference.",
      link: "https://github.com/aryanavi6802/CSCI-544-Surgical-Knowledge-Swapping",
    },
    {
      title: "Multimodal Deepfake Detection",
      tags: ["ResNet", "CNN/LSTM", "SyncNet", "Audio-Visual"],
      desc: "Developed a multimodal deepfake detector achieving 99.35% accuracy (ROC-AUC: 0.99996) on FakeAVCeleb dataset.",
      link: "https://github.com/JeevikaK/Deepfake-Detection",
    },
  ],
  skills: {
    Languages: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL"],
    "AI & ML": ["LLMs", "PyTorch", "HuggingFace", "Transformers", "OpenCV", "YOLOv8", "Deep Learning", "NLP", "Scikit-learn"],
    "Backend & Systems": ["Spring Boot", "Node.js", "FastAPI", "REST APIs", "Microservices", "IBM MQ", "RabbitMQ", "Camunda", "Distributed Systems"],
    "Cloud & DevOps": ["AWS (Lambda, EC2, S3)", "Docker", "Kubernetes", "CI/CD", "Git"],
    Frontend: ["React.js", "React Native"],
    Databases: ["MySQL", "MongoDB", "ChromaDB"],
  },
  publications: [
    {
      title: "Secure and Intelligent Crop Supply Chain System Using Distributed Ledger Technology and Deep Learning",
      date: "May 2024",
      link: "https://ieeexplore.ieee.org/document/10544073/",
    },
  ],
  honors: [
    "Selected Top 10 at Google X Origin Weekend Impact Hackathon (TIE Hub · USC Viterbi) for pitching an environmental solution to reduce tire wear particle pollution.",
    "Technical Excellence Award — BT Group large-scale system migration",
    "Top 3 — Bosch Innovation Challenge",
    "Shortlisted — BugsandBytes Hackathon 2022",
    "Prof. CNR & MRD Scholarship — 6× awardee (Top 2%, 50% tuition waiver)",
  ],
};

// ————— Theme —————
const ink = "#0D0D0D";
const paper = "#FAFAFA";
const tile = "#FFFFFF";
const sub = "rgba(13,13,13,0.55)";
const hairline = "1px solid rgba(13,13,13,0.12)";
const green = "#1FC54C";
const accent = "#7E36F4";
const cardShadow = "0 1px 2px rgba(13,13,13,0.05), 0 10px 30px rgba(13,13,13,0.07)";
const cardShadowHover = "0 6px 16px rgba(13,13,13,0.12), 0 22px 48px rgba(13,13,13,0.18)";
const chipShadow = "0 2px 6px rgba(13,13,13,0.06), 0 8px 24px rgba(13,13,13,0.08)";

const displayFont = "'General Sans', 'Inter', sans-serif";
const monoFont = "'Azeret Mono', monospace";
const bodyFont = "'Inter', sans-serif";

const mono = (size = 12, color = ink) => ({
  fontFamily: monoFont,
  fontSize: `${size}px`,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  color,
  lineHeight: 1.8,
});

const underlineLink = {
  ...mono(12),
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  cursor: "pointer",
};

// Intersection observer hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// Mono label with leading dot, e.g. "● EXPERIENCE:"
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
      <span style={mono(12)}>{children}</span>
    </div>
  );
}

const chipStyle = {
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(13,13,13,0.06)",
  boxShadow: chipShadow,
  borderRadius: "999px",
  padding: "12px 18px",
  fontFamily: monoFont,
  fontSize: "12px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  color: ink,
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
};

// Nav
function Nav({ active, sectionRefs }) {
  const links = ["About", "Experience", "Projects", "Skills", "Publications"];

  const scrollTo = (label) => {
    const key = label.toLowerCase();
    const el = sectionRefs.current[key];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      padding: "16px 20px", gap: "12px", pointerEvents: "none",
    }}>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", pointerEvents: "auto" }}>
        <button onClick={() => scrollTo("About")} style={{ ...chipStyle, fontWeight: 600, fontFamily: displayFont }}>
          R_V
        </button>
        <div style={{ ...chipStyle, cursor: "default", gap: "16px", flexWrap: "wrap" }}>
          {links.map(l => (
            <button key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 0,
                fontFamily: monoFont, fontSize: "12px", letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: active === l ? ink : "rgba(13,13,13,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = ink}
              onMouseLeave={e => e.target.style.color = active === l ? ink : "rgba(13,13,13,0.4)"}
            >{l}</button>
          ))}
        </div>
      </div>
      <a href={`mailto:${data.email}`}
        style={{ ...chipStyle, pointerEvents: "auto", background: ink, color: paper, border: "1px solid rgba(13,13,13,0.9)", transition: "background 0.25s ease" }}
        onMouseEnter={e => e.currentTarget.style.background = accent}
        onMouseLeave={e => e.currentTarget.style.background = ink}
      >
        Contact me <span aria-hidden>→</span>
      </a>
    </nav>
  );
}

// Giant edge-to-edge display name
const giantNameStyle = {
  fontFamily: displayFont,
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "min(11.5vw, 220px)",
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  margin: 0,
  color: ink,
  whiteSpace: "nowrap",
};

// Hero
function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 150); return () => clearTimeout(t); }, []);

  const reveal = (delay) => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="about" className="hero-section" style={{ padding: "110px 20px 0" }}>
      <div style={{
        minHeight: "calc(100vh - 130px)",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center",
      }}>
        <div style={{ ...reveal(0), display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
          <span style={{ ...mono(15, sub), letterSpacing: "1px" }}>Software Engineer · ML · Grad Student</span>
        </div>

        <div style={{ ...reveal(0.1), overflow: "hidden", maxWidth: "100%" }}>
          <h1 style={giantNameStyle}>{data.name}</h1>
        </div>
      </div>

      <div className="hero-grid" style={{ ...reveal(0.35), padding: "56px 0 48px" }}>
        <div>
          <span style={mono(12, sub)}>Who I am:</span>
        </div>
        <div>
          <p style={{ ...mono(13), margin: 0, maxWidth: "760px" }}>
            {data.about}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "28px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: green, flexShrink: 0 }} />
            <span style={mono(12)}>Available — {data.location}</span>
          </div>
        </div>
      </div>

      <div className="hero-grid" style={{ ...reveal(0.55), padding: "0 0 56px", borderBottom: hairline }}>
        <div>
          <span style={mono(12, sub)}>Socials:</span>
        </div>
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          <a className="u-link" href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" style={underlineLink}>GitHub</a>
          <a className="u-link" href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" style={underlineLink}>LinkedIn</a>
          <a className="u-link" href={`mailto:${data.email}`} style={underlineLink}>Email</a>
        </div>
      </div>
    </section>
  );
}

// Scrolling ticker strip between hero and experience
function Marquee() {
  const items = ["Backend Systems", "Agentic AI", "Distributed Systems", "Multimodal ML", "MCP & LLM Tooling", "Computer Vision", "Microservices"];
  return (
    <div style={{ overflow: "hidden", padding: "20px 0", whiteSpace: "nowrap" }}>
      <div style={{ display: "inline-flex", animation: "marquee 32s linear infinite" }}>
        {[0, 1].map(k => (
          <div key={k} aria-hidden={k === 1} style={{ display: "inline-flex" }}>
            {items.map((t, i) => (
              <span key={i} style={{ ...mono(13), display: "inline-flex", alignItems: "center" }}>
                {t}
                <span style={{ color: accent, margin: "0 28px" }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Experience — numbered rows with hairline dividers
function Experience() {
  return (
    <section id="experience" style={{ padding: "72px 20px" }}>
      <SectionLabel>Experience:</SectionLabel>
      {data.experience.map((e, i) => (
        <FadeIn key={i} delay={0.05}>
          <div className="num-row" style={{ borderTop: hairline, padding: "36px 0" }}>
            <span style={mono(13, accent)}>{String(i + 1).padStart(2, "0")}.</span>
            <div>
              <h3 style={{
                fontFamily: displayFont, fontWeight: 600, textTransform: "uppercase",
                fontSize: "clamp(24px, 3.4vw, 44px)", letterSpacing: "-0.02em",
                lineHeight: 1.05, margin: "0 0 10px", color: ink,
              }}>{e.company}</h3>
              <div style={{ ...mono(12, sub), marginBottom: "18px" }}>{e.role}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", maxWidth: "820px" }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: sub, flexShrink: 0, lineHeight: 1.7 }}>—</span>
                    <span style={{ fontFamily: bodyFont, fontSize: "15px", color: sub, lineHeight: 1.7 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="row-period" style={mono(12, sub)}>{e.period}</span>
          </div>
        </FadeIn>
      ))}

      <FadeIn>
        <div className="num-row" style={{ borderTop: hairline, padding: "36px 0" }}>
          <span style={mono(13, accent)}>{String(data.experience.length + 1).padStart(2, "0")}.</span>
          <div>
            <h3 style={{
              fontFamily: displayFont, fontWeight: 600, textTransform: "uppercase",
              fontSize: "clamp(24px, 3.4vw, 44px)", letterSpacing: "-0.02em",
              lineHeight: 1.05, margin: "0 0 18px", color: ink,
            }}>Education</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {data.education.map((ed, j) => (
                <div key={j} style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "baseline" }}>
                  <span style={{ fontFamily: bodyFont, fontSize: "15px", color: ink }}>{ed.school}</span>
                  <span style={{ fontFamily: bodyFont, fontSize: "14px", color: sub }}>{ed.degree}</span>
                  <span style={mono(11, sub)}>{ed.period}</span>
                </div>
              ))}
            </div>
          </div>
          <span />
        </div>
      </FadeIn>
    </section>
  );
}

// Projects — tile grid, dark invert on hover
function Projects() {
  return (
    <section id="projects" style={{ padding: "72px 20px", borderTop: hairline }}>
      <SectionLabel>Featured projects:</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", alignItems: "stretch" }}>
        {data.projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.06} style={{ height: "100%" }}>
            <div
              onClick={() => p.link && window.open(p.link, "_blank", "noopener,noreferrer")}
              style={{
                background: tile, color: ink,
                border: "1px solid rgba(13,13,13,0.06)",
                boxShadow: cardShadow,
                borderRadius: "16px", padding: "28px",
                height: "100%", boxSizing: "border-box",
                display: "flex", flexDirection: "column",
                cursor: p.link ? "pointer" : "default",
                transition: "background 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = ink; e.currentTarget.style.color = paper; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = cardShadowHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = tile; e.currentTarget.style.color = ink; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = cardShadow; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "36px" }}>
                <span style={{ fontFamily: monoFont, fontSize: "12px", letterSpacing: "0.5px", color: accent }}>
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {p.link && <span aria-hidden style={{ fontFamily: monoFont, fontSize: "14px", color: accent }}>↗</span>}
              </div>
              <h3 style={{
                fontFamily: displayFont, fontWeight: 600, textTransform: "uppercase",
                fontSize: "20px", letterSpacing: "-0.01em", lineHeight: 1.2,
                margin: "0 0 12px", color: "inherit",
              }}>{p.title}</h3>
              <p style={{ fontFamily: bodyFont, fontSize: "14px", lineHeight: 1.7, margin: "0 0 24px", color: "inherit", opacity: 0.62, flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: monoFont, fontSize: "10px", letterSpacing: "0.5px",
                    textTransform: "uppercase", color: "inherit",
                    border: "1px solid currentColor", opacity: 0.55,
                    padding: "4px 10px", borderRadius: "7px",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Skills — numbered service-style rows
function Skills() {
  return (
    <section id="skills" style={{ padding: "72px 20px", borderTop: hairline }}>
      <SectionLabel>Skills:</SectionLabel>
      {Object.entries(data.skills).map(([cat, items], i) => (
        <FadeIn key={cat} delay={0.05}>
          <div className="num-row" style={{ borderTop: hairline, padding: "28px 0" }}>
            <span style={mono(13, accent)}>{String(i + 1).padStart(2, "0")}.</span>
            <div>
              <h3 style={{
                fontFamily: displayFont, fontWeight: 600, textTransform: "uppercase",
                fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: "-0.02em",
                lineHeight: 1.05, margin: "0 0 12px", color: ink,
              }}>{cat}</h3>
              <p style={{ ...mono(12, sub), margin: 0, maxWidth: "820px" }}>
                {items.join(" · ")}
              </p>
            </div>
            <span aria-hidden style={mono(14, accent)}>↘</span>
          </div>
        </FadeIn>
      ))}

      <FadeIn delay={0.1}>
        <div style={{ marginTop: "72px" }}>
          <SectionLabel>Honors & recognition:</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.honors.map((h, i) => (
              <div key={i} style={{ borderTop: hairline, padding: "18px 0", display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={mono(11, accent)}>{String(i + 1).padStart(2, "0")}.</span>
                <span style={{ fontFamily: bodyFont, fontSize: "15px", color: sub, lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// Publications
function Publications() {
  return (
    <section style={{ padding: "72px 20px", borderTop: hairline }}>
      <SectionLabel>Publications:</SectionLabel>
      {data.publications.map((p, i) => (
        <FadeIn key={i} delay={i * 0.06}>
          <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
            <div className="num-row" style={{ borderTop: hairline, padding: "32px 0" }}>
              <span style={mono(13, accent)}>{String(i + 1).padStart(2, "0")}.</span>
              <div>
                <h3 style={{
                  fontFamily: displayFont, fontWeight: 600,
                  fontSize: "clamp(18px, 2.4vw, 28px)", letterSpacing: "-0.01em",
                  lineHeight: 1.3, margin: "0 0 12px", color: ink,
                }}>{p.title}</h3>
                <span className="u-link" style={{ ...underlineLink, color: sub }}>IEEE Xplore ↗</span>
              </div>
              <span className="row-period" style={mono(12, sub)}>{p.date}</span>
            </div>
          </a>
        </FadeIn>
      ))}
    </section>
  );
}

// Contact + footer with giant name
function Contact() {
  return (
    <section id="contact" style={{ padding: "72px 20px 24px", borderTop: hairline }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "32px", flexWrap: "wrap", paddingBottom: "40px" }}>
        <FadeIn>
          <p style={{ ...mono(13), margin: 0, maxWidth: "560px" }}>
            Got an interesting problem, a role in mind, or just want to talk distributed
            systems and ML? My inbox is always open — let's build something together.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a className="u-link" href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" style={underlineLink}>GitHub</a>
            <a className="u-link" href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" style={underlineLink}>LinkedIn</a>
            <a className="u-link" href={`mailto:${data.email}`} style={underlineLink}>Email</a>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div style={{ overflow: "hidden", paddingTop: "40px" }}>
          <h2 style={giantNameStyle}>{data.name}</h2>
        </div>
      </FadeIn>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "16px", paddingTop: "32px",
      }}>
        <span style={mono(11, sub)}>© 2026 Rhesha Vinod</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ ...mono(11), background: "none", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          <span aria-hidden>↑</span> Back to top
        </button>
        <a className="u-link" href={`mailto:${data.email}`} style={{ ...underlineLink, fontSize: "11px", color: sub }}>{data.email}</a>
      </div>
    </section>
  );
}

// CSS injected globally
const globalStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: ${paper};
    color: ${ink};
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
  }

  ::selection { background: ${ink}; color: ${paper}; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${paper}; }
  ::-webkit-scrollbar-thumb { background: rgba(13,13,13,0.35); border-radius: 3px; }

  .hero-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 32px;
    align-items: start;
  }

  .num-row {
    display: grid;
    grid-template-columns: 72px 1fr auto;
    gap: 24px;
    align-items: start;
  }

  .u-link { transition: color 0.2s ease; }
  .u-link:hover { color: ${accent} !important; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @media (max-width: 720px) {
    .hero-grid { grid-template-columns: 1fr; gap: 16px; }
    .num-row { grid-template-columns: 40px 1fr; }
    .row-period { grid-column: 2; }
    .hero-section { padding-top: 180px !important; }
  }
`;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const sectionRefs = useRef({});

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Scroll spy
  useEffect(() => {
    const keys = ["about", "experience", "projects", "skills", "publications", "contact"];
    const labels = ["About", "Experience", "Projects", "Skills", "Publications", "Contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = keys.indexOf(entry.target.getAttribute("data-section"));
            if (idx !== -1) setActiveSection(labels[idx]);
          }
        });
      },
      { threshold: 0.3 }
    );
    keys.forEach(k => {
      if (sectionRefs.current[k]) observer.observe(sectionRefs.current[k]);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (key) => (el) => { sectionRefs.current[key] = el; };

  return (
    <div style={{ background: paper, minHeight: "100vh" }}>
      <Nav active={activeSection} sectionRefs={sectionRefs} />
      <div ref={setRef("about")} data-section="about">
        <Hero />
      </div>
      <Marquee />
      <div ref={setRef("experience")} data-section="experience" style={{ borderTop: hairline }}><Experience /></div>
      <div ref={setRef("projects")} data-section="projects"><Projects /></div>
      <div ref={setRef("skills")} data-section="skills"><Skills /></div>
      <div ref={setRef("publications")} data-section="publications"><Publications /></div>
      <div ref={setRef("contact")} data-section="contact"><Contact /></div>
    </div>
  );
}
