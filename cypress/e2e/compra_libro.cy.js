describe('Flujo de Compra de Libro', () => {
  const BASE_URL = 'http://localhost:5173'; // Ajustar si el puerto es diferente

  beforeEach(() => {
    // 1. Visitar la URL local de la aplicación
    cy.visit(BASE_URL);
  });

  it('Debe buscar un libro, añadirlo al carrito y completar la compra', () => {
    // --- Navegación desde Landing Page ---
    // La landing page tiene un countdown de 5s, así que hacemos clic en "Entrar ahora" para agilizar
    cy.contains('button', 'Entrar ahora').click();

    // --- Búsqueda de libro ---
    // Verificar que estamos en la home
    cy.url().should('include', '/home');
    
    // Buscar un libro específico (ej: "1984")
    const bookTitle = '1984';
    cy.get('input[placeholder="Buscar por título"]').type(`${bookTitle}{enter}`);

    // --- Añadir al carrito ---
    // Esperar a que se filtren los resultados y hacer clic en el libro
    cy.contains(bookTitle).should('be.visible').click();

    // Validar que estamos en la página de detalle
    cy.url().should('include', '/book/');
    cy.contains(bookTitle).should('be.visible');

    // Clic en "Añadir al carrito"
    cy.contains('button', 'Añadir al carrito').click();

    // Validar confirmación (Toast o contador de carrito)
    cy.contains(`✓ ${bookTitle} añadido al carrito`).should('be.visible');
    
    // --- Ir al checkout ---
    // Clic en el icono del carrito
    cy.get('a[href="/cart"]').click();
    
    // Validar que estamos en el carrito
    cy.url().should('include', '/cart');
    cy.contains(bookTitle).should('be.visible');

    // Proceder al pago
    cy.contains('a', 'Proceder al Pago').click();

    // --- Completar formulario de checkout ---
    // Validar URL de checkout
    cy.url().should('include', '/checkout');

    // Llenar datos de la tarjeta (campos ficticios basados en PaymentMethod.jsx)
    cy.get('input[name="number"]').type('1234567812345678');
    cy.get('input[name="expiry"]').type('12/28');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="name"]').type('Juan Perez');

    // Confirmar y Pagar
    cy.contains('button', 'Confirmar y Pagar').click();

    // --- Validación Final ---
    // Verificar redirección a página de confirmación
    cy.url().should('include', '/order-confirmation');
    
    // Verificar mensaje de éxito
    cy.contains('¡Gracias por tu compra!').should('be.visible');
    cy.contains('Número de pedido:').should('be.visible');
    
    // Verificar que el ID del pedido esté presente
    cy.get('span.font-mono').should('not.be.empty');
  });
});