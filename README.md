# Jonathan Siney — Portafolio

Portafolio web personal de **Jonathan Gabriel Siney López**, desarrollador **Full-Stack**, creado como una plataforma profesional para presentar mi perfil, habilidades técnicas, experiencia, formación académica y proyectos.

El proyecto está desarrollado utilizando **HTML, CSS, JavaScript y React**, con **Vite** como herramienta de desarrollo y construcción. La interfaz fue diseñada desde cero utilizando CSS personalizado, sin frameworks de estilos, buscando mantener una experiencia visual moderna, limpia y adaptable a diferentes dispositivos.

El portafolio se encuentra publicado mediante **GitHub Pages**, permitiendo disponer de una versión pública y accesible del proyecto.

---

## Sobre el proyecto

Este portafolio fue desarrollado con el objetivo de crear una presentación profesional de mi perfil como desarrollador y centralizar en un solo sitio la información relacionada con mi experiencia y trayectoria.

La aplicación utiliza una arquitectura basada en componentes de React, permitiendo separar las diferentes secciones de la interfaz y facilitar el mantenimiento y crecimiento del proyecto.

El diseño utiliza un **tema oscuro con acentos naranjas**, acompañado de diferentes transiciones y elementos visuales para crear una experiencia moderna y dinámica.

La página está estructurada como una aplicación de una sola página, permitiendo acceder a las diferentes secciones mediante una navegación interna.

---

## Tecnologías utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript
* React 18
* Vite
* React Icons

### Herramientas y despliegue

* Git
* GitHub
* GitHub Pages
* Visual Studio Code

El proyecto utiliza **CSS puro**, sin frameworks como Bootstrap o Tailwind CSS, permitiendo controlar directamente los estilos, variables, componentes, animaciones y diseño responsive.

---

## Arquitectura del proyecto

La estructura actual del proyecto está organizada de la siguiente manera:

```text
portfolio-sinan-tokmak/
│
├── .github/
│   └── pages/
│
├── dist/
│
├── dist-build/
│
├── public/
│   ├── cv-jonathan-siney.pdf
│   └── profile.jpg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AboutMe.jsx
│   │   ├── BlogCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   │
│   ├── data/
│   │   └── site.js
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Componentes principales

### Header

Contiene la navegación principal del portafolio y permite desplazarse entre las diferentes secciones de la página.

### Hero

Es la sección principal de presentación. Contiene mi nombre, perfil profesional, introducción, fotografía y accesos principales.

### About

Presenta información relacionada con mi perfil, experiencia e intereses dentro del desarrollo de software.

### AboutMe

Componente destinado a complementar la información personal y profesional presentada dentro del portafolio.

### Skills

Muestra las principales tecnologías, herramientas y habilidades técnicas que forman parte de mi perfil como desarrollador.

### Experience

Presenta mi experiencia profesional y diferentes actividades relacionadas con mi desarrollo dentro del área tecnológica.

### Projects

Sección destinada a mostrar proyectos y trabajos desarrollados durante mi formación y experiencia profesional.

### BlogCard

Componente preparado para presentar contenido adicional relacionado con publicaciones, artículos o información complementaria.

### Contact

Contiene la información necesaria para establecer contacto profesional, incluyendo los diferentes medios disponibles.

### Footer

Sección final del sitio que contiene información complementaria y enlaces relacionados con el portafolio.

---

## Gestión de información

La información principal del portafolio se encuentra centralizada en:

```text
src/data/site.js
```

Este archivo contiene la información editable relacionada con el perfil, habilidades, experiencia, educación, cursos, proyectos y demás contenido utilizado dentro de la aplicación.

Centralizar esta información permite realizar modificaciones de contenido sin tener que cambiar directamente la estructura de cada componente.

---

## Recursos públicos

La carpeta `public/` contiene los recursos utilizados directamente por el sitio:

```text
public/
├── cv-jonathan-siney.pdf
└── profile.jpg
```

### profile.jpg

Imagen utilizada como fotografía de perfil dentro del portafolio.

### cv-jonathan-siney.pdf

Currículum Vitae disponible desde el sitio para consulta y descarga.

---

## Diseño y experiencia de usuario

El diseño del portafolio fue desarrollado utilizando CSS personalizado, buscando mantener una identidad visual consistente en todas las secciones.

Entre las principales características se encuentran:

* Tema oscuro.
* Acentos naranjas.
* Diseño responsive.
* Navegación interna.
* Componentes reutilizables.
* Transiciones y animaciones.
* Adaptación para dispositivos móviles.
* Interfaz minimalista.
* Diseño orientado a la presentación profesional.

El objetivo es que la información pueda ser consultada de manera rápida y clara independientemente del dispositivo utilizado.

---

## Desarrollo con React

React permite dividir el portafolio en componentes independientes, haciendo que cada sección tenga una responsabilidad específica.

Esta organización facilita el mantenimiento del proyecto y permite agregar nuevas funcionalidades o secciones sin afectar significativamente el resto de la aplicación.

La aplicación utiliza **Vite** como herramienta de desarrollo y construcción, proporcionando un entorno optimizado para trabajar con React.

---

## Despliegue

El portafolio se encuentra desplegado utilizando **GitHub Pages**.

GitHub cumple una doble función dentro del proyecto:

* Control de versiones y almacenamiento del código fuente.
* Publicación del portafolio mediante GitHub Pages.

De esta manera, el proyecto cuenta con un repositorio donde se mantiene el código fuente y una versión pública accesible desde Internet.

---

## Objetivo profesional

El objetivo principal de este portafolio es presentar mi perfil como desarrollador de una manera profesional y organizada.

El sitio permite conocer:

* Mi perfil profesional.
* Mis habilidades técnicas.
* Las tecnologías que utilizo.
* Mi experiencia.
* Mis proyectos.
* Mi formación académica.
* Mis cursos y capacitaciones.
* Mi Currículum Vitae.
* Mis medios de contacto.

Además, el proyecto funciona como una muestra práctica de mis conocimientos en desarrollo frontend, diseño web, arquitectura de componentes y despliegue de aplicaciones.

---

## Evolución del proyecto

El portafolio se encuentra en constante evolución.

A medida que continúe desarrollando nuevos proyectos, adquiriendo experiencia y aprendiendo nuevas tecnologías, el contenido y las funcionalidades del sitio podrán actualizarse para mantener una representación actualizada de mi perfil profesional.

La estructura basada en componentes facilita la incorporación de nuevas secciones, proyectos, tecnologías y funcionalidades.

---

## Autor

### Jonathan Gabriel Siney López

**Full-Stack Developer**

Desarrollador enfocado en la creación de aplicaciones web, interfaces modernas y soluciones digitales utilizando tecnologías actuales.

**GitHub:** [Gxbxsxn](https://github.com/Gxbxsxn)

---

## Estado del proyecto

**Activo — En constante desarrollo y actualización.**
