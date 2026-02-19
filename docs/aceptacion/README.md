# Guia de ejecucion - Pruebas de Aceptacion Frontend (CU-01)

## Archivos creados
- Documentacion funcional: `docs/aceptacion/CU-01_compra_libro.md`
- Escenarios Gherkin (BDD): `docs/aceptacion/CU-01_compra_libro.feature`
- Automatizacion Cypress: `cypress/e2e/aceptacion_front.cy.js`

## 1) Levantar frontend
```bash
npm run dev
```
Debe quedar disponible en `http://localhost:5173`.

## 2) Ejecutar solo pruebas de aceptacion (modo interactivo)
```bash
npx cypress open
```
Luego, en la UI de Cypress, selecciona:
- `E2E Testing`
- spec: `aceptacion_front.cy.js`

## 3) Ejecutar solo pruebas de aceptacion (modo headless)
```bash
npx cypress run --spec cypress/e2e/aceptacion_front.cy.js
```

## 4) Visualizar evidencia
El proyecto ya usa `cypress-mochawesome-reporter`, por lo que tras la ejecucion se genera/reutiliza:
- Reporte HTML: `cypress/reports/html/index.html`

Abre ese archivo en tu navegador para mostrar:
- Cantidad de pruebas ejecutadas
- Estado pass/fail
- Duracion y detalle por prueba

## 5) Como defenderlo en la actividad
- Muestra el archivo `.feature` para demostrar criterios de aceptacion en lenguaje funcional.
- Muestra el `.md` para caso de uso formal y trazabilidad.
- Ejecuta `aceptacion_front.cy.js` en vivo o muestra el `index.html` con resultados.

