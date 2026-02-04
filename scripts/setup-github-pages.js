#!/usr/bin/env node

/**
 * Script para configurar Distributor y deploy en GitHub Pages
 * Uso: node scripts/setup-github-pages.js
 */

import fs from 'fs';
import path from 'path';

console.log('\n🚀 Configuración para GitHub Pages\n');

console.log('📋 PASOS PARA DEPLOY EN GITHUB PAGES:\n');

console.log('1. PREREQUISITOS:');
console.log('   ✓ Asegurate que el repo esté sincronizado con GitHub');
console.log('   ✓ Verifica que tienes permisos de admin en el repositorio\n');

console.log('2. CONFIGURAR GITHUB PAGES:');
console.log('   a) Ve a: Repositorio → Settings → Pages');
console.log('   b) Source: Deploy from a branch');
console.log('   c) Branch: gh-pages / (root)');
console.log('   d) Salva los cambios\n');

console.log('3. INSTALAR HERRAMIENTA DE DEPLOY (opción 1):');
console.log('   npm install -D gh-pages\n');

console.log('4. CREAR SCRIPT DE DEPLOY EN package.json:');
console.log('   Agrega estas líneas a "scripts":\n');
console.log('   "deploy": "npm run build && gh-pages -d dist"');
console.log('   O en vite.config.js agrega:');
console.log('   base: "/pageslanding/"\n');

console.log('5. DEPLOY:');
console.log('   npm run deploy\n');

console.log('6. ALTERNATIVA CON GIT (opción 2):');
console.log('   npm run build');
console.log('   git add dist -f');
console.log('   git commit -m "Deploy to GitHub Pages"');
console.log('   git push origin $(git subtree split --prefix dist main):gh-pages --force\n');

console.log('7. VERIFICAR DEPLOY:');
console.log('   https://contandoestrellas.github.io/pageslanding\n');

// Crear archivo .nojekyll para evitar problemas con GitHub Pages
const nojekyll = path.join(process.cwd(), '.nojekyll');
fs.writeFileSync(nojekyll, '');
console.log('✓ Archivo .nojekyll creado (evita problemas de procesamiento)');

console.log('\n💡 TIPS:');
console.log('   • Verif la URL base en vite.config.js');
console.log('   • Usa rutas relativas en assets: ./assets/sushi/...');
console.log('   • Test local: npm run preview');
console.log('\n✅ Configuración completada!\n');
