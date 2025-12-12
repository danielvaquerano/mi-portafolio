function Projects() {
  const projects = [
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación web completa desarrollada con Laravel para gestión de inventarios, ventas y reportes. Incluye dashboard administrativo, autenticación de usuarios y sistema de roles.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/danielvaquerano/api-gestion-usuarios',
      demo: 'https://github.com/danielvaquerano/api-gestion-usuarios',
      featured: true
    },
    {
      title: 'API REST Completa',
      description: 'API RESTful robusta con autenticación JWT, documentación Swagger y rate limiting. Implementa mejores prácticas de seguridad y validación de datos.',
      tech: ['PHP', 'Laravel', 'JWT', 'Swagger'],
      github: 'https://github.com/danielvaquerano/sistema-biblioteca-php',
      demo: 'https://github.com/danielvaquerano/sistema-biblioteca-php',
      featured: true
    },
    {
      title: 'Portafolio Personal',
      description: 'Sitio web responsive y moderno con modo oscuro, animaciones suaves y diseño adaptable. Optimizado para SEO y velocidad de carga.',
      tech: ['React', 'Tailwind', 'Vite'],
      github: 'https://github.com/danielvaquerano/Algoritmos-de-Ordenamiento',
      demo: 'https://github.com/danielvaquerano/Algoritmos-de-Ordenamiento',
      featured: false
    },
    {
      title: 'Sistema de Reservas citas',
      description: 'Plataforma para gestión de reservas online con calendario interactivo, notificaciones por email y panel de administración.',
      tech: ['Laravel', 'Vue.js', 'MySQL'],
      github: 'https://github.com/danielvaquerano/citas-medicas',
      demo: 'https://github.com/danielvaquerano/citas-medicas',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Destacados</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado recientemente
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    Destacado
                  </span>
                </div>
              )}

              <div className="text-8xl text-center py-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 group-hover:scale-110 transition-transform duration-500">
                {project.emoji}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                    💻 Código
                  </a>
                  
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/danielvaquerano" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Ver más proyectos en GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects