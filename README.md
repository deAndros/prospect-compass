# ProspectIA

**Plataforma inteligente de descubrimiento, priorización y gestión de leads estratégicos.**

ProspectIA es una solución full-stack diseñada para optimizar el ciclo de prospección comercial. Mediante el uso de inteligencia artificial avanzada y un sistema de scoring automatizado, permite a los equipos de ventas identificar partners potenciales de alta calidad en tiempo real.

---

## 🚀 Características Principales

### 🔍 Descubrimiento Inteligente de Leads
- **IA Lead Search**: Integración con Google Gemini 2.0 y Google Search Grounding para obtener resultados precisos y actualizados sin alucinaciones.
- **Filtros Dinámicos**: Selección de países e industrias alimentada directamente desde la base de datos de leads existentes.
- **Extracción de Señales**: Identificación automática de presencia tecnológica, catálogos de e-learning y señales de adopción de IA.

### ⚖️ Sistema de Scoring de Prioridad
- **Evaluación Multinivel**: Algoritmo que puntúa leads (0-100) basado en 6 métricas clave:
  - Audiencia en redes sociales (LinkedIn, Instagram, FB, Twitter).
  - Nivel de engagement y actividad.
  - Relevancia de verticales.
  - Indicadores de infraestructura educativa.
- **Clasificación por Buckets**: Segmentación automática en categorías `A`, `B`, `C` y `Nurture`.

### 🔐 Autenticación y Seguridad
- **Multi-proveedor**: Soporte para inicio de sesión local (email/password) y autenticación social con **Google (OAuth2)** mediante flujo tradicional de redireccionamiento.
- **Protección de Datos**: Gestión segura de sesiones mediante JWT (JSON Web Tokens) y contraseñas cifradas con bcrypt.
- **Control de Acceso**: Rutas protegidas en frontend y middlewares de autorización en backend.

### 👤 Gestión de Perfil y CRM
- **User Dashboard**: Vista detallada de leads guardados con estados personalizables (`Nuevo`, `Contactado`, `Interesado`, `Pendiente`).
- **Profile Customization**: Panel para que el usuario actualice su información personal e imagen de perfil.
- **Lead Detail View**: Modal avanzado con análisis de IA, datos de contacto enriquecidos y edición inline.

---

## 🛠️ Stack Tecnológico

### **Frontend**
- **React 19** + **Vite**
- **TailwindCSS** (Diseño premium con glassmorphism)
- **Framer Motion** (Animaciones fluidas y micro-interacciones)
- **TanStack Query** (Gestión de estado asíncrono y cacheo)
- **React Router 7** (Navegación SPA)
- **Lucide React** (Iconografía)

### **Backend**
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Google Gemini API** (IA Generativa)
- **Google Auth Library** (Integración OAuth2)
- **OpenAPI / Swagger** (Documentación de API)
- **Winston / Morgan** (Logging profesional)

---

## ⚙️ Configuración del Entorno

### **Backend (.env)**
Crea un archivo `.env` en la carpeta `server/` con las siguientes variables:
```env
# Servidor y DB
PORT=5000
MONGO_URI=mongodb://localhost:27017/prospectia

# Seguridad
JWT_SECRET=tu_secreto_super_seguro

# Google Gemini AI
GEMINI_API_KEY=tu_api_key_de_google_ai_studio

# Google OAuth2
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5173/auth/google/callback
```

### **Frontend (.env)**
Crea un archivo `.env` en la carpeta `client/` con las siguientes variables:
```env
# API Backend
VITE_API_URL=http://localhost:5000

# Google OAuth2
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
VITE_GOOGLE_REDIRECT_URI=http://localhost:5173/auth/google/callback
```

---

## 📁 Estructura del Proyecto

```
prospect-compass/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes (Sidebar, Leads, Wizards)
│   │   ├── lib/           # Utilidades (API, Query Client)
│   │   ├── pages/         # Vistas (Discovery, Leads, Profile, Auth)
│   │   └── App.jsx        # Configuración de Rutas
│
└── server/                # Backend Node.js
    ├── src/
    │   ├── controllers/   # Lógica de controladores (User, Lead)
    │   ├── models/        # Modelos de Mongoose (User, Lead)
    │   ├── services/      # Servicios (Gemini, Auth, UserService)
    │   ├── openapi/       # Especificaciones de API (UI/Schemas)
    │   └── routes/        # Router principal
    └── index.js           # Entrada del servidor
```

---

## 📡 API Endpoints (OpenAPI)

La aplicación cuenta con una documentación interactiva completa bajo el estándar OpenAPI.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/users/register` | Registro de nuevo usuario (Local) |
| `POST` | `/users/login` | Inicio de sesión tradicional |
| `POST` | `/users/google-auth` | Autenticación con Google (OAuth2 Code) |
| `GET` | `/users/me` | Obtener información del usuario actual |
| `PATCH` | `/api/users/profile` | Actualizar perfil y foto de usuario |
| `POST` | `/api/leads/discover` | Descubrimiento de leads mediante IA |
| `GET` | `/api/leads` | Obtener listado de leads guardados |
| `GET` | `/api/leads/:id` | Detalle de un lead específico |
| `PUT` | `/api/leads/:id` | Actualización de información de lead |
| `DELETE` | `/api/leads/:id` | Eliminación lógica de un lead |
| `POST` | `/api/leads/:id/analyze` | Análisis profundo y scoring de lead |

---

## 🗺️ Roadmap

Próximas funcionalidades y mejoras planificadas:

- [ ] **Usuarios (Baja)**: Implementación de eliminación de cuentas.
- [ ] **Equipos (ABM + Roles)**: Gestión de equipos, administración y permisos.
- [ ] **Productos (ABM + Asociación a Equipos)**: Gestión de catálogo de productos vinculados a equipos.
- [ ] **Verificación de Email**: Validación de identidad mediante correo electrónico.
- [ ] **Búsqueda con n8n**: Integración con n8n para potenciar el descubrimiento.
- [ ] **Campañas de Email (n8n)**: Automatización de outreach mediante flujos de n8n.
- [ ] **Multi-LLM Factory**: Soporte para Anthropic, OpenAI y otros además de Gemini.
- [ ] **Modelos Locales**: Entrenamiento e implementación de modelos propios.
- [ ] **Exportación**: Descarga a CSV/Excel de prospectos y listas.
- [ ] **Notificaciones**: Alertas por email integradas.
- [ ] **Dashboard de Métricas**: Visualización de KPIs y rendimiento.

---

## 💻 Instalación

1. **Clonar**: `git clone https://github.com/usuario/prospect-compass.git`
2. **Servidor**:
   ```bash
   cd server
   npm install
   npm run dev
   ```
3. **Cliente**:
   ```bash
   cd ../client
   npm install
   npm run dev
   ```
