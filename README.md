# Papelería Chocolate — Sitio Web

Sitio web de presentación y venta para Papelería Chocolate, Copy & Print.

## Estructura

```
papeleria-chocolate/
├── index.html    # Estructura HTML
├── styles.css    # Todos los estilos
├── script.js     # Lógica del catálogo y WhatsApp
└── README.md     # Este archivo
```

## Cómo correrlo localmente

1. Abrí la carpeta en VS Code
2. Instalá la extensión **Five Server** (si no la tenés)
3. Click derecho en `index.html` → **Open with Five Server**
4. Se abre en `http://localhost:5555`

## Cómo subir a GitHub Pages

1. Creá un repositorio en GitHub (ej: `papeleria-chocolate`)
2. Subí todos los archivos
3. Ir a **Settings → Pages → Source: main / root**
4. El sitio queda en `https://tuusuario.github.io/papeleria-chocolate`

## Personalización rápida

- **Precios / productos**: editá el array `products` en `script.js`
- **Colores**: editá las variables `--choc-*` al inicio de `styles.css`
- **Teléfono WhatsApp**: buscá `59899214898` en `index.html` y `script.js`
- **Logo**: reemplazá el base64 del `<img>` por la ruta a tu imagen si ya tenés servidor
