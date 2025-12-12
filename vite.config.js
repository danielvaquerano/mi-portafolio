import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Reemplaza 'nombre-del-repo' con el nombre EXACTO de tu repositorio en GitHub
const repoName = 'nombre-del-repo'; 

export default defineConfig({
  plugins: [react()],

  base: '/mi-portafolio/', 
})