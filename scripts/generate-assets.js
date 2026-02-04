#!/usr/bin/env node

/**
 * Script para generar assets SVG con gradientes
 * Uso: node scripts/generate-assets.js
 */

import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'assets');

// Crear directorio si no existe
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Paletas de colores para cada landing page
const palettes = {
  sushi: {
    primary: '#FF6B6B',
    secondary: '#EE5A6F',
    accent: '#FFB3B3',
    light: '#FFF5F5'
  },
  unas: {
    primary: '#F093FB',
    secondary: '#F5576C',
    accent: '#FFB6D9',
    light: '#FFF5F9'
  },
  comida: {
    primary: '#4FACFE',
    secondary: '#00F2FE',
    accent: '#B0E8FF',
    light: '#F0F9FF'
  }
};

// Generar SVG con gradiente
function generateGradientSVG(name, color1, color2, size = 200) {
  return `<?xml version="1.0" encoding="utf-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad-${name})"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/3}" fill="white" opacity="0.1"/>
</svg>`;
}

// Generar patrón de puntos
function generateDotPattern(name, color, size = 200) {
  let dots = '';
  const dotSize = size / 10;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dots += `<circle cx="${i * dotSize + dotSize/2}" cy="${j * dotSize + dotSize/2}" r="${dotSize/4}" fill="${color}" opacity="0.2"/>`;
    }
  }
  return `<?xml version="1.0" encoding="utf-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="white"/>
  ${dots}
</svg>`;
}

// Generar olas decorativas
function generateWaves(name, color1, color2, size = 400) {
  return `<?xml version="1.0" encoding="utf-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wave-${name}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <path d="M0,${size/2} Q${size/4},${size/4} ${size/2},${size/2} T${size},${size/2} L${size},${size} L0,${size} Z" fill="url(#wave-${name})"/>
  <path d="M0,${size*0.6} Q${size/4},${size*0.45} ${size/2},${size*0.6} T${size},${size*0.6} L${size},${size} L0,${size} Z" fill="${color1}" opacity="0.3"/>
</svg>`;
}

// Generar banner hero
function generateHeroBanner(brand, color1, color2, size = 1200) {
  const height = Math.floor(size * 0.5);
  return `<?xml version="1.0" encoding="utf-8"?>
<svg width="${size}" height="${height}" viewBox="0 0 ${size} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hero-${brand}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${height}" fill="url(#hero-${brand})"/>
  <circle cx="${size * 0.1}" cy="${height * 0.2}" r="150" fill="white" opacity="0.05"/>
  <circle cx="${size * 0.9}" cy="${height * 0.8}" r="200" fill="white" opacity="0.03"/>
</svg>`;
}

console.log('🎨 Generando assets SVG con gradientes...\n');

// Generar assets por brand
Object.entries(palettes).forEach(([brand, colors]) => {
  console.log(`📦 Creando assets para: ${brand.toUpperCase()}`);
  
  // Directorio del brand
  const brandDir = path.join(assetsDir, brand);
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
  }

  // 1. Gradiente principal
  const gradFile = path.join(brandDir, 'gradient-primary.svg');
  fs.writeFileSync(gradFile, generateGradientSVG(brand, colors.primary, colors.secondary));
  console.log(`  ✓ ${path.relative(process.cwd(), gradFile)}`);

  // 2. Patrón de puntos
  const dotFile = path.join(brandDir, 'dot-pattern.svg');
  fs.writeFileSync(dotFile, generateDotPattern(brand, colors.primary));
  console.log(`  ✓ ${path.relative(process.cwd(), dotFile)}`);

  // 3. Olas decorativas
  const waveFile = path.join(brandDir, 'waves.svg');
  fs.writeFileSync(waveFile, generateWaves(brand, colors.primary, colors.secondary));
  console.log(`  ✓ ${path.relative(process.cwd(), waveFile)}`);

  // 4. Banner Hero
  const heroFile = path.join(brandDir, 'hero-banner.svg');
  fs.writeFileSync(heroFile, generateHeroBanner(brand, colors.primary, colors.secondary));
  console.log(`  ✓ ${path.relative(process.cwd(), heroFile)}`);
});

// Generar archivo de documentación
const docsFile = path.join(assetsDir, 'ASSETS_GUIDE.md');
const docsContent = `# Guía de Assets

## Assets Generados

Todos los assets SVG se generan automáticamente con el comando:
\`\`\`bash
npm run generate-assets
\`\`\`

### Estructura

\`\`\`
assets/
├── sushi/
│   ├── gradient-primary.svg    # Gradiente principal rojo
│   ├── dot-pattern.svg         # Patrón de puntos
│   ├── waves.svg              # Olas decorativas
│   └── hero-banner.svg        # Banner hero
├── unas/
│   ├── gradient-primary.svg    # Gradiente principal rosa/magenta
│   ├── dot-pattern.svg        # Patrón de puntos
│   ├── waves.svg              # Olas decorativas
│   └── hero-banner.svg        # Banner hero
├── comida/
│   ├── gradient-primary.svg    # Gradiente principal azul/turquesa
│   ├── dot-pattern.svg        # Patrón de puntos
│   ├── waves.svg              # Olas decorativas
│   └── hero-banner.svg        # Banner hero
└── ASSETS_GUIDE.md            # Este archivo
\`\`\`

## Personalización de Assets con IA

### Prompts para Midjourney/DALL-E:

#### Sushi
\`\`\`
A premium sushi restaurant logo, modern flatdesign, red and coral color scheme, 
clean lines, Japanese inspired, professional, transparent background, 4k
\`\`\`

#### Uñas & Beauty
\`\`\`
A luxury nail salon logo, pink and magenta gradient, elegant feminine design, 
nail art elements, sparkles, modern flatdesign, transparent background, 4k
\`\`\`

#### Comida Casera
\`\`\`
A homemade traditional food logo, cyan and turquoise colors, warm welcoming design, 
kitchen elements, delicious food, professional, transparent background, 4k
\`\`\`

## Cómo usar los assets

1. Los archivos SVG se encuentran en \`assets/[brand]/\`
2. Referenciar en HTML: 
   \`\`\`html
   <img src="/assets/sushi/gradient-primary.svg" alt="Sushi gradient">
   \`\`\`
3. O como background CSS:
   \`\`\`css
   background-image: url('/assets/sushi/waves.svg');
   \`\`\`

## Regenerar Assets

Para regenerar todos los assets con nuevos colores:
\`\`\`bash
npm run generate-assets
\`\`\`

Nota: Modifica los colores en \`scripts/generate-assets.js\` antes de ejecutar.
`;

fs.writeFileSync(docsFile, docsContent);
console.log(`\n✓ ${path.relative(process.cwd(), docsFile)}`);

console.log('\n✅ Assets generados exitosamente!');
