import CopyEmailButton from "./components/copy-email-button";
import ExperienceRow from "./components/experience-row";
import ProjectCard from "./components/project-card";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

const email = "adebisi.dev@icloud.com";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SEIfeoluwa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seii/" },
  { label: "Portfolio", href: "https://ifeoluwadebisi.dev" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="text-left">
        <p className="ledger-label text-xs text-accent">Vol. 01 — Engineering Ledger</p>
        <div className="mt-3">
          <h1 className="font-serif text-4xl font-semibold text-ink">
            Hi, I&apos;m Ife,
          </h1>
          <h1 className="font-serif text-4xl font-semibold text-ink">
            a full-stack software engineer
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
            As a Software Engineer, I focus on finding accurate, efficient
            solutions to complex problems. I am driven by a strong curiosity to
            tackle new challenges and a collaborative mindset that has been a
            consistent strength throughout my career. My value lies in my
            technical skill set and my ability to design, build, and navigate
            software applications effectively.
          </p>
        </div>
        <div className="mt-6 border-t-2 border-double border-rule-strong" />
      </section>

      <section id="projects" className="mt-14 scroll-mt-20">
        <div className="flex items-baseline justify-between border-b border-rule pb-2">
          <h2 className="ledger-label text-sm">
            <span className="text-accent">(A)</span>{" "}
            <span className="font-semibold text-ink">Projects</span>
          </h2>
          <span className="ledger-label text-xs text-ink-faint">
            {String(projects.length).padStart(2, "0")} entries
          </span>
        </div>
        <p className="mt-3 text-ink-muted">
          A selection of projects I&apos;ve built recently.
        </p>
        <div className="mt-6 divide-y divide-rule border-y border-rule">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="mt-14 scroll-mt-20">
        <div className="flex items-baseline justify-between border-b border-rule pb-2">
          <h2 className="ledger-label text-sm">
            <span className="text-accent">(B)</span>{" "}
            <span className="font-semibold text-ink">Experience</span>
          </h2>
          <span className="ledger-label text-xs text-ink-faint">
            {String(experience.length).padStart(2, "0")} entries
          </span>
        </div>
        <p className="mt-3 text-ink-muted">
          Where I&apos;ve worked and what I built while I was there.
        </p>
        <div className="mt-6 divide-y divide-rule border-y border-rule">
          {experience.map((role, index) => (
            <ExperienceRow
              key={`${role.company}-${role.role}`}
              experience={role}
              index={index + 1}
            />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-14 scroll-mt-20">
        <div className="border-b border-rule pb-2">
          <h2 className="ledger-label text-sm">
            <span className="text-accent">(C)</span>{" "}
            <span className="font-semibold text-ink">Skills</span>
          </h2>
        </div>
        <p className="mt-3 text-ink-muted">
          A snapshot of the tools and technologies I work with.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="ledger-label rounded-sm border border-rule-strong bg-paper-elevated px-3 py-1 text-xs text-ink-muted"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-14 scroll-mt-20 pb-4">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="ledger-label text-sm">
            <span className="text-accent">(D)</span>{" "}
            <span className="font-semibold text-ink">Contact</span>
          </p>
          <div className="flex flex-col items-end gap-2 font-mono text-sm text-ink-muted">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rule-strong underline-offset-4 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 max-w-sm text-ink-muted">
          Open to full-stack engineering roles and interesting problems worth
          digging into. Fastest route is email.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="font-serif text-lg font-semibold text-accent underline decoration-1 underline-offset-4 hover:text-accent-soft"
          >
            {email}
          </a>
          <CopyEmailButton email={email} />
        </div>
      </section>
    </main>
  );
}
