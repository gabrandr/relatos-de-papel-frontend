Feature: CU-01 Compra de libro desde el frontend
  Como usuario de Relatos de Papel
  Quiero buscar un libro, agregarlo al carrito y completar una compra
  Para finalizar mi pedido correctamente desde la interfaz web

  Background:
    Given que el usuario abre la aplicacion
    And ingresa al catalogo desde la landing

  @ac-01 @frontend
  Scenario: AC-01 Buscar un libro por titulo
    When el usuario busca "1984"
    Then el libro "1984" debe aparecer en los resultados

  @ac-02 @frontend
  Scenario: AC-02 Ver detalle del libro
    When el usuario busca "1984"
    And abre el detalle del libro "1984"
    Then debe visualizar el titulo "1984"
    And debe visualizar el boton "Anadir al carrito"

  @ac-03 @frontend
  Scenario: AC-03 Confirmacion visual al agregar al carrito
    When el usuario busca "1984"
    And abre el detalle del libro "1984"
    And agrega el libro al carrito
    Then debe ver una confirmacion visual de agregado al carrito

  @ac-04 @frontend
  Scenario: AC-04 Libro visible en carrito
    Given que el usuario agrego "1984" al carrito
    When abre el carrito
    Then el libro "1984" debe estar en el carrito con cantidad visible

  @ac-05 @frontend
  Scenario: AC-05 Visualizar formulario de checkout
    Given que el usuario agrego "1984" al carrito
    When avanza al checkout
    Then debe visualizar los campos de tarjeta

  @ac-06 @ac-07 @frontend
  Scenario: AC-06 y AC-07 Confirmar compra y ver numero de pedido
    Given que el usuario agrego "1984" al carrito
    And esta en checkout
    When completa datos validos de pago y confirma
    Then debe redirigir a la pagina de confirmacion
    And debe ver el mensaje de compra exitosa
    And debe ver un numero de pedido no vacio
