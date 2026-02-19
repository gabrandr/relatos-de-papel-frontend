describe('Pruebas de Integración de API Gateway', () => {
  const GATEWAY_URL = 'http://localhost:8762';

  let createdBookId;

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

  it('Ciclo completo CRUD de Libros', () => {
    // 1. CREATE: Crear un libro
    cy.request({
      method: 'POST',
      url: `${GATEWAY_URL}/api/books`,
      body: {
        targetMethod: "POST",
        queryParams: {},
        body: {
          title: "Harry Potter y la Piedra Filosofal",
          author: "J.K. Rowling",
          category: "Fantasía",
          isbn: "9788498382686",
          price: 22.50,
          stock: 15,
          rating: 5,
          visible: true,
          publicationDate: "1997-06-26"
        }
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      createdBookId = response.body.id;
      cy.log(`Libro creado con ID: ${createdBookId}`);

      // 2. READ: Mostrar el libro creado
      cy.request({
        method: 'POST',
        url: `${GATEWAY_URL}/api/books/${createdBookId}`,
        body: {
          targetMethod: "GET",
          queryParams: {},
          body: null
        },
        failOnStatusCode: false
      }).then((readResponse) => {
        expect(readResponse.status).to.eq(200);
        expect(readResponse.body.title).to.eq("Harry Potter y la Piedra Filosofal");

        // 3. UPDATE: Actualizar el libro
        cy.request({
          method: 'POST',
          url: `${GATEWAY_URL}/api/books/${createdBookId}`,
          body: {
            targetMethod: "PATCH",
            queryParams: {},
            body: {
              price: 17.99,
              stock: 30
            }
          },
          failOnStatusCode: false
        }).then((updateResponse) => {
          expect(updateResponse.status).to.eq(200);

          // 4. READ: Mostrar el libro de nuevo (verificar actualización)
          cy.request({
            method: 'POST',
            url: `${GATEWAY_URL}/api/books/${createdBookId}`,
            body: {
              targetMethod: "GET",
              queryParams: {},
              body: null
            },
            failOnStatusCode: false
          }).then((secondReadResponse) => {
            expect(secondReadResponse.status).to.eq(200);
            expect(secondReadResponse.body.price).to.eq(17.99);
            expect(secondReadResponse.body.stock).to.eq(30);

            // 5. DELETE: Eliminar el libro
            cy.request({
              method: 'POST',
              url: `${GATEWAY_URL}/api/books/${createdBookId}`,
              body: {
                targetMethod: "DELETE",
                queryParams: {},
                body: null
              },
              failOnStatusCode: false
            }).then((deleteResponse) => {
              expect(deleteResponse.status).to.eq(204);
            });
          });
        });
      });
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
