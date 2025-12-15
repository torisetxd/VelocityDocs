import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDocRoutes } from '../hooks/useDocRoutes'
import { MarkdownRenderer } from '../components/MarkdownRenderer'

export function DocPage() {
  const { '*': docPath } = useParams()
  const { fileMap } = useDocRoutes()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadDoc = async () => {
      try {
        setLoading(true)
        
        const cleanPath = docPath === '' || docPath === '/' ? 'getting-started' : docPath
        const loader = fileMap[cleanPath]
        
        if (!loader) {
          setError(`Document not found: ${cleanPath}`)
          setContent('')
          return
        }

        const markdown = await loader()
        setContent(markdown)
        setError(null)
        window.scrollTo(0, 0)
      } catch (err) {
        setError(`Failed to load document: ${err.message}`)
        setContent('')
      } finally {
        setLoading(false)
      }
    }

    loadDoc()
  }, [docPath, fileMap])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-zinc-500 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md p-8 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700 mb-4">404</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">{error}</p>
          <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Go back home
          </a>
        </div>
      </div>
    )
  }

  return (
    <article className="min-w-full px-4 py-8 prose dark:prose-invert max-w-none bg-white dark:bg-black transition-colors">
      {content ? (
        <MarkdownRenderer content={content} />
      ) : (
        <div className="text-center text-zinc-500 dark:text-zinc-400 py-12">
          <p>No content available</p>
        </div>
      )}
    </article>
  )
}
