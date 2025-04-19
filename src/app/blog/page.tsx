// app/blog/page.tsx
export default function BlogPage() {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-mono mb-8 text-[var(--foreground)]">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <article key={id} className="bg-[var(--background)] border border-neutral-300 dark:border-neutral-700 rounded-xl p-6 shadow hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">Blog Post Title {id}</h2>
              <p className="text-[var(--foreground)] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel lorem nec elit vulputate ultrices.
              </p>
            </article>
          ))}
        </div>
      </main>
    )
  }
  