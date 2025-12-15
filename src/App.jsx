import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import { useDocRoutes } from './hooks/useDocRoutes'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { DocPage } from './pages/DocPage'

function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { tree } = useDocRoutes()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex pt-16">
        <Sidebar 
          tree={tree} 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64">
          <Routes>
            <Route path="/*" element={<DocPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DocsLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
