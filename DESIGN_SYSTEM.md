# 🎨 Design System & Color Guide - Relatos de Papel

Este documento define la paleta de colores oficial y las decisiones de diseño para el proyecto. Todos los desarrolladores deben ceñirse a estos lineamientos para mantener una consistencia visual **Premium**.

> **Nota Técnica**: Este proyecto utiliza **Tailwind CSS v4**. La configuración de colores se debe realizar mediante variables CSS en la directiva `@theme` dentro de `src/index.css`.

---

## 🌈 Paleta de Colores (Color Palette)

Hemos seleccionado una paleta que evoca elegancia, lectura y modernidad, con un buen contraste para accesibilidad.

### 1. Brand Colors (Colores de Marca)

| Nombre Semántico  | Tailwind Utility                      | Hex Code               | Uso Principal                                                       |
| :---------------- | :------------------------------------ | :--------------------- | :------------------------------------------------------------------ |
| **Primary**       | `bg-primary`, `text-primary`          | `#4F46E5` (Indigo 600) | Botones principales, enlaces activos, elementos destacados.         |
| **Primary Light** | `bg-primary/10`, `text-primary-light` | `#818CF8` (Indigo 400) | Estados hover, fondos tenues de selección.                          |
| **Primary Dark**  | `text-primary-dark`                   | `#312E81` (Indigo 900) | Encabezados en fondos claros, variantes de botones.                 |
| **Accent / Gold** | `bg-accent`, `text-accent`            | `#F59E0B` (Amber 500)  | Estrellas de review, insignias de precio, notificaciones "Premium". |

### 2. Neutral Tone (Tonos Neutros - Slate)

Usamos la escala de **Slate** para evitar el negro puro y el blanco clínico, dando una sensación más "papel" y orgánica.

| Nombre         | Utility Ejemplo            | Hex       | Uso                                                |
| :------------- | :------------------------- | :-------- | :------------------------------------------------- |
| **Canvas**     | `bg-white` o `bg-slate-50` | `#F8FAFC` | Fondo general de la página.                        |
| **Surface**    | `bg-white`                 | `#FFFFFF` | Tarjetas (Cards), modales, menús flotantes.        |
| **Text Main**  | `text-slate-900`           | `#0F172A` | Títulos y texto de alto contraste.                 |
| **Text Body**  | `text-slate-600`           | `#475569` | Párrafos, descripciones de libros.                 |
| **Text Muted** | `text-slate-400`           | `#94A3B8` | Placeholders, metadatos secundarios (fecha, ISBN). |
| **Border**     | `border-slate-200`         | `#E2E8F0` | Líneas divisorias sutiles.                         |

### 3. Feedback (Estados del Sistema)

| Estado      | Color Base  | Hex       |
| :---------- | :---------- | :-------- |
| **Success** | Emerald 500 | `#10B981` |
| **Error**   | Rose 500    | `#F43F5E` |
| **Warning** | Amber 500   | `#F59E0B` |

---

## 🛠 Implementación en Tailwind v4

Para usar estos colores semánticamente, actualizaremos nuestro `src/index.css` con la nueva sintaxis de variables v4:

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-primary: #4f46e5;
  --color-primary-light: #818cf8;
  --color-primary-dark: #312e81;
  --color-accent: #f59e0b;

  /* Semantic Map (Opcional si preferimos usar utilidades directas de slate) */
  --color-surface: #ffffff;
  --color-background: #f8fafc;
}
```

### 💡 Ejemplos de Uso

**Botón Principal:**

```jsx
<button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Comprar Ahora
</button>
```

**Tarjeta de Libro:**

```jsx
<div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
  <h3 className="text-slate-900 font-bold">Título del Libro</h3>
  <p className="text-slate-600">Descripción corta...</p>
  <span className="text-primary font-bold">$12.99</span>
</div>
```
