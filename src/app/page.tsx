export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <section className="max-w-xl rounded-xl border border-black/10 p-6 dark:border-white/20">
        <h1 className="text-2xl font-semibold">Single-file static app configured</h1>
        <p className="mt-3 text-sm text-black/70 dark:text-white/70">
          The deployable web application now lives in
          <code className="mx-1 rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/10">/index.html</code>
          with inline CSS and JavaScript for static Netlify hosting.
        </p>
      </section>
    </main>
  );
}
