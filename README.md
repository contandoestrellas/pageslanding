# 🍴 Landing Pages - Vite + Vanilla JS

Proyecto con 3 landing pages estáticas modernas sin base de datos, construidas con **Vite**, **HTML/CSS/JS vanilla** y desplegadas en **GitHub Pages**.

## 📱 Landing Pages Incluidas

### 1. **Sushi Deluxe** 🍣
- **Paleta:** Rojo/Coral (#FF6B6B, #EE5A6F)
- **Contenido:** Comida japonesa premium
- **URL:** `/sushi/`

### 2. **Uñas & Beauty** 💅
- **Paleta:** Rosa/Magenta (#F093FB, #F5576C)
- **Contenido:** Salón de belleza y uñas
- **URL:** `/unas/`

### 3. **Comida Casera** 🍽️
- **Paleta:** Azul/Turquesa (#4FACFE, #00F2FE)
- **Contenido:** Recetas tradicionales caseras
- **URL:** `/comida/`

## 🎯 Características Comunes

Cada landing page incluye:
- ✅ **Hero Section:** Banner atractivo con CTA
- ✅ **Servicios/Menú:** Grid de 6 elementos con iconos
- ✅ **Precios:** 3 opciones en CLP ($4.990 mínimo)
- ✅ **Contacto:** Formulario + información de contacto
- ✅ **WhatsApp Button:** Botón flotante verde
- ✅ **Responsive:** Diseño mobile-first
- ✅ **Smooth Scrolling:** Navegación fluida

## 📋 Requisitos Previos

- **Node.js** v16+ 
- **npm** v7+
- Git configurado

```bash
node --version  # v16.0.0 o superior
npm --version   # v7.0.0 o superior
```

## 🚀 Instalación Rápida

### 1. Clonar el Repositorio
```bash
git clone https://github.com/contandoestrellas/pageslanding.git
cd pageslanding
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Generar Assets (Opcional)
```bash
npm run generate-assets
```

Esto crea archivos SVG con gradientes en cada carpeta `/assets/[brand]/`.

## 💻 Desarrollo Local

### Iniciar Dev Server
```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

El servidor incluye:
- 🔄 Hot Module Replacement (HMR)
- 📱 Preview en tiempo real
- ⚡ Bundling optimizado

### URLs Locales Disponibles
- Inicio: [http://localhost:5173](http://localhost:5173)
- Sushi: [http://localhost:5173/sushi/](http://localhost:5173/sushi/)
- Uñas: [http://localhost:5173/unas/](http://localhost:5173/unas/)
- Comida: [http://localhost:5173/comida/](http://localhost:5173/comida/)

### Estructura de Carpetas

```
pageslanding/
├── index.html                 # Página principal (catálogo)
├── package.json              # Dependencias (solo Vite)
├── vite.config.js            # Config Vite
├── .gitignore
├── README.md
│
├── sushi/
│   ├── index.html            # Página Sushi
│   ├── styles.css            # Estilos Sushi (rojo/coral)
│   └── main.js               # Lógica Sushi (smooth scroll, form)
│
├── unas/
│   ├── index.html            # Página Uñas & Beauty
│   ├── styles.css            # Estilos Uñas (rosa/magenta)
│   └── main.js               # Lógica Uñas
│
├── comida/
│   ├── index.html            # Página Comida Casera
│   ├── styles.css            # Estilos Comida (azul/turquesa)
│   └── main.js               # Lógica Comida
│
├── assets/                   # Assets generados
│   ├── sushi/               # SVGs gradientes Sushi
│   ├── unas/                # SVGs gradientes Uñas
│   └── comida/              # SVGs gradientes Comida
│
└── scripts/
    ├── generate-assets.js   # Genera SVGs con gradientes
    └── setup-github-pages.js # Guía deploy GitHub Pages
```

## 🎨 Paletas de Colores

### Sushi Deluxe
```css
Primary:    #FF6B6B (Rojo)
Secondary:  #EE5A6F (Coral oscuro)
Accent:     #FFB3B3 (Rosa claro)
Light:      #FFF5F5 (Blanco roto)
```

### Uñas & Beauty
```css
Primary:    #F093FB (Magenta claro)
Secondary:  #F5576C (Rosa coral)
Accent:     #FFB6D9 (Rosa pastel)
Light:      #FFF5F9 (Blanco rosa)
```

### Comida Casera
```css
Primary:    #4FACFE (Azul cielo)
Secondary:  #00F2FE (Turquesa)
Accent:     #B0E8FF (Azul claro)
Light:      #F0F9FF (Blanco azulado)
```

## 🔨 Build para Producción

### Compilar para Producción
```bash
npm run build
```

Esto genera:
- Carpeta `dist/` con todos los archivos optimizados
- Archivos minificados y chunkeados
- Optimización de assets

### Previewar Build Localmente
```bash
npm run preview
```

Esto sirve la carpeta `dist/` en un servidor local antes de deployar.

## 🌐 Deploy en GitHub Pages

### Opción 1: Usar gh-pages (Recomendado)

#### 1. Instalar herramienta de deploy
```bash
npm install -D gh-pages
```

#### 2. Actualizar package.json
Agrega al objeto `"scripts"`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "generate-assets": "node scripts/generate-assets.js",
  "deploy": "npm run build && gh-pages -d dist"
}
```

#### 3. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Selecciona: `Deploy from a branch`
4. Branch: `gh-pages` / `(root)`
5. Guarda

#### 4. Deployar
```bash
npm run deploy
```

#### 5. Verificar Deploy
Accede a: `https://contandoestrellas.github.io/pageslanding/`

### Opción 2: Usar Git Subtree

```bash
# Build
npm run build

# Crear rama gh-pages desde dist
git subtree split --prefix dist -b gh-pages

# Push a GitHub
git push origin gh-pages --force

# Eliminar rama local
git branch -D gh-pages
```

### Opción 3: Workflow Automático (GitHub Actions)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📦 Personalización de Assets

### Generar nuevos SVGs

```bash
npm run generate-assets
```

Esto crea en `assets/[brand]/`:
- `gradient-primary.svg` - Gradiente principal
- `dot-pattern.svg` - Patrón de puntos
- `waves.svg` - Olas decorativas
- `hero-banner.svg` - Banner hero

### Prompts para IA (Midjourney/DALL-E)

#### Sushi:
```
A premium sushi restaurant logo, modern flat design, red and coral color scheme, 
clean lines, Japanese inspired, professional, transparent background, 4k
```

#### Uñas & Beauty:
```
A luxury nail salon logo, pink and magenta gradient, elegant feminine design, 
nail art elements, sparkles, modern flat design, transparent background, 4k
```

#### Comida Casera:
```
A homemade traditional food logo, cyan and turquoise colors, warm welcoming design, 
kitchen elements, delicious food, professional, transparent background, 4k
```

## 🎯 Features del Código

### JavaScript
- ✅ Smooth scrolling a secciones
- ✅ Validación de formularios
- ✅ Integración WhatsApp API
- ✅ Event listeners optimizados

### CSS
- ✅ Flexbox + CSS Grid
- ✅ Gradientes lineales
- ✅ Animaciones suaves (@keyframes)
- ✅ Mobile-first responsive
- ✅ Variables CSS (personalización fácil)

### Vite
- ✅ Hot Module Replacement (HMR)
- ✅ Tree-shaking automático
- ✅ Bundling de múltiples entrypoints
- ✅ Optimización de assets

## 💡 Tips & Trucos

### Modificar números de WhatsApp
Edita en cada `index.html`:
```html
<a href="https://wa.me/56912345678?text=Hola%20Sushi..." 
```

### Cambiar precios de CLP
Busca `$4.990` en:
- `sushi/index.html`
- `unas/index.html`
- `comida/index.html`

### Personalizar ubicación y contacto
Edita en cada carpeta el `<section id="contacto">`:
```html
<p><strong>Dirección:</strong> Tu ubicación aquí</p>
<p><strong>Teléfono:</strong> Tu teléfono aquí</p>
```

### Cambiar colores globales
Modifica en `styles.css` de cada carpeta:
```css
background: linear-gradient(135deg, #TU_COLOR1 0%, #TU_COLOR2 100%);
```

## 🐛 Troubleshooting

### Error: "Cannot find module 'vite'"
```bash
npm install
```

### Los assets no cargan en producción
Verifica que `vite.config.js` tenga el `base` correcto.

### WhatsApp button no funciona en mobile
Confirma que estés usando HTTPS o que el navegador tenga permisos.

### Estilos no se aplican después del build
Verifica que los paths en CSS sean relativos: `./assets/...`

## 📊 Performance

Tamaño aproximado de los builds:
- HTML: ~8KB (gzipped)
- CSS: ~5KB (gzipped)
- JS: ~2KB (gzipped)
- **Total por página: ~15KB**

Scores Lighthouse (esperados):
- ⚡ Performance: 90+
- ♿ Accessibility: 95+
- 📋 Best Practices: 95+
- 🔒 SEO: 95+

## 📝 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Contando Estrellas** - [contandoestrellas](https://github.com/contandoestrellas)

## 📧 Soporte

¿Preguntas o problemas? 
- Abre un [Issue](https://github.com/contandoestrellas/pageslanding/issues)
- Revisa el [Wiki](https://github.com/contandoestrellas/pageslanding/wiki)

---

**Última actualización:** Febrero 2026
**Versión:** 1.0.0
**Estado:** ✅ Producción
