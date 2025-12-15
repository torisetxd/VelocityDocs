import { Link, useLocation } from 'react-router-dom'

function buildSidebarItems(tree, prefix = '') {
  return Object.entries(tree).map(([key, value]) => {
    const isRoute = value.path !== undefined
    const currentPrefix = prefix ? `${prefix}/${key}` : key
    
    if (isRoute) {
      return {
        key: currentPrefix,
        title: value.title,
        path: value.path,
        type: 'item'
      }
    }

    const children = value._children ? buildSidebarItems(value._children, currentPrefix) : []
    
    return {
      key: currentPrefix,
      title: key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      children,
      type: 'group'
    }
  })
}

function SidebarItem({ item, isActive }) {
  if (item.type === 'item') {
    return (
      <Link
        to={item.path}
        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
          isActive
            ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900'
            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
        }`}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className="mb-4">
      <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
        {item.title}
      </div>
      <div className="space-y-1">
        {item.children?.map(child => (
          <SidebarItem key={child.key} item={child} isActive={false} />
        ))}
      </div>
    </div>
  )
}

export function Sidebar({ tree, isOpen, onClose }) {
  const location = useLocation()

  const sidebarItems = buildSidebarItems(tree)

  const isPathActive = (itemPath) => {
    return location.pathname === itemPath || location.pathname === itemPath + '/'
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-zinc-50 dark:bg-black border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto transition-transform lg:translate-x-0 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <nav className="p-4 space-y-1">
          {sidebarItems.map(item => (
            <SidebarItem
              key={item.key}
              item={item}
              isActive={item.type === 'item' && isPathActive(item.path)}
            />
          ))}
        </nav>
      </aside>
    </>
  )
}
