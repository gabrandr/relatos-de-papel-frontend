describe("Aceptacion Frontend - CU-01 Compra de libro", () => {
  const BASE_URL = "http://localhost:5173";
  const BOOK_TITLE = "1984";

  const irACatalogo = () => {
    cy.visit(BASE_URL);
    cy.contains("button", "Entrar ahora").click();
    cy.url().should("include", "/home");
  };

  const buscarLibro = (title) => {
    cy.get('input[placeholder="Buscar por título"]').clear().type(`${title}{enter}`);
  };

  const abrirDetalleLibro = (title) => {
    cy.contains(title).should("be.visible").click();
    cy.url().should("include", "/book/");
    cy.contains(title).should("be.visible");
  };

  const agregarLibroAlCarrito = () => {
    cy.contains("button", "Añadir al carrito").click();
  };

  const irACarrito = () => {
    cy.get('a[href="/cart"]').click();
    cy.url().should("include", "/cart");
  };

  const irACheckout = () => {
    cy.contains("a", "Proceder al Pago").click();
    cy.url().should("include", "/checkout");
  };

  const completarPago = () => {
    cy.get('input[name="number"]').type("1234567812345678");
    cy.get('input[name="expiry"]').type("12/28");
    cy.get('input[name="cvc"]').type("123");
    cy.get('input[name="name"]').type("Juan Perez");
  };

  beforeEach(() => {
    cy.clearLocalStorage();
    irACatalogo();
  });

  it("[AC-01] Debe buscar un libro por titulo y mostrar resultado", () => {
    buscarLibro(BOOK_TITLE);
    cy.contains(BOOK_TITLE).should("be.visible");
  });

  it("[AC-02] Debe visualizar detalle y boton de agregar al carrito", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    cy.contains("button", "Añadir al carrito").should("be.visible");
  });

  it("[AC-03] Debe mostrar confirmacion visual al agregar al carrito", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    agregarLibroAlCarrito();
    cy.contains(`✓ ${BOOK_TITLE} añadido al carrito`).should("be.visible");
  });

  it("[AC-04] Debe mostrar el libro agregado dentro del carrito", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    agregarLibroAlCarrito();
    irACarrito();

    cy.contains(BOOK_TITLE).should("be.visible");
    cy.get("span.text-lg.font-semibold")
      .first()
      .invoke("text")
      .then((value) => {
        expect(Number(value.trim())).to.be.greaterThan(0);
      });
  });

  it("[AC-05] Debe visualizar formulario de pago en checkout", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    agregarLibroAlCarrito();
    irACarrito();
    irACheckout();

    cy.get('input[name="number"]').should("be.visible");
    cy.get('input[name="expiry"]').should("be.visible");
    cy.get('input[name="cvc"]').should("be.visible");
    cy.get('input[name="name"]').should("be.visible");
  });

  it("[AC-06] Debe redirigir a confirmacion luego de confirmar compra", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    agregarLibroAlCarrito();
    irACarrito();
    irACheckout();
    completarPago();

    cy.contains("button", "Confirmar y Pagar").click();
    cy.url().should("include", "/order-confirmation");
  });

  it("[AC-07] Debe mostrar compra exitosa y numero de pedido no vacio", () => {
    buscarLibro(BOOK_TITLE);
    abrirDetalleLibro(BOOK_TITLE);
    agregarLibroAlCarrito();
    irACarrito();
    irACheckout();
    completarPago();

    cy.contains("button", "Confirmar y Pagar").click();
    cy.contains("¡Gracias por tu compra!").should("be.visible");
    cy.contains("Número de pedido:").should("be.visible");
    cy.get("span.font-mono").should("not.be.empty");
  });
});
