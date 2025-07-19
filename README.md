# Proyecto Next.js con NextAuth.js y GitHub OAuth

Este proyecto es una aplicación Next.js configurada para autenticación con GitHub usando next-auth.

## Scripts principales

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila la aplicación para producción
- `npm run start` — Inicia la aplicación en modo producción

## Configuración de variables de entorno

Crea un archivo `.env.local` en la raíz con:

```
GITHUB_ID=tu_client_id
GITHUB_SECRET=tu_client_secret
NEXTAUTH_URL=http://localhost:3000
```

Obtén tus credenciales en https://github.com/settings/developers

## Autenticación

- Accede a `/api/auth/signin` para iniciar sesión con GitHub.
- El estado de sesión se puede consultar con el hook `useSession` de next-auth.

---

Este proyecto fue generado automáticamente.
