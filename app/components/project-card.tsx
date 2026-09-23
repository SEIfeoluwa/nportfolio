import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-[3rem_1fr] gap-4 py-6">
      <span className="font-mono text-sm text-ink-faint">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-ink">
            {project.title}
          </h3>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ledger-label text-xs text-accent hover:text-accent-soft"
            >
              View →
            </a>
          ) : null}
        </div>
        {project.repo ? (
          <p className="ledger-label mt-1 text-[11px] text-ink-faint">
            Repo: {project.repo}
          </p>
        ) : null}
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
          {project.description}
        </p>
        {project.highlights && project.highlights.length ? (
          <ul className="mt-4 max-w-2xl space-y-1.5 text-sm text-ink-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-accent-soft">—</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {project.tags && project.tags.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="ledger-label rounded-sm border border-rule px-2.5 py-1 text-[11px] text-ink-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
