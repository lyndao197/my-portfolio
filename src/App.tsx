import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, FileText, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";

type Section = "cv" | "projects";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("projects");
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (section: Section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brand-mark">P.</span>
          <span>{profile.name}</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <button className={activeSection === "cv" ? "nav-link active" : "nav-link"} onClick={() => goTo("cv")}>CV</button>
          <button className={activeSection === "projects" ? "nav-link active" : "nav-link"} onClick={() => goTo("projects")}>Projects</button>
          <a className="nav-cta" href={`mailto:${profile.email}`}>Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>Building better products through <em>clear thinking</em> and thoughtful solutions.</h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => goTo("projects")}>Explore projects <ArrowDownRight size={17} /></button>
              <button className="button button-light" onClick={() => goTo("cv")}>View CV <FileText size={17} /></button>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top"><span>PORTFOLIO / 2026</span><span>01 — 02</span></div>
            <div className="orb-wrap"><div className="orb orb-one" /><div className="orb orb-two" /><div className="orb-center">AI<br />×<br />UX</div></div>
            <div className="hero-card-bottom"><span>Business Analysis</span><span>AI & Automation</span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-line" /><span>INTRODUCTION</span></div>
        </section>

        <section className="section cv-section" id="cv">
          <div className="section-heading">
            <div><p className="eyebrow">A QUICK INTRODUCTION</p><h2>Curriculum <em>Vitae.</em></h2></div>
            <p className="section-note">A snapshot of my experience, skills, and approach to solving problems.</p>
          </div>
          <div className="cv-panel">
            <div className="cv-icon"><FileText size={27} strokeWidth={1.5} /></div>
            <div className="cv-info">
              <p className="cv-kicker">DOCUMENT / PDF</p>
              <h3>{profile.name} — CV</h3>
              <p>Experience · Skills · Education · Contact details</p>
            </div>
            <a className="button button-dark" href="/cv.pdf" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={16} /></a>
            <a className="icon-button" href="/cv.pdf" download aria-label="Download CV"><Download size={18} /></a>
          </div>
          <p className="helper-text">Add your PDF as <code>public/cv.pdf</code> to activate this link.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Projects & <em>experiments.</em></h2></div>
            <p className="section-note">Independent concepts and prototypes focused on practical problems and useful technology.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className={`project-visual visual-${index % 3}`}>
                  {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : (
                    <div className="visual-placeholder">
                      <span className="visual-number">0{index + 1}</span>
                      <div className="visual-symbol">{project.shortLabel}</div>
                      <span className="visual-caption">{project.category}</span>
                    </div>
                  )}
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  <details className="project-details">
                    <summary>Explore case study <ArrowUpRight size={15} /></summary>
                    <div className="details-body">
                      <h4>The problem</h4><p>{project.problem}</p>
                      <h4>Proposed solution</h4><p>{project.solution}</p>
                      <h4>AI integration</h4><p>{project.aiIntegration}</p>
                      <h4>Key features</h4>
                      <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Open demo <ArrowUpRight size={14} /></a>}
                      {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">View source <Github size={14} /></a>}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div className="disclaimer"><span className="disclaimer-mark">i</span><p>Projects marked <strong>Concept</strong> are illustrative personal concepts, not production deployments. Update each project’s status to reflect its actual stage.</p></div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#top"><span className="brand-mark">P.</span><span>{profile.name}</span></a>
        <p>Designed with intention. Built to keep learning.</p>
        <div className="social-links">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
        </div>
      </footer>
    </div>
  );
}

export default App;