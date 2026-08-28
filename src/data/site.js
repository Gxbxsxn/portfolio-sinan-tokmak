// Central place to edit your personal info, links, skills and projects.
// Everything on the site pulls from here — change this file to make it yours.

export const profile = {
  name: 'Jonathan Siney',
  fullName: 'Jonathan Gabriel Siney López',
  role: 'Desarrollador Full-Stack',
  bio: `Estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez,
    graduado como Bachiller Industrial y Perito en Computación. Me apasiona
    el desarrollo de software y aplicaciones web, la computación en la nube
    y la arquitectura de sistemas. Busco cada día fortalecer mis
    conocimientos técnicos y crear soluciones funcionales tanto del lado del
    cliente como del servidor.`,
  phone: '+502 4360-6764',
  email: 'jsineylopez2005@gmail.com',
  address: '5A calle 3-74 zona 5 de Mixco, Col. Santa Marta, Cdad. de Guatemala',
  nationality: 'Guatemalteco',
  github: 'https://github.com/Gxbxsxn',
  cvUrl: `${import.meta.env.BASE_URL}cv-jonathan-siney.pdf`,
  logo: `${import.meta.env.BASE_URL}logo.png`,
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
  stats: [
    { label: 'Lenguajes de Programación', value: '5+' },
    { label: 'Cursos Certificados', value: '4' },
    { label: 'Empresas con Experiencia', value: '2' },
  ],
  languages: [
    { name: 'Español', level: 100 },
    { name: 'Inglés', level: 40 },
  ],
}

export const services = [
  {
    title: 'Desarrollo Web',
    desc: 'Aplicaciones y plataformas web con PHP, Laravel, JavaScript y React JS.',
  },
  {
    title: 'Desarrollo de Apps Móviles',
    desc: 'Aplicaciones Android nativas con Kotlin y frameworks híbridos.',
  },
  {
    title: 'Bases de Datos y Automatización',
    desc: 'SQL Server, PL/SQL, Oracle y automatización de workflows con Laserfiche.',
  },
]

export const skills = [
  'PHP',
  'Java',
  'Kotlin',
  'JavaScript',
  'SQL',
  'Laravel',
  'Spring Boot',
  'React JS',
  'SQL Server',
  'Oracle / PL-SQL',
]

export const experience = [
  {
    role: 'Programador JR',
    company: 'Maya Tours',
    period: '21 Abril 2025 – 1 Junio 2025',
    description: `Programador Full Stack encargado del desarrollo y
      mantenimiento de plataformas web y aplicaciones móviles (APK). Uso de
      PHP, HTML5, CSS3 y MySQL para soluciones del lado cliente y servidor.
      Diseño de interfaces responsivas, optimización del backend en PHP e
      integración de sistemas móviles con frameworks híbridos.`,
    tags: ['PHP', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    role: 'Programador JR',
    company: 'Canella',
    period: '21 Julio 2025 – 11 Mayo 2026',
    description: `Especialista en automatización documental en Laserfiche.
      Diseño, desarrollo y mantenimiento de workflows para optimizar
      procesos internos: reglas de negocio, condiciones, rutas de
      aprobación y notificaciones. Formularios dinámicos con Laserfiche
      Forms integrados a distintas áreas operativas.`,
    tags: ['Laserfiche Workflow', 'Laserfiche Forms', 'Automatización'],
  },
]

export const education = [
  {
    school: 'Universidad Mariano Gálvez de Guatemala — Sede zona 19',
    degree: 'Ingeniería en Sistemas (Cuarto Semestre, en curso)',
    period: '2024 – actualidad',
  },
  {
    school: 'Instituto Emiliani Somascos — Diversificado',
    degree: 'Bachiller Industrial y Perito en Computación',
    period: '2022 – 2024',
  },
]

export const courses = [
  'Curso de Lenguaje de Programación PHP y Conexión a Base de Datos',
  'Curso de Desarrollo de Aplicaciones para Android',
  'Curso de Desarrollo de Aplicaciones Móviles Android con Kotlin',
  'Diseño de Interfaces Web con React JS',
]

// Proyectos reales tomados de github.com/Gxbxsxn — actualiza aquí si subes
// repos nuevos o cambias descripciones.
export const projects = [
  {
    title: 'PruebaTecnica_Labymed',
    description: 'Prueba técnica desarrollada para Labymed.',
    tags: ['TypeScript'],
    link: 'https://github.com/Gxbxsxn/PruebaTecnica_Labymed',
  },
  {
    title: 'portfolio-sinan-tokmak',
    description: 'Portafolio personal desarrollado con JavaScript.',
    tags: ['JavaScript'],
    link: 'https://github.com/Gxbxsxn/portfolio-sinan-tokmak',
  },
  {
    title: 'Proyecto-MesaSitec',
    description: 'Proyecto de mesa de servicio (MesaSitec) desarrollado en C#.',
    tags: ['C#'],
    link: 'https://github.com/Gxbxsxn/Proyecto-MesaSitec',
  },
  {
    title: 'Proyecto-Administraci-n',
    description: 'Sistema de administración construido con HTML.',
    tags: ['HTML'],
    link: 'https://github.com/Gxbxsxn/Proyecto-Administraci-n',
  },
  {
    title: 'Proyecto-Operaciones',
    description: 'Sistema de operaciones desarrollado en C#.',
    tags: ['C#'],
    link: 'https://github.com/Gxbxsxn/Proyecto-Operaciones',
  },
  {
    title: 'Proyectos-Empleados',
    description: 'Prueba de JS — gestión de empleados.',
    tags: ['JavaScript'],
    link: 'https://github.com/Gxbxsxn/Proyectos-Empleados',
  },
]
