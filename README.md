# Jonathan Siney — Portafolio

Portafolio de Jonathan Gabriel Siney López, Desarrollador Full-Stack,
construido con React + Vite. Tema oscuro con acento naranja: Hero, About,
Projects y Contact en una sola página.

## Stack
- React 18
- Vite (build tool)
- react-icons (iconos)
- CSS puro con variables (sin frameworks de CSS)

## Estructura
```
public/
  profile.jpg              Foto de perfil (recortada del CV)
  cv-jonathan-siney.pdf     CV descargable desde el botón "Mi CV"
src/
  components/
    Header.jsx    Nav con anclas (Home/About/Projects/Contact)
    Hero.jsx      Presentación + foto circular
    About.jsx     Bio, servicios, skills y stats
    Projects.jsx  Proyectos (experiencia laboral + cursos)
    Contact.jsx   Email, teléfono, dirección, GitHub
    Footer.jsx
  data/site.js    Toda tu info editable: perfil, servicios, skills,
                  experiencia, educación, cursos y proyectos
  index.css       Tema y estilos globales
```

> Nota: `components/Skills.jsx`, `components/AboutMe.jsx`,
> `components/BlogCard.jsx` y `pages/*` son archivos de una versión anterior
> del sitio y ya no se usan. Se dejaron vacíos porque el sistema no permitió
> borrarlos — puedes eliminarlos tú mismo sin problema.

## Cómo editar tu contenido
Todo el texto (nombre, bio, contacto, skills, experiencia, educación, cursos
y proyectos) vive en `src/data/site.js`. Cambia ese archivo y el sitio entero
se actualiza. Para cambiar la foto o el CV, reemplaza los archivos en
`public/` manteniendo el mismo nombre.

## Correr en local
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Compilar para producción
```bash
npm run build
```
Genera la carpeta `dist/` lista para desplegar en Vercel, Netlify o GitHub Pages.

## Subir a GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <tu-repo-url>
git push -u origin main
```
