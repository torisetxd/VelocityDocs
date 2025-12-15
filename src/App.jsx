import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useDocRoutes } from './hooks/useDocRoutes'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { DocPage } from './pages/DocPage'
import Landing from './pages/Landing'

function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { tree } = useDocRoutes()

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex pt-16">
        <Sidebar 
          tree={tree} 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 min-h-screen">
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<DocsLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
