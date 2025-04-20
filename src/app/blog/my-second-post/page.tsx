import NavBar from "../../../components/NavBar"

export default function PostPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-mono mb-4">My Second Blog Post</h1>
        <p className="text-lg text-[var(--foreground)] mb-6 max-w-xl">
          Welcome to my blog! This is the second post I’m writing on my minimal portfolio site.
        </p>
        <p className="text-sm text-[var(--foreground)] mb-6 max-w-xl">Posted on April 20, 2024</p>
      </main>
    </>
  )
}
