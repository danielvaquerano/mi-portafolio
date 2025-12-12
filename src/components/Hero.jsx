function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 opacity-50"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-800">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Disponible para proyectos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">Daniel Vaquerano</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
              Desarrollador Full Stack | Laravel | React
            </p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Especializado en desarrollo backend con Laravel y creación de interfaces modernas con React. 
            Transformo ideas en soluciones digitales escalables y eficientes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Ver Proyectos →
            </a>
            
            <a href="#contact" className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              📧 Contactar
            </a>
            
            <a href="/cv.pdf" download className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              ⬇️ Descargar CV
            </a>
          </div>

          <div className="flex justify-center gap-6">
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
    </section>
  )
}

export default Hero