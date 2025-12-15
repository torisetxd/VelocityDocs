import { useMemo } from 'react'

export function useDocRoutes() {
  const modules = import.meta.glob('@docs/**/*.md', { 
    query: '?raw', 
    import: 'default' 
  })

  return useMemo(() => {
    const routes = []
    const fileMap = {}

    Object.entries(modules).forEach(([path, loader]) => {
      const cleanPath = path
        .replace(/^.*?docs\//, '')
        .replace('.md', '')
      
      fileMap[cleanPath] = loader
      
      const segments = cleanPath.split('/')
      const title = segments[segments.length - 1]
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

      routes.push({
        path: `/${cleanPath}`,
        slug: cleanPath,
        title,
        loader,
        segments
      })
    })

    const tree = {}
    routes.forEach(route => {
      let current = tree
      route.segments.slice(0, -1).forEach(segment => {
        if (!current[segment]) {
          current[segment] = { _children: {} }
        }
        current = current[segment]._children
      })
      current[route.segments[route.segments.length - 1]] = route
    })

    return { routes, tree, fileMap }
  }, [])
}
