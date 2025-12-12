import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. 
              Con experiencia en desarrollo web full stack, me especializo en crear aplicaciones robustas 
              y escalables utilizando las últimas tecnologías.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Mi enfoque se centra en escribir código limpio, mantenible y eficiente. Me encanta aprender 
              nuevas tecnologías y enfrentar desafíos que me permitan crecer como profesional.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              Cuando no estoy programando, disfruto de aprender sobre nuevas tendencias en tecnología, 
              contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About