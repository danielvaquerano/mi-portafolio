function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 88 }
      ]
    },
    {
      category: 'Backend',
      color: 'purple',
      skills: [
        { name: 'PHP', level: 92 },
        { name: 'Laravel', level: 90 },
        { name: 'REST APIs', level: 88 },
        { name: 'MVC', level: 85 }
      ]
    },
    {
      category: 'Database',
      color: 'green',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'SQLite', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      color: 'orange',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'VSCode', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Composer', level: 85 }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades y <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Tecnologías</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}></span>
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Proyectos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Tecnologías</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Commits</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Aprendiendo</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills