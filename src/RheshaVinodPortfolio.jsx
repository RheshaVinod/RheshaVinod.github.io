import { useState, useEffect, useRef } from "react";

const data = {
  name: "Rhesha Vinod",
  tagline: "CS Grad student at USC | Software Engineer | AI Researcher",
  location: "Los Angeles, CA",
  email: "rvinod@usc.edu",
  phone: "(213) 723-9993",
  linkedin: "linkedin.com/in/rheshavinod/",
  github: "github.com/RheshaVinod/",
  about:
    "Building AI-powered systems and scalable infrastructure turning complex ideas into production-ready solutions.",
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
      role: "Developer",
      company: "USC Annenberg Media",
      period: "Feb 2026 – Apr 2026",
      bullets: [
        "Contributed to ML backend team, resolving bugs and JIRA tickets for the Annenberg News website using React and ArcXP.",
        "Leveraged Google Analytics and ML tools to support data-driven improvements in a Scrum-based Agile environment.",
      ],
    },
    {
      role: "Software Engineer",
      company: "BT Group (Openreach)",
      period: "Jul 2024 – Jul 2025",
      bullets: [
        "Drove migration of monolithic orchestration tool 'SOGEA' to microservices architecture using Java Spring Boot, improving scalability across 10+ services.",
        "Optimized cross-service communication via IBM MQ and RabbitMQ for improved deployment performance and message throughput.",
        "Leveraged OpenRewrite to automate 60%+ of complex code transformations, minimizing manual refactoring.",
        "Led team in AWS Q-developer hackathon; enhanced process efficiency by 25% through workflow optimization.",
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
      role: "Summer Intern",
      company: "Bosch Global Software Technologies",
      period: "Jun 2023 – Jul 2023",
      bullets: [
        "Built AI/ML mobile solution 'GPT Manual' using Generative AI and React Native, achieving 90% model accuracy.",
        "Currently progressing through formal patent review for the developed AI-driven solution.",
      ],
    },
  ],
  projects: [
    {
      title: "Distributed Key-Value Store",
      tags: ["Distributed Systems", "Java", "Consistent Hashing", "Fault Tolerance","Replication","Threads"],
      desc: "Built a Redis-inspired distributed key-value store from scratch in Java, implementing GET/SET/DELETE operations over TCP with concurrent client support. Designed a write-ahead log (WAL) for crash recovery and data persistence, leader-follower replication across multiple nodes, and a consistent hashing router for data sharding across servers. Benchmarked to 42,918 GET ops/sec and 6,028 SET ops/sec.",
      link: "https://github.com/RheshaVinod/distributed-key-value-storage-system",
    },
    {
      title: "Rocket Engine Anomaly Detection An End-to-End ML System",
      tags: ["PyTorch", "CLIP", "ViT", "Explainability"],
      desc: "Built a production-grade anomaly detection system on NASA CMAPSS jet engine telemetry data using an LSTM classifier monitoring 14 sensor channels simultaneously. Deployed as a REST API containerized with Docker, with an interactive mission control dashboard for real-time engine fault simulation.",
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
    Languages: ["Python", "Java", "C++"],
    "AI & ML": ["LLMs", "Deep Learning", "NLP", "PyTorch", "Scikit-learn"],
    Cloud: ["AWS", "Docker", "Kubernetes"],
    Web: ["React.js", "Node.js", "FastAPI", "Spring Boot", "TypeScript"],
    Databases: ["MongoDB", "MySQL"],
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
    "Prof. CNR & MRD Scholarship — 6× awardee (Top 2%, 50% tuition waiver)",
  ],
};

// Typewriter hook
function useTypewriter(text, speed = 60, delay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text]);
  return { displayed, done };
}

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

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// Nav
function Nav({ active, sectionRefs }) {
  const links = ["About", "Experience", "Projects", "Skills", "Publications", "Contact"];

  const scrollTo = (label) => {
    const key = label.toLowerCase();
    const el = sectionRefs.current[key];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(241,245,249,0.85)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(30,41,59,0.1)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 40px", height: "60px",
    }}>
      <span
        onClick={() => scrollTo("About")}
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", color: "#06B6D4", letterSpacing: "2px", cursor: "pointer" }}
      >RV</span>
      <div style={{ display: "flex", gap: "32px" }}>
        {links.map(l => (
          <button key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Mono', monospace", fontSize: "12px",
              color: active === l ? "#06B6D4" : "rgba(15,23,42,0.5)",
              letterSpacing: "1.5px", textTransform: "uppercase",
              transition: "color 0.2s", padding: 0,
            }}
            onMouseEnter={e => e.target.style.color = "#06B6D4"}
            onMouseLeave={e => e.target.style.color = active === l ? "#06B6D4" : "rgba(15,23,42,0.5)"}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}

// Hero
function Hero({ onViewWork }) {
  const { displayed } = useTypewriter(data.tagline, 55, 600);
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 200); }, []);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "0 60px", position: "relative", overflow: "hidden",
    }}>
      {/* Animated grid lines */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "gridShift 20s linear infinite",
      }} />
      {/* Glow orb */}
      <div style={{
        position: "absolute", right: "10%", top: "20%",
        width: "420px", height: "420px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,41,59,0.35) 0%, transparent 70%)",
        filter: "blur(40px)",
        animation: "pulse 4s ease-in-out infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <div style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.6s ease 0.1s",
          fontFamily: "'DM Mono', monospace", fontSize: "13px",
          color: "#06B6D4", letterSpacing: "3px", marginBottom: "20px",
        }}>
          &gt;  BASED IN {data.location.toUpperCase()}
        </div>

        <h1 style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 0.3s",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(64px, 10vw, 120px)",
          lineHeight: 0.95, color: "#0F172A", margin: "0 0 12px",
          letterSpacing: "2px",
        }}>
          {data.name}
        </h1>

        <div style={{
          height: "52px", display: "flex", alignItems: "center",
          opacity: show ? 1 : 0, transition: "opacity 0.6s ease 0.6s",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "rgba(15,23,42,0.6)", fontStyle: "italic",
          }}>
            {displayed}<span style={{ animation: "blink 1s step-end infinite", color: "#06B6D4" }}>|</span>
          </span>
        </div>

        <p style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease 0.9s",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "16px", color: "rgba(15,23,42,0.55)",
          maxWidth: "560px", lineHeight: 1.75, marginTop: "28px",
        }}>
          {data.about}
        </p>

        <div style={{
          opacity: show ? 1 : 0, transition: "opacity 0.6s ease 1.2s",
          display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap",
        }}>
          <button onClick={() => onViewWork && onViewWork()} style={{ ...btnStyle("#06B6D4", "#F1F5F9"), border: "none", cursor: "pointer" }}>View Work</button>
          <a href={`mailto:${data.email}`} style={btnStyle("transparent", "#06B6D4", true)}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

function btnStyle(bg, color, outline = false) {
  return {
    padding: "12px 28px",
    background: bg,
    color: color,
    border: outline ? `1px solid #06B6D4` : "none",
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
    textDecoration: "none", cursor: "pointer",
    transition: "all 0.25s ease",
    display: "inline-block",
  };
}

// Section Header
function SectionHeader({ number, title }) {
  return (
    <FadeIn>
      <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "56px" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#06B6D4", letterSpacing: "2px" }}>
          {number}
        </span>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(40px, 6vw, 72px)",
          color: "#0F172A", margin: 0, letterSpacing: "3px",
        }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "rgba(6,182,212,0.4)", marginLeft: "8px", marginBottom: "8px" }} />
      </div>
    </FadeIn>
  );
}

// Experience
function Experience() {
  const [active, setActive] = useState(0);
  const exp = data.experience[active];
  return (
    <section id="experience" style={sectionStyle}>
      <SectionHeader number="01 /" title="EXPERIENCE" />
      <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
        {/* Tabs */}
        <div style={{ display: "flex", flexDirection: "column", minWidth: "220px", borderLeft: "1px solid rgba(6,182,212,0.15)" }}>
          {data.experience.map((e, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <button onClick={() => setActive(i)} style={{
                background: "none", border: "none", cursor: "pointer",
                textAlign: "left", padding: "16px 20px",
                borderLeft: active === i ? "2px solid #06B6D4" : "2px solid transparent",
                marginLeft: "-1px",
                fontFamily: "'DM Mono', monospace", fontSize: "11px",
                color: active === i ? "#06B6D4" : "rgba(15,23,42,0.4)",
                letterSpacing: "1px", transition: "all 0.2s",
                lineHeight: 1.5,
              }}>
                <div style={{ textTransform: "uppercase" }}>{e.company}</div>
                <div style={{ color: "rgba(15,23,42,0.25)", fontSize: "10px", marginTop: "4px" }}>{e.period}</div>
              </button>
            </FadeIn>
          ))}
        </div>
        {/* Content */}
        <div style={{ flex: 1, paddingLeft: "48px", minWidth: "300px" }}>
          <FadeIn key={active} delay={0}>
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px", color: "#0F172A", margin: "0 0 4px",
              }}>{exp.role} <span style={{ color: "#06B6D4" }}>@ {exp.company}</span></h3>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(15,23,42,0.35)", letterSpacing: "1px", marginBottom: "28px" }}>
                {exp.period}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ color: "#06B6D4", marginTop: "2px", flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(15,23,42,0.65)", lineHeight: 1.7 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Projects
function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      <SectionHeader number="02 /" title="PROJECTS" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {data.projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              onClick={() => p.link && window.open(p.link, "_blank", "noopener,noreferrer")}
              style={{
                background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(6,182,212,0.15)",
                padding: "32px", position: "relative", overflow: "hidden",
                transition: "all 0.3s ease", cursor: p.link ? "pointer" : "default",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"; e.currentTarget.style.background = "rgba(30,41,59,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}
            >
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "32px", color: "rgba(6,182,212,0.08)", position: "absolute", top: "16px", right: "20px", fontWeight: "bold" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#0F172A", margin: "0 0 12px", lineHeight: 1.4 }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(15,23,42,0.5)", lineHeight: 1.7, margin: "0 0 20px" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "10px",
                    color: "#06B6D4", background: "rgba(6,182,212,0.1)",
                    padding: "4px 10px", letterSpacing: "1px",
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

// Skills
function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <SectionHeader number="03 /" title="SKILLS" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px" }}>
        {Object.entries(data.skills).map(([cat, items], i) => (
          <FadeIn key={cat} delay={i * 0.08}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#06B6D4", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                {cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map(s => (
                  <span key={s} style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                    color: "rgba(15,23,42,0.7)",
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(30,41,59,0.12)",
                    padding: "6px 14px",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.target.style.color = "#06B6D4"; e.target.style.borderColor = "rgba(6,182,212,0.4)"; }}
                    onMouseLeave={e => { e.target.style.color = "rgba(15,23,42,0.7)"; e.target.style.borderColor = "rgba(30,41,59,0.12)"; }}
                  >{s}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Honors */}
      <FadeIn delay={0.2}>
        <div style={{ marginTop: "64px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#06B6D4", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
            Honors & Recognition
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {data.honors.map((h, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ width: "6px", height: "6px", background: "#06B6D4", flexShrink: 0, transform: "rotate(45deg)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(15,23,42,0.6)", lineHeight: 1.6 }}>{h}</span>
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
    <section style={sectionStyle}>
      <SectionHeader number="04 /" title="PUBLICATIONS" />
      {data.publications.map((p, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
            <div style={{
              display: "flex", gap: "24px", alignItems: "flex-start",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(6,182,212,0.1)",
              padding: "28px 32px",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"; e.currentTarget.style.background = "rgba(30,41,59,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}
            >
              <div style={{ marginTop: "4px", flexShrink: 0 }}>
                <div style={{ width: "10px", height: "10px", border: "2px solid #06B6D4", transform: "rotate(45deg)" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#0F172A", margin: "0 0 8px", lineHeight: 1.5 }}>
                  {p.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#06B6D4", letterSpacing: "1.5px" }}>
                    {p.date}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#06B6D4", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "5px", opacity: 0.6 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    IEEE Xplore ↗
                  </span>
                </div>
              </div>
            </div>
          </a>
        </FadeIn>
      ))}
    </section>
  );
}

// Contact
function Contact() {
  return (
    <section id="contact" style={{ ...sectionStyle, minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <SectionHeader number="05 /" title="CONTACT" />
      <FadeIn>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 3vw, 28px)", color: "rgba(15,23,42,0.55)", fontStyle: "italic", maxWidth: "560px", lineHeight: 1.6, marginBottom: "40px" }}>
          Open to summer internship roles, research collabs, and interesting problems.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {[
            { label: "Email", value: data.email, href: `mailto:${data.email}` },
            { label: "LinkedIn", value: data.linkedin, href: `https://${data.linkedin}` },
            { label: "GitHub", value: data.github, href: `https://${data.github}` },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(6,182,212,0.15)",
              padding: "20px 28px",
              minWidth: "200px",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#06B6D4"; e.currentTarget.style.background = "rgba(30,41,59,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}
            >
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#06B6D4", letterSpacing: "2px", marginBottom: "6px" }}>{c.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(15,23,42,0.6)" }}>{c.value}</div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

const sectionStyle = {
  padding: "100px 60px",
  maxWidth: "1100px",
  margin: "0 auto",
};

// CSS injected globally
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: #F1F5F9;
    color: #0F172A;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #F1F5F9; }
  ::-webkit-scrollbar-thumb { background: rgba(30,41,59,0.6); border-radius: 3px; }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  @keyframes gridShift {
    0% { background-position: 0 0; }
    100% { background-position: 60px 60px; }
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
    <div style={{ background: "#F1F5F9", minHeight: "100vh" }}>
      <Nav active={activeSection} sectionRefs={sectionRefs} />
      <div ref={setRef("about")} data-section="about" style={{ paddingTop: "60px" }}>
        <Hero onViewWork={() => sectionRefs.current["experience"]?.scrollIntoView({ behavior: "smooth" })} />
      </div>
      <div style={{ borderTop: "1px solid rgba(6,182,212,0.06)" }}>
        <div ref={setRef("experience")} data-section="experience"><Experience /></div>
        <div ref={setRef("projects")} data-section="projects"><Projects /></div>
        <div ref={setRef("skills")} data-section="skills"><Skills /></div>
        <div ref={setRef("publications")} data-section="publications"><Publications /></div>
        <div ref={setRef("contact")} data-section="contact"><Contact /></div>
      </div>
      <footer style={{
        borderTop: "1px solid rgba(6,182,212,0.1)",
        padding: "24px 60px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: "rgba(15,23,42,0.35)",
        letterSpacing: "1.5px",
        display: "flex", justifyContent: "space-between",
      }}>
        <span>© 2026 RHESHA VINOD</span>
        <span>BUILT WITH REACT</span>
      </footer>
    </div>
  );
}