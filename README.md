# NovaTech — Agencia Digital

Sitio web estático de una agencia digital ficticia. HTML, CSS y JavaScript vanilla, sin frameworks ni build system.

## Características

- **Bilingüe** (Español / Inglés) con persistencia en `localStorage`
- **Tema claro/oscuro** con detección de `prefers-color-scheme`
- **Animaciones**: scroll-reveal con `IntersectionObserver`, 3D tilt, parallax, marquee, contador animado, text-stagger, hover effects
- **Modales accesibles** con navegación por teclado (Esc, flechas) y `focus trap`
- **SEO completo**: meta tags, Open Graph, Twitter Card, JSON-LD (Organization + WebSite)
- **Responsive** con breakpoints en 1024 / 768 / 480 px
- **PWA-ready**: `manifest` y favicon SVG
- **Formulario de contacto** con validación, honeypot anti-spam y envío configurable (Formspree / mailto fallback)

## Estructura

```
mi-pagina-web/
├── index.html          # Estructura semántica y meta tags
├── styles.css          # Estilos + animaciones
├── script.js           # Lógica + i18n + contenido del blog/portfolio
├── favicon.svg         # Ícono vectorial
├── site.webmanifest    # PWA manifest
├── package.json        # Scripts de desarrollo
└── .gitignore
```

## Ejecutar en local

No hay build step. Solo necesitas un servidor estático.

### Con Node.js (recomendado)

```bash
npm run dev          # http://localhost:8080
```

### Con Python

```bash
python -m http.server 8080
```

### Con PHP

```bash
php -S localhost:8080
```

Abre `http://localhost:8080` en el navegador.

## Configurar el formulario de contacto

Edita el objeto `CONFIG` al inicio de `script.js`:

```js
var CONFIG = {
    contactEmail: 'hola@novatech.com',
    formEndpoint: '',  // Vacío = abre cliente de correo
    formEndpointPlaceholder: 'https://formspree.io/f/yourFormId'
};
```

### Opción A: Formspree (gratis, sin backend)

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un formulario y copia el endpoint (ej. `https://formspree.io/f/abcd1234`)
3. Pégalo en `CONFIG.formEndpoint`
4. Listo. El formulario enviará los datos a tu correo

### Opción B: Web3Forms / Getform / Basin

Mismo concepto. Pega el endpoint en `CONFIG.formEndpoint`. El código hace `POST` con `FormData` y espera `application/json`.

### Opción C: mailto (sin servicio externo)

Deja `CONFIG.formEndpoint` vacío. Al enviar, se abrirá el cliente de correo del usuario con los campos pre-rellenados.

## Formatear el código

```bash
npm run format
```

Requiere `prettier` (incluido en devDependencies). Formatea HTML, CSS y JS.

## Añadir contenido

### Nuevo artículo de blog

Edita el array `blogArticles` en `script.js`. Cada artículo tiene esta forma:

```js
{
    id: 9,
    titleKey: 'blog.article.9.title',
    excerptKey: 'blog.article.9.excerpt',
    authorRoleKey: 'blog.article.9.authorRole',
    authorBioKey: 'blog.article.9.authorBio',
    dateKey: 'blog.article.9.date',
    contentKey: 'blog.article.9.content',
    tags: ['Tag1', 'Tag2'],
    category: 'desarrollo',  // desarrollo | diseno | marketing | tecnologia
    categoryLabel: 'Desarrollo',
    readingTime: 8,
    author: 'Nombre Apellido',
    authorAvatar: 'https://images.unsplash.com/...',
    image: 'https://images.unsplash.com/...'
}
```

Después añade las traducciones ES/EN en el objeto `translations` con las mismas claves.

### Nuevo proyecto al portfolio

Edita el objeto `portfolioData` en `script.js`:

```js
nuevo: {
    titleKey: 'portfolio.nuevo.title',
    descKey: 'portfolio.nuevo.desc',
    clientKey: 'project.nuevo.client',
    image: 'https://...',
    features: ['Feature 1', 'Feature 2'],
    results: ['Resultado 1', 'Resultado 2'],
    tags: ['React', 'Node'],
    challenge: 'Descripción del desafío...',
    solution: 'Descripción de la solución...'
}
```

Y añade la clave `'nuevo'` al array `projectKeys` dentro del IIFE del portfolio modal.

## Despliegue

El sitio es 100 % estático. Funciona en cualquier hosting:

- **Netlify / Vercel**: arrastra la carpeta al dashboard
- **GitHub Pages**: commit + push, activa Pages en Settings
- **Cloudflare Pages**: conecta el repo
- **Hosting tradicional**: sube los 5 archivos por FTP

## Licencia

MIT
