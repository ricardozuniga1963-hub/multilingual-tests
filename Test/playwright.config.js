
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Carpeta donde están las pruebas
  timeout: 30000,     // Tiempo máximo por prueba (30s)
  use: {
    headless: true,   // Ejecutar sin abrir ventana del navegador
    baseURL: 'http://localhost:3000', // URL del servidor
    viewport: { width: 1280, height: 720 }, // Tamaño de pantalla
  },
});
