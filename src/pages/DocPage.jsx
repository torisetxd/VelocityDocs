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
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">404</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">Page not found</p>
          <a href="/" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 underline">
            Go home
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
