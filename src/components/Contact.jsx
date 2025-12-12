import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hablemos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary dark:text-blue-400" size={24} />
                  <span>danielvaquerano@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary dark:text-blue-400" size={24} />
                  <span>+503 74215775</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary dark:text-blue-400" size={24} />
                  <span>San Salvador, El Salvador</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Nombre</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tu nombre" />
              </div>
              
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="tu@email.com" />
              </div>
              
              <div>
                <label className="block mb-2 font-semibold">Mensaje</label>
                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tu mensaje"></textarea>
              </div>
              
              <button type="submit" className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact