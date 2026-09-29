import Image from "next/image";
import EducationList from "./components/education-list";
import ExperienceRow from "./components/experience-row";
import ProjectCard from "./components/project-card";
import { certifications, education } from "./data/education";
import { experience } from "./data/experience";
import { projects } from "./data/projects";

const email = "adebisi.dev@icloud.com";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SEIfeoluwa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seii/" },
  { label: "Portfolio", href: "https://ifeoluwadebisi.dev" },
];

type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      className="grid scroll-mt-16 gap-8 border-t border-rule pt-8 md:grid-cols-[10rem_1fr] md:gap-12"
    >
      <h2 className="text-sm text-ink-faint">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-10">
      <section className="flex flex-col-reverse gap-10 pb-16 pt-16 md:flex-row md:items-center md:justify-between md:pb-20 md:pt-24">
        <div>
          <p className="text-xl text-ink-muted">
            Hi, I&apos;m Ife, a
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Full-stack software engineer
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-ink-muted">
            I focus on finding accurate, efficient solutions to complex
            problems. I&apos;m driven by curiosity for new challenges and a
            collaborative mindset that has been a consistent strength
            throughout my career.
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
            <span className="text-ink">Open to full-stack roles</span>
            <a
              href={`mailto:${email}`}
              className="link text-ink-muted hover:text-ink"
            >
              {email}
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-ink-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Ifeoluwa Adebisi"
          width={176}
          height={220}
          quality={90}
          priority
          className="h-30 w-24 shrink-0 rounded-2xl bg-surface object-cover object-top md:h-55 md:w-44"
        />
      </section>

      <div className="space-y-20 pb-20 md:space-y-24">
        <Section id="experience" label="Experience">
          <div className="space-y-12">
            {experience.map((role) => (
              <ExperienceRow
                key={`${role.company}-${role.role}`}
                experience={role}
              />
            ))}
          </div>
        </Section>

        {education.length || certifications.length ? (
          <section
            id="education"
            className="scroll-mt-16 border-t border-rule pt-8"
          >
            <EducationList
              education={education}
              certifications={certifications}
            />
          </section>
        ) : null}

        <Section id="projects" label="Selected work">
          <div className="space-y-14">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
      </div>

      <footer className="flex flex-wrap justify-between gap-4 border-t border-rule py-10 text-sm text-ink-faint">
        <span>Ifeoluwa Adebisi</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
