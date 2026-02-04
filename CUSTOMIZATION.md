# 🎨 Guía de Personalización Avanzada

## Cambios Personalizados Rápidos

### 1. Cambiar Números de WhatsApp

**Archivo:** `sushi/index.html` (línea ~160)
```html
<!-- ANTES -->
<a href="https://wa.me/56912345678?text=Hola%20Sushi..."

<!-- DESPUÉS -->
<a href="https://wa.me/56987654321?text=Hola%20Sushi..."
```

**Repite en:** `unas/index.html` y `comida/index.html`

### 2. Cambiar Precios en CLP

**Busca:** `$4.990` en cada `index.html`

**Ejemplo - Sushi:**
```html
<!-- Plan Básico -->
<p class="precio">$4.990</p>

<!-- Cambiar a -->
<p class="precio">$5.990</p>
```

### 3. Actualizar Información de Contacto

**Archivo:** `sushi/index.html` (línea ~130)
```html
<p><strong>Dirección:</strong> Av. Principal 123, Santiago</p>
<p><strong>Teléfono:</strong> +56 9 1234 5678</p>
<p><strong>Email:</strong> info@sushideluxe.cl</p>
```

---

## Cambios de Diseño Moderados

### 4. Personalizar Paletas de Color

**Archivo:** `sushi/styles.css` (línea ~7)

```css
/* ANTES - Rojo/Coral */
.navbar {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%);
}

/* DESPUÉS - Tu color */
.navbar {
  background: linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%);
}
```

**Colores a cambiar:**
- `.navbar` - Barra de navegación
- `.hero` - Sección hero
- `.btn-primary` - Botones
- `.menu h2`, `.precios h2` - Títulos secciones

### 5. Cambiar Fuentes

**Archivo:** `sushi/styles.css` (línea ~3)

```css
/* ANTES */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* DESPUÉS - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### 6. Agregar Animaciones

**Archivo:** `sushi/styles.css` (final del archivo)

```css
/* Nuevo: Fade In al cargar */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hero {
  animation: fadeIn 1s ease-in;
}

/* Nuevo: Bounce en hover */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.btn-primary:hover {
  animation: bounce 0.5s ease-in-out;
}
```

---

## Cambios de Contenido Avanzados

### 7. Agregar Nuevos Servicios/Menú

**Archivo:** `sushi/index.html` (línea ~60)

```html
<!-- ANTES: 6 items -->
<div class="menu-grid">
  <div class="menu-item">
    <div class="menu-icon">🍣</div>
    <h3>Roll Tempura</h3>
    <p>Camarones tempura con aguacate y salsa spicy</p>
  </div>
  <!-- ... más items ... -->
</div>

<!-- DESPUÉS: Agregar otro -->
<div class="menu-item">
  <div class="menu-icon">🦐</div>
  <h3>Camarones al Ajillo</h3>
  <p>Camarones frescos con ajo crujiente</p>
</div>
```

### 8. Agregar Nueva Opción de Precio

**Archivo:** `sushi/index.html` (línea ~110)

```html
<!-- ANTES: 3 opciones -->
<div class="precios-grid">
  <div class="precio-card">...</div>
  <div class="precio-card destacado">...</div>
  <div class="precio-card">...</div>
</div>

<!-- DESPUÉS: Agregar nueva -->
<div class="precios-grid">
  <!-- ... items existentes ... -->
  <div class="precio-card">
    <h3>Pack VIP</h3>
    <p class="precio">$34.990</p>
    <ul>
      <li>✓ 5 rolls premium</li>
      <li>✓ Bebidas gourmet</li>
      <li>✓ Postre especial</li>
      <li>✓ Entrega incluida</li>
    </ul>
  </div>
</div>
```

### 9. Cambiar Secciones Completas

**Ejemplo: Agregar "Testimonios"**

```html
<!-- Nuevo en sushi/index.html antes de contacto -->
<section id="testimonios" class="testimonios">
  <h2>Lo que Dicen Nuestros Clientes</h2>
  <div class="testimonios-grid">
    <div class="testimonial-card">
      <p>"¡El mejor sushi que he probado!"</p>
      <strong>- Cliente 1 ⭐⭐⭐⭐⭐</strong>
    </div>
    <div class="testimonial-card">
      <p>"Muy fresco y delicioso"</p>
      <strong>- Cliente 2 ⭐⭐⭐⭐⭐</strong>
    </div>
    <div class="testimonial-card">
      <p>"Excelente servicio y precio"</p>
      <strong>- Cliente 3 ⭐⭐⭐⭐⭐</strong>
    </div>
  </div>
</section>
```

**CSS para agregar en styles.css:**
```css
.testimonios {
  padding: 4rem 2rem;
  background: #f9f9f9;
}

.testimonios h2 {
  text-align: center;
  color: #FF6B6B;
  margin-bottom: 2rem;
}

.testimonios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid #FF6B6B;
}

.testimonial-card p {
  font-italic: 1.1em;
  margin-bottom: 1rem;
  color: #333;
}

.testimonial-card strong {
  color: #FF6B6B;
}
```

---

## Mejoras de Performance

### 10. Lazy Load de Imágenes

```html
<!-- ANTES -->
<img src="image.jpg" alt="Producto">

<!-- DESPUÉS -->
<img src="image.jpg" alt="Producto" loading="lazy">
```

### 11. Optimizar CSS con Variables

**Crear al inicio de styles.css:**
```css
:root {
  --primary: #FF6B6B;
  --secondary: #EE5A6F;
  --accent: #FFB3B3;
  --light: #FFF5F5;
  --border-radius: 10px;
  --transition: 0.3s ease;
}

/* Usar variables */
.navbar {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
}

.btn-primary {
  background: white;
  color: var(--primary);
  border-radius: var(--border-radius);
  transition: all var(--transition);
}
```

---

## Integración de Herramientas Externas

### 12. Agregar Google Analytics

**Agregar en index.html `<head>`:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 13. Agregar Favicons

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" href="/favicon.png">
```

### 14. Email Validation (Formspree)

**Cambiar formulario en index.html:**
```html
<!-- ANTES -->
<form>
  <input type="text" placeholder="Tu nombre" required>
  <input type="email" placeholder="Tu email" required>
  <textarea placeholder="Tu mensaje" required></textarea>
  <button type="submit">Enviar</button>
</form>

<!-- DESPUÉS con Formspree -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="nombre" placeholder="Tu nombre" required>
  <input type="email" name="email" placeholder="Tu email" required>
  <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

---

## SEO Improvements

### 15. Meta Tags Completos

**En cada index.html `<head>`:**
```html
<!-- Básicos -->
<meta name="description" content="Sushi Deluxe - Comida japonesa premium">
<meta name="keywords" content="sushi, comida japonesa, restaurante">
<meta name="author" content="Your Name">

<!-- Open Graph (Redes Sociales) -->
<meta property="og:title" content="Sushi Deluxe">
<meta property="og:description" content="Experimenta auténtica comida japonesa">
<meta property="og:image" content="/assets/sushi/hero-banner.svg">
<meta property="og:url" content="https://tu-sitio.com/sushi/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sushi Deluxe">
<meta name="twitter:description" content="Comida japonesa premium">
<meta name="twitter:image" content="/assets/sushi/hero-banner.svg">
```

### 16. Sitemap XML

**Crear `sitemap.xml` en raíz:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-sitio.com/</loc>
    <lastmod>2026-02-04</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-sitio.com/sushi/</loc>
    <lastmod>2026-02-04</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-sitio.com/unas/</loc>
    <lastmod>2026-02-04</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-sitio.com/comida/</loc>
    <lastmod>2026-02-04</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## Regenerar Assets Personalizados

### 17. Generar SVGs con Colores Personalizados

**Editar `scripts/generate-assets.js`:**
```javascript
const palettes = {
  sushi: {
    primary: '#TU_NUEVO_ROJO',
    secondary: '#TU_NUEVO_CORAL',
    accent: '#TU_NUEVO_ACCENT',
    light: '#TU_NUEVO_LIGHT'
  },
  // ... resto igual
};
```

**Ejecutar:**
```bash
npm run generate-assets
```

---

## Checklist de Personalización

- [ ] Cambié números de WhatsApp
- [ ] Actualicé precios en CLP
- [ ] Edité información de contacto
- [ ] Personalicé colores principales
- [ ] Agregué mi logo/marca
- [ ] Cambié textos del menú/servicios
- [ ] Añadí meta tags SEO
- [ ] Generé o importé imágenes custom
- [ ] Testé en móvil
- [ ] Hice preview del build
- [ ] Deployé a GitHub Pages

---

**¿Necesitas ayuda? Consulta el README.md para más opciones.**
