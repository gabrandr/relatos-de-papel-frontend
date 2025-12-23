# 📘 Relatos de Papel - Documentación y Guía de Arquitectura Frontend

Este documento define la arquitectura, estructura de archivos y guías de desarrollo para la **Actividad 1: Desarrollo Frontend con React** de la asignatura Desarrollo Web Full Stack.

---

## 🎯 1. Objetivos y Contexto del Proyecto

El desarrollo de esta actividad se enmarca en los objetivos generales de la asignatura y del proyecto transversal "Relatos de Papel". El propósito no es solo crear una interfaz, sino preparar el sistema para una arquitectura completa.

### Objetivos Globales (Máster)

1.  [cite_start]**Desarrollo Frontend:** Construir un frontal robusto utilizando HTML5, CSS3, JavaScript y React[cite: 5].
2.  [cite_start]**Visión Backend (Integración Futura):** Preparar el terreno para un _back-end_ basado en una arquitectura de **microservicios**, donde cada servicio expondrá una API REST con Java y Spring[cite: 6].
    - _Nota para el equipo:_ Aunque ahora usemos _mocks_, la estructura de carpetas `services/` y los tipos de datos deben respetar esta futura integración.

---

## 🏗 2. Arquitectura de Componentes

[cite_start]Se requiere implementar un **mínimo de 10 componentes funcionales**[cite: 26]. A continuación, se detalla la división propuesta:

### Layout & Estructura Global

1.  **`MainLayout`**: Contenedor principal (Wrapper).
2.  **`Navbar`**: Barra de navegación superior con acceso al carrito.
3.  **`Footer`**: Pie de página informativo.

### Vistas (Pages / Routes)

4.  **`LandingPage`**: Vista de bienvenida. [cite_start]Redirige automáticamente a `/home` tras 5 segundos.
5.  **`HomePage`**: Catálogo principal. [cite_start]Muestra el buscador y la lista de libros[cite: 34].
6.  **`BookDetailPage`**: Detalle del libro. [cite_start]Permite ver info extendida y añadir al carrito[cite: 38].
7.  **`CheckoutPage`**: Vista de pago. [cite_start]Muestra resumen del pedido y botón para finalizar compra[cite: 41].

### Features & UI Components (Reutilizables)

8.  [cite_start]**`SearchBar`**: Input para filtrar libros por título.
9.  **`BookList`**: Grid que itera sobre los datos para renderizar tarjetas.
10. **`BookCard`**: Tarjeta individual (Imagen, Título, Precio, Botón).
11. [cite_start]**`CartDrawer`**: Componente (modal/lateral) que muestra el carrito en Home y Detalle[cite: 39].
12. [cite_start]**`CartItem`**: Item individual dentro del carrito con opción de eliminar[cite: 40].
13. **`OrderSummary`**: Componente de resumen financiero para el Checkout.
14. **`Button`**: Componente base para botones (Primary/Secondary).

---

## 🎣 3. Estrategia de Hooks

### Hooks Nativos

- [cite_start]**`useState`**: Gestión de estados locales y filtros[cite: 27].
- [cite_start]**`useEffect`**: Ciclo de vida (Carga de datos y timer de Landing)[cite: 27].

### [cite_start]Custom Hook: `useCart` (Obligatorio) [cite: 28]

Se implementará `useCart` para centralizar la lógica del carrito.

- **`addToCart(book)`**: Añade libro o incrementa cantidad.
- **`removeFromCart(id)`**: Elimina libro.
- [cite_start]**`clearCart()`**: Vacía el carrito tras el "pago"[cite: 42].
- **`totalAmount`**: Calcula el total.

---

## 📂 4. Estructura de Carpetas (Scalable Structure)

Diseñada para separar la vista de la lógica de negocio y facilitar la conexión futura con Spring Boot.

```text
src/
├── assets/             # Recursos estáticos
├── components/         # Componentes UI
│   ├── layout/         # (Navbar, Footer, MainLayout)
│   └── ui/             # (Button, Input, Card)
├── context/            # Contexto global (CartContext)
├── data/               # MOCKS (Datos de prueba) [cite: 45]
│   └── books.mock.js   # JSON con libros de prueba
├── features/           # Componentes por dominio
│   ├── books/          # (BookList, BookCard, SearchBar)
│   ├── cart/           # (CartDrawer, CartItem)
│   └── checkout/       # (OrderSummary)
├── hooks/              # Hooks personalizados
│   └── useCart.js      # Custom Hook obligatorio
├── pages/              # Vistas (Landing, Home, Detail, Checkout)
├── routes/             # Configuración de React Router
├── services/           # Capa de API (Simulación)
│   └── bookService.js  # Retorna promesas con los mocks
└── utils/              # Helpers (formato moneda, validaciones)
```
