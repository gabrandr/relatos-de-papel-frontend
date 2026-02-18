describe('Pruebas de Integración de API Gateway', () => {
  const GATEWAY_URL = 'http://localhost:8762';

  it('POST /api/books - Obtener libros con estructura Gateway', () => {
    cy.request({
      method: 'POST', // Cambiado a POST según tu Postman
      url: `${GATEWAY_URL}/api/books`,
      body: {
        targetMethod: "GET", // Estructura que pide tu tunelización/gateway
        queryParams: {},
        body: {}
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
    });
  });

  it('POST /api/payments - Crear pago exitoso', () => {
    cy.request({
      method: 'POST',
      url: `${GATEWAY_URL}/api/payments`,
      body: {
        targetMethod: "POST",
        queryParams: {},
        body: {
          userId: 1,
          bookId: 1,
          quantity: 1
        }
      },
      failOnStatusCode: false
    }).then((response) => {
      // Validamos el 201 Created que vimos en tu Postman
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('status', 'COMPLETED');
      expect(response.body).to.have.property('id');
    });
  });
});