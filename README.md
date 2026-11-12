# bhuvaneshwari — Portfolio

A modern, responsive single-page developer portfolio showcasing full-stack projects, core technical skills, and interactive UI experiences.

**Live site:** https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **React 19** & **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **AOS (Animate on Scroll)**
- **EmailJS**
- **WebGL** (Fluid Splash Cursor)

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Environment Variables

To enable contact form submissions via EmailJS, create a `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(Note: If these variables are omitted or empty, the contact form seamlessly defaults to an email-app mailto client fallback).*
