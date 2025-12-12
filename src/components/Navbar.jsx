import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-primary dark:text-blue-400">
              Mi Portafolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                {item.name}
              </a>
            ))}
            
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar