import { useState } from 'react'
import { config } from '../config'

export function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded lg:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <a href="/" className="flex items-center gap-2">
          {config.logo && config.logo !== '/logo.png' && (
            <img src={config.logo} alt="logo" className="w-8 h-8" />
          )}
          <span className="font-bold text-lg text-zinc-900 dark:text-white">
            {config.title}
          </span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
          title="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.657 1.343a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zm2.828 2.829a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zm.707 10.607a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.657-1.343a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM5.05 6.05a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm5.707-5.707a1 1 0 011.414 0l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM10 5a1 1 0 011 1v.01a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {config.github && (
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
            title="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.002.07 1.527 1.03 1.527 1.03.89 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.913-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </nav>
  )
}
