function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 Dany. Todos los derechos reservados.</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/danielvaquerano" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110" title="GitHub">
              GitHub 🔗
            </a>
            
            <a href="https://www.linkedin.com/in/daniel-vaqueran0/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110" title="LinkedIn">
              LinkedIn 🔗
            </a>
            
            <a href="mailto:danielvaquerano@gmail.com" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110" title="Email">
              Email 📧
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer