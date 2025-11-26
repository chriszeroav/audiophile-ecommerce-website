# Audiophile E-commerce UI

Una tienda online simulada para productos tecnológicos como headphones, earphones y speakers. Este proyecto está enfocado en la creación de una interfaz de usuario moderna y funcional.

![audiophile](https://github.com/user-attachments/assets/98e45db1-cb06-42fd-bb27-fbd5d76a7ecf)

## 🎯 Propósito

Este proyecto fue desarrollado como una práctica para:

- Crear una tienda online simulada con una experiencia de usuario atractiva.
- Experimentar con Tailwind CSS v4 para diseño moderno.
- Implementar componentes reutilizables usando shadcn/ui.
- Mejorar habilidades en diseño responsive y accesibilidad web (a11y).
- Aplicar mejores prácticas de React y Next.js.

## 🛠️ Tecnologías

- Next.js 15
- React 19
- Tailwind CSS v4
- TypeScript
- shadcn/ui
- Lucide React

## 🚀 Características

✅ Diseño completamente responsive
✅ Estados de hover y focus en elementos interactivos
✅ Optimizado para accesibilidad
✅ Componentes reutilizables y mantenibles
✅ Tipado con TypeScript
✅ Animaciones suaves con tailwindcss-animate

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/chriszeroav/audiophile-ecommerce-website.git

# Navegar al directorio
cd audiophile-ecommerce-website

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

El proyecto estará disponible en http://localhost:3000

## 📜 Scripts Disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Crea el build de producción
pnpm start    # Inicia el servidor de producción
pnpm lint     # Ejecuta el linter
```

## 📁 Estructura del Proyecto

```
├── app/              # Rutas y layouts de Next.js
├── components/       # Componentes React organizados por feature
│   ├── category/    # Componentes de categorías de productos
│   ├── home/        # Componentes de la página principal
│   ├── layout/      # Header, Footer y otros layouts
│   ├── product/     # Componentes de productos
│   └── ui/          # Componentes UI base (shadcn)
├── context/         # Estado global (ej. carrito de compras)
├── lib/             # Utilidades y helpers
├── public/          # Archivos estáticos (imágenes, SVGs)
└── ...              # Archivos de configuración
```

## 📝 Licencia

Este proyecto es de código abierto y fue creado con fines educativos.
