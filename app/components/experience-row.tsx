import type { Experience } from "../data/experience";

type ExperienceRowProps = {
  experience: Experience;
};

export default function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-lg font-semibold leading-tight text-ink">
          {experience.company}
        </h3>
        <span className="text-sm tabular-nums text-ink-faint">
          {experience.period}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-muted">
        {experience.role} · {experience.location}
      </p>
      <p className="mt-4 max-w-xl leading-7 text-ink-muted">
        {experience.summary}
      </p>
      {experience.tags && experience.tags.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
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
