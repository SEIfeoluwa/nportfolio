import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-lg font-semibold leading-tight text-ink">
          {project.title}
        </h3>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm text-ink-muted hover:text-ink"
          >
            View project
          </a>
        ) : null}
      </div>
      <p className="mt-4 max-w-xl leading-7 text-ink-muted">
        {project.description}
      </p>
      {project.tags && project.tags.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-rule px-2.5 py-0.5 text-xs text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
