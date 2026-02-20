# Guion de video memoria (lectura directa) - Actividad 3

## Objetivo del guion

Este guion esta preparado para leerlo durante la grabacion mientras cada integrante muestra evidencia en pantalla.

Duracion objetivo total: **11:45 - 12:00 min**

---

## Apertura general (Persona 1 - 0:00 a 2:00)

**Que abrir en pantalla**

1. Frontend levantado en `http://localhost:5173`.
2. Estructura del proyecto en el IDE (carpetas `cypress/`, `load-tests/`, `docs/`).
3. Diapositiva de portada (si ya la tienen).

**Lectura literal**
"Saludos, Somos el equipo 28, presentamos la Actividad 3 de automatizacion de pruebas. En esta presentacion mostraremos evidencias de los cuatro tipos de prueba solicitados: aceptacion, funcionales web, sistema API REST y carga."

"Las herramientas que utilizamos fueron **Cypress**, **Postman** y **k6**. Cypress lo usamos para pruebas E2E de interfaz y tambien para pruebas de integracion API. Postman lo usamos como evidencia complementaria para API REST mediante una coleccion CRUD automatizable. k6 lo usamos para pruebas de carga."

"La rubrica tiene cinco criterios con el mismo peso: aceptacion, funcionales web, sistema API REST, carga y calidad de video memoria. En este video vamos a recorrer cada criterio con evidencia directa."

"Es importante aclarar que en esta exposicion no solo contamos lo que hicimos, sino que mostraremos archivos reales del proyecto y evidencia de ejecucion. De esta forma la presentacion mantiene trazabilidad entre requisito, implementacion y resultado."

"Con este contexto inicial, damos paso al primer criterio, correspondiente a validacion y pruebas de aceptacion."

---

## Criterio 1 - Aceptacion (Persona 2 - 2:00 a 4:00)

**Que abrir en pantalla**

1. `docs/aceptacion/CU-01_compra_libro.md`
2. `docs/aceptacion/CU-01_compra_libro.feature`
3. `cypress/e2e/aceptacion_front.cy.js`

**Lectura literal**
"Para el criterio de aceptacion documentamos el caso de uso CU-01: compra de libro desde frontend. Este documento incluye objetivo, actor, precondiciones, flujo principal y criterios de aceptacion."

"Los criterios definidos son AC-01 a AC-07: buscar libro, ver detalle, confirmar agregado al carrito, validar carrito, ver formulario de checkout, redireccion a confirmacion y numero de pedido no vacio."

"La trazabilidad se evidencia en el archivo Gherkin y en la automatizacion `aceptacion_front.cy.js`, donde cada criterio esta validado de forma automatica. Con esto cubrimos la parte de validacion de comportamiento esperado."

"Aqui estamos vinculando lenguaje funcional de negocio con pruebas ejecutables. Es decir, primero definimos que debe pasar y luego comprobamos automaticamente que realmente pase."

"Para la defensa, este punto es clave porque demuestra que la aceptacion no se quedo en descripcion teorica, sino que tiene implementacion y evidencia."

---

## Criterio 2 - Pruebas funcionales web (Persona 3 - 4:00 a 6:00)

**Que abrir en pantalla**

1. `cypress/e2e/compra_libro.cy.js`
2. Navegador con flujo funcional (landing -> home -> detalle -> carrito -> checkout -> confirmacion).
3. `cypress/reports/html/index.html`

**Lectura literal**
"Para pruebas funcionales de interfaz automatizamos el flujo completo de compra con Cypress. En este script se simula la interaccion real del usuario desde que entra a la pagina hasta que finaliza la compra."

"Se valida la navegacion entre vistas, la busqueda de un libro por titulo, la adicion al carrito, el paso a checkout, el llenado del formulario y el resultado final en la pagina de confirmacion."

"Como evidencia de ejecucion mostramos el reporte HTML de Cypress con el estado de los escenarios y resultados obtenidos."

"Este tipo de prueba es importante porque representa el comportamiento integral de la experiencia de usuario, validando que las pantallas y acciones encadenadas funcionen correctamente."

"Tambien permite detectar regresiones cuando se cambia la interfaz o el flujo de compra, ya que el mismo escenario puede volver a ejecutarse de forma repetible."

---

## Criterio 3 - Pruebas de sistema API REST (Persona 4 - 6:00 a 8:00)

**Que abrir en pantalla**

1. `cypress/e2e/integracion_api.cy.js`
2. Coleccion Postman CRUD (en Postman abierto).
3. Si es posible, ejecucion rapida en Collection Runner o captura de resultados.

**Lectura literal**
"Para pruebas de sistema verificamos interfaces REST del backend a traves del gateway. Primero mostramos lo automatizado en Cypress, en el archivo `integracion_api.cy.js`."

"El flujo incluye CRUD completo: crear, consultar, actualizar, volver a consultar, eliminar y consultar despues de eliminar para validar que la entidad ya no existe."

"Como evidencia complementaria mostramos tambien la coleccion de Postman con el mismo flujo CRUD. Esta coleccion permite ejecutar los requests de forma secuencial y comprobar codigos de estado y datos esperados."

"Con Cypress y Postman demostramos verificacion de sistema por dos vias: automatizacion en codigo y coleccion API reutilizable."

"La parte de consultar despues del delete fue incluida explicitamente porque era un requisito puntual de la actividad: no basta con eliminar, tambien hay que verificar que la entidad ya no este disponible."

"Al mostrar tanto Cypress como Postman, reforzamos que el flujo API esta validado y puede ser ejecutado por distintos perfiles del equipo."

---

## Criterio 4 - Pruebas de carga (Persona 5 - 8:00 a 9:45)

**Que abrir en pantalla**

1. `load-tests/prueba_carga.js`
2. Terminal con comando de k6.
3. Resultado de ejecucion disponible o captura.

**Lectura literal**
"Para el criterio de carga usamos k6. El script define stages de concurrencia y thresholds para controlar rendimiento."

"El escenario esta configurado para escalar hasta 10,000 usuarios concurrentes y evaluar la metrica de tiempo de respuesta. El umbral principal es `p(95) < 2000 ms` y la tasa de error menor al 1%."

"En la demostracion mostramos la configuracion del script y la evidencia de ejecucion disponible segun entorno de prueba."

"Este criterio se enfoca en comportamiento no funcional: no solo que responda bien, sino que mantenga tiempos aceptables bajo alta concurrencia."

"La configuracion que mostramos deja preparado el escenario objetivo de la actividad y permite repetir la medicion en un entorno mas robusto cuando sea necesario."

---

## Criterio 5 - Video memoria, cierre y feedback (Persona 5 - 9:45 a 11:45)

**Que abrir en pantalla**

1. Diapositiva de resumen por criterio.
2. Lista corta de archivos de evidencia.
3. Diapositiva final de conclusiones.

**Lectura literal**
"Para el criterio de video memoria, en esta grabacion cubrimos contexto del sistema, aceptacion, funcionales web, API REST, carga y cierre con conclusiones y feedback."

"En resumen, presentamos evidencia por criterio en estos archivos: `CU-01_compra_libro.md`, `CU-01_compra_libro.feature`, `aceptacion_front.cy.js`, `compra_libro.cy.js`, `integracion_api.cy.js`, coleccion de Postman para CRUD y `prueba_carga.js`."

"Como conclusion del equipo, la estrategia aplicada nos permitio validar el sistema desde la perspectiva del usuario, de la API y del rendimiento, con pruebas automatizadas y reproducibles."

"Como mejora futura proponemos ampliar escenarios negativos, reforzar ejecuciones en CI/CD y ejecutar carga distribuida en infraestructura dedicada cuando se requiera validacion intensiva."

"Tambien como mejora de proceso, proponemos mantener una matriz de trazabilidad viva entre rubrica, casos de uso y scripts automatizados para facilitar futuras entregas y auditoria academica."

"Muchas gracias por su atencion."

---

## Orden recomendado de navegacion en pantalla (checklist de demo)

1. Portada + frontend levantado.
2. `docs/aceptacion/CU-01_compra_libro.md`
3. `docs/aceptacion/CU-01_compra_libro.feature`
4. `cypress/e2e/aceptacion_front.cy.js`
5. `cypress/e2e/compra_libro.cy.js`
6. `cypress/reports/html/index.html`
7. `cypress/e2e/integracion_api.cy.js`
8. Postman con coleccion CRUD.
9. `load-tests/prueba_carga.js`
10. Cierre en diapositiva de conclusiones.

---

## Texto de transicion entre personas (lectura literal)

- "Ahora cedo la palabra a [Nombre], quien presentara el criterio de aceptacion."
- "Continuamos con [Nombre], para revisar pruebas funcionales de interfaz."
- "Seguimos con [Nombre], quien mostrara API REST en Cypress y en Postman."
- "Ahora [Nombre] explicara la prueba de carga con k6."
- "Finalmente, yo retomare para cerrar con conclusiones y despedida."

---

## Checklist previo a grabar (evitar cortes)

1. Tener frontend abierto en `http://localhost:5173`.
2. Tener abiertos en el IDE todos los archivos del guion.
3. Tener listo el reporte `cypress/reports/html/index.html`.
4. Tener Postman abierto con la coleccion CRUD cargada.
5. Tener terminal con comandos preparados de Cypress y k6.
6. Probar microfonos y asignar cronometro por persona.
