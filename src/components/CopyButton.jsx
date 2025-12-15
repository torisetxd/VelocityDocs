import { useState } from 'react'

export function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button 
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all opacity-0 group-hover:opacity-100 text-xs text-zinc-700 dark:text-zinc-300"
      aria-label="Copy text"
      title={copied ? "Copied!" : "Copy"}
    >
      {copied ? '✓' : '⎘'}
    </button>
  )
}
