# CU-01 Compra de libro desde frontend

## 1) Objetivo
Validar que el usuario puede completar una compra desde la interfaz web de Relatos de Papel: buscar libro, agregar al carrito, avanzar a checkout y confirmar compra.

## 2) Alcance
- Frontend web (React + rutas de la aplicacion).
- Flujo de compra visible para usuario final.
- No valida logica interna de backend (eso se cubre en pruebas de sistema/API).

## 3) Actor principal
- Usuario comprador.

## 4) Precondiciones
- Aplicacion frontend disponible en `http://localhost:5173`.
- Usuario en landing page o catalogo.
- Catalogo contiene el libro `1984`.

## 5) Flujo principal
1. Usuario entra desde landing al catalogo.
2. Busca `1984`.
3. Entra al detalle del libro.
4. Agrega el libro al carrito.
5. Abre carrito y procede al checkout.
6. Completa datos de tarjeta.
7. Confirma compra.
8. Visualiza confirmacion y numero de pedido.

## 6) Criterios de aceptacion
- AC-01: Si el usuario busca `1984`, el libro aparece en resultados.
- AC-02: En detalle de `1984` se visualiza titulo y boton `Anadir al carrito`.
- AC-03: Al agregar al carrito, el usuario ve confirmacion visual.
- AC-04: Al abrir carrito, el libro agregado esta presente con cantidad visible.
- AC-05: En checkout se muestran los campos de pago con tarjeta.
- AC-06: Al confirmar compra, redirige a `/order-confirmation`.
- AC-07: En confirmacion se muestra mensaje exitoso y numero de pedido no vacio.

## 7) Herramienta adicional a Cypress
Se usa **Gherkin (BDD)** para documentar escenarios funcionales de aceptacion en lenguaje de negocio:
- Archivo: `docs/aceptacion/CU-01_compra_libro.feature`
- Beneficio: trazabilidad clara entre requisito funcional y automatizacion.

## 8) Trazabilidad requisito -> automatizacion
- AC-01 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-01]`
- AC-02 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-02]`
- AC-03 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-03]`
- AC-04 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-04]`
- AC-05 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-05]`
- AC-06 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-06]`
- AC-07 -> `cypress/e2e/aceptacion_front.cy.js` test `[AC-07]`

