# 📹 GUION VIDEO MEMORIA - Relatos de Papel

**⏱️ Duración máxima: 10 minutos**  
**🎯 Proyecto: Librería online con React + Vite**  
**🔗 URL Vercel: https://relatos-de-papel-frontend-mu.vercel.app**

---

## 📋 REQUISITOS DEL PROFESOR (Referencia)

> 1. **Componentes de React**: listar y explicar brevemente todos los componentes, incluido el enrutador
> 2. **Hooks utilizados**: listar todos los hooks, dónde se usan, y explicar hooks personalizados (por qué son necesarios y qué valor aportan)
> 3. **Vistas**: mostrar cómo arrancar el proyecto en local, mostrar las vistas del frontend con descripción breve enfatizando estilos CSS
> 4. **Despliegue**: mostrar el proyecto desplegado en Vercel

---

## 👥 DISTRIBUCIÓN POR MIEMBRO

---

### 🎤 **GABRIEL ANDRADE - Arquitectura y Enrutador** (2 minutos)

#### GUION:

**[INTRO - 20 segundos]**

> "Buenas tardes, somos el grupo X y les presentamos **Relatos de Papel**, una librería online desarrollada con **React y Vite**. El proyecto está organizado en componentes reutilizables siguiendo las mejores prácticas de desarrollo frontend moderno."

**[ARCHIVOS DE ENTRADA - 20 segundos]**

> "La aplicación inicia en `main.jsx`, que monta React en el DOM usando `createRoot`. Este llama a `App.jsx`, nuestro componente raíz que simplemente renderiza el `AppRouter`."

_Mostrar en pantalla: `main.jsx` y `App.jsx`_

```javascript
// main.jsx
createRoot(document.getElementById("root")).render(<App />);

// App.jsx
const App = () => <AppRouter />;
```

**[ENRUTADOR - 1 minuto]**

> "El corazón del proyecto es `AppRouter.jsx`. Aquí utilizamos **React Router** con `BrowserRouter`, `Routes` y `Route` para definir la navegación."

_Mostrar código de AppRouter.jsx_

> "Tenemos **7 rutas** organizadas así:"

| Ruta                  | Componente              | Descripción                       |
| --------------------- | ----------------------- | --------------------------------- |
| `/`                   | `LandingPage`           | Página de bienvenida              |
| `/home`               | `HomePage`              | Catálogo de libros                |
| `/book/:id`           | `BookDetailPage`        | Detalle del libro (ruta dinámica) |
| `/cart`               | `CartPage`              | Carrito de compras                |
| `/checkout`           | `CheckoutPage`          | Proceso de pago _(protegida)_     |
| `/order-confirmation` | `OrderConfirmationPage` | Confirmación _(protegida)_        |
| `*`                   | `NotFoundPage`          | Página 404                        |

> "Utilizamos **rutas anidadas** con `MainLayout` para envolver las páginas con Header y Footer de forma consistente."

**[RUTAS PROTEGIDAS - 20 segundos]**

> "Implementamos **dos componentes de rutas protegidas** en `ProtectedRoutes.jsx`:"

| Componente                   | Protege               | Condición                                                         |
| ---------------------------- | --------------------- | ----------------------------------------------------------------- |
| `ProtectedCheckout`          | `/checkout`           | Redirige a `/home` si el carrito está vacío                       |
| `ProtectedOrderConfirmation` | `/order-confirmation` | Solo accesible si `orderCompleted` está en el state de navegación |

> "Esto evita que usuarios accedan a checkout sin productos o a confirmación sin haber completado una compra."

---

### 🎤 **ROBINSON - Componentes de React** (2 minutos)

#### GUION:

**[COMPONENTES DE LAYOUT - 40 segundos]**

> "Ahora les presento los **componentes de React** organizados por carpetas. Empezamos con los **4 componentes de Layout**:"

| Componente    | Archivo              | Función                                                                             |
| ------------- | -------------------- | ----------------------------------------------------------------------------------- |
| `MainLayout`  | `components/layout/` | Envuelve las páginas con Header y Footer usando `<Outlet />`                        |
| `Header`      | `components/layout/` | Logo, buscador con funcionalidad de búsqueda, e icono de carrito con badge dinámico |
| `Footer`      | `components/layout/` | Pie de página con información de copyright                                          |
| `ScrollToTop` | `components/layout/` | Hace scroll al inicio cuando cambia la ruta                                         |

**[COMPONENTES UI - 20 segundos]**

> "En `components/ui/` tenemos el componente reutilizable `Button`:"

```javascript
const Button = ({ onClick, className, children, ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {children}
  </button>
);
```

> "Es un componente genérico que acepta cualquier prop y lo usamos en toda la aplicación."

**[COMPONENTES DE FEATURES - 40 segundos]**

> "Los **5 componentes de features** están organizados por funcionalidad:"

| Componente        | Ubicación            | Función                                                                                          |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| `BookCard`        | `features/books/`    | Tarjeta de libro con imagen, título, autor, precio y botón añadir. Incluye navegación al detalle |
| `CartItem`        | `features/cart/`     | Fila del carrito con imagen, botones +/- para cantidad, y botón eliminar                         |
| `OrderSummary`    | `features/cart/`     | Muestra subtotal, envío y total con botón para ir a checkout                                     |
| `PaymentMethod`   | `features/checkout/` | Selector de método de pago con formulario de tarjeta y opción PayPal                             |
| `CheckoutSummary` | `features/checkout/` | Resumen final del pedido con botón confirmar y pagar                                             |

**[PÁGINAS - 20 segundos]**

> "Finalmente, tenemos **7 páginas** en la carpeta `pages/`:"

- `LandingPage` → Bienvenida con countdown
- `HomePage` → Catálogo con grid de libros
- `BookDetailPage` → Detalle completo del libro
- `CartPage` → Carrito de compras
- `CheckoutPage` → Proceso de pago
- `OrderConfirmationPage` → Confirmación del pedido
- `NotFoundPage` → Página de error 404

> "**En total son 21 archivos JSX** que componen nuestra aplicación."

---

### 🎤 **GERARDO - Hooks de React y React Router** (2 minutos)

#### GUION:

**[HOOKS DE REACT - 1 minuto]**

> "Ahora explicaré los **hooks** que utilizamos en la aplicación. Empezamos con los hooks nativos de React:"

**`useState`** - Manejo de estado local

| Componente       | Uso del estado                                                 |
| ---------------- | -------------------------------------------------------------- |
| `Header`         | `search` - valor del input de búsqueda                         |
| `BookCard`       | `showToast` - mostrar/ocultar notificación de añadido          |
| `BookDetailPage` | `showToast` - confirmación de añadir al carrito                |
| `PaymentMethod`  | `method` - tarjeta o PayPal, `cardData` - datos del formulario |

```javascript
const [search, setSearch] = useState("");
const [showToast, setShowToast] = useState(false);
```

**`useEffect`** - Efectos secundarios

| Componente     | Efecto                                               |
| -------------- | ---------------------------------------------------- |
| `ScrollToTop`  | Ejecuta `window.scrollTo(0,0)` cuando cambia la ruta |
| `useCountdown` | Ejecuta un `setInterval` que resta 1 cada segundo    |

```javascript
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]); // Se ejecuta cuando cambia pathname
```

**[HOOKS DE REACT ROUTER - 1 minuto]**

> "También utilizamos **4 hooks de React Router** para la navegación:"

| Hook              | Dónde se usa                                   | Función                                         |
| ----------------- | ---------------------------------------------- | ----------------------------------------------- |
| `useNavigate`     | Header, LandingPage, BookCard, CheckoutSummary | Navegación programática entre rutas             |
| `useParams`       | BookDetailPage                                 | Obtiene el `:id` dinámico de la URL `/book/:id` |
| `useSearchParams` | HomePage                                       | Lee query params como `?search=harry`           |
| `useLocation`     | ScrollToTop, ProtectedOrderConfirmation        | Accede a pathname y state de la navegación      |

_Ejemplo de uso en BookDetailPage:_

```javascript
const { id } = useParams(); // Obtiene el ID del libro desde la URL
const book = books.find((b) => b.id === parseInt(id));
```

_Ejemplo en HomePage:_

```javascript
const [searchParams] = useSearchParams();
const search = searchParams.get("search") || ""; // Lee ?search=valor
```

---

### 🎤 **RONNY - Hooks Personalizados y Zustand** (2 minutos)

#### GUION:

**[HOOK PERSONALIZADO useCountdown - 1 minuto]**

> "Ahora les explicaré los **hooks personalizados** que desarrollamos. El primero es `useCountdown`:"

**Archivo:** `src/hooks/useCountdown.js`

**¿Por qué es necesario?**

> "Necesitábamos un contador regresivo reutilizable para la página de bienvenida. En lugar de repetir la lógica, creamos un hook personalizado."

**¿Qué valor aporta?**

- Encapsula la lógica del temporizador
- Es reutilizable en cualquier parte de la app
- Limpia correctamente el intervalo al desmontar (evita memory leaks)

_Mostrar código:_

```javascript
const useCountdown = (initialValue, onComplete) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (count === 0) {
      onComplete?.(); // Ejecuta callback al llegar a 0
      return;
    }
    const interval = setInterval(() => setCount((prev) => prev - 1), 1000);
    return () => clearInterval(interval); // Cleanup
  }, [count, onComplete]);

  return count;
};
```

**Uso en LandingPage:**

```javascript
const countdown = useCountdown(5, () => navigate("/home"));
// Redirige automáticamente a /home después de 5 segundos
```

**[ZUSTAND - useCartStore - 1 minuto]**

> "El segundo hook personalizado es `useCartStore`, creado con **Zustand**."

**Archivo:** `src/store/useCartStore.js`

**¿Por qué Zustand y no Redux?**

> "Zustand es más ligero, sin boilerplate, y perfecto para proyectos medianos. Además incluye persistencia en localStorage de forma nativa."

**Acciones del store:**

| Acción                     | Función                                        |
| -------------------------- | ---------------------------------------------- |
| `addToCart(book)`          | Añade libro o incrementa cantidad si ya existe |
| `removeFromCart(bookId)`   | Elimina libro completamente                    |
| `decreaseQuantity(bookId)` | Resta 1 o elimina si llega a 0                 |
| `clearCart()`              | Vacía todo el carrito                          |
| `getTotalItems()`          | Retorna cantidad total de items                |
| `getCartTotal()`           | Retorna precio total en dinero                 |

_Mostrar código:_

```javascript
export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (book) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === book.id);
        if (existingItem) {
          // Incrementar cantidad
        } else {
          // Añadir nuevo
        }
      },
      // ... más acciones
    }),
    { name: "cart-storage" } // Persiste en localStorage
  )
);
```

**Beneficio clave:**

> "Gracias al middleware `persist`, los datos del carrito se mantienen incluso al recargar la página."

---

### 🎤 **KLEBER - Demo de Vistas y Estilos CSS** (2 minutos)

#### GUION:

**[ARRANCAR PROYECTO - 20 segundos]**

> "Ahora les mostraremos las vistas del frontend. Para ejecutar el proyecto localmente:"

```bash
npm install    # Instala dependencias
npm run dev    # Inicia servidor de desarrollo
```

> "El proyecto corre en `http://localhost:5173`"

**[RECORRIDO DE VISTAS - 1 minuto 20 segundos]**

_Navegar por cada vista mostrando en el navegador:_

**1. LandingPage** `/`

> "La página de bienvenida muestra el logo centrado con un contador regresivo. Usamos **flexbox** para centrar vertical y horizontalmente. El countdown es nuestro hook personalizado."

**2. HomePage** `/home`

> "El catálogo usa un **grid responsive** de Tailwind: una columna en móvil, dos en tablet, tres en desktop."

```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**3. BookDetailPage** `/book/1`

> "El detalle del libro tiene un diseño de **dos columnas** en desktop. Incluimos un toast de confirmación cuando se añade al carrito."

**4. CartPage** `/cart`

> "El carrito muestra la lista de items a la izquierda y el resumen a la derecha. Layout con **flexbox** responsive."

**5. CheckoutPage** `/checkout`

> "La página de checkout tiene el formulario de pago y resumen final. Usamos **estados** para cambiar entre tarjeta y PayPal."

**6. OrderConfirmationPage**

> "La confirmación muestra un mensaje de éxito con animaciones suaves."

**[ESTILOS CSS DESTACABLES - 20 segundos]**

> "En cuanto a CSS, utilizamos **Tailwind CSS** con un tema personalizado definido en `index.css`:"

| Característica        | Implementación                                                |
| --------------------- | ------------------------------------------------------------- |
| **Tipografía**        | Google Fonts - Inter                                          |
| **Header sticky**     | `sticky top-0 z-50`                                           |
| **Grid responsive**   | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`                   |
| **Hover effects**     | `hover:scale-[1.02]`, `hover:shadow-lg`                       |
| **Transiciones**      | `transition-all`                                              |
| **Paleta de colores** | Variables CSS personalizadas (primary, accent, success, etc.) |

---

## 🌐 DESPLIEGUE EN VERCEL (Todos - 30 segundos)

#### GUION:

> "Finalmente, el proyecto está desplegado en **Vercel** de forma automática conectado a nuestro repositorio de GitHub."

**URL:** `https://relatos-de-papel-frontend-mu.vercel.app`

_Demostrar en el navegador:_

1. Abrir la URL desplegada
2. Navegar por las vistas
3. Añadir un libro al carrito
4. Recargar la página → **El carrito persiste** gracias a Zustand + localStorage

---

## 📝 CONCLUSIONES (30 segundos)

> "Para concluir, desarrollamos una aplicación completa de e-commerce con:"

- ✅ **React + Vite** como stack principal
- ✅ **React Router** para navegación (7 rutas, 2 protegidas)
- ✅ **Zustand** para estado global con persistencia
- ✅ **21 componentes/archivos JSX** organizados por features
- ✅ **2 hooks personalizados** (useCountdown, useCartStore)
- ✅ **Tailwind CSS** para estilos responsive
- ✅ Desplegado exitosamente en **Vercel**

> "Gracias por su atención."

---

## ⏱️ RESUMEN DE TIEMPOS

| Miembro      | Tema                           | Tiempo   |
| ------------ | ------------------------------ | -------- |
| **Gabriel**  | Arquitectura y Enrutador       | 2:00 min |
| **Robinson** | Componentes de React           | 2:00 min |
| **Gerardo**  | Hooks React + React Router     | 2:00 min |
| **Ronny**    | Hooks Personalizados + Zustand | 2:00 min |
| **Kleber**   | Demo Vistas + CSS              | 2:00 min |

**⏱️ TOTAL: 10 minutos exactos**

---

## ✅ CHECKLIST DE PREPARACIÓN

- [ ] VSCode abierto con el código
- [ ] Proyecto corriendo en `localhost:5173`
- [ ] URL de Vercel lista: https://relatos-de-papel-frontend-mu.vercel.app
- [ ] Ensayar tiempos individualmente (máximo 2 min c/u)
- [ ] Preparar transiciones entre presentadores
- [ ] Verificar que el carrito funciona correctamente
