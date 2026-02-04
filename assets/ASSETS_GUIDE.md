# Guía de Assets

## Assets Generados

Todos los assets SVG se generan automáticamente con el comando:
```bash
npm run generate-assets
```

### Estructura

```
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
```

## Personalización de Assets con IA

### Prompts para Midjourney/DALL-E:

#### Sushi
```
A premium sushi restaurant logo, modern flatdesign, red and coral color scheme, 
clean lines, Japanese inspired, professional, transparent background, 4k
```

#### Uñas & Beauty
```
A luxury nail salon logo, pink and magenta gradient, elegant feminine design, 
nail art elements, sparkles, modern flatdesign, transparent background, 4k
```

#### Comida Casera
```
A homemade traditional food logo, cyan and turquoise colors, warm welcoming design, 
kitchen elements, delicious food, professional, transparent background, 4k
```

## Cómo usar los assets

1. Los archivos SVG se encuentran en `assets/[brand]/`
2. Referenciar en HTML: 
   ```html
   <img src="/assets/sushi/gradient-primary.svg" alt="Sushi gradient">
   ```
3. O como background CSS:
   ```css
   background-image: url('/assets/sushi/waves.svg');
   ```

## Regenerar Assets

Para regenerar todos los assets con nuevos colores:
```bash
npm run generate-assets
```

Nota: Modifica los colores en `scripts/generate-assets.js` antes de ejecutar.
