# CaricoXpress Portal Cliente - Estado del Proyecto

Este documento es la fuente de verdad técnica del frontend cliente de CaricoXpress en el repositorio `CARICOXPRESS-DEV`.

## 1. Resumen del proyecto

CaricoXpress Portal Cliente es el frontend público y cliente de CaricoXpress. Está construido en Astro y consume la API del ERP Laravel para registrar clientes, verificar correos y consultar datos de casillero.

El objetivo del portal es permitir que los clientes:

- se registren;
- verifiquen correo;
- consulten su casillero;
- visualicen su carnet digital.

Arquitectura general:

```text
Astro
  ↓
API Laravel
  ↓
ERP CaricoXpress
```

Este repositorio corresponde únicamente al portal público y portal cliente. La operación interna, reglas de negocio y administración viven en `CARICOXPRESS-ERP`.

## 2. Stack tecnológico

Frontend:

- Astro
- TypeScript
- Tailwind CSS
- pnpm

Herramientas:

- Vite
- Astro Check
- Build estático

Hosting:

- Netlify

El proyecto contiene configuración de Netlify en `netlify.toml`, con publicación desde `dist` y build estático.

## 3. Estado actual del proyecto

| Funcionalidad | Estado | Observaciones |
| --- | --- | --- |
| Website público | Terminado | Incluye Home, servicios, nosotros, reseñas, contacto y blog. |
| Registro cliente | Terminado | Formulario público conectado a la API Laravel. |
| Verificación correo | Terminado | Página pública de verificación mediante token. |
| Protección Turnstile | Implementado | Widget visible en `/registro`; envía `turnstile_token` al backend. |
| Portal Mi Casillero | MVP terminado | Acceso básico mediante email y contraseña contra API Laravel. |
| Carnet digital | Terminado | Muestra datos logísticos esenciales del casillero. |
| Autenticación cliente | Funcionalidad básica implementada | Acceso puntual por email y contraseña; sin sesión persistente. |
| Sesión persistente | Pendiente | Requiere definición de estrategia de autenticación cliente. |
| Recuperación contraseña | Pendiente | Debe implementarse contra Laravel. |
| Dashboard cliente | Pendiente | Fase posterior al MVP del carnet. |
| Prealertas | Pendiente | Fase 2 del portal cliente. |
| Reporte de pagos | Pendiente | Fase posterior. |

## 4. Rutas actuales

`/`

Página principal del website público.

`/registro`

Formulario de registro cliente.

`/registro/verificar`

Confirmación mediante token enviado por correo.

`/mi-casillero`

Área privada básica del cliente para consultar el casillero y ver el carnet digital.

`/contacto`

Página de contacto.

`/servicios`

Página de servicios.

`/blog`

Contenido SEO.

## 5. Flujo de registro

```text
Usuario completa formulario
  ↓
POST /api/public/registrations
  ↓
Laravel crea pending_customer_registration
  ↓
Correo de verificación
  ↓
/registro/verificar?token=
  ↓
POST /api/public/registrations/verify
  ↓
Laravel crea Customer + Locker
  ↓
Redirección a /mi-casillero
```

El frontend no crea clientes ni casilleros por cuenta propia. Solo captura datos, valida estado visual del formulario y consume la API pública de Laravel.

## 6. Integración API Laravel

Endpoints consumidos actualmente:

- `POST /api/public/registrations`
- `POST /api/public/registrations/verify`
- `POST /api/public/locker-access`

Astro no contiene lógica de negocio. Laravel es la fuente de verdad para:

- creación de registros pendientes;
- verificación de tokens;
- creación de clientes;
- creación y asignación de casilleros;
- validación de credenciales;
- respuesta de datos logísticos.

El frontend usa `PUBLIC_API_URL` para construir las URLs absolutas hacia la API.

## 7. Portal Mi Casillero

El portal muestra un carnet digital para el cliente autenticado mediante el acceso básico disponible en el MVP.

Datos visibles:

- nombre cliente;
- número de casillero;
- referencia almacén;
- dirección Miami;
- ciudad;
- estado;
- ZIP;
- país.

No debe mostrar:

- correo;
- información privada innecesaria;
- tokens.

El acceso actual no usa sesión persistente. El cliente envía email y contraseña a la API y la respuesta se renderiza en memoria dentro de la página.

## 8. Contrato de datos actual

Respuesta esperada para `POST /api/public/locker-access`:

```ts
interface LockerAccessResponse {
  customer_name: string;
  locker_code: string;
  shipping_data: ShippingData;
}
```

`shipping_data` contiene:

```ts
interface ShippingData {
  warehouse_reference: string;
  address_line_1: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
```

Campos actuales:

- `customer_name`
- `locker_code`
- `shipping_data.warehouse_reference`
- `shipping_data.address_line_1`
- `shipping_data.city`
- `shipping_data.state`
- `shipping_data.postal_code`
- `shipping_data.country`

## 9. Decisiones de UX importantes

1. El cliente no necesita ver complejidad interna del ERP.
2. El número comercial del casillero es prioritario.
3. La referencia `CCXPRESS 3600 - XXXX` solo tiene propósito logístico.
4. El portal debe mantener simplicidad visual.

## 10. Estado Git

Branch principal de trabajo definido para el flujo del portal:

```text
test
```

Flujo:

```text
test
  ↓
validación build/check
  ↓
merge main
```

Tags actuales relevantes:

- `mvp-portal-cliente-v1.0`

Este tag representa la primera versión estable del portal cliente.

También existe el tag `v1.0.0-mvp` en el repositorio.

## 11. Validaciones actuales

Antes de integrar cambios:

```bash
pnpm install --frozen-lockfile
pnpm astro check
pnpm build
```

Estado actual documentado:

- `astro check`: 0 errores.
- `build`: correcto.

## 12. Pendientes Fase 2

Alta prioridad:

- mantener sesión cliente;
- logout;
- recuperación contraseña.

Media:

- dashboard cliente;
- historial paquetes;
- prealertas;
- estados de envío.

Posterior:

- reporte de pagos;
- notificaciones;
- integración WhatsApp.

## 13. Relación con Laravel ERP

Astro no reemplaza Filament.

Arquitectura:

```text
Cliente:
Astro

Operación interna:
Filament

Reglas negocio:
Laravel
```

Laravel ERP mantiene la lógica operativa y administrativa de CaricoXpress. Astro ofrece la experiencia pública y cliente.

## 14. Reglas futuras

- No duplicar lógica de negocio en Astro.
- Consumir siempre API Laravel.
- Cambios de contrato API deben documentarse.
- No almacenar información sensible en frontend.
- Mantener build limpio.

## 15. Próximo objetivo recomendado

Fase 2 Portal Cliente:

1. autenticación robusta;
2. persistencia de sesión;
3. recuperación contraseña;
4. consulta de paquetes;
5. prealertas;
6. reporte de pagos.
