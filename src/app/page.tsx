import NavBar from "components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-mono mb-4">Hi!</h1>
        <p className="text-lg text-[var(--foreground)] mb-6 ">
        Computer Science graduate with hands-on experience in IT support, hardware troubleshooting, and system setup. I’ve built and configured PCs, resolved software issues, and earned certifications in IT support and networking. Actively seeking opportunities in technical support or networking roles to grow and contribute to impactful tech solutions.
        </p>
        <p className="text-lg text-[var(--foreground)] mb-6 max-w-xl">
          Find me on <a href="https://github.com/Raheelkhan117" className="underline">GitHub</a>
        </p>
      </main>
    </>
  )
}
