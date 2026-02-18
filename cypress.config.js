import { defineConfig } from "cypress";

export default defineConfig({
  // Configuración del Reporter
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,           // Genera gráficos estadísticos
    reportPageTitle: 'Reporte de Pruebas Maestría',
    embeddedScreenshots: true, // Mete las fotos dentro del HTML
    inlineAssets: true,     // Mete los estilos dentro del HTML (para que sea un solo archivo)
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Activar el plugin del reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Esto es lo que ya tenías
    baseUrl: 'http://localhost:5173', 
  },
});