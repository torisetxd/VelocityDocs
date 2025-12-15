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
      className="absolute top-2 right-2 p-1.5 rounded bg-zinc-700 hover:bg-zinc-600 transition-all opacity-0 group-hover:opacity-100 text-xs text-white dark:bg-zinc-600 dark:hover:bg-zinc-500"
      aria-label="Copy text"
      title={copied ? "Copied!" : "Copy"}
    >
      {copied ? '✓' : '⎘'}
    </button>
  )
}
