'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header className="py-4 border-b border-neutral-700">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-mono font-semibold">
          <Link href="/">Raheel Khan</Link>
        </div>
        <ul className="flex gap-6 text-sm font-mono text-green-400">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
        <button
          className="text-white text-xl"
          onClick={() => setDark(!dark)}
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}
