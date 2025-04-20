import NavBar from "../../../components/NavBar"

export default function PostPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-10 text-white dark:bg-neutral-900 min-h-screen">
        <h1 className="text-3xl font-bold font-mono mb-4">My First Blog Post</h1>
        <p className="text-neutral-300 mb-4">
          Welcome to my blog! This is the first post I’m writing on my minimal portfolio site.
        </p>
        <p className="text-neutral-400 text-sm">Posted on April 20, 2024</p>
      </main>
    </>
  )
}
