import ProjectCard from "./components/project-card";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <section className="text-left">
        <div>
          <h1 className="text-3xl font-semibold">
            Hi, I'm Ife, 
          </h1>
          <h1 className="text-3xl font-semibold">
            a full-stack software engineer
          </h1>
          <p className="mt-4 text-zinc-600">
            As a Software Engineer, I focus on finding accurate, efficient
            solutions to complex problems. I am driven by a strong curiosity to
            tackle new challenges and a collaborative mindset that has been a
            consistent strength throughout my career. My value lies in my
            technical skill set and my ability to design, build, and navigate
            software applications effectively.
          </p>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
        <p className="mt-2 text-zinc-600">
          A selection of projects I've built recently.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">Skills</h2>
        <p className="mt-2 text-zinc-600">
          A snapshot of the tools and technologies I work with.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
