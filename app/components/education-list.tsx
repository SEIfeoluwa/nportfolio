import type { Certification, Education } from "../data/education";

type EducationListProps = {
  education: Education[];
  certifications: Certification[];
};

export default function EducationList({
  education,
  certifications,
}: EducationListProps) {
  return (
    <div className="mx-auto grid max-w-3xl gap-12 sm:grid-cols-2 sm:gap-16">
      {education.length ? (
        <div>
          <h3 className="text-sm text-ink-faint">Education</h3>
          <ol className="mt-5 space-y-8 border-l border-rule">
            {education.map((entry, index) => (
              <li
                key={`${entry.school}-${entry.degree}`}
                className="relative pl-6"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full border ${
                    index === 0
                      ? "border-ink bg-ink"
                      : "border-ink-faint bg-paper"
                  }`}
                />
                <p className="text-sm tabular-nums text-ink-faint">
                  {entry.period}
                </p>
                <h4 className="mt-1 font-semibold leading-snug text-ink">
                  {entry.school}
                </h4>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {entry.location
                    ? `${entry.degree} · ${entry.location}`
                    : entry.degree}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {certifications.length ? (
        <div>
          <h3 className="text-sm text-ink-faint">Certifications</h3>
          <ul className="mt-5 space-y-4">
            {certifications.map((cert) => (
              <li
                key={`${cert.name}-${cert.issuer}`}
                className="rounded-xl border border-rule p-4"
              >
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link font-semibold leading-snug text-ink"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="font-semibold leading-snug text-ink">
                    {cert.name}
                  </p>
                )}
                <p className="mt-1 text-sm tabular-nums text-ink-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
