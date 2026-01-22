export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-zinc-600">
        Reach out for collaboration, opportunities, or questions.
      </p>
      <div className="mt-6 space-y-2 text-zinc-700">
        <p>
          Email:{" "}
          <a
            className="font-medium text-zinc-900 hover:underline"
            href="mailto:ife@example.com"
          >
            adebisi.dev@icloud.com
          </a>
        </p>
      </div>
    </main>
  );
}
