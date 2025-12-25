export const books = [
  {
    id: 1,
    title: "El Quijote de la Mancha",
    author: "Miguel de Cervantes",
    isbn: "978-8420412146",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    stock: 12,
    formats: ["fisico", "digital"],
    description: "La obra cumbre de la literatura española.",
  },
  {
    id: 2,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    isbn: "978-0307474728",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop",
    stock: 25,
    formats: ["fisico"],
    description:
      "La saga de la familia Buendía en el pueblo ficticio de Macondo.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
    stock: 8,
    formats: ["digital"],
    description: "Una novela distópica social y de ciencia ficción.",
  },
  {
    id: 4,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    isbn: "978-0156012195",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    stock: 50,
    formats: ["fisico", "digital"],
    description:
      "Un cuento poético que viene acompañado de ilustraciones hechas con acuarelas.",
  },
  {
    id: 5,
    title: "Orgullo y Prejuicio",
    author: "Jane Austen",
    isbn: "978-0141439518",
    price: 14.2,
    image:
      "https://images.unsplash.com/photo-1629196911514-cfd8d628b44e?q=80&w=800&auto=format&fit=crop",
    stock: 15,
    formats: ["fisico"],
    description: "Una novela romántica de la escritora británica Jane Austen.",
  },
  {
    id: 6,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    isbn: "978-1400034710",
    price: 11.0,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    stock: 0,
    formats: ["digital"],
    description: "Relato de un asesinato inevitable.",
  },
  {
    id: 7,
    title: "Rayuela",
    author: "Julio Cortázar",
    isbn: "978-0307951625",
    price: 16.75,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
    stock: 5,
    formats: ["fisico", "digital"],
    description: "Una contranovela que rompe con el orden lineal de lectura.",
  },
  {
    id: 8,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isbn: "978-1451673319",
    price: 13.5,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    stock: 20,
    formats: ["fisico"],
    description: "Un futuro donde los libros están prohibidos.",
  },
  {
    id: 9,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    isbn: "978-0143126393",
    price: 17.9,
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
    stock: 30,
    formats: ["digital"],
    description:
      "Un misterio literario ambientado en la Barcelona de la primera mitad del siglo XX.",
  },
  {
    id: 10,
    title: "Drácula",
    author: "Bram Stoker",
    isbn: "978-0486411095",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1610882648335-ced8fc8ca634?q=80&w=800&auto=format&fit=crop",
    stock: 18,
    formats: ["fisico", "digital"],
    description: "La famosa novela de vampiros.",
  },

  // 🔹 Nuevos libros con títulos similares
  {
    id: 11,
    title: "El Quijote Ilustrado",
    author: "Miguel de Cervantes",
    isbn: "978-8432223451",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop",
    stock: 10,
    formats: ["fisico"],
    description: "Edición ilustrada de las aventuras de Don Quijote.",
  },
  {
    id: 12,
    title: "El Principito y sus Viajes",
    author: "Antoine de Saint-Exupéry",
    isbn: "978-0156029995",
    price: 11.5,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
    stock: 22,
    formats: ["fisico", "digital"],
    description: "Una reinterpretación de los viajes del Principito.",
  },
  {
    id: 13,
    title: "1984: Edición Comentada",
    author: "George Orwell",
    isbn: "978-0451529990",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1455885666521-373ef0a0c8c9?q=80&w=800&auto=format&fit=crop",
    stock: 14,
    formats: ["digital"],
    description: "Edición especial con análisis y notas sobre la obra.",
  },
  {
    id: 14,
    title: "Cien Años de Soledad: Edición Conmemorativa",
    author: "Gabriel García Márquez",
    isbn: "978-0307479999",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
    stock: 18,
    formats: ["fisico", "digital"],
    description:
      "Edición especial que celebra la obra maestra de García Márquez.",
  },
];
