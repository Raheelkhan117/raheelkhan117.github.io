import NavBar from "components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-mono mb-4">Hello World!</h1>
        <p className="text-lg text-[var(--foreground)] mb-6 max-w-xl">
          Hi, I’m building a dark-themed portfolio and blog using Next.js.
          Stay tuned for more posts and projects!
        </p>
        <p className="text-sm text-neutral-500 font-mono">
          Find me on <a href="https://github.com/Raheelkhan117" className="underline">GitHub</a>
        </p>
      </main>
    </>
  )
}
