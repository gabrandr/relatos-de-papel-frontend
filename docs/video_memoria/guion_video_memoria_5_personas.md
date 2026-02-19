# Guion de video memoria (lectura directa) - Actividad 3

## Objetivo del guion
Este guion esta pensado para lectura durante la grabacion y para mostrar evidencia en pantalla mientras habla cada integrante.

Duracion objetivo total: **11:30 - 12:00 min**

---

## Reparto por persona y tiempos

### Persona 1 (0:00 - 2:10) - Contexto del sistema
**Que abrir en pantalla**
1. Frontend en ejecucion (`http://localhost:5173`).
2. Estructura del proyecto en el IDE (carpetas `cypress/`, `load-tests/`, `docs/aceptacion/`).
3. Archivo de caso de uso: `docs/aceptacion/CU-01_compra_libro.md`.

**Guion sugerido**
"En esta actividad grupal automatizamos pruebas de aceptacion, funcionales, de sistema y de carga para Relatos de Papel. El frontend permite buscar libros, agregarlos al carrito y finalizar compra. El backend se consume por un API Gateway que recibe peticiones POST y transforma la peticion segun `targetMethod`. Nuestro objetivo fue validar comportamiento esperado, verificar integracion REST y evaluar rendimiento."

"Como caso de uso principal definimos CU-01: compra de libro desde frontend. Aqui documentamos actor, precondiciones, flujo principal y criterios de aceptacion AC-01 a AC-07."

"La rubrica de evaluacion tiene cinco criterios de igual peso: aceptacion, funcionales web, sistema API REST, carga y calidad de video memoria. En esta grabacion mostraremos evidencia directa de cada criterio."

---

### Persona 2 (2:10 - 4:10) - Automatizacion de pruebas de aceptacion
**Que abrir en pantalla**
1. `docs/aceptacion/CU-01_compra_libro.feature`.
2. `docs/aceptacion/CU-01_compra_libro.md` (seccion criterios de aceptacion y trazabilidad).
3. `cypress/e2e/aceptacion_front.cy.js`.

**Guion sugerido**
"Para aceptacion usamos Cypress mas documentacion BDD en Gherkin. En el `.feature` se definen escenarios funcionales de negocio y en el spec `aceptacion_front.cy.js` se automatizan esos criterios."

"Validamos AC-01 a AC-07: busqueda por titulo, detalle del libro, confirmacion visual al agregar, presencia en carrito, formulario de checkout, redireccion a confirmacion y numero de pedido no vacio. Esta trazabilidad requisito-prueba nos permite justificar el cumplimiento del criterio de aceptacion."

"La evidencia que mostramos aqui es: documento del caso de uso, escenarios Gherkin y prueba automatizada asociada a cada criterio. Con esto cerramos Criterio 1."

---

### Persona 3 (4:10 - 6:10) - Automatizacion de pruebas funcionales (interaccion usuario)
**Que abrir en pantalla**
1. `cypress/e2e/compra_libro.cy.js`.
2. Flujo en navegador (landing -> home -> detalle -> carrito -> checkout -> confirmacion).
3. Reporte Cypress: `cypress/reports/html/index.html`.

**Guion sugerido**
"Las pruebas funcionales verifican la interaccion real del usuario con la interfaz web. En `compra_libro.cy.js` automatizamos el flujo de compra completo desde landing hasta confirmacion."

"El test comprueba navegacion, busqueda, agregado al carrito, llenado del formulario de pago y validacion del resultado final. El reporte HTML evidencia ejecucion y estado de las pruebas."

"En esta parte conviene mostrar rapidamente la ejecucion o el reporte ya generado para que se vea el resultado pass y el detalle por escenario."

---

### Persona 4 (6:10 - 8:25) - Automatizacion de pruebas de sistema (API REST)
**Que abrir en pantalla**
1. `cypress/e2e/integracion_api.cy.js`.
2. Resaltar bloque CRUD y validaciones.
3. Si tienen, reporte de ejecucion con esos tests en pass.

**Guion sugerido**
"Para pruebas de sistema verificamos la interfaz REST a traves del gateway. El flujo CRUD automatizado incluye: obtener listado, crear libro, buscar por id, actualizar, volver a buscar, eliminar y buscar tras eliminar."

"Este ultimo paso se agrego para validar explicitamente que la entidad ya no existe despues del DELETE. Tambien se incluye prueba de pago exitoso en `/api/payments`."

"Con esto cubrimos verificacion de sistema sobre API REST y trazabilidad del ciclo de vida completo de una entidad."

---

### Persona 5 (8:25 - 11:50) - Automatizacion de pruebas de carga + conclusiones
**Que abrir en pantalla**
1. `load-tests/prueba_carga.js`.
2. Resaltar stages con objetivo 10,000 concurrencias y thresholds.
3. Terminal con comando de ejecucion k6 (solo mostrar comando o corrida segun disponibilidad).
4. Cierre con una diapositiva/resumen final.

**Guion sugerido**
"En carga usamos k6 para validar el requisito no funcional de tiempo de respuesta. El script define umbrales de rendimiento y un escenario configurado para escalar hasta 10,000 usuarios concurrentes."

"La metrica clave es `p(95) < 2000 ms` y tasa de error menor al 1%. Para la demostracion mostramos la configuracion completa y la evidencia de ejecucion disponible segun el entorno de prueba."

"Como conclusiones: presentamos cobertura automatizada en los cuatro tipos de prueba solicitados, con evidencia reproducible por criterio. Como mejoras futuras, proponemos ampliar casos negativos, ejecutar carga distribuida en infraestructura dedicada y consolidar pipeline CI/CD para ejecucion continua."

"Feedback final del equipo: la combinacion de caso de uso documentado, pruebas E2E, pruebas de API y pruebas de carga permite una validacion integral y reutilizable para siguientes iteraciones."

---

## Secuencia sugerida de navegacion en pantalla (checklist rapido)
1. Mostrar frontend levantado.
2. Mostrar `CU-01_compra_libro.md`.
3. Mostrar `CU-01_compra_libro.feature`.
4. Mostrar `aceptacion_front.cy.js`.
5. Mostrar `compra_libro.cy.js` + reporte Cypress.
6. Mostrar `integracion_api.cy.js` (incluyendo busqueda post-delete).
7. Mostrar `prueba_carga.js`.
8. Cerrar con conclusiones y feedback del equipo.

---

## Texto de transicion entre personas (lectura literal)
- "Cedo la palabra a [Nombre], quien explicara el criterio de aceptacion y su automatizacion."
- "Continuamos con [Nombre], que mostrara pruebas funcionales de interfaz."
- "Ahora [Nombre] presentara pruebas de sistema sobre API REST."
- "Para cerrar, [Nombre] mostrara carga, conclusiones y feedback del equipo."

---

## Checklist previo a grabar (evitar cortes)
1. Tener abierto el frontend en `http://localhost:5173`.
2. Tener abiertos en pestañas del IDE todos los archivos del guion.
3. Tener listo el reporte `cypress/reports/html/index.html`.
4. Tener terminal preparada con comandos de Cypress/k6 (aunque no se ejecuten en vivo).
5. Probar audio y asignar cronometro por persona.

---

## Frase de cierre recomendada
"Con esta estrategia cubrimos validacion funcional, verificacion de sistema y rendimiento con automatizacion reproducible, cumpliendo los requisitos de la actividad y dejando una base escalable para futuras iteraciones."
