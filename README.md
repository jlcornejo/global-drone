# Global Drone - Sitio Web Corporativo

Sitio web profesional para Global Drone, empresa especializada en servicios con drones para minería, agricultura, construcción y más.

## 🚀 Características

- **Sitio web estático** con diseño moderno y responsivo
- **Panel de administración** para gestión de contenido multimedia
- **Carrusel dinámico** configurable desde el admin
- **Portafolio interactivo** con filtros por categoría
- **Formulario de contacto** funcional
- **Animaciones fluidas** con Framer Motion
- **SEO optimizado** con Next.js 15

## 🛠️ Stack Tecnológico

### Frontend

- **Next.js 15.3.3** - Framework React con SSR/SSG
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3.4.17** - Framework CSS utilitario
- **Framer Motion 12.18.1** - Animaciones y transiciones
- **Headless UI 2.2.4** - Componentes accesibles sin estilos
- **Heroicons 2.2.0** - Iconografía

### Backend & Base de Datos

- **MongoDB** - Base de datos NoSQL
- **Mongoose 8.16.0** - ODM para MongoDB
- **Next.js API Routes** - Endpoints del servidor

### Dependencias de Seguridad (No implementadas)

- **NextAuth.js 4.24.11** - Instalado pero no configurado
- **bcryptjs 3.0.2** - Instalado pero no usado
- **jsonwebtoken 9.0.2** - Instalado pero no usado

### Utilidades

- **React Hot Toast 2.5.2** - Notificaciones
- **Lottie React 2.4.1** - Animaciones Lottie
- **clsx 2.1.1** - Utilidad para clases CSS condicionales
- **class-variance-authority 0.7.1** - Variantes de componentes

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd global-drone-web
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus configuraciones:

```env
MONGODB_URI=mongodb://localhost:27017/globaldrone
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
JWT_SECRET=your-jwt-secret-here
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
global-drone-web/
├── app/                    # App Router de Next.js 15
│   ├── admin/             # Panel de administración
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   └── sections/         # Secciones de la página
├── lib/                  # Utilidades y configuraciones
├── models/               # Modelos de MongoDB
└── public/               # Archivos estáticos
```

## 🎨 Servicios Incluidos

1. **Monitoreo de Obras Mineras** - Seguimiento de progreso con grabaciones aéreas
2. **Fumigación Agrícola** - Servicios de fumigación de precisión
3. **Inspección de Construcciones** - Control de calidad y seguridad
4. **Grabación Aérea Profesional** - Producción audiovisual
5. **Mapeo y Topografía** - Levantamientos topográficos precisos
6. **Monitoreo de Seguridad** - Vigilancia aérea industrial

## 🔧 Panel de Administración

Accede al panel en `/admin` para:

- **Gestionar multimedia** - Subir y organizar videos e imágenes
- **Configurar carrusel** - Personalizar el carrusel principal
- **Administrar portafolio** - Organizar proyectos por categorías
- **Configuración general** - Ajustes del sitio web

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run build
```

### Docker

```bash
docker build -t global-drone-web .
docker run -p 3000:3000 global-drone-web
```

## 📱 Características Responsivas

- Diseño mobile-first
- Navegación adaptativa
- Imágenes optimizadas
- Carrusel táctil en móviles
- Formularios optimizados para dispositivos

## 🔒 Seguridad

- Validación de formularios
- Sanitización de datos
- Headers de seguridad configurados
- Preparado para autenticación (NextAuth.js)

## 🎯 SEO y Performance

- Meta tags optimizados
- Sitemap automático
- Imágenes optimizadas con Next.js Image
- Lazy loading implementado
- Core Web Vitals optimizados

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto es propiedad de Global Drone. Todos los derechos reservados.
