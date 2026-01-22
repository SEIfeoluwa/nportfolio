import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            View
          </a>
        ) : null}
      </div>
      {project.repo ? (
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Repo: {project.repo}
        </p>
      ) : null}
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {project.description}
      </p>
      {project.highlights && project.highlights.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      {project.tags && project.tags.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
