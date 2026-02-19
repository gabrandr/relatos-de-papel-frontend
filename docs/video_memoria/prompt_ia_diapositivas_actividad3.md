# Prompt completo para IA de diapositivas - Actividad 3

Usa este texto completo en la IA de presentaciones. Esta version incluye el contexto de la actividad, rubrica, proyecto, evidencias y restricciones para que la IA genere diapositivas sin necesitar mas informacion.

---

## Prompt listo para copiar

Genera una presentacion academica en espanol para una **video memoria de maximo 10 minutos** sobre esta actividad:

**Actividad 3 (exclusivamente grupal): Automatizacion de pruebas de aceptacion, funcionales, de sistema y de carga.**

### 1) Contexto de la actividad (obligatorio en la presentacion)

La actividad pide automatizar la validacion y verificacion del sistema:
- Pruebas de aceptacion (validacion de que cumple lo esperado).
- Pruebas funcionales (interaccion del usuario con interfaz web).
- Pruebas de sistema (API REST del backend).
- Pruebas de carga (requisito no funcional de rendimiento).

Requisito de carga especifico:
- Soportar **10,000 usuarios concurrentes** consultando/buscando productos.
- Tiempo de respuesta objetivo: **<= 2 segundos**.

La video memoria debe cubrir estos puntos:
1. Contexto del sistema.
2. Automatizacion de pruebas de aceptacion.
3. Automatizacion de pruebas de interaccion con usuario (funcionales).
4. Automatizacion de pruebas de API REST (sistema).
5. Automatizacion de pruebas de carga.
6. Conclusiones y feedback.

Rubrica (5 criterios, 20% cada uno):
- C1: Correcta automatizacion de aceptacion.
- C2: Correcta automatizacion de pruebas funcionales web.
- C3: Correcta automatizacion de pruebas de sistema (backend API REST).
- C4: Correcta automatizacion de pruebas de carga.
- C5: Calidad de video memoria (duracion y cobertura de aspectos solicitados).

### 2) Contexto del proyecto real (usar esta informacion en las diapositivas)

Proyecto: **Relatos de Papel**.

Stack y arquitectura:
- Frontend: React + Vite.
- UI/API testing: Cypress.
- Carga: k6.
- Backend: Spring Boot detras de Gateway.
- Gateway recibe requests POST y enruta por `targetMethod` (GET/POST/PATCH/DELETE).

Repositorio frontend (workspace analizado):
- Prueba de aceptacion automatizada nueva: `cypress/e2e/aceptacion_front.cy.js`
- Prueba funcional existente: `cypress/e2e/compra_libro.cy.js`
- Prueba de sistema API: `cypress/e2e/integracion_api.cy.js`
- Prueba de carga: `load-tests/prueba_carga.js`
- Caso de uso documentado: `docs/aceptacion/CU-01_compra_libro.md`
- Escenarios BDD (Gherkin): `docs/aceptacion/CU-01_compra_libro.feature`
- Reporte Cypress: `cypress/reports/html/index.html`

Flujo funcional principal de negocio:
- Buscar libro (ejemplo: "1984").
- Abrir detalle.
- Anadir al carrito.
- Ir a checkout.
- Completar datos de pago.
- Confirmar compra.
- Ver pagina de confirmacion con numero de pedido.

### 3) Estado implementado (debes reflejarlo en la narrativa)

Criterio 1 (aceptacion):
- Existe caso de uso formal CU-01.
- Existen criterios AC-01 a AC-07.
- Existe trazabilidad criterio -> prueba automatizada.

Criterio 2 (funcionales web):
- Existe flujo E2E de compra completo en Cypress.
- Se valida navegacion, acciones del usuario y resultado final.

Criterio 3 (sistema API REST):
- Existe CRUD completo automatizado via gateway.
- Incluye paso final de "buscar tras eliminar y verificar no encontrado".
- Incluye prueba adicional de pago exitoso.

Criterio 4 (carga):
- Script k6 parametrizado con stages hasta 10,000 concurrencias.
- Thresholds configurados: p95 < 2s y tasa de fallo < 1%.
- Nota metodologica: en portatil puede mostrarse demo menor y explicar que corrida 10k idealmente se valida en entorno mas potente.

Criterio 5 (video memoria):
- Debe demostrar evidencias de los 4 tipos de prueba y cerrar con conclusiones/feedback.

### 4) Lo que quiero que produzcas

Genera una presentacion de **12 diapositivas** con este orden:
1. Portada (actividad, asignatura, equipo, fecha).
2. Objetivos y alcance.
3. Contexto del sistema y arquitectura de pruebas.
4. Rubrica y estrategia adoptada.
5. Criterio 1 - Aceptacion (CU-01 + AC-01..AC-07).
6. Evidencia Criterio 1 (Gherkin + Cypress de aceptacion).
7. Criterio 2 - Funcionales web (flujo de compra E2E).
8. Criterio 3 - Sistema API REST (CRUD + post-delete).
9. Criterio 4 - Carga con k6 (10,000 concurrencias y thresholds).
10. Resultados y evidencias (reportes, estado de pruebas, cobertura por criterio).
11. Riesgos, limitaciones, mejoras futuras.
12. Conclusiones finales y feedback del equipo.

### 5) Formato de salida requerido

Devuelve el resultado en Markdown, y para cada diapositiva incluye:
- Titulo.
- 3 a 5 bullets concretos.
- Nota del presentador (20-40 segundos).
- Recurso visual sugerido (captura, codigo, diagrama o reporte).

Adicional:
- Incluye un bloque final con **reparto de exposicion para 5 personas** (quien presenta que diapositivas).
- Incluye un bloque final con **checklist de demo en vivo** (que archivos abrir en pantalla en orden).

### 6) Restricciones

- No inventar metricas no medidas.
- Si un dato no esta medido, marcarlo como "pendiente de medicion".
- Mantener tono academico y tecnico.
- Evitar parrafos largos; priorizar bullets claros.
- Alinear todo a una defensa oral de 10 minutos.

