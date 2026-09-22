import type { Experience } from "../data/experience";

type ExperienceRowProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceRow({ experience, index }: ExperienceRowProps) {
  return (
    <article className="grid grid-cols-[3rem_1fr] gap-4 py-6 first:pt-0 last:pb-0">
      <span className="font-mono text-sm text-ink-faint">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="font-serif text-lg font-semibold text-ink">
            {experience.role} · {experience.company}
          </h3>
          <span className="ledger-label text-xs text-ink-faint">
            {experience.period}
          </span>
        </div>
        <p className="ledger-label mt-1 text-[11px] text-ink-faint">
          {experience.location}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
          {experience.summary}
        </p>
        {experience.tags && experience.tags.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
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
