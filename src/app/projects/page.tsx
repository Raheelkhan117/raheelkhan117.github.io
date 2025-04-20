import NavBar from "../../components/NavBar"
import Link from "next/link"

const posts = [
  {
    slug: "my-first-project",
    title: "My First Project",
    date: "2024-04-20",
    excerpt: "This is my first project on my minimal portfolio site built with Next.js!",
  },
  {
    slug: "my-second-project",
    title: "My Second Project",
    date: "2024-04-21",
    excerpt: "This is the second project",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-mono mb-6">Posts</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-neutral-700 pb-4">
              <Link href={`/projects/${post.slug}`}>
                <h2 className="text-xl text-green-400 hover:underline font-mono">{post.title}</h2>
              </Link>
              <p className="text-lg text-[var(--foreground)] mb-6 max-w-xl">{post.date}</p>
              <p className="text-lg text-[var(--foreground)] mb-6 max-w-xl">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
