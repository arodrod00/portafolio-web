// =====================================================
// 🔑  ARCHIVO DE CONFIGURACIÓN DEL PORTAFOLIO
//     Edita SOLO este archivo para actualizar todo.
//     No necesitas tocar ningún otro archivo.
// =====================================================

export const portfolio = {

  // ─── INFO PERSONAL ──────────────────────────────
  name: "Adrian Rodriguez",
  role: "Desarrollador & Diseñador Web",
  tagline: "Creo sitios web que convierten visitantes en clientes.",
  bio: "Especialista en diseño y desarrollo web con enfoque en resultados. Ayudo a negocios a tener una presencia digital profesional que genera confianza y ventas.",
  location: "Miami, FL",
  siteUrl: "https://adrianrodriguez.dev",  // cambia esto a tu dominio real cuando lo tengas
  availableForWork: true,        // cambia a false para ocultar el badge "Disponible"

  // ─── CONTACTO ───────────────────────────────────
  contact: {
    email: "rodriguezshmpu@gmail.com",
    phone: "(305)-427-1605",
    whatsapp: "13054271605",   // número sin espacios ni guiones para el link
    instagram: "",             // solo el @usuario, ej: "@adrianrod" — vacío para ocultar
    linkedin: "",              // URL completa — vacío para ocultar
  },

  // ─── ESTADÍSTICAS (hero) ────────────────────────
  stats: [
    { number: "20+", label: "Proyectos completados" },
    { number: "15+", label: "Clientes satisfechos" },
    { number: "3+",  label: "Años de experiencia"  },
  ],

  // ─── SERVICIOS ──────────────────────────────────
  services: [
    {
      number: "01",
      title: "Diseño Web",
      description:
        "Sitios modernos, limpios y adaptados a tu marca. Diseño centrado en la experiencia del usuario y en comunicar tu valor.",
    },
    {
      number: "02",
      title: "Desarrollo Web",
      description:
        "Código rápido y limpio con React y Next.js. Sitios optimizados para velocidad de carga y posicionamiento en Google.",
    },
    {
      number: "03",
      title: "Landing Pages",
      description:
        "Páginas de destino diseñadas para convertir. Cada elemento pensado para llevar al visitante a tomar acción.",
    },
    {
      number: "04",
      title: "Tiendas Online",
      description:
        "E-commerce completo con catálogo, carrito y pagos integrados. Listo para vender desde el primer día.",
    },
    {
      number: "05",
      title: "Sistemas de Reservas",
      description:
        "Páginas y apps de booking para negocios: citas, reservaciones y pagos en línea. Tus clientes reservan solos, tú solo cobras.",
    },
  ],

  // ─── PROYECTOS ──────────────────────────────────
  // Para agregar imágenes: coloca el archivo en /public/projects/
  // y escribe el nombre aquí. Ej: image: "tienda-moda.jpg"
  // Si no tienes imagen, déjalo como "" — se mostrará un fondo de color.
  projects: [
    {
      title: "Nombre del Proyecto",
      category: "E-Commerce",
      description:
        "Tienda online para marca de ropa con catálogo de productos, carrito de compras y pagos integrados con Stripe.",
      image: "",   // ej: "proyecto1.jpg"
      url: "",     // URL del proyecto en vivo — vacío para ocultar el botón
      year: "2024",
      color: "#f5f0eb",  // color del placeholder si no hay imagen
    },
    {
      title: "Nombre del Proyecto",
      category: "Landing Page",
      description:
        "Página de aterrizaje para empresa con alta tasa de conversión, diseño moderno y carga ultrarrápida.",
      image: "",
      url: "",
      year: "2024",
      color: "#eef2f7",
    },
    {
      title: "Nombre del Proyecto",
      category: "Sitio Corporativo",
      description:
        "Sitio web para empresa de servicios con CMS integrado para que el cliente actualice su contenido sin código.",
      image: "",
      url: "",
      year: "2024",
      color: "#f0f5ee",
    },
    {
      title: "Nombre del Proyecto",
      category: "Portafolio",
      description:
        "Portafolio personal para fotógrafo con galería optimizada, formulario de contacto y diseño responsive.",
      image: "",
      url: "",
      year: "2023",
      color: "#f5eef5",
    },
  ],

  // ─── ESTILOS DE SITIOS WEB ──────────────────────
  // Estos ejemplos muestran los tipos de diseño que puedes ofrecer.
  // Cambia el nombre o descripción si quieres personalizar el texto.
  styleExamples: [
    { id: 1, name: "Minimalista",          palette: "Blanco · Gris frío",    description: "Espacios en blanco, tipografía limpia y foco total en el contenido." },
    { id: 2, name: "Corporativo",          palette: "Azul marino · Blanco",  description: "Estructura formal que proyecta confianza y autoridad de marca." },
    { id: 3, name: "Portafolio Creativo",  palette: "Negro · Naranja · Violeta", description: "Visual, atrevido y memorable. Ideal para creativos y diseñadores." },
    { id: 4, name: "Tienda Online",        palette: "Beige · Crudo",         description: "Catálogo, carrito y proceso de compra optimizados para vender." },
    { id: 5, name: "Landing Page",         palette: "Negro · Morado neón",   description: "Una sola acción, cero distracciones. Máxima tasa de conversión." },
    { id: 6, name: "Blog / Revista",       palette: "Crema · Serifa",        description: "Jerarquía editorial clara para que el contenido sea el protagonista." },
    { id: 7, name: "Parallax",             palette: "Verde bosque · Ámbar",  description: "Profundidad visual al hacer scroll. Experiencia inmersiva y memorable." },
    { id: 8,  name: "One-Page / CV",          palette: "Negro · Crema",          description: "Todo en una página. Perfecto para CVs, eventos y productos únicos." },
    { id: 9,  name: "3D / Perspectiva",       palette: "Índigo · Violeta",        description: "Tarjetas con perspectiva real. Mueve el cursor y siente la profundidad." },
    { id: 10, name: "Galería Fotográfica",    palette: "Colores vibrantes",       description: "Grid de imágenes con lightbox interactivo. Toca para explorar en pantalla completa." },
    { id: 11, name: "Video Cinematic",        palette: "Negro · Ámbar",           description: "Experiencia tipo cine con controles elegantes. Narración visual de alto impacto." },
    { id: 12, name: "Dashboard / SaaS",       palette: "Blanco · Índigo",         description: "Panel de control moderno con datos en tiempo real. Ideal para apps y servicios." },
    { id: 13, name: "Bento Grid",             palette: "Negro · Multicolor",      description: "Cuadrícula asimétrica al estilo Notion. Hover en cada bloque para revelar contenido." },
    { id: 14, name: "Parallax Inmersivo",     palette: "Azul noche · Blanco",     description: "Capas de fondo que se mueven con el cursor. Profundidad visual sin igual." },
  ],

  // ─── HABILIDADES ────────────────────────────────
  skills: [
    {
      category: "Desarrollo",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
    },
    {
      category: "Diseño",
      items: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Responsive Design"],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Vercel", "VS Code", "SEO"],
    },
  ],
}
