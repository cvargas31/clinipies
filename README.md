# CliniPies — Landing page para Google Ads

Landing page de una sola página para **CliniPies · Quiropedia Clínica**, optimizada
para convertir clics de Google Ads en conversaciones de **WhatsApp**.

Stack: **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**. Listo para **Vercel**.

## Desarrollo

```bash
npm install
cp .env.local.example .env.local   # (opcional) añade tus IDs de tracking
npm run dev                        # http://localhost:3000
```

## Cómo editar el contenido (sin tocar código)

Casi todo el texto y los datos viven en **`lib/clinic.ts`**:

- **Teléfono y WhatsApp**: `clinic.whatsapp` (solo dígitos, formato internacional),
  `clinic.phoneDisplay`, `clinic.phoneHref` y `clinic.whatsappPrefill`.
- **Dirección, horario y mapa**: `clinic.address`, `clinic.hours`, `clinic.mapEmbedUrl`.
- **Servicios, tarifas, opiniones y equipo**: arrays `services`, `pricing`,
  `testimonials`, `team`.

Los valores marcados con « » en los comentarios son **placeholders** que debes
reemplazar por los reales (especialmente el número de WhatsApp y los precios).

### Fotos reales

- **Hero**: coloca `public/hero.jpg` y sustituye el bloque decorativo en
  `components/Hero.tsx` por `<Image src="/hero.jpg" fill className="object-cover" />`.
- **Logo**: el logo es un SVG en `components/Logo.tsx`. Se puede reemplazar por
  el archivo oficial si lo prefieres.
- **Antes y después**: coloca `public/antes.jpg` y `public/despues.jpg` y pon
  esas rutas en `beforeAfter.before` / `beforeAfter.after` (en `lib/clinic.ts`).
  Mientras estén vacías se muestra un marcador de marca deslizable.

## Tracking (Google Ads + Analytics)

1. Copia `.env.local.example` a `.env.local`.
2. Rellena:
   - `NEXT_PUBLIC_GA_ID` → GA4 (`G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_GADS_ID` → Google Ads (`AW-XXXXXXXXXX`)
   - `NEXT_PUBLIC_GADS_CONVERSION_LABEL` → etiqueta de la acción de conversión
3. Cada clic en un botón de WhatsApp dispara:
   - un evento GA4 `contacto_whatsapp`, y
   - la conversión de Google Ads (`send_to: AW-.../etiqueta`).

Si las variables están vacías, el tracking se desactiva sin errores (útil en local).

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Añade las variables `NEXT_PUBLIC_*` en *Project Settings → Environment Variables*.
4. Deploy. Vercel detecta Next.js automáticamente.

## Estructura

```
app/            layout (metadata es, fuentes, gtag) + page (ensambla secciones)
components/     Header, Hero, TrustSection, Services, OversightBanner,
                Pricing, Testimonials, Team, ContactSection, Footer,
                WhatsAppButton, CallButton, Logo, Wave, Icon
lib/clinic.ts   contenido editable de la clínica (fuente de verdad)
lib/gtag.ts     helpers de GA4 / conversión de Google Ads
referencia/     imágenes de referencia (rótulo real + tema Clinika)
```
